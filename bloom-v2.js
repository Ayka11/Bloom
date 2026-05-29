/**
 * Bloom V2 — Global Biodiversity Intelligence Platform
 * Modules: Evolution, Genome, Morphogenesis, Knowledge Graph,
 *          Pollination Network, Climate V2, Population Dynamics,
 *          Procedural Species, Planetary Biosphere Simulation
 */

// ─────────────────────────────────────────────
// GENOME & EVOLUTION ENGINE
// ─────────────────────────────────────────────
class Genome {
  constructor(seed = {}) {
    this.morphology   = seed.morphology   || Array.from({length:8}, () => Math.random());
    this.pigmentation = seed.pigmentation || Array.from({length:6}, () => Math.random());
    this.adaptation   = seed.adaptation   || Array.from({length:6}, () => Math.random());
    this.metabolism   = seed.metabolism   || Array.from({length:4}, () => Math.random());
    this.reproduction = seed.reproduction || Array.from({length:4}, () => Math.random());
  }

  get all() {
    return [...this.morphology, ...this.pigmentation, ...this.adaptation, ...this.metabolism, ...this.reproduction];
  }

  static mutate(genome, sigma = 0.05) {
    const gaussNoise = () => {
      let u = 0, v = 0;
      while (!u) u = Math.random();
      while (!v) v = Math.random();
      return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    };
    const mutateArr = arr => arr.map(g => Math.min(1, Math.max(0, g + gaussNoise() * sigma)));
    return new Genome({
      morphology:   mutateArr(genome.morphology),
      pigmentation: mutateArr(genome.pigmentation),
      adaptation:   mutateArr(genome.adaptation),
      metabolism:   mutateArr(genome.metabolism),
      reproduction: mutateArr(genome.reproduction)
    });
  }

  static crossover(a, b) {
    const cross = (ga, gb) => ga.map((g, i) => Math.random() < 0.5 ? g : gb[i]);
    return new Genome({
      morphology:   cross(a.morphology,   b.morphology),
      pigmentation: cross(a.pigmentation, b.pigmentation),
      adaptation:   cross(a.adaptation,   b.adaptation),
      metabolism:   cross(a.metabolism,   b.metabolism),
      reproduction: cross(a.reproduction, b.reproduction)
    });
  }

  static divergence(a, b) {
    const all_a = a.all, all_b = b.all;
    return Math.sqrt(all_a.reduce((s, g, i) => s + (g - all_b[i]) ** 2, 0));
  }
}

// ─────────────────────────────────────────────
// PROCEDURAL SPECIES — Genome → phenotype
// ─────────────────────────────────────────────
class ProceduralSpecies {
  constructor(genome, parentName = null, generation = 0) {
    this.genome     = genome;
    this.generation = generation;
    this.id         = `sp_${Date.now()}_${Math.random().toString(36).slice(2,6)}`;
    this.born       = Date.now();

    // Derive phenotype from genome
    const [p0,p1,p2,p3,p4,p5] = genome.pigmentation;
    const [m0,m1,m2,m3,m4,m5,m6,m7] = genome.morphology;
    const [a0,a1,a2,a3,a4,a5] = genome.adaptation;
    const [r0,r1,r2,r3] = genome.reproduction;

    this.petalCount     = Math.max(3, Math.round(3 + m0 * 13));
    this.petalSize      = 0.4 + m1 * 0.8;
    this.petalCurvature = m2;
    this.stemHeight     = 0.3 + m3 * 0.7;
    this.branchingRate  = m4;
    this.leafDensity    = m5;
    this.flowerDiameter = 0.3 + m6 * 0.7;
    this.phyllotaxisAngle = 100 + m7 * 80; // golden-ish

    this.hue        = Math.round(p0 * 360);
    this.saturation = Math.round(40 + p1 * 60);
    this.lightness  = Math.round(30 + p2 * 45);
    this.petalGrad  = p3 > 0.5 ? 'radial' : 'linear';
    this.spotting   = p4 > 0.7;
    this.veining    = p5 > 0.6;

    this.droughtTolerance = a0;
    this.shadeTolerance   = a1;
    this.frostResistance  = a2;
    this.soilAdaptability = a3;
    this.pollinatorAffinity = a4;
    this.dispersalRange   = a5;

    this.reproductionRate = 0.01 + r0 * 0.09;
    this.seedViability    = r1;
    this.clonalGrowth     = r2 > 0.6;
    this.selfFertility    = r3;

    this.commonName = this._generateName(parentName, generation);
    this.taxonomy   = this._inferTaxonomy();
    this.conservationStatus = this._inferConservation();
    this.biome      = this._inferBiome();
    this.population = 50 + Math.round(this.reproductionRate * 500);
    this.fitness    = this._calcFitness();
    this.lineage    = parentName ? [parentName] : [];
  }

  _generateName(parent, gen) {
    const prefixes = ['Auro','Cyan','Velv','Solv','Nyx','Iris','Lum','Aether','Zeph','Cryo','Pyro','Terra'];
    const suffixes = ['anthus','flora','petal','bloom','vine','bella','ensis','aria','ina','ella'];
    const p = prefixes[Math.floor(this.hue / 30) % prefixes.length];
    const s = suffixes[Math.floor(this.petalCount) % suffixes.length];
    return gen > 0 ? `${p}${s} var. ${gen}` : `${p}${s}`;
  }

  _inferTaxonomy() {
    const families = ['Rosaceae','Asteraceae','Orchidaceae','Fabaceae','Lamiaceae','Ranunculaceae','Liliaceae'];
    return families[Math.floor(this.hue / 52) % families.length];
  }

  _inferConservation() {
    const score = this.fitness;
    if (score > 0.8) return 'LC';
    if (score > 0.6) return 'NT';
    if (score > 0.4) return 'VU';
    if (score > 0.2) return 'EN';
    return 'CR';
  }

  _inferBiome() {
    const [a0,a1,a2] = this.genome.adaptation;
    if (a2 > 0.7) return 'Alpine';
    if (a0 > 0.7) return 'Desert';
    if (a1 > 0.7) return 'Forest';
    if (a0 < 0.3 && a1 < 0.3) return 'Wetland';
    return 'Temperate';
  }

  _calcFitness() {
    return (this.droughtTolerance + this.shadeTolerance + this.frostResistance + this.seedViability) / 4;
  }

  // Generate SVG from genome
  toSVG(size = 120) {
    const s = size;
    const cx = s / 2, cy = s / 2;
    const r = (s * 0.28) * this.flowerDiameter;
    const hsl = `hsl(${this.hue},${this.saturation}%,${this.lightness}%)`;
    const hslDark = `hsl(${this.hue},${Math.max(30,this.saturation-10)}%,${Math.max(20,this.lightness-15)}%)`;
    const hslLight = `hsl(${this.hue},${Math.min(100,this.saturation+10)}%,${Math.min(90,this.lightness+20)}%)`;
    const n = this.petalCount;
    const stemH = this.stemHeight * s * 0.35;
    const stemY = cy + r + 4;

    // Stem
    let svg = `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">`;
    svg += `<line x1="${cx}" y1="${stemY}" x2="${cx + (Math.random()-0.5)*8}" y2="${s-4}" stroke="#4a8040" stroke-width="${2+this.stemHeight}" stroke-linecap="round"/>`;

    // Leaves
    if (this.leafDensity > 0.4) {
      const lx = cx - 12, ly = stemY + stemH * 0.4;
      svg += `<path d="M${cx} ${ly} Q${lx-10} ${ly-8} ${lx-18} ${ly+4} Q${lx-8} ${ly+10} ${cx} ${ly}Z" fill="#3a8030" opacity=".8"/>`;
      svg += `<path d="M${cx} ${ly+10} Q${cx+18} ${ly+2} ${cx+22} ${ly+14} Q${cx+10} ${ly+18} ${cx} ${ly+10}Z" fill="#4a9040" opacity=".7"/>`;
    }

    // Petals
    for (let i = 0; i < n; i++) {
      const angle = (i / n) * 2 * Math.PI;
      const px = cx + Math.cos(angle) * r;
      const py = cy + Math.sin(angle) * r;
      const pr = r * (0.45 + this.petalSize * 0.35);
      const curve = this.petalCurvature * 8;
      const cp1x = cx + Math.cos(angle - 0.4) * (r * 0.6);
      const cp1y = cy + Math.sin(angle - 0.4) * (r * 0.6);
      const cp2x = cx + Math.cos(angle + 0.4) * (r * 0.6);
      const cp2y = cy + Math.sin(angle + 0.4) * (r * 0.6);
      const tx = px + Math.cos(angle) * pr;
      const ty = py + Math.sin(angle) * pr;
      svg += `<path d="M${cx} ${cy} Q${cp1x} ${cp1y} ${tx} ${ty} Q${cp2x} ${cp2y} ${cx} ${cy}Z" fill="${hsl}" opacity="0.88"/>`;
      if (this.veining) {
        svg += `<line x1="${cx}" y1="${cy}" x2="${tx}" y2="${ty}" stroke="${hslDark}" stroke-width="0.5" opacity="0.3"/>`;
      }
    }

    // Spots
    if (this.spotting) {
      for (let i = 0; i < 5; i++) {
        const sa = Math.random() * 2 * Math.PI;
        const sr = r * (0.2 + Math.random() * 0.5);
        svg += `<circle cx="${cx + Math.cos(sa)*sr}" cy="${cy + Math.sin(sa)*sr}" r="${1.5 + Math.random()*2.5}" fill="${hslDark}" opacity="0.4"/>`;
      }
    }

    // Centre
    svg += `<circle cx="${cx}" cy="${cy}" r="${r * 0.22}" fill="${hslDark}"/>`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${r * 0.12}" fill="${hslLight}"/>`;

    // Stamens
    const stamens = Math.min(12, this.petalCount);
    for (let i = 0; i < stamens; i++) {
      const sa = (i / stamens) * 2 * Math.PI;
      const sr = r * 0.18;
      const ex = cx + Math.cos(sa) * sr;
      const ey = cy + Math.sin(sa) * sr;
      svg += `<circle cx="${ex}" cy="${ey}" r="1.5" fill="#e8c040"/>`;
    }

    svg += `</svg>`;
    return svg;
  }
}

// ─────────────────────────────────────────────
// EVOLUTION ENGINE — manages species pool
// ─────────────────────────────────────────────
class EvolutionEngine {
  constructor() {
    this.species = [];
    this.generation = 0;
    this.speciationThreshold = 0.6;
    this.mutationRate = 0.04;
    this.extinctionEvents = 0;
    this.speciationEvents = 0;
    this.totalEverExisted = 0;
    this._seed();
  }

  _seed() {
    for (let i = 0; i < 6; i++) {
      const g = new Genome();
      this.species.push(new ProceduralSpecies(g, null, 0));
      this.totalEverExisted++;
    }
  }

  tick(climate) {
    this.generation++;

    // Fitness pressure from climate
    const tempStress = Math.abs(climate.temperature - 20) / 35;
    const waterStress = climate.humidity < 30 ? 0.3 : 0;
    const envStress = tempStress + waterStress;

    // Update populations
    const survivors = [];
    for (const sp of this.species) {
      const r = sp.reproductionRate * (1 - envStress) * (1 + sp.droughtTolerance * 0.2);
      const K = 1000;
      sp.population = Math.max(0, sp.population + r * sp.population * (1 - sp.population / K));

      if (sp.population < 1) {
        this.extinctionEvents++;
      } else {
        survivors.push(sp);
      }
    }
    this.species = survivors;

    // Reproduction & mutation — each generation has a chance
    if (this.generation % 3 === 0 && this.species.length > 0) {
      const parent = this.species[Math.floor(Math.random() * this.species.length)];
      const child = ProceduralSpecies.evolveFrom(parent, this.mutationRate);
      if (child) {
        // Check divergence for speciation
        const div = Genome.divergence(parent.genome, child.genome);
        if (div > this.speciationThreshold) {
          this.species.push(child);
          this.totalEverExisted++;
          this.speciationEvents++;
        }
      }
    }

    // Hybridization
    if (this.species.length >= 2 && Math.random() < 0.05) {
      const a = this.species[Math.floor(Math.random() * this.species.length)];
      const b = this.species[Math.floor(Math.random() * this.species.length)];
      if (a !== b) {
        const hybrid = new ProceduralSpecies(Genome.crossover(a.genome, b.genome), `${a.commonName} × ${b.commonName}`, this.generation);
        this.species.push(hybrid);
        this.totalEverExisted++;
        this.speciationEvents++;
      }
    }

    // Cap pool
    if (this.species.length > 40) {
      this.species.sort((a, b) => a.fitness - b.fitness);
      this.species.splice(0, this.species.length - 40);
    }
  }
}

// Attach evolveFrom as static helper
ProceduralSpecies.evolveFrom = function(parent, sigma = 0.04) {
  const childGenome = Genome.mutate(parent.genome, sigma);
  return new ProceduralSpecies(childGenome, parent.commonName, parent.generation + 1);
};

// ─────────────────────────────────────────────
// POLLINATION NETWORK V2
// ─────────────────────────────────────────────
class PollinationNetwork {
  constructor() {
    this.pollinators = [
      { name: 'Honey Bee',   icon: '🐝', efficiency: 0.92, tempRange: [10,38], active: true, count: 200 },
      { name: 'Butterfly',   icon: '🦋', efficiency: 0.70, tempRange: [15,35], active: true, count: 80  },
      { name: 'Hummingbird', icon: '🐦', efficiency: 0.85, tempRange: [8,40],  active: true, count: 15  },
      { name: 'Bat',         icon: '🦇', efficiency: 0.60, tempRange: [5,32],  active: false, count: 40 },
      { name: 'Wind',        icon: '💨', efficiency: 0.20, tempRange: [-20,60],active: true, count: 999 },
      { name: 'Moth',        icon: '🌙', efficiency: 0.50, tempRange: [10,30], active: false, count: 60 },
    ];
    this.interactions = [];
    this.totalEvents = 0;
    this.networkScore = 0;
  }

  update(climate, species) {
    const temp = climate.temperature;
    let events = 0;
    this.interactions = [];

    for (const p of this.pollinators) {
      const inRange = temp >= p.tempRange[0] && temp <= p.tempRange[1];
      const isNight = climate.sunlight < 0.15;
      p.active = inRange && (p.name === 'Bat' || p.name === 'Moth' ? isNight : !isNight || climate.sunlight > 0.05);

      if (p.active && species.length > 0) {
        const targetsPerPollinator = Math.floor(p.count * p.efficiency * 0.01);
        for (let i = 0; i < Math.min(targetsPerPollinator, species.length); i++) {
          const sp = species[Math.floor(Math.random() * species.length)];
          const affinity = sp.pollinatorAffinity || 0.5;
          const success = p.efficiency * affinity * (climate.sunlight + 0.1);
          this.interactions.push({ pollinator: p.name, species: sp.commonName, success });
          if (Math.random() < success) {
            sp.population = Math.min(sp.population + 1, 1000);
            events++;
          }
        }
      }
    }

    this.totalEvents += events;
    const activeCount = this.pollinators.filter(p => p.active).length;
    this.networkScore = (activeCount / this.pollinators.length) * (species.length > 0 ? 1 : 0);
    return events;
  }
}

// ─────────────────────────────────────────────
// KNOWLEDGE GRAPH (in-memory)
// ─────────────────────────────────────────────
class KnowledgeGraph {
  constructor() {
    this.nodes = new Map(); // id → { type, label, props }
    this.edges = [];        // { from, to, rel, weight }
  }

  addNode(id, type, label, props = {}) {
    this.nodes.set(id, { type, label, props });
  }

  addEdge(from, to, rel, weight = 1) {
    this.edges.push({ from, to, rel, weight });
  }

  syncSpecies(speciesArr) {
    this.nodes.clear();
    this.edges = [];

    // Add biome nodes
    const biomes = new Set();
    speciesArr.forEach(s => biomes.add(s.biome));
    biomes.forEach(b => this.addNode(`biome_${b}`, 'biome', b));

    // Add pollinator nodes
    const pollinators = ['Honey Bee','Butterfly','Hummingbird','Bat','Wind','Moth'];
    pollinators.forEach(p => this.addNode(`poll_${p}`, 'pollinator', p));

    // Add species
    speciesArr.forEach(sp => {
      this.addNode(sp.id, 'species', sp.commonName, {
        hue: sp.hue, fitness: sp.fitness, population: sp.population,
        status: sp.conservationStatus
      });
      this.addEdge(sp.id, `biome_${sp.biome}`, 'NATIVE_TO', sp.fitness);

      // Pollinator affinity
      if (sp.pollinatorAffinity > 0.6) this.addEdge(sp.id, 'poll_Honey Bee', 'POLLINATED_BY', sp.pollinatorAffinity);
      if (sp.pollinatorAffinity > 0.4) this.addEdge(sp.id, 'poll_Butterfly', 'POLLINATED_BY', sp.pollinatorAffinity * 0.8);
      if (sp.pollinatorAffinity > 0.7) this.addEdge(sp.id, 'poll_Hummingbird', 'POLLINATED_BY', sp.pollinatorAffinity * 0.5);

      // Lineage
      sp.lineage.forEach(parentName => {
        const parent = speciesArr.find(s => s.commonName === parentName);
        if (parent) this.addEdge(sp.id, parent.id, 'EVOLVED_FROM', 1);
      });

      // Competition (same biome)
      speciesArr.forEach(other => {
        if (other.id !== sp.id && other.biome === sp.biome) {
          this.addEdge(sp.id, other.id, 'COMPETES_WITH', 0.5);
        }
      });
    });
  }

  getNeighbors(nodeId) {
    return this.edges
      .filter(e => e.from === nodeId || e.to === nodeId)
      .map(e => ({ node: e.from === nodeId ? e.to : e.from, rel: e.rel, weight: e.weight }));
  }

  query(rel) {
    return this.edges.filter(e => e.rel === rel);
  }
}

// ─────────────────────────────────────────────
// CLIMATE ENGINE V2 — with manual controls
// ─────────────────────────────────────────────
class ClimateEngineV2 {
  constructor() {
    this.time = 0;
    this.manualTemp     = null;
    this.manualHumidity = null;
    this.manualRainfall = null;
    this.manualCO2      = 415;
    this.co2            = 415;
    this.temperature    = 22;
    this.humidity       = 55;
    this.rainfall       = 10;
    this.sunlight       = 0.7;
    this.windSpeed      = 12;
    this.atmosphericPressure = 1013;
    this.season         = 'Spring';
    this.biome          = 'Temperate';
    this.year           = 2026;
    this.dayOfYear      = 1;
    this.volcanicActivity = 0;
    this.invasiveSpeciesPressure = 0;
    this.extinctionEventActive = false;
  }

  setControl(key, value) {
    if (key === 'temperature') this.manualTemp = value;
    if (key === 'humidity')    this.manualHumidity = value;
    if (key === 'rainfall')    this.manualRainfall = value;
    if (key === 'co2')         this.manualCO2 = value;
    if (key === 'volcanic')    this.volcanicActivity = value;
    if (key === 'invasive')    this.invasiveSpeciesPressure = value;
    if (key === 'extinction')  this.extinctionEventActive = value;
  }

  update() {
    this.time += 0.008;
    this.dayOfYear = (this.dayOfYear + 1) % 365;
    if (this.dayOfYear === 0) this.year++;

    const seasonT = Math.sin(this.time);
    this.sunlight = 0.5 + 0.45 * seasonT;
    this.temperature = this.manualTemp !== null ? this.manualTemp
      : 15 + 14 * seasonT + this.volcanicActivity * 3 + (this.manualCO2 - 415) * 0.01;
    this.humidity = this.manualHumidity !== null ? this.manualHumidity
      : 45 + 35 * Math.abs(Math.sin(this.time * 0.7));
    this.rainfall = this.manualRainfall !== null ? this.manualRainfall
      : 6 + 14 * Math.abs(Math.cos(this.time));
    this.co2 = this.manualCO2;
    this.windSpeed = 5 + 15 * Math.abs(Math.sin(this.time * 1.3));
    this.atmosphericPressure = 1013 - this.volcanicActivity * 8 + Math.sin(this.time * 0.5) * 12;

    if (seasonT > 0.5) this.season = 'Summer';
    else if (seasonT > -0.5) this.season = this.time % (2 * Math.PI) > Math.PI ? 'Autumn' : 'Spring';
    else this.season = 'Winter';

    if (this.temperature > 28 && this.humidity > 65) this.biome = 'Tropical';
    else if (this.temperature < 5) this.biome = 'Arctic';
    else if (this.humidity < 25) this.biome = 'Desert';
    else this.biome = 'Temperate';
  }
}

// ─────────────────────────────────────────────
// SOIL CHEMISTRY V2
// ─────────────────────────────────────────────
class SoilSystemV2 {
  constructor() {
    this.nitrogen = 0.65;
    this.phosphorus = 0.45;
    this.potassium = 0.70;
    this.ph = 6.8;
    this.organicMatter = 0.50;
    this.moisture = 0.55;
    this.microbialActivity = 0.6;
  }

  update(climate, growthImpact) {
    const rain = climate.rainfall / 25;
    this.moisture = Math.min(1, Math.max(0.05, this.moisture + rain * 0.08 - climate.temperature / 300));
    this.nitrogen   = Math.min(1, Math.max(0.05, this.nitrogen   - growthImpact * 0.008 + 0.001));
    this.phosphorus = Math.min(1, Math.max(0.05, this.phosphorus - growthImpact * 0.005 + 0.0006));
    this.potassium  = Math.min(1, Math.max(0.05, this.potassium  - growthImpact * 0.007 + 0.0008));
    this.organicMatter = Math.min(1, this.organicMatter + 0.0002);
    this.microbialActivity = 0.4 + this.moisture * 0.3 + this.organicMatter * 0.3;
    this.ph = Math.min(8.5, Math.max(4.5, this.ph + (Math.random() - 0.5) * 0.005));
  }
}

// ─────────────────────────────────────────────
// PLANETARY BIOSPHERE SIMULATOR V2
// ─────────────────────────────────────────────
class PlanetaryBiosphere {
  constructor() {
    this.climate     = new ClimateEngineV2();
    this.soil        = new SoilSystemV2();
    this.evolution   = new EvolutionEngine();
    this.pollNet     = new PollinationNetwork();
    this.graph       = new KnowledgeGraph();
    this.tick        = 0;
    this.isRunning   = false;
    this.speed       = 1;
    this._listeners  = [];
    this._interval   = null;

    // Telemetry
    this.biodiversityIndex = 0;
    this.totalPollinationEvents = 0;
    this.biomass = 100;
    this.waterBalance = 50;
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this._schedule();
  }

  stop() {
    this.isRunning = false;
    if (this._interval) clearTimeout(this._interval);
  }

  setSpeed(s) { this.speed = s; }

  _schedule() {
    const delay = Math.max(100, 1000 / this.speed);
    this._interval = setTimeout(() => {
      if (!this.isRunning) return;
      this._step();
      this._schedule();
    }, delay);
  }

  _step() {
    this.tick++;
    this.climate.update();

    const sp = this.evolution.species;
    const totalGrowth = sp.reduce((s, p) => s + p.reproductionRate, 0);
    this.soil.update(this.climate, Math.max(0, totalGrowth));

    this.evolution.tick(this.climate);

    const polEvents = this.pollNet.update(this.climate, sp);
    this.totalPollinationEvents += polEvents;

    if (this.tick % 5 === 0) this.graph.syncSpecies(sp);

    // Extinction event wipe
    if (this.climate.extinctionEventActive && this.tick % 20 === 0) {
      const killCount = Math.floor(this.evolution.species.length * 0.4);
      this.evolution.species.splice(0, killCount);
      this.evolution.extinctionEvents += killCount;
    }

    // Invasive pressure
    if (this.climate.invasiveSpeciesPressure > 0.5 && sp.length > 2) {
      const weakest = [...sp].sort((a, b) => a.fitness - b.fitness)[0];
      weakest.population = Math.max(0, weakest.population - 5 * this.climate.invasiveSpeciesPressure);
    }

    this.biodiversityIndex = this._calcBiodiversity();
    this.biomass = sp.reduce((s, p) => s + p.population, 0);
    this.waterBalance = this.soil.moisture * 100;

    this._notify();
  }

  _calcBiodiversity() {
    const n = this.evolution.species.length;
    if (n === 0) return 0;
    const families = new Set(this.evolution.species.map(s => s.taxonomy));
    return Math.min(100, n * 2.5 + families.size * 5);
  }

  addListener(cb) { this._listeners.push(cb); }

  _notify() {
    const state = this._buildState();
    this._listeners.forEach(cb => cb(state));
  }

  _buildState() {
    return {
      tick: this.tick,
      climate: { ...this.climate },
      soil: { ...this.soil },
      evolution: {
        species: this.evolution.species,
        generation: this.evolution.generation,
        speciationEvents: this.evolution.speciationEvents,
        extinctionEvents: this.evolution.extinctionEvents,
        totalEverExisted: this.evolution.totalEverExisted,
        mutationRate: this.evolution.mutationRate,
        speciationThreshold: this.evolution.speciationThreshold
      },
      pollination: {
        pollinators: this.pollNet.pollinators,
        totalEvents: this.totalPollinationEvents,
        networkScore: this.pollNet.networkScore,
        recentInteractions: this.pollNet.interactions.slice(0, 8)
      },
      graph: {
        nodeCount: this.graph.nodes.size,
        edgeCount: this.graph.edges.length,
        relationships: ['POLLINATED_BY','NATIVE_TO','COMPETES_WITH','EVOLVED_FROM'].map(rel => ({
          rel, count: this.graph.query(rel).length
        }))
      },
      analytics: {
        biodiversityIndex: this.biodiversityIndex,
        totalBiomass: this.biomass,
        waterBalance: this.waterBalance,
        totalPollinationEvents: this.totalPollinationEvents,
        currentSpeciesCount: this.evolution.species.length,
        activeBiome: this.climate.biome,
        year: this.climate.year,
        season: this.climate.season
      }
    };
  }
}

// Global V2 instance
const bloomV2 = new PlanetaryBiosphere();
