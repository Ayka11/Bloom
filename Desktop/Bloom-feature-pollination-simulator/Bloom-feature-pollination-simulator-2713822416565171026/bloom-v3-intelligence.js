(function () {
/**
 * BLOOM V3 — Planetary Intelligence Layer
 * MycelialIntelligenceNetwork · PlanetaryNervousSystem
 * BiogeographicDispersalEngine · TrophicResonanceEngine
 * GaiaFeedbackOrchestrator · BiosphereHealthIndex
 *
 * The planet as a living, self-regulating, interconnected biological intelligence.
 * All subsystems talk to each other through this layer — every species, every
 * ocean current, every gram of soil carbon is a node in the same network.
 */

'use strict';

// ─── MYCELIAL INTELLIGENCE NETWORK ───────────────────────────────────────────
// Earth's "wood-wide web": mycorrhizal fungi linking plant root systems
// into a planetary nutrient-sharing and chemical signalling network.

class MycelialIntelligenceNetwork {
    constructor() {
        // ~450 Gt C in terrestrial plant biomass; 90% connected to mycorrhizae
        this.connectedBiomass_Gt    = 405;
        this.networkDensity         = 0.82;   // 0-1: fraction of plants in network
        this.signalPropagationSpeed = 1.2;    // cm/hr (measured, Simard 2012)

        // Functional channels
        this.channels = {
            carbon_transfer:     { flux_Gt_yr: 5.2,  active: true  },  // net C from source to sink trees
            nitrogen_routing:    { flux_Tg_yr: 11,   active: true  },  // N delivery to N-limited plants
            phosphorus_routing:  { flux_Tg_yr: 4.3,  active: true  },  // P most limiting in tropics
            stress_signalling:   { active: true,  events_yr: 0      },  // drought/pest warnings
            defense_priming:     { active: true,  primed_pct: 0.12  },  // systemic acquired resistance
        };

        // Hub trees (mother trees / network keystones)
        this.hubTrees = [
            { biome: 'boreal_forest',       species: 'Douglas Fir',    connections: 47, age_yrs: 250 },
            { biome: 'tropical_rainforest',  species: 'Kapok Tree',     connections: 31, age_yrs: 180 },
            { biome: 'temperate_forest',     species: 'Beech',          connections: 38, age_yrs: 140 },
            { biome: 'temperate_forest',     species: 'Oak',            connections: 52, age_yrs: 320 },
        ];

        this.networkHealth  = 0.80;   // 0-1
        this.collapseRisk   = 0.05;
        this._signal_queue  = [];     // pending cross-biome signals
    }

    update(dt, climate, terrain, civilization) {
        const temp      = climate ? climate.globalTemp : 14;
        const disturb   = civilization ? civilization.soil_disturbance_index : 0.1;
        const deforest  = civilization ? civilization.deforestation_rate : 0.0025;

        // ── NETWORK CONNECTIVITY ─────────────────────────────────────────
        // Deforestation severs hyphae; soil disturbance kills mycelia
        const loss_rate = deforest * 0.8 + disturb * 0.05;
        const regrow    = 0.002 * Math.max(0, 1 - disturb * 2);   // slow hyphal regrowth
        this.networkDensity = Math.max(0.05, Math.min(1.0,
            this.networkDensity - loss_rate * dt + regrow * dt));

        // ── CARBON TRANSFER ─────────────────────────────────────────────
        // Source (light-surplus) trees push C to sink (shaded/stressed) trees
        const co2_fert = climate && climate.atmosphere
            ? parseFloat(climate.atmosphere.getState().co2_ppm) / 421 : 1;
        this.channels.carbon_transfer.flux_Gt_yr =
            Math.max(0.5, 5.2 * this.networkDensity * co2_fert * (1 - disturb * 0.5));

        // ── STRESS SIGNALLING ────────────────────────────────────────────
        // Drought / pest / heat events trigger chemical alarm cascades
        const heat_stress = Math.max(0, temp - 18) * 0.15;
        const new_events  = heat_stress * 200 * dt + (Math.random() < 0.01 * dt ? 50 : 0);
        this.channels.stress_signalling.events_yr =
            Math.max(0, this.channels.stress_signalling.events_yr * (1 - 0.1 * dt) + new_events);

        // Defense priming spread: up to 25% of connected plants forewarned
        this.channels.defense_priming.primed_pct = Math.min(0.25,
            this.networkDensity * 0.3 * (1 + heat_stress * 0.5));

        // ── NITROGEN / PHOSPHORUS ROUTING ───────────────────────────────
        this.channels.nitrogen_routing.flux_Tg_yr =
            Math.max(1, 11 * this.networkDensity * (1 - disturb * 0.4));
        this.channels.phosphorus_routing.flux_Tg_yr =
            Math.max(0.5, 4.3 * this.networkDensity);

        // ── NETWORK HEALTH COMPOSITE ─────────────────────────────────────
        this.networkHealth = Math.max(0, Math.min(1,
            0.4 * this.networkDensity
            + 0.3 * (1 - Math.min(1, heat_stress))
            + 0.3 * (1 - disturb)));

        this.collapseRisk = Math.max(0, 1 - this.networkHealth) * 0.5
            + deforest * 10 + disturb * 0.3;

        return this.getState();
    }

    // Cross-biome chemical signal: a stress event in one biome can prime
    // defenses in a neighbouring biome within ~6-18 months.
    broadcastSignal(sourcebiome, signal_type, intensity) {
        this._signal_queue.push({
            source: sourcebiome, type: signal_type,
            intensity, ttl: 1.5   // years until signal fades
        });
    }

    getActiveSignals() {
        this._signal_queue = this._signal_queue.filter(s => {
            s.ttl -= 0.01;
            return s.ttl > 0;
        });
        return this._signal_queue.slice(0, 5);
    }

    getState() {
        return {
            network_density_pct:   (this.networkDensity * 100).toFixed(1),
            network_health_pct:    (this.networkHealth * 100).toFixed(1),
            collapse_risk:         this.collapseRisk.toFixed(4),
            C_transfer_Gt_yr:      this.channels.carbon_transfer.flux_Gt_yr.toFixed(2),
            N_routing_Tg_yr:       this.channels.nitrogen_routing.flux_Tg_yr.toFixed(1),
            P_routing_Tg_yr:       this.channels.phosphorus_routing.flux_Tg_yr.toFixed(1),
            stress_events_yr:      this.channels.stress_signalling.events_yr.toFixed(0),
            defense_primed_pct:    (this.channels.defense_priming.primed_pct * 100).toFixed(1),
            hub_trees:             this.hubTrees.length,
            active_signals:        this.getActiveSignals().length,
        };
    }
}

// ─── PLANETARY NERVOUS SYSTEM ─────────────────────────────────────────────────
// The integrated signal & feedback web connecting all Earth subsystems.
// Every system "listens" to every other system through cascade coefficients.

class PlanetaryNervousSystem {
    constructor() {
        // Coupling matrix: how strongly does system A modulate system B?
        // Values: positive = amplifying, negative = dampening
        this.couplings = {
            // [source_system]: { target_system: coefficient }
            ocean_temp:       { atmosphere_co2: 0.08,  ice_albedo: -0.15, coral: -0.25, plankton: -0.10 },
            atmosphere_co2:   { global_temp: 0.81,     ocean_ph: -0.30,   flora_gpp: 0.08             },
            flora_biomass:    { atmosphere_co2: -0.05, soil_carbon: 0.03, water_cycle: 0.12           },
            soil_health:      { flora_gpp: 0.25,       nitrogen_avail: 0.20, erosion: -0.15           },
            ice_cover:        { albedo: 0.50,           ocean_salinity: -0.08                         },
            civilization:     { deforestation: 0.65,   emissions: 0.80,   conservation: -0.20        },
            mycorrhizal_net:  { flora_resilience: 0.30, soil_health: 0.15, nutrient_cycle: 0.20       },
            pollinator_health:{ flora_reproduction: 0.70, food_web: 0.25                              },
        };

        // Signal latency (years): how long before a perturbation is felt
        this.latencies = {
            ocean_atmosphere: 5,
            soil_flora:       0.5,
            ice_climate:      10,
            mycorrhizal:      0.2,
            pollinator_flora: 0.3,
            civilization_cO2: 1,
        };

        // Running signal buffer: [ { path, strength, age_yrs } ]
        this._signals = [];

        // Planetary resonance: when multiple feedbacks align, they amplify
        this.resonance_index = 1.0;   // >1 = reinforcing feedbacks active

        // Tipping point proximity (0-1 scale; >0.8 = approaching tipping cascade)
        this.tipping_points = {
            arctic_sea_ice:       { proximity: 0.55, threshold: 0.80, label: 'Arctic ice-free summer' },
            amazon_dieback:       { proximity: 0.35, threshold: 0.75, label: 'Amazon savannification' },
            amoc_collapse:        { proximity: 0.42, threshold: 0.85, label: 'AMOC circulation collapse' },
            permafrost_feedback:  { proximity: 0.38, threshold: 0.80, label: 'Permafrost CH₄ bomb' },
            coral_extinction:     { proximity: 0.60, threshold: 0.85, label: 'Coral reef mass extinction' },
            ice_sheet_west_ant:   { proximity: 0.28, threshold: 0.90, label: 'West Antarctic ice sheet' },
        };
    }

    _emit(path, strength) {
        this._signals.push({ path, strength, age_yrs: 0 });
        if (this._signals.length > 80) this._signals.shift();
    }

    update(dt, planet, biosphere, civilization) {
        const temp     = planet ? planet.climate.globalTemp : 14;
        const co2      = planet ? parseFloat(planet.climate.atmosphere.getState().co2_ppm) : 421;
        const ice      = planet ? planet.climate.iceCapFraction : 0.035;
        const ph       = planet ? parseFloat(planet.ocean.surface_ph) : 8.05;
        const coral    = planet ? planet.ocean.coralCoverage : 0.50;
        const soil     = biosphere ? parseFloat(biosphere.fungalNet.getState().soil_health) : 0.75;
        const biomass  = biosphere ? biosphere.totalBiomass / 1e12 : 450;
        const civ_p    = civilization ? civilization.biodiversity_pressure : 0.65;

        // ── TIPPING POINT PROXIMITY ──────────────────────────────────────
        this.tipping_points.arctic_sea_ice.proximity    = Math.min(1, Math.max(0, (temp - 14) * 0.12 + 0.55));
        this.tipping_points.amazon_dieback.proximity    = Math.min(1, Math.max(0, civ_p * 0.5 + (temp - 14) * 0.05 + 0.35));
        this.tipping_points.amoc_collapse.proximity     = Math.min(1, Math.max(0, (temp - 14) * 0.08 + (1 - ice / 0.035) * 0.15 + 0.42));
        this.tipping_points.permafrost_feedback.proximity = Math.min(1, Math.max(0, (temp - 14) * 0.10 + 0.38));
        this.tipping_points.coral_extinction.proximity  = Math.min(1, Math.max(0, (1 - coral) * 0.6 + (8.2 - ph) * 2 + 0.15));
        this.tipping_points.ice_sheet_west_ant.proximity= Math.min(1, Math.max(0, (temp - 14) * 0.05 + 0.28));

        // ── EMIT SIGNALS ─────────────────────────────────────────────────
        if (temp > 15)    this._emit('temp→ice_loss',        (temp - 15) * 0.08 * dt);
        if (co2 > 450)    this._emit('co2→ocean_acid',       (co2 - 450) * 0.001 * dt);
        if (soil < 0.5)   this._emit('soil_deg→flora_loss',  (0.5 - soil) * 0.3 * dt);
        if (coral < 0.4)  this._emit('coral→plankton_shift', (0.4 - coral) * 0.2 * dt);
        if (civ_p > 0.6)  this._emit('civ→biodiv_pressure',  (civ_p - 0.6) * 0.5 * dt);
        if (biomass < 400)this._emit('forest_loss→C_release',(450 - biomass) / 450 * 0.1 * dt);

        // Decay signal strengths
        this._signals.forEach(s => { s.age_yrs += dt; s.strength *= (1 - 0.1 * dt); });
        this._signals = this._signals.filter(s => s.strength > 0.001);

        // ── RESONANCE INDEX ──────────────────────────────────────────────
        // When tipping points cluster, they reinforce each other
        const tip_avg = Object.values(this.tipping_points)
            .reduce((s, t) => s + t.proximity, 0) / Object.keys(this.tipping_points).length;
        this.resonance_index = 1 + Math.max(0, tip_avg - 0.5) * 2;

        return this.getState();
    }

    getActiveTippingPoints() {
        return Object.entries(this.tipping_points)
            .filter(([, t]) => t.proximity > 0.65)
            .map(([k, t]) => ({ key: k, ...t }));
    }

    getState() {
        const active_tips = this.getActiveTippingPoints();
        return {
            resonance_index:     this.resonance_index.toFixed(3),
            active_signals:      this._signals.length,
            tipping_warnings:    active_tips.length,
            tipping_labels:      active_tips.map(t => t.label),
            tipping_detail:      Object.fromEntries(
                Object.entries(this.tipping_points)
                    .map(([k, v]) => [k, (v.proximity * 100).toFixed(1)])
            ),
        };
    }
}

// ─── BIOGEOGRAPHIC DISPERSAL ENGINE ──────────────────────────────────────────
// Tracks how species move across biomes through corridors, ocean currents,
// wind, and animal vectors — and how barriers (mountains, human land use)
// fragment those pathways.

class BiogeographicDispersalEngine {
    constructor() {
        // Major dispersal corridors
        this.corridors = [
            { id: 'amazon_andes',    from: 'tropical_rainforest', to: 'montane',         width_km: 200, integrity: 0.70, type: 'land'  },
            { id: 'boreal_belt',     from: 'boreal_forest',       to: 'tundra',           width_km: 800, integrity: 0.88, type: 'land'  },
            { id: 'serengeti',       from: 'tropical_savanna',    to: 'tropical_savanna', width_km: 600, integrity: 0.55, type: 'land'  },
            { id: 'atlantic_flyway', from: 'tundra',              to: 'temperate_forest', width_km: 400, integrity: 0.80, type: 'air'   },
            { id: 'pacific_flyway',  from: 'boreal_forest',       to: 'tropical_rainforest',width_km:300,integrity:0.75, type: 'air'   },
            { id: 'gulf_stream',     from: 'ocean',               to: 'temperate_forest', width_km: 1200,integrity: 0.92, type: 'ocean' },
            { id: 'silk_road',       from: 'temperate_grassland', to: 'subtropical_desert',width_km:150, integrity: 0.40, type: 'land'  },
        ];

        // Dispersal vectors: agents that carry propagules
        this.vectors = {
            wind:          { reach_km: 3000, capacity: 0.8,  affected_by: 'atmosphere' },
            ocean_current: { reach_km: 15000,capacity: 0.3,  affected_by: 'thc_strength' },
            animal:        { reach_km: 800,  capacity: 0.6,  affected_by: 'fauna_biomass' },
            human:         { reach_km: 20000,capacity: 0.9,  affected_by: 'civilization' },  // invasive spread
        };

        // Colonisation events this simulated year
        this.colonisation_events = 0;
        this.invasive_introductions = 0;
        this.corridor_fragments = 0;
    }

    update(dt, climate, civilization, faunaState) {
        const temp   = climate ? climate.globalTemp : 14;
        const civ_p  = civilization ? civilization.biodiversity_pressure : 0.65;
        const defor  = civilization ? civilization.deforestation_rate : 0.0025;
        const fauna  = faunaState ? parseFloat(faunaState.total_animal_biomass_Gt) : 2;

        // ── CORRIDOR INTEGRITY ───────────────────────────────────────────
        this.corridor_fragments = 0;
        this.corridors.forEach(c => {
            const frag_pressure = defor * 0.5 + civ_p * 0.2;
            const climate_shift = Math.max(0, temp - 14) * 0.005;
            const restore = 0.001 * (1 - civ_p);
            c.integrity = Math.max(0.02, Math.min(1,
                c.integrity - frag_pressure * dt - climate_shift * dt + restore * dt));
            if (c.integrity < 0.40) this.corridor_fragments++;
        });

        // ── COLONISATION RATE ────────────────────────────────────────────
        const avg_corridor = this.corridors.reduce((s, c) => s + c.integrity, 0) / this.corridors.length;
        const wind_base    = 500 * dt * (1 + (temp - 14) * 0.03);   // warmer → more range shifts
        const animal_base  = 200 * fauna * dt;
        this.colonisation_events = Math.round(
            (wind_base + animal_base) * avg_corridor * Math.max(0.1, 1 - civ_p * 0.5)
        );

        // ── INVASIVE SPECIES INTRODUCTIONS ──────────────────────────────
        const human_vector = civilization ? civilization.agriculture_fraction * 0.8 : 0.4;
        this.invasive_introductions = Math.round(
            human_vector * 50 * dt * (1 + civ_p * 2)
        );

        // Climate-driven range shifts: species moving poleward
        const poleward_shift_km_yr = Math.max(0, temp - 13) * 6.5;  // ~6.5 km/yr per °C (Chen 2011)

        return this.getState(poleward_shift_km_yr);
    }

    getState(poleward_km = 0) {
        const open_corridors = this.corridors.filter(c => c.integrity > 0.5).length;
        return {
            open_corridors:           open_corridors,
            fragmented_corridors:     this.corridor_fragments,
            avg_corridor_integrity:   (this.corridors.reduce((s,c)=>s+c.integrity,0)/this.corridors.length * 100).toFixed(1),
            colonisation_events_yr:   this.colonisation_events.toFixed(0),
            invasive_introductions_yr:this.invasive_introductions.toFixed(0),
            poleward_shift_km_yr:     poleward_km.toFixed(1),
            corridors:                this.corridors.map(c=>({ id:c.id, integrity:(c.integrity*100).toFixed(0)+'%' })),
        };
    }
}

// ─── TROPHIC RESONANCE ENGINE ─────────────────────────────────────────────────
// Models how energy, nutrients and information ripple through food webs
// beyond simple top-down / bottom-up control: oscillations, phase locking,
// predator-prey cycles (Lotka-Volterra extended), mesopredator release.

class TrophicResonanceEngine {
    constructor() {
        // Predator-prey oscillator pairs (Lotka-Volterra extended)
        this.oscillators = [
            { name: 'Wolf-Deer',          prey: 2000,  predator: 200,  α:1.0, β:0.02, γ:0.8, δ:0.01, phase: 0 },
            { name: 'Hare-Lynx',          prey: 50000, predator: 5000, α:1.2, β:0.005,γ:0.9, δ:0.001,phase: Math.PI * 0.4 },
            { name: 'Plankton-Krill',     prey: 1e9,   predator: 1e7,  α:2.0, β:1e-6, γ:1.5, δ:1e-7, phase: Math.PI * 0.8 },
            { name: 'Acacia-Elephant',    prey: 400e3, predator: 200e3,α:0.3, β:0.0001,γ:0.2,δ:0.00005,phase:Math.PI*1.2},
        ];

        // Mesopredator release index (0=intact, 1=apex gone → mesopredators explode)
        this.mesopredator_release = 0;

        // Trophic cascade strengths (top-down vs bottom-up dominance: 0-1)
        this.cascade_top_down  = 0.55;   // wolves suppress deer suppress vegetation
        this.cascade_bottom_up = 0.45;   // primary productivity drives everything up

        // Biomagnification: toxin accumulation up trophic levels
        this.biomagnification_factor = 1.0;   // multiplier; >3 = dangerous apex predator loads

        this.t = 0;
    }

    update(dt, faunaState, biosphere, civilization) {
        this.t += dt;

        const apex_pop  = faunaState ? faunaState.apex_predator_pop : 3000;
        const herb_Gt   = faunaState ? parseFloat(faunaState.herbivore_biomass_Gt) : 2;
        const poll_kg   = faunaState ? parseFloat(faunaState.pollinator_biomass_kg) : 1e6;
        const flora_Gt  = biosphere  ? biosphere.totalBiomass / 1e12 : 450;
        const civ_p     = civilization ? civilization.biodiversity_pressure : 0.65;
        const pesticides= civilization ? civilization.agriculture_intensity * 0.5 : 0.3;

        // ── LOTKA-VOLTERRA OSCILLATORS ───────────────────────────────────
        this.oscillators.forEach(osc => {
            const dPrey     = (osc.α - osc.β * osc.predator) * osc.prey    * dt;
            const dPredator = (osc.δ * osc.prey - osc.γ)     * osc.predator * dt;
            osc.prey     = Math.max(1, osc.prey     + dPrey);
            osc.predator = Math.max(0, osc.predator + dPredator);
            osc.phase   += dt * 0.2;
        });

        // ── MESOPREDATOR RELEASE ─────────────────────────────────────────
        // When apex predators decline (hunting, habitat loss), mesopredators surge
        const apex_health = Math.min(1, apex_pop / 5000);
        this.mesopredator_release = Math.max(0, 1 - apex_health) * civ_p;

        // ── CASCADE BALANCE ──────────────────────────────────────────────
        // Strong apex → top-down; rich vegetation → bottom-up
        const apex_force  = apex_health * 0.7;
        const flora_force = Math.min(1, flora_Gt / 500) * 0.6;
        this.cascade_top_down  = apex_force / (apex_force + flora_force + 0.001);
        this.cascade_bottom_up = 1 - this.cascade_top_down;

        // ── POLLINATOR COLLAPSE RISK ─────────────────────────────────────
        // Pesticides + habitat loss → colony collapse disorder cascade
        const pollinator_stress = pesticides + (1 - Math.min(1, poll_kg / 1e6)) * 0.3;
        const pollinator_collapse_risk = Math.min(1, pollinator_stress * 1.5);

        // ── BIOMAGNIFICATION ─────────────────────────────────────────────
        // Industrial chemicals concentrate ~10× per trophic level
        const pollution_index = civilization ? civilization.agriculture_intensity * 0.6 + civilization.urban_fraction : 0.4;
        this.biomagnification_factor = 1 + pollution_index * Math.pow(10, 3.5) / 1e4;
        // Clamped to realistic range
        this.biomagnification_factor = Math.min(20, Math.max(1, this.biomagnification_factor));

        return this.getState(pollinator_collapse_risk);
    }

    getState(poll_risk = 0) {
        return {
            oscillators: this.oscillators.map(o => ({
                name: o.name,
                prey:     o.prey.toFixed(0),
                predator: o.predator.toFixed(0),
            })),
            mesopredator_release:    (this.mesopredator_release * 100).toFixed(1),
            cascade_top_down_pct:    (this.cascade_top_down * 100).toFixed(1),
            cascade_bottom_up_pct:   (this.cascade_bottom_up * 100).toFixed(1),
            pollinator_collapse_risk:(poll_risk * 100).toFixed(1),
            biomagnification_x:      this.biomagnification_factor.toFixed(2),
        };
    }
}

// ─── GAIA FEEDBACK ORCHESTRATOR ──────────────────────────────────────────────
// Implements the Gaia hypothesis as a computational engine:
// the biosphere actively modulates planetary conditions to maintain
// habitability within a range. Measures how far the planet is from
// self-regulation breakdown.

class GaiaFeedbackOrchestrator {
    constructor() {
        // Target ranges for self-regulation (Lovelock / Earth system boundaries)
        this.targets = {
            global_temp:    { low: 10,    high: 18,   current: 14.9,  label: '°C' },
            co2_ppm:        { low: 180,   high: 560,  current: 421,   label: 'ppm' },
            ocean_ph:       { low: 8.05,  high: 8.30, current: 8.05,  label: '' },
            o2_pct:         { low: 18,    high: 24,   current: 20.95, label: '%' },
            albedo:         { low: 0.25,  high: 0.37, current: 0.30,  label: '' },
            soil_carbon_Gt: { low: 800,   high: 2500, current: 1500,  label: 'Gt' },
        };

        // Feedback mechanisms (stabilising = negative, destabilising = positive)
        this.feedbacks = {
            // Stabilising
            vegetation_albedo:  { type: 'negative', strength: 0.30, active: true,
                description: 'Warm→less ice→less albedo→more warming BUT vegetation spreads, absorbs more CO₂' },
            silicate_weathering:{ type: 'negative', strength: 0.15, active: true,
                description: 'Warm→more rain→silicate weathering→CO₂ drawn down' },
            planktonic_DMS:     { type: 'negative', strength: 0.12, active: true,
                description: 'Warm ocean→more phytoplankton→more DMS→more cloud nuclei→cooling' },
            mycorrhizal_C_pump: { type: 'negative', strength: 0.20, active: true,
                description: 'High CO₂→plant growth→more fungal C pump→soil C sequestration' },
            // Destabilising (runaway risks)
            ice_albedo:         { type: 'positive', strength: 0.35, active: true,
                description: 'Less ice→less albedo→more warming→less ice (runaway above threshold)' },
            permafrost_ch4:     { type: 'positive', strength: 0.28, active: false,
                description: 'Warm permafrost→CH₄ release→more warming→more melt' },
            amazon_dieback:     { type: 'positive', strength: 0.22, active: false,
                description: 'Forest loss→drying→more loss→savannification' },
        };

        this.regulation_index = 1.0;   // 1.0 = fully regulated; <0.5 = destabilising
        this.daisyworld_balance = 0.5; // [Daisyworld proxy] balance of light/dark biosphere
    }

    update(dt, planet, biosphere, ocean) {
        const temp  = planet ? planet.climate.globalTemp : 14;
        const co2   = planet ? parseFloat(planet.climate.atmosphere.getState().co2_ppm) : 421;
        const ph    = ocean  ? parseFloat(ocean.getState().surface_ph) : 8.05;
        const ice   = planet ? planet.climate.iceCapFraction : 0.035;
        const plank = ocean  ? parseFloat(ocean.getState().plankton_biomass_Gt) : 1.5;
        const soil_C= biosphere
            ? parseFloat(biosphere.biogeo.getState().soil_carbon_Gt) : 1500;

        // ── UPDATE TARGET CURRENTS ────────────────────────────────────────
        this.targets.global_temp.current    = temp;
        this.targets.co2_ppm.current        = co2;
        this.targets.ocean_ph.current       = ph;
        this.targets.soil_carbon_Gt.current = soil_C;

        // ── FEEDBACK ACTIVATION ──────────────────────────────────────────
        // Permafrost feedback activates above +2°C anomaly
        this.feedbacks.permafrost_ch4.active = temp > 16;
        // Amazon dieback activates with high deforestation + heat
        this.feedbacks.amazon_dieback.active = temp > 17 || co2 > 600;

        // DMS feedback strength scales with plankton
        this.feedbacks.planktonic_DMS.strength = Math.min(0.25, plank * 0.08);

        // Mycorrhizal C pump scales with network density (updated externally)
        this.feedbacks.mycorrhizal_C_pump.strength = Math.min(0.35,
            (soil_C / 1500) * 0.20);

        // ── REGULATION INDEX ─────────────────────────────────────────────
        const stabilising    = Object.values(this.feedbacks)
            .filter(f => f.type === 'negative' && f.active)
            .reduce((s, f) => s + f.strength, 0);
        const destabilising  = Object.values(this.feedbacks)
            .filter(f => f.type === 'positive' && f.active)
            .reduce((s, f) => s + f.strength, 0);

        this.regulation_index = Math.max(0, Math.min(2,
            stabilising / (destabilising + 0.001)));

        // ── DAISYWORLD BALANCE ───────────────────────────────────────────
        // Simple proxy: ice (white) vs vegetation (dark) balance
        const dark_fraction  = Math.min(1, 1 - ice * 8);
        const light_fraction = Math.min(1, ice * 8);
        this.daisyworld_balance = dark_fraction / (dark_fraction + light_fraction + 0.001);

        return this.getState();
    }

    getState() {
        const out_of_range = Object.entries(this.targets).filter(([, t]) =>
            t.current < t.low || t.current > t.high).map(([k]) => k);
        return {
            regulation_index:    this.regulation_index.toFixed(3),
            daisyworld_balance:  (this.daisyworld_balance * 100).toFixed(1),
            variables_in_range:  Object.keys(this.targets).length - out_of_range.length,
            variables_out_range: out_of_range,
            active_pos_feedbacks:Object.entries(this.feedbacks)
                .filter(([,f]) => f.type==='positive' && f.active).map(([k])=>k),
            stabilising_strength: Object.values(this.feedbacks)
                .filter(f=>f.type==='negative'&&f.active).reduce((s,f)=>s+f.strength,0).toFixed(3),
            destabilising_strength:Object.values(this.feedbacks)
                .filter(f=>f.type==='positive'&&f.active).reduce((s,f)=>s+f.strength,0).toFixed(3),
        };
    }
}

// ─── BIOSPHERE HEALTH INDEX ───────────────────────────────────────────────────
// Planetary vital signs — a single dashboard aggregating all subsystem
// health metrics into a composite "Living Planet Index" (0-100).

class BiosphereHealthIndex {
    constructor() {
        this.dimensions = {
            climate_stability:    { score: 80, weight: 0.20, trend: 0 },
            ocean_health:         { score: 65, weight: 0.15, trend: 0 },
            terrestrial_biomass:  { score: 75, weight: 0.15, trend: 0 },
            soil_integrity:       { score: 72, weight: 0.12, trend: 0 },
            biodiversity:         { score: 78, weight: 0.15, trend: 0 },
            mycorrhizal_network:  { score: 80, weight: 0.08, trend: 0 },
            pollinator_health:    { score: 60, weight: 0.10, trend: 0 },
            atmospheric_chemistry:{ score: 70, weight: 0.05, trend: 0 },
        };
        this.composite_lpi = 75;
        this.history = [];
    }

    update(dt, planet, biosphere, ocean, evolution, mycelial, nervousSystem) {
        const temp    = planet ? planet.climate.globalTemp : 14;
        const co2     = planet ? parseFloat(planet.climate.atmosphere.getState().co2_ppm) : 421;
        const ph      = ocean  ? parseFloat(ocean.getState().surface_ph) : 8.05;
        const coral   = ocean  ? ocean.coralCoverage * 100 : 50;
        const biomass = biosphere ? biosphere.totalBiomass / 1e12 : 450;
        const soil    = biosphere ? parseFloat(biosphere.fungalNet.getState().soil_health) * 100 : 75;
        const species_M = evolution ? parseFloat(String(evolution.total_species).replace(/,/g,'')) / 1e6 : 8.7;
        const myc_health= mycelial ? parseFloat(mycelial.network_health_pct) : 80;
        const poll_risk = nervousSystem ? 0 : 0;

        // ── DIMENSION SCORES ─────────────────────────────────────────────
        const prev = JSON.parse(JSON.stringify(this.dimensions));

        this.dimensions.climate_stability.score = Math.max(0, Math.min(100,
            100 - Math.abs(temp - 14) * 8 - Math.max(0, co2 - 350) * 0.06));

        this.dimensions.ocean_health.score = Math.max(0, Math.min(100,
            coral * 0.5 + (ph - 7.8) / 0.4 * 40 + parseFloat(ocean ? ocean.getState().plankton_biomass_Gt : '1.5') * 10));

        this.dimensions.terrestrial_biomass.score = Math.max(0, Math.min(100,
            biomass / 5));

        this.dimensions.soil_integrity.score = Math.max(0, Math.min(100, soil));

        this.dimensions.biodiversity.score = Math.max(0, Math.min(100,
            Math.min(100, species_M / 8.7 * 78)));

        this.dimensions.mycorrhizal_network.score = Math.max(0, Math.min(100, myc_health));

        this.dimensions.pollinator_health.score = Math.max(0, Math.min(100,
            biosphere ? parseFloat(biosphere.fauna.agents
                .filter(a=>a.species.type==='pollinator')
                .reduce((s,a)=>s+a.population,0) > 100000 ? 70 : 40) : 60));

        this.dimensions.atmospheric_chemistry.score = Math.max(0, Math.min(100,
            100 - Math.max(0, co2 - 280) * 0.07 - Math.max(0, temp - 13) * 3));

        // Trend deltas
        Object.keys(this.dimensions).forEach(k => {
            this.dimensions[k].trend = this.dimensions[k].score - prev[k].score;
        });

        // ── COMPOSITE LPI ────────────────────────────────────────────────
        this.composite_lpi = Object.values(this.dimensions)
            .reduce((s, d) => s + d.score * d.weight, 0);
        this.composite_lpi = Math.max(0, Math.min(100, this.composite_lpi));

        this.history.push(this.composite_lpi);
        if (this.history.length > 200) this.history.shift();

        return this.getState();
    }

    getStatus() {
        if (this.composite_lpi > 80) return { label: 'Thriving',    color: '#44ff88' };
        if (this.composite_lpi > 60) return { label: 'Stable',      color: '#aaee44' };
        if (this.composite_lpi > 40) return { label: 'Stressed',    color: '#ffcc44' };
        if (this.composite_lpi > 20) return { label: 'Critical',    color: '#ff8844' };
        return                               { label: 'Collapsing',  color: '#ff4444' };
    }

    getState() {
        const status = this.getStatus();
        return {
            composite_lpi:    this.composite_lpi.toFixed(1),
            status_label:     status.label,
            status_color:     status.color,
            dimensions:       Object.fromEntries(
                Object.entries(this.dimensions).map(([k, v]) => [k, {
                    score: v.score.toFixed(1),
                    trend: v.trend > 0 ? '+' + v.trend.toFixed(2) : v.trend.toFixed(2),
                }])
            ),
            history_length:   this.history.length,
        };
    }
}

// ─── PLANETARY INTELLIGENCE ENGINE (top-level integrator) ────────────────────

class PlanetaryIntelligenceEngine {
    constructor() {
        this.mycelial    = new MycelialIntelligenceNetwork();
        this.nervous     = new PlanetaryNervousSystem();
        this.dispersal   = new BiogeographicDispersalEngine();
        this.trophic     = new TrophicResonanceEngine();
        this.gaia        = new GaiaFeedbackOrchestrator();
        this.health      = new BiosphereHealthIndex();

        this._listeners  = [];
    }

    update(dt, planet, biosphere, civilization) {
        const civLayer = civilization ? civilization.civilization : null;
        const ocean    = planet ? planet.ocean : null;

        const mycelialState  = this.mycelial.update(dt, planet ? planet.climate : null, null, civLayer);
        const nervousState   = this.nervous.update(dt, planet, biosphere, civLayer);
        const dispersalState = this.dispersal.update(dt, planet ? planet.climate : null, civLayer, biosphere ? biosphere.fauna.update.__lastState : null);
        const trophicState   = this.trophic.update(dt, biosphere ? biosphere.fauna.update.__lastState : null, biosphere, civLayer);
        const gaiaState      = this.gaia.update(dt, planet, biosphere, ocean);
        const healthState    = this.health.update(dt, planet, biosphere, ocean,
            null, mycelialState, nervousState);

        const state = {
            mycelial:  mycelialState,
            nervous:   nervousState,
            dispersal: dispersalState,
            trophic:   trophicState,
            gaia:      gaiaState,
            health:    healthState,
        };

        this._listeners.forEach(fn => fn(state));
        return state;
    }

    onUpdate(fn) { this._listeners.push(fn); }

    // Convenience: called from FaunaEcosystemEngine after update
    injectFaunaState(faunaState) {
        if (faunaState) {
            this.trophic.update(0.001, faunaState, null, null);
            this.dispersal.vectors.animal.capacity = Math.min(1,
                parseFloat(faunaState.total_animal_biomass_Gt) / 4);
        }
    }
}

// Export to global scope
window.BloomV3Intelligence = {
    PlanetaryIntelligenceEngine,
    MycelialIntelligenceNetwork,
    PlanetaryNervousSystem,
    BiogeographicDispersalEngine,
    TrophicResonanceEngine,
    GaiaFeedbackOrchestrator,
    BiosphereHealthIndex,
};

window.bloomV3Intelligence = new PlanetaryIntelligenceEngine();
})();
