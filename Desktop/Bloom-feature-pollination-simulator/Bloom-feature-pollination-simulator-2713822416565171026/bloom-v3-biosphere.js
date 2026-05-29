(function () {
/**
 * BLOOM V3 — Biosphere Systems
 * Fauna Ecosystem Engine · Food Web Intelligence
 * Fungal & Microbial Networks · Biogeochemical Cycles
 * Carbon & Nitrogen Cycles
 */

'use strict';

// ─── POLLINATOR MUTUALISM MATRIX ─────────────────────────────────────────────
// Tracks which pollinator guilds serve which floral families, and how
// degradation of one propagates to the other through co-dependency.

class PollinatorMutualismMatrix {
    constructor() {
        // Mutualism network: pollinator type → floral families they serve
        this.links = [
            { pollinator: 'Honeybee Colony',   flora: ['Rosaceae','Fabaceae','Brassicaceae'], efficiency: 0.82, specialisation: 0.4 },
            { pollinator: 'Monarch Butterfly', flora: ['Asteraceae','Asclepiadaceae'],        efficiency: 0.55, specialisation: 0.7 },
            { pollinator: 'Bumblebee',         flora: ['Solanaceae','Scrophulariaceae','Fabaceae'],efficiency:0.78,specialisation:0.5 },
            { pollinator: 'Hoverfly',          flora: ['Apiaceae','Ranunculaceae'],           efficiency: 0.45, specialisation: 0.6 },
            { pollinator: 'Hawkmoth',          flora: ['Convolvulaceae','Solanaceae'],        efficiency: 0.65, specialisation: 0.8 },
            { pollinator: 'Hummingbird',       flora: ['Bromeliaceae','Heliconiaceae'],       efficiency: 0.70, specialisation: 0.9 },
            { pollinator: 'Bat',               flora: ['Cactaceae','Agavaceae'],              efficiency: 0.60, specialisation: 0.75},
            { pollinator: 'Wind',              flora: ['Poaceae','Betulaceae','Fagaceae'],    efficiency: 0.30, specialisation: 0.1 },
        ];

        // Flora families vulnerable to pollinator loss
        this.floraDependency = {
            'Rosaceae':         { required_pollinators: ['Honeybee Colony','Bumblebee'],  dependency: 0.85 },
            'Fabaceae':         { required_pollinators: ['Honeybee Colony','Bumblebee'],  dependency: 0.80 },
            'Asteraceae':       { required_pollinators: ['Monarch Butterfly','Hoverfly'], dependency: 0.75 },
            'Asclepiadaceae':   { required_pollinators: ['Monarch Butterfly'],            dependency: 0.95 },
            'Solanaceae':       { required_pollinators: ['Bumblebee','Hawkmoth'],         dependency: 0.70 },
            'Bromeliaceae':     { required_pollinators: ['Hummingbird'],                  dependency: 0.90 },
            'Cactaceae':        { required_pollinators: ['Bat'],                          dependency: 0.85 },
            'Poaceae':          { required_pollinators: ['Wind'],                         dependency: 0.20 },
        };

        this.network_connectance = 0.42;   // fraction of possible links that exist (real value ~0.4)
        this.mutualism_strength  = 0.75;   // overall network robustness 0-1
        this.cascade_risk        = 0;      // 0-1: risk of co-extinction cascade
    }

    update(dt, pollinatorAgents, floraBiomass, pesticide_index) {
        // Count active pollinator guilds from agents
        const activePoll = new Set(pollinatorAgents
            .filter(a => a.population > a.species.K * 0.05)
            .map(a => a.species.name));

        // Compute mutualism strength: fraction of mutualistic links with living partners
        let active_links = 0;
        this.links.forEach(link => {
            if (activePoll.has(link.pollinator)) active_links++;
        });
        this.mutualism_strength = Math.max(0.1, (active_links / this.links.length)
            * (1 - pesticide_index * 0.5));

        // Cascade risk: if specialist pollinators lost, dependent flora crashes
        const lost_specialists = this.links.filter(l =>
            l.specialisation > 0.6 && !activePoll.has(l.pollinator));
        this.cascade_risk = Math.min(1,
            lost_specialists.length / this.links.filter(l => l.specialisation > 0.6).length);

        // Network connectance erodes with pesticide + habitat loss
        this.network_connectance = Math.max(0.10, Math.min(0.55,
            0.42 * (1 - pesticide_index * 0.6) * this.mutualism_strength));

        // Flora reproduction bonus from healthy pollination network
        const reproduction_multiplier = 0.5 + this.mutualism_strength * 0.8;

        return {
            mutualism_strength:    (this.mutualism_strength * 100).toFixed(1),
            network_connectance:   this.network_connectance.toFixed(3),
            cascade_risk_pct:      (this.cascade_risk * 100).toFixed(1),
            active_pollinator_guilds: activePoll.size,
            flora_repro_multiplier:reproduction_multiplier.toFixed(3),
        };
    }
}

// ─── DISEASE EPIDEMIC ENGINE ──────────────────────────────────────────────────
// Models pathogen spread through biomes using a spatial SIR framework.
// Climate warming, monocultures, and reduced genetic diversity accelerate spread.

class DiseaseEpidemicEngine {
    constructor() {
        // Active epidemics: [ { pathogen, biome, S, I, R, R0, severity } ]
        this.epidemics = [];

        // Pathogen pool (templates for new outbreaks)
        this._pathogens = [
            { name: 'Chytrid Fungus',     host: 'amphibians',  R0_base: 3.2, severity: 0.65, biomes: ['wetlands','temperate_forest'] },
            { name: 'White-nose Syndrome',host: 'bats',        R0_base: 2.8, severity: 0.80, biomes: ['boreal_forest','montane'] },
            { name: 'Crown Dieback',      host: 'trees',       R0_base: 1.9, severity: 0.45, biomes: ['temperate_forest','boreal_forest'] },
            { name: 'Phytophthora',       host: 'roots',       R0_base: 2.5, severity: 0.55, biomes: ['tropical_rainforest','temperate_forest'] },
            { name: 'Coral Wasting',      host: 'coral',       R0_base: 4.0, severity: 0.75, biomes: ['ocean'] },
            { name: 'Avian Influenza',    host: 'birds',       R0_base: 2.2, severity: 0.50, biomes: ['tundra','wetlands'] },
        ];

        this.total_affected_biomass_Gt = 0;
    }

    update(dt, climate, civilization, fungalNet) {
        const temp       = climate ? climate.globalTemp : 14;
        const monoculture= civilization ? civilization.agriculture_intensity : 0.3;
        const soil_h     = fungalNet ? parseFloat(fungalNet.getState().soil_health) : 0.75;

        // Spontaneous outbreak probability — climate stress + monoculture
        const outbreak_prob = (Math.max(0, temp - 14) * 0.005 + monoculture * 0.003) * dt;
        if (Math.random() < outbreak_prob && this.epidemics.length < 5) {
            const template = this._pathogens[Math.floor(Math.random() * this._pathogens.length)];
            const biome    = template.biomes[Math.floor(Math.random() * template.biomes.length)];
            this.epidemics.push({
                ...template,
                biome,
                S: 1000,   // susceptibles
                I: 10,     // infected
                R: 0,      // recovered/resistant
                age_yrs: 0,
            });
        }

        // SIR dynamics for each active epidemic
        this.epidemics.forEach(ep => {
            ep.age_yrs += dt;
            const R0       = ep.R0_base * (1 + (temp - 14) * 0.05) * (1 + monoculture * 0.4);
            const gamma    = 0.2;      // recovery rate /yr
            const beta     = R0 * gamma / Math.max(1, ep.S + ep.I + ep.R);
            const new_inf  = beta * ep.S * ep.I * dt;
            const recover  = gamma * ep.I * dt;
            ep.S = Math.max(0, ep.S - new_inf);
            ep.I = Math.max(0, ep.I + new_inf - recover);
            ep.R = ep.R + recover;
        });

        // Remove burned-out epidemics (I < 1)
        this.epidemics = this.epidemics.filter(ep => ep.I >= 1 && ep.age_yrs < 50);

        // Total biomass affected (rough kg from infected counts)
        this.total_affected_biomass_Gt = this.epidemics.reduce((s, ep) =>
            s + ep.I * ep.severity * 0.001, 0) / 1e12;

        return this.getState();
    }

    getState() {
        return {
            active_epidemics:       this.epidemics.length,
            affected_biomass_Gt:    this.total_affected_biomass_Gt.toExponential(2),
            epidemic_list:          this.epidemics.map(ep => ({
                name: ep.name, biome: ep.biome,
                infected: Math.round(ep.I), severity: ep.severity,
            })),
        };
    }
}

// ─── FAUNA ECOSYSTEM ENGINE ──────────────────────────────────────────────────

class AnimalAgent {
    constructor(species, biome, population) {
        this.species    = species;
        this.biome      = biome;
        this.population = population;
        this.biomass    = population * species.avg_mass_kg;  // kg

        // AI state
        this.hunger        = 0.5;   // 0-1
        this.migration_urge = 0;    // 0-1
        this.threat_level  = 0;
        this.territory_size = species.territory_km2;

        // Fitness
        this.fitness       = 1.0;
        this.age_yrs       = 0;
        this.max_age_yrs   = species.lifespan_yrs;

        // Reproductive state
        this.is_breeding_season = false;
        this.offspring_this_yr  = 0;
    }

    update(dt, environment, prey_biomass, predator_pressure) {
        this.age_yrs += dt;

        // Hunger dynamics
        const food_availability = Math.min(1, prey_biomass / (this.biomass * 10));
        this.hunger += (0.01 - food_availability * 0.015) * dt;
        this.hunger  = Math.max(0, Math.min(1, this.hunger));

        // Migration triggered by hunger > 0.7 or temperature mismatch
        const temp_mismatch = Math.abs(environment.temperature - this.species.optimal_temp);
        this.migration_urge = Math.min(1, this.hunger * 0.5 + temp_mismatch * 0.05);

        // Threat detection
        this.threat_level = Math.min(1, predator_pressure * 0.3 + environment.wildfire_risk * 0.2);

        // Population dynamics (logistic + predation)
        const birth_rate = this.species.r * (1 - this.population / this.species.K)
                         * (1 - this.hunger * 0.5)
                         * (this.is_breeding_season ? 2 : 1);
        const death_rate = this.species.base_mortality
                         + predator_pressure * this.species.predation_coefficient
                         + this.hunger * 0.05
                         + (this.age_yrs > this.max_age_yrs * 0.8 ? 0.1 : 0);

        this.population = Math.max(0, this.population * (1 + (birth_rate - death_rate) * dt));
        this.biomass    = this.population * this.species.avg_mass_kg;

        // Seasonal breeding
        this.is_breeding_season = environment.season === 'Spring' || environment.season === 'Summer';

        // Fitness adapts to environment
        const temp_penalty = Math.max(0, temp_mismatch - 5) * 0.02;
        this.fitness = Math.max(0.1, 1.0 - temp_penalty - this.hunger * 0.3);

        return {
            species:    this.species.name,
            population: Math.round(this.population),
            biomass_kg: this.biomass.toFixed(0),
            hunger:     this.hunger.toFixed(2),
            fitness:    this.fitness.toFixed(2),
            migration:  this.migration_urge > 0.7,
        };
    }
}

class FaunaEcosystemEngine {
    constructor() {
        // Representative fauna — one agent per trophic guild per biome
        this.speciesTemplates = [
            // Herbivores
            { name: 'Forest Deer',       type: 'herbivore', trophic: 2, avg_mass_kg: 70,   optimal_temp: 12, territory_km2: 5,    r: 0.3, K: 2000,  base_mortality: 0.1, predation_coefficient: 0.4, lifespan_yrs: 12, biome: 'temperate_forest' },
            { name: 'African Elephant',  type: 'herbivore', trophic: 2, avg_mass_kg: 4500, optimal_temp: 26, territory_km2: 200,  r: 0.07,K: 415000,base_mortality: 0.03,predation_coefficient: 0.05,lifespan_yrs: 60, biome: 'tropical_savanna' },
            { name: 'Arctic Hare',       type: 'herbivore', trophic: 2, avg_mass_kg: 3,    optimal_temp: -8, territory_km2: 1,    r: 1.5, K: 50000, base_mortality: 0.3, predation_coefficient: 0.6, lifespan_yrs: 5,  biome: 'tundra' },
            { name: 'Bison',             type: 'herbivore', trophic: 2, avg_mass_kg: 600,  optimal_temp: 10, territory_km2: 20,   r: 0.25,K: 5000,  base_mortality: 0.05,predation_coefficient: 0.2, lifespan_yrs: 20, biome: 'temperate_grassland' },
            { name: 'Blue Whale',        type: 'herbivore', trophic: 2, avg_mass_kg: 130000,optimal_temp:12, territory_km2: 2000, r:0.04, K: 12000, base_mortality:0.02, predation_coefficient:0.01, lifespan_yrs: 80, biome: 'ocean' },
            // Predators
            { name: 'Grey Wolf',         type: 'predator',  trophic: 3, avg_mass_kg: 40,   optimal_temp: 8,  territory_km2: 300,  r: 0.2, K: 500,   base_mortality: 0.1, predation_coefficient: 0.1, lifespan_yrs: 10, biome: 'temperate_forest' },
            { name: 'Lion',              type: 'predator',  trophic: 3, avg_mass_kg: 180,  optimal_temp: 27, territory_km2: 400,  r: 0.15,K: 300,   base_mortality: 0.08,predation_coefficient: 0.08,lifespan_yrs: 14, biome: 'tropical_savanna' },
            { name: 'Snowy Owl',         type: 'predator',  trophic: 3, avg_mass_kg: 2,    optimal_temp: -12,territory_km2: 50,   r: 0.4, K: 5000,  base_mortality: 0.15,predation_coefficient: 0.15,lifespan_yrs: 10, biome: 'tundra' },
            { name: 'Orca',              type: 'predator',  trophic: 4, avg_mass_kg: 5500, optimal_temp: 10, territory_km2: 50000,r:0.05, K: 5000,  base_mortality: 0.03,predation_coefficient: 0.03,lifespan_yrs: 60, biome: 'ocean' },
            // Pollinators
            { name: 'Honeybee Colony',   type: 'pollinator',trophic: 2, avg_mass_kg: 2,    optimal_temp: 20, territory_km2: 5,    r: 2.0, K: 500000,base_mortality: 0.2, predation_coefficient: 0.1, lifespan_yrs: 0.2,biome: 'temperate_forest' },
            { name: 'Monarch Butterfly', type: 'pollinator',trophic: 2, avg_mass_kg: 0.0005,optimal_temp:22, territory_km2: 1000, r: 5.0, K:1000000,base_mortality: 0.5, predation_coefficient: 0.3, lifespan_yrs: 0.1,biome: 'temperate_grassland' },
            // Decomposers
            { name: 'Earthworm',         type: 'decomposer',trophic: 1, avg_mass_kg: 0.005,optimal_temp: 15, territory_km2: 0.001,r: 5.0, K:1e9,    base_mortality: 0.3, predation_coefficient: 0.5, lifespan_yrs: 2,  biome: 'temperate_forest' },
            { name: 'Vulture',           type: 'scavenger', trophic: 3, avg_mass_kg: 8,    optimal_temp: 25, territory_km2: 2000, r: 0.2, K: 2000,  base_mortality: 0.08,predation_coefficient: 0.02,lifespan_yrs: 20, biome: 'tropical_savanna' },
        ];

        // Initialize agents
        this.agents = this.speciesTemplates.map(sp => new AnimalAgent(sp, sp.biome, sp.K * 0.6));

        this.totalAnimalBiomass  = 0;
        this.primaryProductivity = 0;   // set by flora layer
        this.wildfire_risk       = 0;
    }

    update(dt, climate, floraBiomass) {
        this.primaryProductivity = floraBiomass || 1e10;
        const season = climate ? climate._getSeason() : 'Spring';
        const globalTemp = climate ? climate.globalTemp : 14;

        const environment = {
            temperature: globalTemp,
            season:      season,
            wildfire_risk: this.wildfire_risk,
        };

        const biomassMap = {};
        this.agents.forEach(a => { biomassMap[a.species.type] = (biomassMap[a.species.type] || 0) + a.biomass; });

        const results = this.agents.map(agent => {
            const preyBiomass = agent.species.type === 'predator'
                ? (biomassMap['herbivore'] || 0) * 0.1
                : this.primaryProductivity * 0.01;
            const predatorPressure = agent.species.type === 'herbivore'
                ? (biomassMap['predator'] || 0) / 1e7
                : 0.01;
            return agent.update(dt, environment, preyBiomass, predatorPressure);
        });

        this.totalAnimalBiomass = this.agents.reduce((s, a) => s + a.biomass, 0);

        return {
            total_animal_biomass_Gt: (this.totalAnimalBiomass / 1e12).toFixed(6),
            species_count:           this.agents.length,
            pollinator_biomass_kg:   this.agents.filter(a=>a.species.type==='pollinator')
                                         .reduce((s,a)=>s+a.biomass,0).toFixed(0),
            apex_predator_pop:       Math.round(this.agents.filter(a=>a.species.trophic>=4)
                                         .reduce((s,a)=>s+a.population,0)),
            herbivore_biomass_Gt:    (this.agents.filter(a=>a.species.type==='herbivore')
                                         .reduce((s,a)=>s+a.biomass,0)/1e12).toFixed(6),
            species_detail:          results,
        };
    }
}

// ─── FOOD WEB INTELLIGENCE ───────────────────────────────────────────────────

class FoodWebIntelligence {
    constructor() {
        // Directed graph: source → target, with trophic efficiency
        this.nodes = [
            { id: 'solar',            trophic: 0,  biomass: Infinity, type: 'abiotic' },
            { id: 'primary_producers',trophic: 1,  biomass: 450e12,   type: 'flora'  },    // ~450 Gt C
            { id: 'herbivores',       trophic: 2,  biomass: 2e12,     type: 'fauna'  },
            { id: 'primary_carnivores',trophic:3,  biomass: 0.1e12,   type: 'fauna'  },
            { id: 'apex_predators',   trophic: 4,  biomass: 0.01e12,  type: 'fauna'  },
            { id: 'decomposers',      trophic: 1,  biomass: 0.2e12,   type: 'fungi'  },
            { id: 'soil_nutrients',   trophic: 0,  biomass: 1e13,     type: 'abiotic'},
            { id: 'ocean_plankton',   trophic: 1,  biomass: 0.001e12, type: 'microbe'},
        ];

        // Edges: [from, to, trophic_efficiency]
        this.edges = [
            ['solar',             'primary_producers', 0.01],   // photosynthesis ~1%
            ['primary_producers', 'herbivores',        0.10],   // 10% rule
            ['herbivores',        'primary_carnivores',0.10],
            ['primary_carnivores','apex_predators',    0.10],
            ['primary_producers', 'decomposers',       0.90],   // most plant matter decomposes
            ['herbivores',        'decomposers',       0.80],
            ['primary_carnivores','decomposers',       0.80],
            ['apex_predators',    'decomposers',       0.80],
            ['decomposers',       'soil_nutrients',    0.95],
            ['soil_nutrients',    'primary_producers', 0.30],   // nutrient uptake
            ['solar',             'ocean_plankton',    0.01],
            ['ocean_plankton',    'herbivores',        0.10],
        ];

        this.cascadeRisks = [];
    }

    update(dt, floraBiomass, faunaState, oceanState) {
        // Update node biomasses from simulation data
        if (floraBiomass)  this.nodes.find(n=>n.id==='primary_producers').biomass = floraBiomass;
        if (faunaState)    {
            this.nodes.find(n=>n.id==='herbivores').biomass =
                parseFloat(faunaState.herbivore_biomass_Gt) * 1e12;
            this.nodes.find(n=>n.id==='apex_predators').biomass =
                faunaState.apex_predator_pop * 5000;
        }
        if (oceanState) {
            this.nodes.find(n=>n.id==='ocean_plankton').biomass =
                parseFloat(oceanState.plankton_biomass_Gt) * 1e12;
        }

        // Detect trophic cascade risks
        this.cascadeRisks = [];
        this.edges.forEach(([from, to, eff]) => {
            const srcNode = this.nodes.find(n=>n.id===from);
            const dstNode = this.nodes.find(n=>n.id===to);
            if (!srcNode || !dstNode || srcNode.biomass === Infinity) return;
            const expectedInflow = srcNode.biomass * eff * 0.001;   // steady state fraction
            const ratio = dstNode.biomass / (expectedInflow + 0.001);
            if (ratio < 0.1 || ratio > 100) {
                this.cascadeRisks.push({ link: `${from}→${to}`, ratio: ratio.toFixed(2) });
            }
        });

        // Calculate total energy flow (W equivalent)
        const totalFlow = this.edges.reduce((s, [from, , eff]) => {
            const src = this.nodes.find(n=>n.id===from);
            return s + (src && src.biomass !== Infinity ? src.biomass * eff * 0.001 : 0);
        }, 0);

        return {
            nodes:           this.nodes.length,
            edges:           this.edges.length,
            cascade_risks:   this.cascadeRisks.length,
            total_flow_Gt:   (totalFlow / 1e12).toFixed(4),
            producers_Gt:    (this.nodes.find(n=>n.id==='primary_producers').biomass/1e12).toFixed(2),
            risks_detail:    this.cascadeRisks.slice(0,3),
        };
    }

    getTrophicEfficiency(from, to) {
        const edge = this.edges.find(e => e[0]===from && e[1]===to);
        return edge ? edge[2] : 0;
    }
}

// ─── FUNGAL & MICROBIAL NETWORKS ─────────────────────────────────────────────

class FungalMicrobialNetwork {
    constructor() {
        // Mycorrhizal network state
        this.mycelium_length_km  = 1e12;    // km of hyphae globally
        this.plant_connections   = 0;       // set from flora biomass
        this.nutrient_sharing_rate = 0.3;   // 0-1 efficiency

        // Microbial diversity index (Shannon H, max ~5)
        this.microbial_diversity = 4.2;

        // Functional groups (kg biomass)
        this.microbes = {
            decomposers:         2e13,    // bacteria + fungi
            nitrogen_fixers:     1e12,
            nitrifiers:          5e11,
            methanogens:         2e11,
            mycorrhizal_fungi:   1e13,
            pathogens:           1e10,
        };

        this.soilHealth = 0.75;   // 0-1
        this.disease_pressure = 0;

        // Nitrogen fixation rate kg N/yr
        this.N_fixation_rate_Tg_yr = 140;  // Tg N/yr (global biological fixation)
    }

    update(dt, climate, terrain, civilization) {
        const globalTemp = climate ? climate.globalTemp : 14;
        const soilCarbon = terrain ? parseFloat(terrain.soil_carbon_Gt) * 1e12 : 1.5e12;

        // Decomposers thrive with warmth and moisture
        const decomp_activity = Math.max(0.1, 1 + (globalTemp - 14) * 0.05);
        this.microbes.decomposers *= (1 + 0.00005 * decomp_activity * dt - 0.00003 * dt);

        // Nitrogen fixers respond to plant demand
        this.microbes.nitrogen_fixers *= (1 + 0.00002 * dt - 0.00001 * dt);

        // Methanogens bloom in warm, anoxic wetlands
        const methane_bloom = Math.max(0, (globalTemp - 16) * 0.005);
        this.microbes.methanogens *= (1 + methane_bloom * 0.0001 * dt - 0.00005 * dt);

        // Pathogen pressure increases with warmth + monoculture (civilization)
        const civ_monoculture = civilization ? civilization.agriculture_intensity : 0.2;
        this.disease_pressure = Math.min(1,
            0.1 + (globalTemp - 14) * 0.02 + civ_monoculture * 0.3);
        this.microbes.pathogens *= (1 + this.disease_pressure * 0.001 * dt);

        // Mycorrhizal fungi decline with soil disturbance
        const disturbance = civilization ? civilization.soil_disturbance_index : 0.1;
        this.microbes.mycorrhizal_fungi *= (1 - disturbance * 0.0001 * dt + 0.00003 * dt);

        // Soil health composite
        const diversity_factor  = Math.min(1, this.microbial_diversity / 4.5);
        const mycorrhizal_factor= Math.min(1, this.microbes.mycorrhizal_fungi / 1.2e13);
        const pathogen_penalty  = this.disease_pressure * 0.3;
        this.soilHealth = Math.max(0, Math.min(1,
            0.4 * diversity_factor + 0.4 * mycorrhizal_factor - pathogen_penalty));

        // Microbial diversity erodes under heat stress
        this.microbial_diversity = Math.max(1, Math.min(5,
            this.microbial_diversity - Math.max(0, globalTemp - 18) * 0.0001 * dt
            + 0.00002 * dt));

        // N fixation scales with nitrogen fixer biomass
        this.N_fixation_rate_Tg_yr = 140 * (this.microbes.nitrogen_fixers / 1e12);

        return this.getState();
    }

    getState() {
        return {
            soil_health:          this.soilHealth.toFixed(3),
            microbial_diversity:  this.microbial_diversity.toFixed(3),
            disease_pressure:     this.disease_pressure.toFixed(3),
            N_fixation_Tg_yr:     this.N_fixation_rate_Tg_yr.toFixed(1),
            mycorrhizal_fungi_Gt: (this.microbes.mycorrhizal_fungi / 1e12).toFixed(4),
            methanogens_Gt:       (this.microbes.methanogens / 1e12).toFixed(6),
            decomposers_Gt:       (this.microbes.decomposers / 1e12).toFixed(4),
        };
    }
}

// ─── BIOGEOCHEMICAL CYCLES ───────────────────────────────────────────────────

class BiogeochemicalCycles {
    constructor() {
        // CARBON CYCLE (Gt C pools) — IPCC AR6 / GCP 2023 values
        this.carbon = {
            atmosphere:   880,      // Gt C (421 ppm × 2.13 Gt/ppm ≈ 897; ~880 accounting for partitioning)
            land_biomass: 450,      // Gt C vegetation [IPCC AR6 Ch.5]
            soil:         1500,     // Gt C top-1m soil [Crowther 2016]
            ocean_surface:900,      // Gt C surface ocean
            ocean_deep:   37000,    // Gt C deep ocean [Sabine 2004]
            fossil_fuels: 3700,     // Gt C remaining economically recoverable [IPCC AR6]
        };

        // NITROGEN CYCLE (Tg N/yr fluxes)
        this.nitrogen = {
            atmosphere_Tg:  3.9e9,  // Tg N₂ in atmosphere
            soil_Tg:        140000, // Tg N in soil
            biotic_fixation:140,    // Tg N/yr
            industrial_fixation: 120, // Haber-Bosch process Tg N/yr
            denitrification:260,    // Tg N/yr back to atmosphere
            leaching:        90,    // Tg N/yr to ocean
        };

        // PHOSPHORUS CYCLE (Tg P/yr)
        this.phosphorus = {
            soil_Tg:   96000,
            weathering: 22,         // Tg P/yr from rock
            uptake:     200,        // Tg P/yr by plants
            mining:     22,         // Tg P/yr extracted (civilization)
        };

        // Flux tracking
        this.annual_fluxes = {
            net_land_C_sink:  2.6,    // Gt C/yr
            net_ocean_C_sink: 2.5,    // Gt C/yr
            fossil_emissions: 10.0,   // Gt C/yr baseline
        };
    }

    update(dt, climate, atmosphere, ocean, fungalNet, civilization) {
        const globalTemp    = climate ? climate.globalTemp : 14;
        const co2_ppm       = atmosphere ? parseFloat(atmosphere.getState().co2_ppm) : 421;
        const soil_health   = fungalNet ? parseFloat(fungalNet.getState().soil_health) : 0.75;
        const civ_emissions = civilization ? civilization.annualEmissions : 10e9;  // kg C/yr

        // ── CARBON CYCLE (GCP 2023 / IPCC AR6) ──
        // GPP ~120 Gt C/yr; CO₂ fertilisation +0.3 per doubling (beta=0.3)
        const co2_fert  = 1 + Math.log(co2_ppm / 280) * 0.3;  // logarithmic CO₂ fertilisation
        const gpp       = 120 * soil_health * co2_fert;
        // Autotrophic respiration ~50-55% of GPP; +1%/°C [Heskel 2016]
        const resp      = gpp * 0.50 * (1 + (globalTemp - 14) * 0.01);
        const npp       = gpp - resp;   // ~60 Gt C/yr net at baseline

        // Fossil fuel emissions
        const ff_emissions = civ_emissions / 1e12;   // Gt C/yr
        this.carbon.fossil_fuels = Math.max(0, this.carbon.fossil_fuels - ff_emissions * dt);

        // Atmosphere receives fossil + respiration, loses photosynthesis + ocean pump
        const ocean_pump = parseFloat(ocean ? ocean.getState().carbon_seq_Gt_yr : '2.5');
        const atmo_flux  = ff_emissions + resp - gpp - ocean_pump;
        this.carbon.atmosphere   += atmo_flux * dt;
        this.carbon.land_biomass += npp * dt - this.carbon.land_biomass * 0.0001 * dt;
        this.carbon.soil         += (resp - npp * 0.1) * dt * soil_health;
        this.carbon.ocean_surface += ocean_pump * dt;

        // ── NITROGEN CYCLE ──
        const bio_fix = fungalNet ? parseFloat(fungalNet.getState().N_fixation_Tg_yr) : 140;
        this.nitrogen.soil_Tg += (bio_fix + this.nitrogen.industrial_fixation
                                - this.nitrogen.denitrification - this.nitrogen.leaching) * dt;
        this.nitrogen.soil_Tg  = Math.max(50000, this.nitrogen.soil_Tg);

        // ── PHOSPHORUS CYCLE ──
        this.phosphorus.soil_Tg += (this.phosphorus.weathering - this.phosphorus.mining) * dt;
        this.phosphorus.soil_Tg  = Math.max(10000, this.phosphorus.soil_Tg);

        // Track annual fluxes
        this.annual_fluxes.net_land_C_sink  = npp - resp * 0.3;
        this.annual_fluxes.net_ocean_C_sink = ocean_pump;
        this.annual_fluxes.fossil_emissions = ff_emissions;

        return this.getState();
    }

    getState() {
        return {
            // Carbon
            atmo_carbon_Gt:   this.carbon.atmosphere.toFixed(1),
            land_biomass_C_Gt:this.carbon.land_biomass.toFixed(1),
            soil_carbon_Gt:   this.carbon.soil.toFixed(0),
            ocean_carbon_Gt:  this.carbon.ocean_surface.toFixed(0),
            fossil_remaining_Gt: this.carbon.fossil_fuels.toFixed(0),
            land_C_sink_Gt_yr:this.annual_fluxes.net_land_C_sink.toFixed(2),
            ocean_C_sink_Gt_yr:this.annual_fluxes.net_ocean_C_sink.toFixed(3),
            ff_emissions_Gt_yr:this.annual_fluxes.fossil_emissions.toFixed(2),
            // Nitrogen
            soil_N_Tg:        this.nitrogen.soil_Tg.toFixed(0),
            bio_N_fix_Tg_yr:  this.nitrogen.biotic_fixation.toFixed(1),
            // Phosphorus
            soil_P_Tg:        this.phosphorus.soil_Tg.toFixed(0),
        };
    }
}

// ─── BIOSPHERE ENGINE (top-level integrator) ─────────────────────────────────

class BiosphereEngine {
    constructor() {
        this.fauna       = new FaunaEcosystemEngine();
        this.foodWeb     = new FoodWebIntelligence();
        this.fungalNet   = new FungalMicrobialNetwork();
        this.biogeo      = new BiogeochemicalCycles();
        this.pollinatorMatrix = new PollinatorMutualismMatrix();
        this.diseaseEngine    = new DiseaseEpidemicEngine();

        // Flora layer — IPCC AR6: 450 Gt C vegetation biomass; GPP ~120 Gt C/yr gross
        this.totalBiomass        = 450e12;    // kg C
        this.primaryProductivity = 60e12;     // kg C/yr NET (NPP after autotrophic respiration)

        this._listeners = [];
    }

    update(dt, climate, ocean, terrain, civilization) {
        const globalTemp  = climate ? climate.globalTemp : 14;
        const soil_health = this.fungalNet.soilHealth;
        const co2_fert    = climate && climate.atmosphere ?
            parseFloat(climate.atmosphere.getState().co2_ppm) / 421 : 1;

        // ── MYCORRHIZAL NUTRIENT BONUS ────────────────────────────────────
        // Connected plants grow 20-40% faster and survive drought better (Simard 2012)
        const myc_bonus = window.bloomV3Intelligence
            ? parseFloat(window.bloomV3Intelligence.mycelial.networkDensity) * 0.35 : 0.25;

        // ── POLLINATOR MUTUALISM ─────────────────────────────────────────
        const pesticide_idx = civilization ? civilization.agriculture_intensity * 0.55 : 0.3;
        const mutualismState = this.pollinatorMatrix.update(
            dt, this.fauna.agents, this.totalBiomass, pesticide_idx);
        const repro_mult = parseFloat(mutualismState.flora_repro_multiplier);

        // ── FLORA BIOMASS UPDATE ─────────────────────────────────────────
        const flora_growth = 0.00001
            * Math.max(0, 30 - Math.abs(globalTemp - 15))
            * soil_health * co2_fert
            * (1 + myc_bonus)
            * repro_mult
            * dt;
        const flora_stress  = 0.000005 * Math.max(0, globalTemp - 25) * dt;
        const civ_deforest  = civilization ? civilization.deforestation_rate * 0.00005 * dt : 0;

        // Disease reduces flora biomass proportionally
        const disease_drain = this.diseaseEngine.epidemics
            .filter(e => ['trees','roots'].includes(e.host))
            .reduce((s, e) => s + e.I * e.severity * 0.000001, 0) * dt;

        this.totalBiomass = Math.max(1e11, this.totalBiomass
            * (1 + flora_growth - flora_stress - civ_deforest - disease_drain));
        this.primaryProductivity = this.totalBiomass * 0.000003 * soil_health * (1 + myc_bonus * 0.5);

        // Run subsystem updates
        const faunaState    = this.fauna.update(dt, climate, this.totalBiomass);
        const foodWebState  = this.foodWeb.update(dt, this.totalBiomass, faunaState, ocean ? ocean.getState() : null);
        const fungalState   = this.fungalNet.update(dt, climate, terrain, civilization);
        const biogeoState   = this.biogeo.update(dt, climate, climate ? climate.atmosphere : null, ocean, this.fungalNet, civilization);
        const diseaseState  = this.diseaseEngine.update(dt, climate, civilization, this.fungalNet);

        // Expose last fauna state for intelligence layer
        if (faunaState) this.fauna.update.__lastState = faunaState;

        const state = {
            flora_biomass_Gt:   (this.totalBiomass / 1e12).toFixed(2),
            primary_prod_Gt_yr: (this.primaryProductivity / 1e12).toFixed(3),
            fauna:              faunaState,
            food_web:           foodWebState,
            fungal:             fungalState,
            biogeochemical:     biogeoState,
            mutualism:          mutualismState,
            disease:            diseaseState,
            myc_bonus_pct:      (myc_bonus * 100).toFixed(1),
        };

        this._listeners.forEach(fn => fn(state));
        return state;
    }

    onUpdate(fn) { this._listeners.push(fn); }
}

// Export to global scope
window.BloomV3Biosphere = {
    BiosphereEngine,
    FaunaEcosystemEngine,
    FoodWebIntelligence,
    FungalMicrobialNetwork,
    BiogeochemicalCycles,
    PollinatorMutualismMatrix,
    DiseaseEpidemicEngine,
};

window.bloomV3Biosphere = new BiosphereEngine();
})();
