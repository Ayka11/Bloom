(function () {
/**
 * BLOOM V3 — Human Civilization Layer
 * Anthropocene Simulation · Agriculture · Urbanization
 * Pollution · Conservation · Industrial Emissions
 * Synthetic Biology · Civilization AI Intelligence
 */

'use strict';

// ─── CIVILIZATION STATE ───────────────────────────────────────────────────────

class CivilizationLayer {
    constructor() {
        // Population (billions) — 2024 baseline [UN DESA]
        this.population_B = 8.1;
        this.population_growth_rate = 0.009;    // 0.9%/yr (2024, UN DESA)

        // Energy system [IEA World Energy Outlook 2023]
        this.energy = {
            total_EJ_yr:   620,    // 620 EJ/yr primary energy (2023)
            fossil_pct:    0.80,   // 80% fossil
            renewable_pct: 0.135,  // 13.5% renewable (excl. nuclear)
            nuclear_pct:   0.05,   // 5% nuclear
        };

        // Emissions [GCP 2023, EDGAR 2023]
        this.annualEmissions    = 37e12;    // kg CO₂/yr = 37 Gt CO₂ (2023)
        this.methane_Tg_yr      = 570;      // Tg CH₄/yr total (all sources)
        this.cfcEmissions       = 0.05;     // normalized index
        this.livestockEmissions = 7.1e12;   // kg CO₂-eq/yr (FAO GLEAM)
        this.n2o_Tg_yr          = 8.1;      // Tg N₂O/yr

        // Land use [FAO 2023, GFW 2023]
        this.agriculture_fraction  = 0.50;   // ~50% of ice-free land (FAO)
        this.urban_fraction        = 0.03;   // ~3% land area
        this.deforestation_rate    = 0.0025; // 10 Mha/yr ÷ 4000 Mha forest = 0.25%/yr
        this.reforestation_rate    = 0.0005; // net ~2 Mha/yr reforestation
        this.agriculture_intensity = 0.70;
        this.soil_disturbance_index= 0.55;

        // Biodiversity [IPBES 2019]
        this.biodiversity_pressure = 0.65;

        // Conservation [CBD 2022, Kunming-Montreal GBF]
        this.conservation_effort  = 0.15;
        this.protected_area_pct   = 0.17;   // Aichi T11 = 17% land

        // Technology levels (0-1)
        this.tech = {
            clean_energy:      0.20,
            carbon_capture:    0.02,
            synthetic_biology: 0.10,
            precision_ag:      0.25,
            geoengineering:    0.00,
        };

        // Policy state
        this.policies = {
            carbon_tax:        false,
            deforestation_ban: false,
            renewable_mandate: false,
            biodiversity_treaty: false,
        };

        // Synthetic biology outputs
        this.synbio = {
            nitrogen_fixing_crops: false,
            drought_resistant_strains: false,
            biofuel_organisms: false,
            carbon_sequestering_microbes: false,
        };

        // Geoengineering interventions
        this.geoengineering = {
            solar_radiation_management: false,
            ocean_iron_fertilization: false,
            stratospheric_aerosols: false,
        };

        // Forcing outputs read by AtmosphericChemistry.update()
        this.aerosol_forcing = 0.5;    // W/m² cooling from industrial aerosols (negative sign applied in atmosphere)
        this.geo_forcing     = 0.0;    // W/m² offset from geoengineering (applied as negative in atmosphere)

        this.t_years = 0;
    }

    update(dt) {
        this.t_years += dt;

        // ── POPULATION [UN DESA medium variant] ──────────────────────────
        const K_pop = 10.4;   // UN medium scenario peak ~10.4B ~2080
        const dndt  = this.population_growth_rate * this.population_B * (1 - this.population_B / K_pop);
        this.population_B = Math.max(1, this.population_B + dndt * dt);

        // ── ENERGY [IEA trends] ───────────────────────────────────────────
        // Demand grows ~1.5%/yr but efficiency slows net growth
        this.energy.total_EJ_yr = Math.max(100,
            this.energy.total_EJ_yr * (1 + 0.008 * dt));   // ~0.8%/yr net

        // Renewable adoption: baseline +1%/yr absolute, doubled with mandate
        const renew_rate = this.policies.renewable_mandate ? 0.02 : 0.01;
        this.tech.clean_energy      = Math.min(1, this.tech.clean_energy + renew_rate * dt);
        this.tech.carbon_capture    = Math.min(1, this.tech.carbon_capture + 0.003 * dt);
        this.tech.synthetic_biology = Math.min(1, this.tech.synthetic_biology + 0.002 * dt);
        this.tech.precision_ag      = Math.min(1, this.tech.precision_ag + 0.003 * dt);

        const renew_shift = renew_rate * 0.5 * dt;
        this.energy.renewable_pct = Math.min(0.97, this.energy.renewable_pct + renew_shift);
        this.energy.fossil_pct    = Math.max(0.01, 1 - this.energy.renewable_pct - this.energy.nuclear_pct);

        // ── EMISSIONS ────────────────────────────────────────────────────
        // CORRECT formula: kg CO₂/yr = EJ_fossil × 60e9 kg CO₂/EJ
        // (60 Gt CO₂ per 1000 EJ → 60e9 kg/EJ; IEA emission factor)
        this.annualEmissions = this.energy.total_EJ_yr * this.energy.fossil_pct * 60e9;

        // CCS removal: up to 1 Gt CO₂/yr by 2050 in ambitious scenarios (currently 0.05 Gt)
        const ccs_Gt = this.tech.carbon_capture * 1.0;   // Gt CO₂/yr at full deployment
        this.annualEmissions = Math.max(0, this.annualEmissions - ccs_Gt * 1e12);

        // Carbon tax: ~10-15% reduction per $50/tonne; model as -15% when active
        if (this.policies.carbon_tax) this.annualEmissions *= 0.85;

        // Methane: livestock + fossil leak; roughly tracks with emissions
        const ch4_fossil_Tg = this.energy.fossil_pct * 120;  // ~120 Tg/yr fossil CH₄ at baseline
        this.methane_Tg_yr  = Math.max(100,
            ch4_fossil_Tg + 250 + (this.agriculture_fraction - 0.5) * 200);

        // ── DEFORESTATION [GFW data] ──────────────────────────────────────
        if (!this.policies.deforestation_ban) {
            // 10 Mha/yr loss / 4000 Mha forest = 0.25%/yr; scales with agricultural expansion
            this.deforestation_rate = 0.0025 * (0.5 + this.agriculture_fraction);
        } else {
            // Ban: gradual phase-out over 10 years
            this.deforestation_rate = Math.max(0.0001, this.deforestation_rate * (1 - 0.15 * dt));
        }
        this.reforestation_rate = this.conservation_effort * 0.006;
        const net_deforest = this.deforestation_rate - this.reforestation_rate;
        this.agriculture_fraction = Math.max(0.1, Math.min(0.85,
            this.agriculture_fraction + net_deforest * 0.5 * dt));

        // ── BIODIVERSITY PRESSURE [IPBES composite] ───────────────────────
        this.biodiversity_pressure = Math.max(0, Math.min(1,
            this.deforestation_rate / 0.003 * 0.35      // land use change
            + this.agriculture_intensity * 0.25          // habitat degradation
            + (this.annualEmissions / 37e12) * 0.20      // climate impact
            - this.conservation_effort * 0.35            // protection offset
            - this.tech.precision_ag * 0.10));

        // ── GEOENGINEERING (now COUPLED to atmosphere) ────────────────────
        this.tech.geoengineering = Math.min(1, this.tech.geoengineering
            + (this.geoengineering.stratospheric_aerosols ? 0.02 : 0) * dt);

        // geo_forcing: stratospheric aerosols can offset ~-0.5 to -2.0 W/m²
        this.geo_forcing = this.geoengineering.stratospheric_aerosols
            ? this.tech.geoengineering * 2.0 : 0;   // W/m² cooling at full deployment

        // aerosol_forcing: industrial aerosols ~-0.5 W/m² (AR6 best estimate)
        this.aerosol_forcing = 0.5 * this.energy.fossil_pct;   // scales with fossil use

        // ── SOIL & SYNBIO ─────────────────────────────────────────────────
        this.soil_disturbance_index = Math.max(0, Math.min(1,
            this.agriculture_intensity * 0.55 + this.urban_fraction * 0.4
            - this.tech.precision_ag * 0.30));
        this.synbio_N_bonus = this.synbio.nitrogen_fixing_crops ? 20 : 0;

        return this.getState();
    }

    setPolicy(policy, value) {
        if (this.policies.hasOwnProperty(policy)) {
            this.policies[policy] = value;
        }
    }

    setSynbio(project, value) {
        if (this.synbio.hasOwnProperty(project)) {
            this.synbio[project] = value;
        }
    }

    setGeoengineering(project, value) {
        if (this.geoengineering.hasOwnProperty(project)) {
            this.geoengineering[project] = value;
        }
    }

    getState() {
        return {
            population_B:        this.population_B.toFixed(3),
            energy_EJ_yr:        this.energy.total_EJ_yr.toFixed(1),
            fossil_pct:          (this.energy.fossil_pct * 100).toFixed(1),
            renewable_pct:       (this.energy.renewable_pct * 100).toFixed(1),
            emissions_Gt_yr:     (this.annualEmissions / 1e12).toFixed(2),
            methane_Tg_yr:       this.methane_Tg_yr.toFixed(1),
            agriculture_pct:     (this.agriculture_fraction * 100).toFixed(1),
            deforestation_rate:  this.deforestation_rate.toFixed(4),
            biodiversity_pressure:(this.biodiversity_pressure * 100).toFixed(1),
            conservation_effort: (this.conservation_effort * 100).toFixed(1),
            protected_area_pct:  (this.protected_area_pct * 100).toFixed(1),
            tech_clean_energy:   (this.tech.clean_energy * 100).toFixed(1),
            tech_carbon_capture: (this.tech.carbon_capture * 100).toFixed(1),
            soil_disturbance:    this.soil_disturbance_index.toFixed(3),
            policies_active:     Object.values(this.policies).filter(Boolean).length,
            synbio_active:       Object.values(this.synbio).filter(Boolean).length,
            geo_active:          Object.values(this.geoengineering).filter(Boolean).length,
            years_elapsed:       this.t_years.toFixed(2),
        };
    }
}

// ─── ANTHROPOCENE SCENARIO ENGINE ────────────────────────────────────────────

class AnthropoceneScenarios {
    constructor() {
        this.scenarios = {
            business_as_usual: {
                name: 'Business as Usual',
                description: 'No major policy changes; fossil fuel dependence continues',
                temp_2100: 3.2,
                biodiversity_loss_pct: 40,
                sea_level_rise_m: 0.6,
            },
            paris_agreement: {
                name: 'Paris 2°C',
                description: 'Carbon pricing, rapid renewable transition, reforestation',
                temp_2100: 1.8,
                biodiversity_loss_pct: 20,
                sea_level_rise_m: 0.3,
            },
            high_ambition: {
                name: 'High Ambition Net-Zero',
                description: 'Full decarbonization by 2050, rewilding, blue economy',
                temp_2100: 1.2,
                biodiversity_loss_pct: 8,
                sea_level_rise_m: 0.15,
            },
            collapse: {
                name: 'Societal Collapse',
                description: 'Resource wars, agricultural failure, mass migration',
                temp_2100: 4.5,
                biodiversity_loss_pct: 70,
                sea_level_rise_m: 1.2,
            },
        };

        this.active = 'business_as_usual';
    }

    apply(scenarioId, civilization) {
        const scenario = this.scenarios[scenarioId];
        if (!scenario) return;

        this.active = scenarioId;

        switch (scenarioId) {
            case 'paris_agreement':
                civilization.setPolicy('carbon_tax', true);
                civilization.setPolicy('renewable_mandate', true);
                civilization.conservation_effort = 0.35;
                civilization.protected_area_pct  = 0.30;
                break;

            case 'high_ambition':
                civilization.setPolicy('carbon_tax', true);
                civilization.setPolicy('renewable_mandate', true);
                civilization.setPolicy('deforestation_ban', true);
                civilization.setPolicy('biodiversity_treaty', true);
                civilization.conservation_effort = 0.60;
                civilization.protected_area_pct  = 0.50;
                civilization.tech.carbon_capture = 0.40;
                civilization.tech.clean_energy   = 0.70;
                civilization.setSynbio('nitrogen_fixing_crops', true);
                civilization.setSynbio('drought_resistant_strains', true);
                break;

            case 'collapse':
                civilization.setPolicy('carbon_tax', false);
                civilization.setPolicy('renewable_mandate', false);
                civilization.conservation_effort = 0.02;
                civilization.deforestation_rate  = 0.02;
                civilization.agriculture_intensity = 0.95;
                break;

            default:  // business_as_usual — reset
                civilization.setPolicy('carbon_tax', false);
                civilization.setPolicy('renewable_mandate', false);
                civilization.conservation_effort = 0.15;
                break;
        }

        return scenario;
    }

    getActive() {
        return this.scenarios[this.active];
    }
}

// ─── CIVILIZATION ENGINE (top-level integrator) ──────────────────────────────

class CivilizationEngine {
    constructor() {
        this.civilization = new CivilizationLayer();
        this.scenarios    = new AnthropoceneScenarios();

        this._listeners = [];
    }

    update(dt) {
        const civState = this.civilization.update(dt);
        const state = {
            civilization: civState,
            active_scenario: this.scenarios.getActive().name,
        };
        this._listeners.forEach(fn => fn(state));
        return state;
    }

    applyScenario(scenarioId) {
        return this.scenarios.apply(scenarioId, this.civilization);
    }

    setPolicy(policy, value) {
        this.civilization.setPolicy(policy, value);
    }

    onUpdate(fn) { this._listeners.push(fn); }
}

// Export to global scope
window.BloomV3Civilization = {
    CivilizationEngine,
    CivilizationLayer,
    AnthropoceneScenarios,
};

window.bloomV3Civilization = new CivilizationEngine();
})();
