/**
 * Unified Bloom Ecosystem Simulator
 * Integrates Climate, Soil, and Pollination dynamics.
 */

class ClimateEngine {
  constructor() {
    this.temperature = 22;
    this.humidity = 60;
    this.sunlight = 0.8;
    this.manualSunlight = null;
  }
  update() {
    this.temperature += (Math.random() - 0.5) * 0.1;
    this.humidity = Math.max(0, Math.min(100, this.humidity + (Math.random() - 0.5) * 1));
    this.sunlight = this.manualSunlight ?? (0.5 + Math.sin(Date.now() / 5000) * 0.4);
  }
}

class SoilChemistry {
  constructor() {
    this.nitrogen = 0.5;
    this.phosphorus = 0.5;
    this.potassium = 0.5;
    this.ph = 6.5;
  }

  fertility() {
    return (this.nitrogen + this.phosphorus + this.potassium) / 3;
  }
}

class Bee {
    constructor() {
        this.x = Math.random() * 400;
        this.y = Math.random() * 400;
        this.pollen = null;
    }
    update() {
        this.x += (Math.random() - 0.5) * 10;
        this.y += (Math.random() - 0.5) * 10;
    }
}

const ecosystem = {
  climate: new ClimateEngine(),
  soil: new SoilChemistry(),
  bees: [new Bee(), new Bee(), new Bee()],
  population: [],
  speciesCatalog: [],
  carryingCapacity: 260,
  tick: 0
};

function runEcosystemTick() {
  ecosystem.tick++;
  ecosystem.climate.update();
  ecosystem.bees.forEach(b => b.update());

  if (!ecosystem.population.length && ecosystem.speciesCatalog.length) {
    seedEcosystem(ecosystem.speciesCatalog.slice(0, 24));
  }

  const densityPressure = ecosystem.population.length / ecosystem.carryingCapacity;
  ecosystem.population.forEach(plant => {
    const analysis = window.lab && window.BloomTaxonomy
      ? window.lab.calculateGrowth(plant.species, {
          light: ecosystem.climate.sunlight,
          water: ecosystem.climate.humidity / 100,
          temperature: ecosystem.climate.temperature,
          humidity: ecosystem.climate.humidity,
          nutrients: ecosystem.soil.fertility(),
          ageDays: plant.age
        })
      : { score: 0.5, stage: "vegetative" };

    const competitionPenalty = Math.max(0, densityPressure - 0.62) * 0.28;
    const pollinationBonus = Math.min(0.08, ecosystem.bees.length * 0.015);
    const fitness = Math.max(0, Math.min(1, analysis.score + pollinationBonus - competitionPenalty));
    plant.vitality = plant.vitality * 0.82 + fitness * 0.18;
    plant.stage = analysis.stage;
    plant.fitness = fitness;
    plant.age += 0.6;
  });

  if (ecosystem.tick % 28 === 0 && ecosystem.population.length < ecosystem.carryingCapacity) {
    const parent = ecosystem.population
      .filter(plant => plant.vitality > 0.55 && plant.stage !== "seedling")
      .sort((a, b) => b.vitality - a.vitality)[0];
    if (parent) addPlant(parent.species, parent.vitality * 0.72);
  }

  ecosystem.population = ecosystem.population.filter(plant => {
    const ageRisk = plant.age > 900 ? 0.02 : 0;
    const stressRisk = plant.vitality < 0.16 ? 0.08 : 0.004;
    return plant.age < 18 || Math.random() > ageRisk + stressRisk;
  });
}

function setEcosystemSpeciesCatalog(species) {
  ecosystem.speciesCatalog = species || [];
  if (!ecosystem.population.length && ecosystem.speciesCatalog.length) {
    seedEcosystem(ecosystem.speciesCatalog.slice(0, 24));
  }
}

function seedEcosystem(speciesList) {
  ecosystem.population = [];
  speciesList.forEach(species => {
    for (let i = 0; i < 2; i++) addPlant(species, 0.42 + Math.random() * 0.35);
  });
}

function addPlant(species, vitality = 0.6) {
  ecosystem.population.push({
    id: `plant_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    species,
    x: Math.random(),
    y: Math.random(),
    age: 8 + Math.random() * 120,
    vitality,
    stage: "seedling"
  });
}

function ecosystemSummary() {
  const groups = ecosystem.population.map(plant => plant.species.taxonomy?.family || plant.species.cat);
  const families = new Set(groups);
  const counts = groups.reduce((acc, group) => {
    acc[group] = (acc[group] || 0) + 1;
    return acc;
  }, {});
  const shannon = Object.values(counts).reduce((sum, count) => {
    const p = count / Math.max(1, ecosystem.population.length);
    return p ? sum - p * Math.log(p) : sum;
  }, 0);
  const maxShannon = Math.log(Math.max(1, families.size));
  const avgVitality = ecosystem.population.length
    ? ecosystem.population.reduce((sum, plant) => sum + plant.vitality, 0) / ecosystem.population.length
    : 0;
  const avgFitness = ecosystem.population.length
    ? ecosystem.population.reduce((sum, plant) => sum + (plant.fitness || plant.vitality), 0) / ecosystem.population.length
    : 0;
  return {
    population: ecosystem.population.length,
    biodiversity: Math.round((maxShannon ? shannon / maxShannon : 0) * 100),
    richness: families.size,
    shannon,
    avgVitality,
    avgFitness,
    density: ecosystem.population.length / ecosystem.carryingCapacity
  };
}

window.ecosystem = ecosystem;
window.runEcosystemTick = runEcosystemTick;
window.setEcosystemSpeciesCatalog = setEcosystemSpeciesCatalog;
window.seedEcosystem = seedEcosystem;
window.ecosystemSummary = ecosystemSummary;
