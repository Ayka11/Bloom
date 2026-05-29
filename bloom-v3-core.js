(function () {
/**
 * BLOOM V3 — Planetary Core Systems
 * Planetary Climate Engine · Atmospheric Chemistry · Ocean Simulation
 * Geological Engine · Hydrology Network · Terrain Engine
 */

'use strict';

// ─── ATMOSPHERIC CHEMISTRY ───────────────────────────────────────────────────

class AtmosphericChemistry {
    constructor() {
        this.layers = {
            troposphere:  { altitude: [0, 12],    temperature: 15, pressure: 101.3 },
            stratosphere: { altitude: [12, 50],   temperature: -56, pressure: 1.0 },
            mesosphere:   { altitude: [50, 85],   temperature: -85, pressure: 0.001 },
            thermosphere: { altitude: [85, 600],  temperature: 2000, pressure: 0.000001 },
        };

        this.composition = {
            nitrogen:       0.7808,
            oxygen:         0.2095,
            co2:            0.000421,    // 421 ppm (2024 baseline, NOAA)
            methane:        0.000001923, // 1923 ppb (2024 baseline, NOAA)
            ozone_density:  1.0,         // relative DU index (1.0 = ~300 DU)
            aerosol_density:0.05,
            water_vapor:    0.01,
        };

        this.albedo        = 0.30;   // Earth average bond albedo
        // Greenhouse multiplier is an additive W/m² anomaly above pre-industrial baseline
        // Pre-industrial forcing: solar*(1-albedo)/4 = 1361*0.70/4 = 238.2 W/m²
        // Current extra forcing from GHGs: ~2.7 W/m² (CO₂ ~2.0, CH₄ ~0.5, others ~0.2)
        this.greenhouse_ef    = 1.0;   // will be recalculated each tick
        this.solar_forcing    = 1361;  // W/m² solar constant
        this.extra_forcing_Wm2 = 0;   // W/m² above pre-industrial (starts at current ~2.7)
        this._volcanic_so2    = 0;    // Tg SO₂ currently in stratosphere
    }

    update(dt, biosphere, civilization) {
        // ── CO₂ BUDGET (IPCC AR6 / GCP 2023 values) ─────────────────────
        // 1 ppm CO₂ ≈ 2.13 Gt C in atmosphere; 1 Gt C ≡ 0.469 ppm
        const ff_GtC_yr    = civilization
            ? (civilization.annualEmissions / 1e12) * (12/44)   // kg CO₂/yr → Gt C/yr
            : 10.0;   // 10.0 Gt C/yr baseline (2024)
        const luc_GtC_yr   = civilization
            ? Math.max(0, civilization.deforestation_rate / 0.0025 * 1.1)   // scaled from 1.1 Gt C/yr baseline
            : 1.1;
        const land_sink_GtC = Math.min(4.0,
            (biosphere ? biosphere.totalBiomass / 1e12 : 450) / 450 * 3.1);  // 3.1 Gt C/yr baseline
        const ocean_sink_GtC = 2.5;   // Gt C/yr, relatively stable (GCP 2023)

        const net_ppm_yr = (ff_GtC_yr + luc_GtC_yr - land_sink_GtC - ocean_sink_GtC) * 0.469;
        this.composition.co2 = Math.max(0.000280, Math.min(0.002,
            this.composition.co2 + net_ppm_yr * 1e-6 * dt));

        // ── METHANE BUDGET ─────────────────────────────────────────────────
        // Sources: ~570 Tg CH₄/yr total; anthropogenic ~340 Tg/yr + wetlands ~150 Tg/yr
        // Sinks: OH oxidation ~510 Tg/yr; net +15 ppb/yr rise
        const ch4_ppb = this.composition.methane * 1e9;
        const ch4_anthro_ppb_yr = civilization
            ? (civilization.methane_Tg_yr / 570) * 12.0    // scales with civilization methane
            : 12.0;   // ~12 ppb/yr net rise at baseline
        const ch4_sink_rate = 0.085;   // ~8.5%/yr OH oxidation lifetime ~12 yr
        const ch4_net_ppb_yr = ch4_anthro_ppb_yr - ch4_ppb * ch4_sink_rate;
        this.composition.methane = Math.max(0.0000007,
            this.composition.methane + ch4_net_ppb_yr * 1e-9 * dt);

        // ── RADIATIVE FORCING (IPCC AR6 Table 7.SM.1) ─────────────────────
        // CO₂: 5.35 × ln(C/C₀) W/m²  [Myhre 1998, widely used]
        const co2_ppm   = this.composition.co2 * 1e6;
        const rf_co2    = 5.35 * Math.log(co2_ppm / 280);           // W/m²
        // CH₄: 0.036 × (√C - √C₀) W/m²  [simplified, no N₂O interaction]
        const ch4_ppb_now = this.composition.methane * 1e9;
        const rf_ch4    = 0.036 * (Math.sqrt(ch4_ppb_now) - Math.sqrt(722));  // W/m²
        // Ozone + aerosol feedback
        const rf_ozone  = (1 - this.composition.ozone_density) * (-0.4);     // depletion = cooling
        const rf_aerosol= civilization ? -civilization.aerosol_forcing : -0.5; // aerosol cooling
        // Geoengineering (SRM) offset
        const rf_geo    = civilization && civilization.geoengineering.stratospheric_aerosols
            ? -civilization.geo_forcing : 0;

        this.extra_forcing_Wm2 = rf_co2 + rf_ch4 + rf_ozone + rf_aerosol + rf_geo;
        // Keep greenhouse_ef for legacy callers (renderer uses it)
        this.greenhouse_ef = Math.max(0.5, 1.0 + this.extra_forcing_Wm2 / 238.2);

        // ── OZONE ─────────────────────────────────────────────────────────
        if (civilization) {
            const cfc_depletion = civilization.cfcEmissions * 0.0002 * dt;
            this.composition.ozone_density = Math.max(0.5, Math.min(1.05,
                this.composition.ozone_density - cfc_depletion + 0.0003 * dt));
        }
        this.uv_index = Math.min(15, 4.5 / Math.max(0.5, this.composition.ozone_density));

        // ── VOLCANIC SO₂ INJECTION (aerosol veil) ────────────────────────
        // Pinatubo 1991: ~20 Tg SO₂ → -0.5°C global for ~2 yr; here driven by geology
        if (this._volcanic_so2 > 0) {
            const rf_so2     = -this._volcanic_so2 * 0.025;   // W/m² per Tg SO₂
            this.extra_forcing_Wm2 += rf_so2;
            this._volcanic_so2 *= (1 - 0.35 * dt);            // aerosol lifetime ~1-3 yr
            if (this._volcanic_so2 < 0.01) this._volcanic_so2 = 0;
        }

        // ── PERMAFROST CH₄ PULSE ─────────────────────────────────────────
        // Above 3°C above baseline, permafrost thaw accelerates methane release
        const temp_anomaly_now = this.extra_forcing_Wm2 * 0.81;
        if (temp_anomaly_now > 3) {
            const pf_ch4_ppb_yr = Math.pow(temp_anomaly_now - 3, 1.5) * 4;  // non-linear thaw
            this.composition.methane = Math.min(0.001,
                this.composition.methane + pf_ch4_ppb_yr * 1e-9 * dt);
        }

        return this.getState();
    }

    injectVolcanicSO2(tg_so2) {
        this._volcanic_so2 = (this._volcanic_so2 || 0) + tg_so2;
    }

    getRadiativeForcing() {
        // Total forcing = baseline clear-sky + GHG anomaly
        return 238.2 + this.extra_forcing_Wm2;
    }

    getState() {
        return {
            co2_ppm:           (this.composition.co2 * 1e6).toFixed(1),
            methane_ppb:       (this.composition.methane * 1e9).toFixed(1),
            o2_pct:            (this.composition.oxygen * 100).toFixed(2),
            ozone_index:       this.composition.ozone_density.toFixed(3),
            aerosols:          this.composition.aerosol_density.toFixed(3),
            greenhouse_ef:     this.greenhouse_ef.toFixed(4),
            extra_forcing_Wm2: this.extra_forcing_Wm2.toFixed(2),
            radiative_forcing: this.getRadiativeForcing().toFixed(2),
            uv_index:          (this.uv_index || 5).toFixed(1),
        };
    }
}

// ─── PLANETARY CLIMATE ENGINE ────────────────────────────────────────────────

class PlanetaryClimateEngine {
    constructor() {
        this.t          = 0;            // simulation time in years
        this.globalTemp = 14.9;         // °C 2024 baseline (NOAA: +1.2°C above pre-industrial)
        this.baseTemp   = 13.7;         // pre-industrial baseline (~1850)
        this.tempAnomaly_1850 = 1.2;    // current +1.2°C anomaly above pre-industrial
        this.iceCapFraction = 0.035;  // fraction of surface covered by ice
        this.seasonPhase    = 0;

        // 12 longitudinal + 6 latitudinal climate cells (72 cells total)
        this.cells = this._initClimateCells();

        this.atmosphere = new AtmosphericChemistry();

        this.events = [];   // active climate events
        this.stats  = { extremeHeatDays: 0, hurricanes: 0, droughts: 0 };
        this._amoc_strength = 0.85;   // synced from OceanSimulation each tick
    }

    _initClimateCells() {
        const cells = [];
        const latBands = ['polar_n', 'subpolar_n', 'temperate_n', 'tropical', 'temperate_s', 'polar_s'];
        const baseCellTemps = [-30, -5, 12, 27, 12, -30];
        const basePrecip    = [200, 500, 700, 2200, 700, 200];

        latBands.forEach((band, i) => {
            for (let lon = 0; lon < 12; lon++) {
                cells.push({
                    id:          `${band}_${lon}`,
                    latitude:    band,
                    lon_sector:  lon,
                    temperature: baseCellTemps[i] + (Math.random() - 0.5) * 4,
                    precipitation: basePrecip[i] * (0.8 + Math.random() * 0.4),
                    humidity:    0.4 + Math.random() * 0.4,
                    wind_speed:  5 + Math.random() * 25,
                    biome:       this._assignBiome(band, basePrecip[i]),
                });
            }
        });
        return cells;
    }

    _assignBiome(latBand, precip) {
        const biomeMap = {
            polar_n:    'tundra',
            subpolar_n: precip > 400 ? 'boreal_forest' : 'tundra',
            temperate_n: precip > 600 ? 'temperate_forest' : 'grassland',
            tropical:   precip > 1500 ? 'tropical_rainforest' : 'savanna',
            temperate_s: precip > 600 ? 'temperate_forest' : 'grassland',
            polar_s:    'ice_sheet',
        };
        return biomeMap[latBand] || 'grassland';
    }

    update(dt, biosphere, civilization) {
        this.t          += dt;
        this.seasonPhase = (this.t % 1) * Math.PI * 2;

        // Atmosphere drives temperature feedback
        const atmoState = this.atmosphere.update(dt, biosphere, civilization);
        const radiative  = this.atmosphere.getRadiativeForcing();

        // Global temperature using IPCC ECS: 3°C per CO₂ doubling = 3/3.7 ≈ 0.81°C per W/m²
        // extra_forcing_Wm2 is the anomaly above pre-industrial baseline
        const ecs_sensitivity = 0.81;   // °C per W/m² (ECS = 3°C / 3.7 W/m² per doubling)
        const forcing_anomaly = this.atmosphere.extra_forcing_Wm2;

        // AMOC feedback: weakened circulation reduces N-Atlantic heat transport
        // When AMOC < 0.5, northern Europe/N-America cools ~1-3°C regionally
        const amoc_cooling = this._amoc_strength < 0.5
            ? (0.5 - this._amoc_strength) * 4 : 0;

        const targetTemp = Math.max(-30, Math.min(65,
            this.baseTemp + forcing_anomaly * ecs_sensitivity - amoc_cooling));
        // Ocean thermal inertia: slow relaxation (decades timescale → 0.003/yr coefficient)
        this.globalTemp += (targetTemp - this.globalTemp) * 0.003 * dt;
        this.globalTemp  = Math.max(-30, Math.min(65, this.globalTemp));

        // Ice-albedo feedback
        this.iceCapFraction = Math.max(0, Math.min(0.15,
            0.035 - (this.globalTemp - 14) * 0.003));
        this.atmosphere.albedo = 0.28 + this.iceCapFraction * 0.5;

        // Update each climate cell
        this.cells.forEach(cell => this._updateCell(cell, dt));

        // Stochastic extreme weather events
        this._generateExtremeEvents(dt);

        return this.getState();
    }

    _updateCell(cell, dt) {
        const latOffset = {
            polar_n: -25, subpolar_n: -5, temperate_n: 0,
            tropical: 13, temperate_s: 0, polar_s: -25
        }[cell.latitude] || 0;

        const seasonal = Math.sin(this.seasonPhase) * 8 *
            (cell.latitude.includes('_n') ? 1 : -1);

        const target = this.globalTemp + latOffset + seasonal + (Math.random() - 0.5) * 0.5;
        cell.temperature += (target - cell.temperature) * 0.05 * dt;

        // Precipitation influenced by temperature and humidity
        const precip_factor = 1 + (cell.temperature - 15) * 0.01;
        cell.precipitation = Math.max(50,
            cell.precipitation * (1 + (Math.random() - 0.5) * 0.02) * precip_factor);

        cell.humidity = Math.max(0.1, Math.min(1.0,
            cell.humidity + (Math.random() - 0.5) * 0.005 * dt));
    }

    _generateExtremeEvents(dt) {
        // Heat waves
        if (Math.random() < 0.0002 * dt * Math.max(1, this.globalTemp - 14)) {
            this.events.push({ type: 'heat_wave', severity: Math.random(), duration: 30 + Math.random() * 60 });
            this.stats.extremeHeatDays++;
        }
        // Hurricanes (tropical cells only)
        if (Math.random() < 0.0003 * dt) {
            this.events.push({ type: 'hurricane', category: Math.ceil(Math.random() * 5), duration: 7 + Math.random() * 14 });
            this.stats.hurricanes++;
        }
        // Droughts
        if (Math.random() < 0.0001 * dt) {
            this.events.push({ type: 'drought', severity: Math.random(), duration: 90 + Math.random() * 270 });
            this.stats.droughts++;
        }
        // Age out events
        this.events = this.events.filter(e => {
            e.duration -= dt;
            return e.duration > 0;
        });
    }

    getState() {
        return {
            time_years:   this.t.toFixed(2),
            global_temp:  this.globalTemp.toFixed(2),
            ice_fraction: (this.iceCapFraction * 100).toFixed(2),
            season:       this._getSeason(),
            active_events: this.events.length,
            atmosphere:   this.atmosphere.getState(),
            cell_count:   this.cells.length,
            biomes:       this._biomeCensus(),
        };
    }

    _getSeason() {
        const phase = (this.t % 1);
        if (phase < 0.25) return 'Spring';
        if (phase < 0.50) return 'Summer';
        if (phase < 0.75) return 'Autumn';
        return 'Winter';
    }

    _biomeCensus() {
        const census = {};
        this.cells.forEach(c => { census[c.biome] = (census[c.biome] || 0) + 1; });
        return census;
    }

    getCell(lat, lon) {
        return this.cells.find(c => c.latitude === lat && c.lon_sector === lon % 12) || this.cells[0];
    }
}

// ─── OCEAN SIMULATION SYSTEM ─────────────────────────────────────────────────

class OceanSimulation {
    constructor() {
        // Simplified grid: 8 major ocean basins
        this.basins = [
            { id: 'north_pacific',    temperature: 8,  salinity: 34.5, oxygen: 7.0, depth: 4200 },
            { id: 'south_pacific',    temperature: 12, salinity: 35.0, oxygen: 6.8, depth: 3900 },
            { id: 'north_atlantic',   temperature: 10, salinity: 35.5, oxygen: 7.5, depth: 3300 },
            { id: 'south_atlantic',   temperature: 15, salinity: 35.8, oxygen: 6.5, depth: 3600 },
            { id: 'indian_ocean',     temperature: 22, salinity: 34.8, oxygen: 5.9, depth: 3800 },
            { id: 'arctic_ocean',     temperature: -1.5, salinity: 32.0, oxygen: 9.0, depth: 1200 },
            { id: 'southern_ocean',   temperature: 2,  salinity: 34.0, oxygen: 9.5, depth: 4500 },
            { id: 'mediterranean',    temperature: 18, salinity: 38.0, oxygen: 5.8, depth: 1500 },
        ];

        // AMOC strength: ~18 Sv modern, ~15% below 1950 baseline → 0.85 relative
        this.thc_strength = 0.85;

        // Ocean surface pH: 8.05 (2024, down from 8.2 pre-industrial) [NOAA/SOCAT]
        this.surface_ph = 8.05;

        // Marine plankton: ~1-2 Gt C total (Field et al. 1998)
        this.totalPlanktonBiomass = 1.5e12;  // kg C
        // Coral: ~50% coverage vs 1950s baseline (Hughes et al. 2017, GCRMN 2020)
        this.coralCoverage        = 0.50;

        this.carbonSequestration = 0;      // kg C/year absorbed

        this.currents = this._initCurrents();
    }

    _initCurrents() {
        return [
            { name: 'Gulf Stream',         speed: 2.5, temperature_delta: +5,  basin: 'north_atlantic' },
            { name: 'Kuroshio Current',    speed: 2.0, temperature_delta: +4,  basin: 'north_pacific' },
            { name: 'California Current',  speed: 0.5, temperature_delta: -2,  basin: 'north_pacific' },
            { name: 'Antarctic Circumpolar', speed: 1.5, temperature_delta: 0, basin: 'southern_ocean' },
            { name: 'Equatorial Counter',  speed: 1.2, temperature_delta: +2,  basin: 'indian_ocean' },
            { name: 'Humboldt Current',    speed: 0.8, temperature_delta: -3,  basin: 'south_pacific' },
        ];
    }

    update(dt, climate, atmosphere) {
        const co2 = atmosphere ? atmosphere.composition.co2 : 0.000421;
        const globalTemp = climate ? climate.globalTemp : 14;

        // Ocean pH: every doubling of CO₂ drops pH by ~0.30 [Caldeira & Wickett 2003]
        // Baseline: pH 8.2 at 280 ppm pre-industrial
        const co2_ratio = co2 / 0.000280;
        this.surface_ph = Math.max(7.6, 8.2 - Math.log2(co2_ratio) * 0.30);

        // AMOC: weakens ~15% per °C warming above 14°C [Caesar et al. 2021]
        // Already at 85% modern; further decline with warming
        const amoc_target = Math.max(0.05, 0.85 - (globalTemp - 14.9) * 0.12);
        this.thc_strength += (amoc_target - this.thc_strength) * 0.01 * dt;

        // Update basin temperatures
        this.basins.forEach(b => {
            const lat_factor = b.id.includes('arctic') ? -1.5 : b.id.includes('southern') ? 0.3 : 1.0;
            const target = b.temperature + (globalTemp - 14) * lat_factor * 0.3;
            b.temperature += (target - b.temperature) * 0.002 * dt;

            // Oxygen solubility decreases with temperature
            b.oxygen = Math.max(2, 9.0 - (b.temperature - 10) * 0.1);

            // Salinity shifts with ice melt
            if (b.id.includes('arctic') && globalTemp > 14) {
                b.salinity = Math.max(28, b.salinity - 0.001 * (globalTemp - 14) * dt);
            }
        });

        // Plankton bloom — responds to nutrients, temperature, CO2
        const avg_temp = this.basins.reduce((s, b) => s + b.temperature, 0) / this.basins.length;
        const bloom_factor = Math.max(0.2, 1 + (co2 - 0.000421) * 100 - Math.max(0, avg_temp - 18) * 0.05);
        this.totalPlanktonBiomass *= (1 + 0.00001 * bloom_factor * dt - 0.000005 * dt);
        this.totalPlanktonBiomass = Math.max(1e10, Math.min(5e12, this.totalPlanktonBiomass));

        // Coral bleaching: compound stress from pH drop + thermal anomaly
        // At current rates: ~1-2% coverage loss/yr [GCRMN 2020, Hughes 2017]
        // pH stress: acidification below 8.1 increases bleaching
        const ph_stress    = Math.max(0, (8.1 - this.surface_ph) * 3.0);
        // Thermal stress: degree-heating weeks > 8 cause severe bleaching
        const thermal_stress = Math.max(0, (avg_temp - 27.0) * 0.25);
        const bleach_annual  = Math.min(0.20, (ph_stress + thermal_stress) * 0.02);  // max 20%/yr
        // Recovery: ~0.5-2% per yr under low stress [done very slowly]
        const recovery = Math.max(0, 0.005 * (1 - ph_stress) * (1 - thermal_stress));
        this.coralCoverage = Math.max(0, Math.min(1.0,
            this.coralCoverage - bleach_annual * dt + recovery * dt));

        // Carbon sequestration: biological pump
        this.carbonSequestration = this.totalPlanktonBiomass * 0.000002 * (this.surface_ph / 8.1);

        return this.getState();
    }

    getState() {
        const avgTemp = this.basins.reduce((s, b) => s + b.temperature, 0) / this.basins.length;
        const avgSal  = this.basins.reduce((s, b) => s + b.salinity, 0)  / this.basins.length;
        return {
            surface_ph:          this.surface_ph.toFixed(3),
            avg_temp:            avgTemp.toFixed(2),
            avg_salinity:        avgSal.toFixed(2),
            thc_strength:        (this.thc_strength * 100).toFixed(1),
            plankton_biomass_Gt: (this.totalPlanktonBiomass / 1e12).toFixed(3),
            coral_coverage_pct:  (this.coralCoverage * 100).toFixed(1),
            carbon_seq_Gt_yr:    (this.carbonSequestration / 1e12).toFixed(4),
            active_currents:     this.currents.length,
        };
    }
}

// ─── GEOLOGICAL ENGINE ───────────────────────────────────────────────────────

class GeologicalEngine {
    constructor() {
        // 8 major tectonic plates (simplified)
        this.plates = [
            { name: 'Pacific',       area: 103.3e6,  velocity: 7.5,  collision: false },
            { name: 'North American',area: 75.9e6,   velocity: 2.3,  collision: false },
            { name: 'Eurasian',      area: 67.8e6,   velocity: 2.1,  collision: false },
            { name: 'African',       area: 61.3e6,   velocity: 2.15, collision: false },
            { name: 'Antarctic',     area: 60.9e6,   velocity: 1.4,  collision: false },
            { name: 'Indo-Australian',area: 58.9e6,  velocity: 6.7,  collision: true  },
            { name: 'South American',area: 43.6e6,   velocity: 1.5,  collision: false },
            { name: 'Nazca',         area: 15.6e6,   velocity: 7.5,  collision: true  },
        ];

        this.volcanism_index = 0.5;      // 0-1
        this.seismic_activity = 0.5;
        this.erosion_rate    = 1.0;      // normalized
        this.mountain_height = 8849;     // m (Everest reference)
        this.sea_level       = 0;        // m anomaly from baseline

        this.recentEvents = [];          // volcanic eruptions, earthquakes
        this.t_geological  = 0;          // millions of years
    }

    update(dt_years) {
        this.t_geological += dt_years / 1e6;

        // Stochastic volcanic events
        if (Math.random() < 0.00005 * dt_years) {
            const eruption = {
                type: 'volcanic_eruption',
                vei: Math.floor(Math.random() * 7) + 1,   // Volcanic Explosivity Index 1-7
                plate: this.plates[Math.floor(Math.random() * this.plates.length)].name,
                duration: 1 + Math.random() * 30,         // days
                so2_injection: Math.random() * 10,        // Tg SO2
            };
            this.recentEvents.push(eruption);
            this.volcanism_index = Math.min(1, this.volcanism_index + eruption.vei * 0.01);
        }

        // Earthquakes
        if (Math.random() < 0.0002 * dt_years) {
            const quake = {
                type: 'earthquake',
                magnitude: 5 + Math.random() * 4,
                plate: this.plates.filter(p => p.collision)[Math.floor(Math.random() * 2)]?.name || 'Pacific',
            };
            this.recentEvents.push(quake);
        }

        // Plate motion causes sea level change over geological time
        this.sea_level += (Math.random() - 0.5) * 0.00001 * dt_years;
        this.sea_level = Math.max(-200, Math.min(200, this.sea_level));

        // Decay volcanism
        this.volcanism_index = Math.max(0.1, this.volcanism_index * (1 - 0.001 * dt_years));

        // Age out events (keep last 10)
        this.recentEvents = this.recentEvents.slice(-10);

        return this.getState();
    }

    getState() {
        return {
            geological_age_Myr: this.t_geological.toFixed(4),
            volcanism_index:    this.volcanism_index.toFixed(3),
            sea_level_anomaly:  this.sea_level.toFixed(2),
            recent_events:      this.recentEvents.length,
            plates:             this.plates.length,
        };
    }
}

// ─── HYDROLOGY NETWORK ───────────────────────────────────────────────────────

class HydrologyNetwork {
    constructor() {
        // Major river systems (flow in km³/year)
        this.rivers = [
            { name: 'Amazon',      flow: 6591, basin_area: 7e6,   ice_fed: false },
            { name: 'Congo',       flow: 1260, basin_area: 3.7e6, ice_fed: false },
            { name: 'Yangtze',     flow: 900,  basin_area: 1.8e6, ice_fed: true  },
            { name: 'Ganges',      flow: 525,  basin_area: 1.06e6,ice_fed: true  },
            { name: 'Mississippi', flow: 580,  basin_area: 3.2e6, ice_fed: false },
            { name: 'Nile',        flow: 84,   basin_area: 3.4e6, ice_fed: false },
            { name: 'Danube',      flow: 208,  basin_area: 817000, ice_fed: false },
        ];

        this.glacierVolume  = 26.35e6;   // km³ (modern value)
        this.freshwaterPct  = 2.5;       // % of total water that is fresh
        this.groundwater    = 10.6e6;    // km³
        this.wetlandsArea   = 12.1e6;    // km² (modern)
        this.totalRunoff    = 40000;     // km³/yr (global)
    }

    update(dt, climate, geology) {
        const globalTemp = climate ? climate.globalTemp : 14;

        // Glacier mass balance [Zemp et al. 2019: ~360 Gt/yr loss current rate]
        // 360 Gt/yr ≈ 0.33 km³/yr out of 26.35M km³ → rate = 1.25e-5/yr per °C above -5°C
        const melt_fraction = Math.max(0, (globalTemp - (-5)) * 1.25e-5);
        const snowfall_fraction = Math.max(0, (0 - Math.max(-15, globalTemp - 15)) * 5e-6);
        this.glacierVolume = Math.max(0,
            this.glacierVolume * (1 - melt_fraction * dt + snowfall_fraction * dt));

        // River flows boosted by ice melt in warm periods, reduced by drought
        this.rivers.forEach(r => {
            const ice_boost = r.ice_fed ? (globalTemp > 14 ? 1.05 : 0.98) : 1.0;
            const precip_factor = climate ? 1 + (climate.cells[0].precipitation - 700) / 7000 : 1;
            r.flow = Math.max(10, r.flow * ice_boost * precip_factor * (1 + (Math.random() - 0.5) * 0.005));
        });

        // Groundwater recharge/depletion
        const recharge = this.totalRunoff * 0.002 * dt;
        const depletion = 0.001 * dt;   // background withdrawal
        this.groundwater = Math.max(1e6, this.groundwater + recharge - depletion);

        // Wetland loss (temperature + sea level interaction)
        if (geology && geology.sea_level > 0) {
            this.wetlandsArea = Math.max(8e6, this.wetlandsArea - geology.sea_level * 0.001 * dt);
        }

        return this.getState();
    }

    getState() {
        const totalFlow = this.rivers.reduce((s, r) => s + r.flow, 0);
        return {
            glacier_km3:     (this.glacierVolume / 1e6).toFixed(4),
            groundwater_km3: (this.groundwater / 1e6).toFixed(4),
            wetlands_km2:    (this.wetlandsArea / 1e6).toFixed(3),
            total_river_flow_km3yr: totalFlow.toFixed(0),
            rivers:          this.rivers.length,
        };
    }
}

// ─── TERRAIN ENGINE ──────────────────────────────────────────────────────────

class TerrainEngine {
    constructor() {
        // 10 major land biome zones with areas (km²)
        this.zones = [
            { biome: 'tropical_rainforest', area: 17.0e6, elevation_avg: 300,  soil_depth: 1.5, erosion: 0.3 },
            { biome: 'tropical_savanna',    area: 23.0e6, elevation_avg: 400,  soil_depth: 1.0, erosion: 0.5 },
            { biome: 'subtropical_desert',  area: 19.0e6, elevation_avg: 500,  soil_depth: 0.3, erosion: 0.8 },
            { biome: 'mediterranean',       area: 2.8e6,  elevation_avg: 300,  soil_depth: 0.8, erosion: 0.4 },
            { biome: 'temperate_grassland', area: 9.0e6,  elevation_avg: 500,  soil_depth: 1.2, erosion: 0.4 },
            { biome: 'temperate_forest',    area: 10.4e6, elevation_avg: 400,  soil_depth: 1.5, erosion: 0.2 },
            { biome: 'boreal_forest',       area: 13.7e6, elevation_avg: 600,  soil_depth: 0.8, erosion: 0.2 },
            { biome: 'tundra',              area: 8.9e6,  elevation_avg: 200,  soil_depth: 0.1, erosion: 0.1 },
            { biome: 'montane',             area: 10.4e6, elevation_avg: 2500, soil_depth: 0.5, erosion: 0.9 },
            { biome: 'wetlands',            area: 12.1e6, elevation_avg: 50,   soil_depth: 2.0, erosion: 0.1 },
        ];

        this.totalLandArea = this.zones.reduce((s, z) => s + z.area, 0);
        // IPCC AR6: ~1,500 Gt C top 1m = 1.5e15 kg C [Crowther et al. 2016]
        this.soilCarbonPool = 1.5e15;    // kg C (1,500 Gt C global top-1m soil)
    }

    update(dt, climate, hydrology, civilization) {
        const globalTemp = climate ? climate.globalTemp : 14;

        this.zones.forEach(zone => {
            // Erosion driven by precipitation + human activity
            const precip_erosion = 1 + Math.max(0, globalTemp - 14) * 0.02;
            const human_erosion  = civilization ? 1 + civilization.deforestation_rate * 2 : 1;
            zone.soil_depth = Math.max(0.05, zone.soil_depth - zone.erosion * 0.00001 * precip_erosion * human_erosion * dt);

            // Soil respiration: ~10% turnover/yr, accelerated +7% per °C (Q10=1.7) [Bond-Lamberty 2010]
            const q10_factor   = Math.pow(1.7, (globalTemp - 14) / 10);
            const decomp_frac  = 0.0001 * q10_factor;   // fraction of pool/yr
            this.soilCarbonPool = Math.max(1e14,
                this.soilCarbonPool * (1 - decomp_frac * dt));
        });

        return this.getState();
    }

    getBiomeArea(biome) {
        const z = this.zones.find(z => z.biome === biome);
        return z ? z.area : 0;
    }

    getState() {
        const avgSoilDepth = this.zones.reduce((s, z) => s + z.soil_depth, 0) / this.zones.length;
        return {
            total_land_km2:   (this.totalLandArea / 1e6).toFixed(2),
            biomes:           this.zones.length,
            avg_soil_depth_m: avgSoilDepth.toFixed(3),
            soil_carbon_Gt:   (this.soilCarbonPool / 1e12).toFixed(0),
        };
    }
}

// ─── PLANETARY CORE ──────────────────────────────────────────────────────────

class PlanetaryCore {
    constructor() {
        this.climate   = new PlanetaryClimateEngine();
        this.ocean     = new OceanSimulation();
        this.geology   = new GeologicalEngine();
        this.hydrology = new HydrologyNetwork();
        this.terrain   = new TerrainEngine();

        this.timeMode = 'ecological';  // real-time | ecological | evolutionary | geological | planetary
        this.timeModeScales = {
            'real-time':    1 / (365 * 24 * 3600),   // 1 real second = 1 real second
            'ecological':   1 / 12,                   // 1 real second ≈ 1 month
            'evolutionary': 10,                        // 1 real second ≈ 10 years
            'geological':   1000,                      // 1 real second ≈ 1000 years
            'planetary':    1e6,                       // 1 real second ≈ 1M years
        };

        this._listeners = [];
    }

    setTimeMode(mode) {
        if (this.timeModeScales[mode] !== undefined) this.timeMode = mode;
    }

    update(realDt_seconds, biosphere, civilization) {
        const scale  = this.timeModeScales[this.timeMode];
        const dt_yrs = realDt_seconds * scale;

        const climateState  = this.climate.update(dt_yrs, biosphere, civilization);
        const oceanState    = this.ocean.update(dt_yrs, this.climate, this.climate.atmosphere);

        // Sync AMOC strength into climate engine for regional feedback
        this.climate._amoc_strength = this.ocean.thc_strength;

        const geologyState  = this.geology.update(dt_yrs);
        // Inject volcanic SO₂ from any eruptions into the atmosphere
        this.geology.recentEvents.forEach(evt => {
            if (evt.type === 'volcanic_eruption' && evt.so2_injection > 0 && !evt._injected) {
                this.climate.atmosphere.injectVolcanicSO2(evt.so2_injection);
                evt._injected = true;
            }
        });

        const hydrologyState = this.hydrology.update(dt_yrs, this.climate, this.geology);
        const terrainState  = this.terrain.update(dt_yrs, this.climate, this.hydrology, civilization);

        const state = {
            time_mode: this.timeMode,
            dt_years:  dt_yrs.toExponential(3),
            climate:   climateState,
            ocean:     oceanState,
            geology:   geologyState,
            hydrology: hydrologyState,
            terrain:   terrainState,
        };

        this._listeners.forEach(fn => fn(state));
        return state;
    }

    onUpdate(fn) { this._listeners.push(fn); }

    getSnapshot() {
        return {
            climate:   this.climate.getState(),
            ocean:     this.ocean.getState(),
            geology:   this.geology.getState(),
            hydrology: this.hydrology.getState(),
            terrain:   this.terrain.getState(),
        };
    }
}

// Export to global scope for browser use
window.BloomV3Core = {
    PlanetaryCore,
    PlanetaryClimateEngine,
    AtmosphericChemistry,
    OceanSimulation,
    GeologicalEngine,
    HydrologyNetwork,
    TerrainEngine,
};

window.bloomV3Planet = new PlanetaryCore();
})();
