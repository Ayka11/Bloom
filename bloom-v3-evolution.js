(function () {
/**
 * BLOOM V3 — Evolutionary Intelligence Engine
 * Evolutionary Processes · Extinction Event Engine
 * Procedural Species Generator · Planetary Knowledge Graph
 * AI Ecosystem Balancer
 */

'use strict';

// ─── CO-EVOLUTION MATRIX ─────────────────────────────────────────────────────

class CoEvolutionMatrix {
    constructor() {
        this.pairs = [
            { name: 'Wolf-Deer',       attacker:'Grey Wolf',         defender:'Forest Deer',    arms_race:0.50, lag:0.10 },
            { name: 'Lion-Prey',       attacker:'Lion',              defender:'Bison',          arms_race:0.48, lag:0.20 },
            { name: 'Parasite-Host',   attacker:'Pathogen',          defender:'Mammal Immune',  arms_race:0.55, lag:0.05 },
            { name: 'Plant-Herbivore', attacker:'Caterpillar Guild', defender:'Temperate Tree', arms_race:0.42, lag:0.30 },
            { name: 'Pollinator-Flower',attacker:'Honeybee Colony',  defender:'Rosaceae Family',arms_race:0.60, lag:0.15 },
            { name: 'Mycorrhiza-Root', attacker:'Mycorrhizal Fungi', defender:'Oak',            arms_race:0.55, lag:0.05 },
        ];
        this.divergence_events = 0;
    }

    update(dt, climate) {
        const temp = climate ? climate.globalTemp : 14;
        const temp_accel = 1 + Math.max(0, temp - 14) * 0.03;

        this.pairs.forEach(pair => {
            // Red Queen: attacker has slight advantage, defender must keep up
            const rq = (Math.random() - 0.45) * 0.02 * dt;
            pair.arms_race = Math.max(0.1, Math.min(0.9, pair.arms_race + rq));
            pair.lag        = Math.max(0.01, pair.lag * (1 - 0.01 * temp_accel * dt));
            if (pair.arms_race > 0.75 && Math.random() < 0.002 * dt) this.divergence_events++;
        });

        return {
            active_pairs:      this.pairs.length,
            divergence_events: this.divergence_events,
            arms_races:        this.pairs.map(p => ({
                name: p.name,
                intensity: (p.arms_race * 100).toFixed(0) + '%',
                lag_yrs:   p.lag.toFixed(2),
            })),
        };
    }
}

// ─── CONVERGENT EVOLUTION ENGINE ─────────────────────────────────────────────

class ConvergentEvolutionEngine {
    constructor() {
        this.solutions = [
            { trait:'echolocation',    times_evolved:2, driver:'dark_niche'   },
            { trait:'photosynthesis',  times_evolved:1, driver:'light_energy' },
            { trait:'toxin_resistance',times_evolved:3, driver:'predator_prey'},
            { trait:'desert_adaptation',times_evolved:8,driver:'arid_stress'  },
            { trait:'deep_root',       times_evolved:6, driver:'drought'      },
            { trait:'wing',            times_evolved:4, driver:'aerial_niche' },
        ];
        this.new_convergences = 0;
    }

    update(dt, climate, totalSpecies) {
        const temp = climate ? climate.globalTemp : 14;
        const rate = (totalSpecies / 8.7e6) * Math.max(1, temp - 12) * 0.00005 * dt;
        if (Math.random() < rate) {
            this.new_convergences++;
            this.solutions[Math.floor(Math.random() * this.solutions.length)].times_evolved++;
        }
        return {
            total_traits:    this.solutions.length,
            new_sim:         this.new_convergences,
            top:             this.solutions.sort((a,b)=>b.times_evolved-a.times_evolved).slice(0,3)
                                 .map(c=>({ trait:c.trait, n:c.times_evolved, driver:c.driver })),
        };
    }
}

// ─── GENOME & MUTATION SYSTEM ────────────────────────────────────────────────

class EvolutionaryGenome {
    constructor(traits = {}) {
        // Quantitative traits (0-1 normalized)
        this.traits = Object.assign({
            heat_tolerance:    0.5,
            drought_tolerance: 0.5,
            cold_tolerance:    0.5,
            disease_resistance:0.5,
            growth_rate:       0.5,
            reproduction_rate: 0.5,
            body_size:         0.5,     // relative
            toxin_production:  0.0,
            camouflage:        0.5,
            social_behavior:   0.5,
            migration_tendency:0.5,
            diet_breadth:      0.5,     // 0=specialist, 1=generalist
            longevity:         0.5,
        }, traits);

        this.mutation_rate = 0.001;
        this.generation    = 0;
        this.lineage_id    = this._uuid();
    }

    _uuid() {
        return Math.random().toString(36).substr(2, 9);
    }

    mutate(env_pressure = {}) {
        const offspring = new EvolutionaryGenome({ ...this.traits });
        offspring.generation = this.generation + 1;
        offspring.lineage_id = this.lineage_id;

        Object.keys(offspring.traits).forEach(trait => {
            if (Math.random() < this.mutation_rate) {
                // Directional selection if env_pressure specifies a direction
                const pressure = env_pressure[trait] || 0;   // +1 = select high, -1 = select low
                const delta    = (Math.random() - 0.5) * 0.1 + pressure * 0.02;
                offspring.traits[trait] = Math.max(0, Math.min(1, offspring.traits[trait] + delta));
            }
        });

        return offspring;
    }

    crossover(other) {
        const child_traits = {};
        Object.keys(this.traits).forEach(trait => {
            child_traits[trait] = Math.random() < 0.5 ? this.traits[trait] : other.traits[trait];
        });
        const child = new EvolutionaryGenome(child_traits);
        child.generation = Math.max(this.generation, other.generation) + 1;
        return child;
    }

    fitness(environment) {
        const {
            temperature = 15, drought = 0, disease_pressure = 0.1, predation = 0.1,
        } = environment;

        // Temperature fitness (bell curve centered at optimal)
        const optimal_temp = 5 + this.traits.heat_tolerance * 30;
        const temp_fit     = Math.exp(-Math.pow(temperature - optimal_temp, 2) / 200);

        const drought_fit  = 0.3 + this.traits.drought_tolerance * 0.7 * (1 - drought);
        const disease_fit  = 1 - disease_pressure * (1 - this.traits.disease_resistance);
        const predation_fit= 1 - predation * (1 - this.traits.camouflage * 0.5
                                                - this.traits.toxin_production * 0.3);

        // ── EPISTASIS: gene-gene interactions ────────────────────────────
        // Large body + slow reproduction = trade-off (negative epistasis)
        const size_repro_epistasis = 1 - this.traits.body_size * (1 - this.traits.reproduction_rate) * 0.3;
        // Heat tolerance + drought tolerance = synergy in arid climates (positive epistasis)
        const arid_synergy = 1 + this.traits.heat_tolerance * this.traits.drought_tolerance * 0.2;

        return Math.max(0, temp_fit * drought_fit * disease_fit * predation_fit
            * size_repro_epistasis * arid_synergy);
    }

    toSpeciesTrait() {
        return {
            heat_tolerance:    this.traits.heat_tolerance.toFixed(3),
            cold_tolerance:    this.traits.cold_tolerance.toFixed(3),
            drought_tolerance: this.traits.drought_tolerance.toFixed(3),
            disease_resistance:this.traits.disease_resistance.toFixed(3),
            body_size_rel:     this.traits.body_size.toFixed(3),
            generation:        this.generation,
        };
    }
}

// ─── PROCEDURAL SPECIES GENERATOR ───────────────────────────────────────────

class ProceduralSpeciesGenerator {
    constructor() {
        this.generatedSpecies = [];
        this.nextId = 100000;

        // Name fragment banks
        this._prefixes = ['Auro','Bathi','Chrono','Dendro','Echo','Ferro','Glacio',
                          'Hyper','Iono','Juno','Krypto','Litho','Magna','Nitro',
                          'Oxo','Pyrro','Quartz','Rhizo','Strato','Thermo','Umbra',
                          'Velo','Xero','Zygo'];
        this._suffixes = ['morphus','phyllus','caudus','dermis','flora','fauna',
                          'sporus','vorax','cultrix','nexus','forma','genesis',
                          'plasma','bacter','thrix','zoic','ptera','rhiza'];
        this._kingdoms= ['Plantae','Animalia','Fungi','Bacteria','Archaea','Protista'];
        this._genera  = ['Novus','Primis','Evolva','Adapta','Mutans','Selecta','Deriva'];
    }

    _randomName() {
        const p = this._prefixes[Math.floor(Math.random() * this._prefixes.length)];
        const s = this._suffixes[Math.floor(Math.random() * this._suffixes.length)];
        return `${p}${s.toLowerCase()}`;
    }

    generate(environment, genome) {
        const name    = this._randomName();
        const kingdom = this._kingdoms[Math.floor(Math.random() * this._kingdoms.length)];
        const genus   = this._genera[Math.floor(Math.random() * this._genera.length)];

        const traits  = genome ? genome.traits : {};
        const heat_t  = traits.heat_tolerance  || Math.random();
        const cold_t  = traits.cold_tolerance  || Math.random();

        const species = {
            id:           this.nextId++,
            name,
            latin_name:   `${genus} ${name.toLowerCase()}`,
            kingdom,
            genus,
            era:          environment ? environment.time_years || '0' : '0',
            biome_origin: environment ? environment.biome || 'temperate_forest' : 'temperate_forest',

            // Derived from genome
            optimal_temp_min: -30 + cold_t * 40,
            optimal_temp_max: 10  + heat_t * 40,
            drought_tolerance: traits.drought_tolerance || Math.random(),
            disease_resistance:traits.disease_resistance || Math.random(),
            growth_rate:       traits.growth_rate || 0.3 + Math.random() * 0.7,
            lifespan_years:    0.5 + traits.longevity * 100 || Math.random() * 50,
            body_size_kg:      Math.pow(10, (traits.body_size || 0.5) * 6 - 3),   // 0.001g to 1000kg

            // Color (procedurally derived from traits)
            color: this._traitToColor(traits),

            genome_snapshot: genome ? genome.toSpeciesTrait() : {},
            fitness_score:   genome && environment ? genome.fitness(environment) : Math.random(),
            status:          'extant',
        };

        this.generatedSpecies.push(species);
        return species;
    }

    _traitToColor(traits) {
        const r = Math.round(50  + (traits.heat_tolerance  || 0.5) * 150);
        const g = Math.round(80  + (traits.growth_rate     || 0.5) * 120);
        const b = Math.round(50  + (traits.cold_tolerance  || 0.5) * 150);
        return `rgb(${r},${g},${b})`;
    }

    generateBatch(count, environment, ancestorGenome) {
        const batch = [];
        for (let i = 0; i < count; i++) {
            const mutatedGenome = ancestorGenome
                ? ancestorGenome.mutate({ heat_tolerance: (environment.temperature || 15) > 25 ? 0.5 : -0.2 })
                : new EvolutionaryGenome();
            batch.push(this.generate(environment, mutatedGenome));
        }
        return batch;
    }

    getStats() {
        const kingdoms = {};
        this.generatedSpecies.forEach(s => {
            kingdoms[s.kingdom] = (kingdoms[s.kingdom] || 0) + 1;
        });
        return {
            total_generated:  this.generatedSpecies.length,
            by_kingdom:       kingdoms,
            extant:           this.generatedSpecies.filter(s=>s.status==='extant').length,
            extinct:          this.generatedSpecies.filter(s=>s.status==='extinct').length,
        };
    }
}

// ─── EXTINCTION EVENT ENGINE ─────────────────────────────────────────────────

class ExtinctionEventEngine {
    constructor() {
        this.activeEvents = [];
        this.historicalEvents = [];
        this.mass_extinction_threshold = 0.75;   // 75% species loss = mass extinction
        this.current_extinction_rate   = 0;       // species/yr (background = 1-5)

        // Background rate: 0.1-1 E/MSY [Ceballos 2017, De Vos 2015; use 0.5 as mid-estimate]
        this.background_rate = 0.5;   // species/Myr/species (0.1-1 E/MSY range)
        this.total_species_lost = 0;
    }

    _eventCatalog = [
        {
            type: 'asteroid_impact',
            probability: 1e-8,        // per year
            severity: 0.95,
            duration_years: 100000,
            so2_Tg: 0,
            dust_veil: 0.9,
            description: 'K-Pg scale impactor — mass extinction event',
        },
        {
            type: 'supervolcano',
            probability: 1e-5,
            severity: 0.4,
            duration_years: 10000,
            so2_Tg: 1000,
            dust_veil: 0.3,
            description: 'LIP eruption — ocean anoxia, acid rain, cooling',
        },
        {
            type: 'rapid_climate_shift',
            probability: 0.001,
            severity: 0.2,
            duration_years: 1000,
            so2_Tg: 0,
            dust_veil: 0,
            description: 'PETM-style thermal maximum',
        },
        {
            type: 'ocean_anoxia',
            probability: 0.0002,
            severity: 0.3,
            duration_years: 500000,
            so2_Tg: 0,
            dust_veil: 0,
            description: 'Deep ocean oxygen depletion — marine mass extinction',
        },
        {
            type: 'pandemic',
            probability: 0.005,
            severity: 0.05,
            duration_years: 5,
            so2_Tg: 0,
            dust_veil: 0,
            description: 'Novel pathogen sweeps through naive populations',
        },
        {
            type: 'invasive_species_cascade',
            probability: 0.01,
            severity: 0.1,
            duration_years: 50,
            so2_Tg: 0,
            dust_veil: 0,
            description: 'Introduced predator or competitor disrupts endemic fauna',
        },
    ];

    update(dt_years, climate, civilization, totalSpecies) {
        const globalTemp   = climate ? climate.globalTemp : 14;
        const civ_pressure = civilization ? civilization.biodiversity_pressure : 0;

        // Check for spontaneous extinction events
        this._eventCatalog.forEach(template => {
            const adjusted_prob = template.probability
                * (1 + Math.max(0, globalTemp - 14) * 0.1)
                * (1 + civ_pressure * 5)
                * dt_years;

            if (Math.random() < adjusted_prob) {
                const event = {
                    ...template,
                    start_year:     climate ? parseFloat(climate.getState().time_years) : 0,
                    remaining_years: template.duration_years,
                    id:             Math.random().toString(36).substr(2, 6),
                };
                this.activeEvents.push(event);
            }
        });

        // Background extinction: 0.5/Myr/species = 0.5e-6 /species/yr
        let rate_per_species = this.background_rate * 1e-6;

        // Active extinction events add to rate
        this.activeEvents.forEach(evt => {
            rate_per_species += evt.severity * 1e-4;   // severe events can kill 0.01%/yr
            evt.remaining_years -= dt_years;
        });

        // Human acceleration: current rate ~100-1000x background [IPBES 2019]
        // At max civ pressure (1.0), rate = 500x background
        rate_per_species += civ_pressure * this.background_rate * 1e-6 * 499;

        this.current_extinction_rate = rate_per_species * (totalSpecies || 8700000);
        this.total_species_lost      += this.current_extinction_rate * dt_years;

        // Retire ended events
        this.activeEvents.forEach(e => {
            if (e.remaining_years <= 0) {
                e.status = 'ended';
                this.historicalEvents.push(e);
            }
        });
        this.activeEvents = this.activeEvents.filter(e => e.remaining_years > 0);

        return this.getState(totalSpecies);
    }

    triggerEvent(type) {
        const template = this._eventCatalog.find(e => e.type === type);
        if (template) {
            this.activeEvents.push({ ...template, remaining_years: template.duration_years, id: Math.random().toString(36).substr(2,6) });
        }
    }

    getState(totalSpecies = 8700000) {
        const extinct_fraction = this.total_species_lost / totalSpecies;
        return {
            active_events:        this.activeEvents.length,
            extinction_rate_yr:   this.current_extinction_rate.toFixed(1),
            total_lost:           Math.round(this.total_species_lost),
            extinct_fraction_pct: (extinct_fraction * 100).toFixed(4),
            is_mass_extinction:   extinct_fraction > this.mass_extinction_threshold,
            recent_events:        this.activeEvents.map(e => ({ type: e.type, severity: e.severity, yrs_remaining: e.remaining_years.toFixed(0) })),
        };
    }
}

// ─── EVOLUTIONARY INTELLIGENCE ENGINE ───────────────────────────────────────

class EvolutionaryIntelligenceEngine {
    constructor() {
        this.speciesGenerator   = new ProceduralSpeciesGenerator();
        this.extinctionEngine   = new ExtinctionEventEngine();

        this.lineages           = [];
        this.totalLivingSpecies = 8700000;   // ~8.7M species [Mora 2011]
        // Speciation rate: ~0.1-0.9 species/Myr/species [Rabosky 2014]
        this.speciation_rate    = 0.5;       // species/Myr/species (conservative estimate)

        // Evolutionary processes active
        this.processes = {
            natural_selection:  true,
            sexual_selection:   true,
            genetic_drift:      true,
            co_evolution:       true,
            adaptive_radiation: false,   // triggered by mass extinction recovery
        };

        this.t = 0;

        // Seed initial lineages
        this._seedLineages(20);
    }

    _seedLineages(n) {
        for (let i = 0; i < n; i++) {
            this.lineages.push({
                id:           Math.random().toString(36).substr(2, 8),
                genome:       new EvolutionaryGenome(),
                population:   Math.floor(100 + Math.random() * 10000),
                // Speciation countdown: 50k-500k years (realistic allopatric speciation)
                speciation_countdown: 50000 + Math.random() * 450000,
                extinctions:  0,
                speciations:  0,
                age_years:    Math.random() * 1e6,
            });
        }
    }

    update(dt_years, climate, biosphere, civilization) {
        this.t += dt_years;

        const globalTemp   = climate ? climate.globalTemp : 14;
        const civ_pressure = civilization ? civilization.biodiversity_pressure : 0;
        const disease_p    = biosphere ? parseFloat(biosphere.fungalNet.getState().disease_pressure) : 0.1;

        const env = {
            temperature:       globalTemp,
            drought:           Math.random() * 0.3,
            disease_pressure:  disease_p,
            predation:         0.1 + civ_pressure * 0.2,
            biome:             'temperate_forest',
            time_years:        this.t,
        };

        // Update lineages
        const extinct_lineages = [];
        this.lineages.forEach(lineage => {
            lineage.age_years += dt_years;

            // Calculate fitness in current environment
            const fit = lineage.genome.fitness(env);

            // Adapt genome via selection
            if (this.processes.natural_selection) {
                lineage.genome = lineage.genome.mutate({
                    heat_tolerance:  globalTemp > 20 ? 0.3 : -0.1,
                    disease_resistance: disease_p > 0.3 ? 0.5 : 0,
                });
            }

            // Population dynamics under selection
            const growth_r = fit * 0.1 - civ_pressure * 0.05;
            lineage.population = Math.max(0, lineage.population * (1 + growth_r * dt_years));

            // Extinction: population collapse
            if (lineage.population < 10) {
                extinct_lineages.push(lineage);
                this.totalLivingSpecies = Math.max(1, this.totalLivingSpecies - 1);
            }

            // Speciation: countdown in years (50k-500k yr typical)
            lineage.speciation_countdown -= dt_years * (fit * 0.5 + 0.1);
            if (lineage.speciation_countdown <= 0) {
                lineage.speciation_countdown = 50000 + Math.random() * 450000;
                lineage.speciations++;
                // Generate daughter species
                const daughter = {
                    id:       Math.random().toString(36).substr(2, 8),
                    genome:   lineage.genome.mutate({ heat_tolerance: 0.1 }),
                    population: Math.floor(lineage.population * 0.3),
                    speciation_countdown: 100 + Math.random() * 500,
                    extinctions: 0,
                    speciations: 0,
                    age_years: 0,
                };
                if (this.lineages.length < 200) this.lineages.push(daughter);
                this.totalLivingSpecies++;
                this.speciesGenerator.generate(env, daughter.genome);
            }
        });

        // Remove extinct lineages
        extinct_lineages.forEach(e => {
            const idx = this.lineages.indexOf(e);
            if (idx > -1) this.lineages.splice(idx, 1);
        });

        // Stochastic new lineage emergence (abiogenesis at low rates)
        if (Math.random() < 0.001 * dt_years) {
            this._seedLineages(1);
        }

        // Adaptive radiation after mass extinction
        const extState = this.extinctionEngine.getState(this.totalLivingSpecies);
        if (extState.is_mass_extinction && Math.random() < 0.001 * dt_years) {
            this.processes.adaptive_radiation = true;
            this._seedLineages(10);   // rapid diversification
        }

        // Run extinction engine
        const extState2 = this.extinctionEngine.update(dt_years, climate, civilization, this.totalLivingSpecies);

        return this.getState(extState2);
    }

    getState(extinctionState) {
        const avgFitness = this.lineages.reduce((s, l) => {
            return s + l.genome.fitness({ temperature: 14, drought: 0.1, disease_pressure: 0.1, predation: 0.1 });
        }, 0) / Math.max(1, this.lineages.length);

        return {
            total_species:     this.totalLivingSpecies.toLocaleString(),
            tracked_lineages:  this.lineages.length,
            avg_fitness:       avgFitness.toFixed(4),
            generated_species: this.speciesGenerator.getStats().total_generated,
            adaptive_radiation:this.processes.adaptive_radiation,
            simulation_years:  this.t.toExponential(3),
            extinction:        extinctionState,
        };
    }
}

// ─── PLANETARY KNOWLEDGE GRAPH ───────────────────────────────────────────────

class PlanetaryKnowledgeGraph {
    constructor() {
        this.nodes = new Map();   // id → { type, label, data }
        this.edges = [];          // { from, to, relation, weight }
        this.node_count = 0;
        this.edge_count = 0;
    }

    addNode(id, type, label, data = {}) {
        this.nodes.set(id, { type, label, data });
        this.node_count++;
        return id;
    }

    addEdge(from, to, relation, weight = 1.0) {
        this.edges.push({ from, to, relation, weight });
        this.edge_count++;
    }

    update(planetState, biosphereState, evolutionState, civilizationState) {
        // Rebuild graph snapshot from current system states (lightweight: just counters + key connections)
        // In production would be a full graph DB; here we track aggregate statistics

        // Key planetary relationships
        const links = [
            { from: 'atmosphere', to: 'climate',      rel: 'drives',          w: parseFloat(planetState?.climate?.atmosphere?.greenhouse_ef || 1) },
            { from: 'climate',    to: 'biosphere',    rel: 'shapes',          w: 1.0 },
            { from: 'ocean',      to: 'atmosphere',   rel: 'exchanges_CO2',   w: parseFloat(planetState?.ocean?.carbon_seq_Gt_yr || 2.5) },
            { from: 'biosphere',  to: 'atmosphere',   rel: 'sequesters_C',    w: parseFloat(biosphereState?.biogeochemical?.land_C_sink_Gt_yr || 2.6) },
            { from: 'fauna',      to: 'flora',        rel: 'pollinates',      w: 0.8 },
            { from: 'fungi',      to: 'flora',        rel: 'mycorrhizal_symbiosis', w: parseFloat(biosphereState?.fungal?.soil_health || 0.75) },
            { from: 'civilization','to': 'biosphere', rel: 'degrades',        w: civilizationState ? civilizationState.biodiversity_pressure : 0 },
            { from: 'evolution',  to: 'species',      rel: 'generates',       w: evolutionState ? evolutionState.total_species / 1e7 : 0.87 },
            { from: 'geology',    to: 'hydrology',    rel: 'shapes',          w: 1.0 },
        ];

        this.edges = links;
        this.edge_count = links.length;

        return {
            node_types:  ['atmosphere','climate','ocean','biosphere','fauna','flora',
                          'fungi','microbes','evolution','civilization','geology','hydrology'],
            edge_count:  this.edge_count,
            total_nodes: 12,
            key_links:   links.filter(l => l.w > 0.5).length,
        };
    }

    query(nodeType) {
        return [...this.nodes.values()].filter(n => n.type === nodeType);
    }
}

// ─── AI PLANETARY INTELLIGENCE ───────────────────────────────────────────────

class AIPlanetaryIntelligence {
    constructor() {
        this.agents = {
            ecosystem_balancer:   { active: true,  interventions: 0, last_action: 'monitoring' },
            climate_predictor:    { active: true,  predictions: [],  accuracy: 0.82 },
            evolutionary_generator:{ active: true, species_created: 0 },
        };

        this.alerts      = [];
        this.predictions = [];
    }

    update(planetState, biosphereState, evolutionState, civilizationState) {
        this.alerts = [];
        this.predictions = [];

        // ── ECOSYSTEM BALANCER ──
        const foodWebRisks = biosphereState?.food_web?.cascade_risks || 0;
        if (foodWebRisks > 2) {
            this.alerts.push({ level: 'warning', system: 'food_web', msg: `${foodWebRisks} trophic cascade risks detected` });
            this.agents.ecosystem_balancer.last_action = 'stabilizing trophic links';
            this.agents.ecosystem_balancer.interventions++;
        }

        const coralCov = parseFloat(planetState?.ocean?.coral_coverage_pct || 60);
        if (coralCov < 20) {
            this.alerts.push({ level: 'critical', system: 'ocean', msg: `Coral coverage at ${coralCov.toFixed(1)}% — bleaching crisis` });
        }

        const soilHealth = parseFloat(biosphereState?.fungal?.soil_health || 0.75);
        if (soilHealth < 0.3) {
            this.alerts.push({ level: 'warning', system: 'soil', msg: `Soil health at ${(soilHealth*100).toFixed(0)}% — agricultural risk` });
        }

        // ── CLIMATE PREDICTOR ──
        const temp    = parseFloat(planetState?.climate?.global_temp ?? 14.9);
        const co2_ppm = parseFloat(planetState?.climate?.atmosphere?.co2_ppm ?? 421);
        // ECS-based: 3°C per CO₂ doubling = 3/(5.35*ln2) ≈ 0.81°C/W/m²
        // RF from CO₂: 5.35 × ln(C/280); compared to 421 ppm today
        const rf_today   = 5.35 * Math.log(co2_ppm / 280);
        // Assume BAU trajectory reaches 600 ppm by 2100 → ~3.7°C above PI
        const rf_bau2100 = 5.35 * Math.log(600 / 280);
        const delta_rf   = rf_bau2100 - rf_today;
        const temp_2100_est = temp + delta_rf * 0.81 * (1 - this.agents.climate_predictor.accuracy * 0.2);
        this.predictions.push({ target: 'global_temp_2100_BAU', value: temp_2100_est.toFixed(2), unit: '°C', confidence: 0.68 });

        const ice_frac = parseFloat(planetState?.climate?.ice_fraction || 3.5);
        if (ice_frac < 1.0) {
            this.alerts.push({ level: 'critical', system: 'cryosphere', msg: 'Ice cap collapse threshold approaching' });
        }

        // ── EVOLUTIONARY GENERATOR ──
        if (evolutionState?.extinction?.active_events > 0) {
            this.agents.evolutionary_generator.species_created += 0.1;
            this.alerts.push({ level: 'info', system: 'evolution', msg: `Extinction event active — monitoring adaptive radiation` });
        }

        return {
            alerts:          this.alerts,
            predictions:     this.predictions,
            active_agents:   Object.values(this.agents).filter(a=>a.active).length,
            total_interventions: this.agents.ecosystem_balancer.interventions,
            ecosystem_balancer_action: this.agents.ecosystem_balancer.last_action,
        };
    }
}

// ─── EVOLUTION ENGINE (top-level integrator) ─────────────────────────────────

class EvolutionEngine {
    constructor() {
        this.evolutionary  = new EvolutionaryIntelligenceEngine();
        this.knowledgeGraph= new PlanetaryKnowledgeGraph();
        this.ai            = new AIPlanetaryIntelligence();
        this.coEvolution   = new CoEvolutionMatrix();
        this.convergent    = new ConvergentEvolutionEngine();

        this._listeners = [];
    }

    update(dt, planet, biosphere, civilization) {
        const evolutionState    = this.evolutionary.update(dt, planet.climate, biosphere, civilization);
        const knowledgeState    = this.knowledgeGraph.update(planet.getSnapshot(), null, evolutionState, civilization);
        const aiState           = this.ai.update(planet.getSnapshot(), biosphere ? biosphere.update.__lastState : null, evolutionState, civilization);
        const coEvoState        = this.coEvolution.update(dt, planet.climate);
        const convergentState   = this.convergent.update(dt, planet.climate, this.evolutionary.totalLivingSpecies);

        const state = {
            evolution:       evolutionState,
            knowledge_graph: knowledgeState,
            ai:              aiState,
            co_evolution:    coEvoState,
            convergent:      convergentState,
        };
        this._listeners.forEach(fn => fn(state));
        return state;
    }

    onUpdate(fn) { this._listeners.push(fn); }

    triggerExtinctionEvent(type) {
        this.evolutionary.extinctionEngine.triggerEvent(type);
    }
}

// Export to global scope
window.BloomV3Evolution = {
    EvolutionEngine,
    EvolutionaryIntelligenceEngine,
    ExtinctionEventEngine,
    ProceduralSpeciesGenerator,
    EvolutionaryGenome,
    PlanetaryKnowledgeGraph,
    AIPlanetaryIntelligence,
    CoEvolutionMatrix,
    ConvergentEvolutionEngine,
};

window.bloomV3Evolution = new EvolutionEngine();
})();
