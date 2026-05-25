/**
 * Bloom Ecosystem Simulator
 */

class ClimateEngine {
  constructor() {
    this.temperature = 0.5; // 0 (frozen) to 1 (volcanic)
    this.humidity = 0.5;    // 0 (arid) to 1 (jungle)
    this.sunlight = 0.5;    // 0 (dark) to 1 (blazing)
    this.rainfall = 0.5;
  }

  update() {
    // Stochastic seasonal drift
    this.temperature += (Math.random() - 0.5) * 0.05;
    this.humidity += (Math.random() - 0.5) * 0.05;
    this.sunlight += (Math.random() - 0.5) * 0.05;

    // Clamp values
    this.temperature = Math.max(0, Math.min(1, this.temperature));
    this.humidity = Math.max(0, Math.min(1, this.humidity));
    this.sunlight = Math.max(0, Math.min(1, this.sunlight));
  }
}

class SoilSystem {
  constructor() {
    this.nitrogen = 0.5;
    this.phosphorus = 0.5;
    this.potassium = 0.5;
    this.ph = 6.5;
  }
}

class EcosystemSimulator {
  constructor() {
    this.climate = new ClimateEngine();
    this.soil = new SoilSystem();
    this.species = [];
    this.generation = 0;
  }

  addSpecies(species) {
    this.species.push(species);
  }

  simulateStep() {
    this.climate.update();
    this.generation++;

    this.species.forEach(sp => {
      const g = sp.genome.genes;

      // Calculate Fitness based on environment
      // Fitness = Adaptation + Reproduction - Stress
      const tempStress = Math.abs(this.climate.temperature - (g.heat_resistance > g.cold_resistance ? 0.8 : 0.2));
      const waterStress = Math.abs(this.climate.humidity - g.water_requirement);
      const lightStress = Math.abs(this.climate.sunlight - g.sunlight_preference);

      const stress = (tempStress + waterStress + lightStress) / 3;
      const adaptation = 1 - stress;
      const reproduction = g.nectar_volume * g.fragrance_strength;

      sp.fitness = adaptation * 0.7 + reproduction * 0.3;

      // Logistic Growth: dN/dt = rN(1 - N/K)
      const r = (sp.fitness - 0.5) * 0.2;
      const K = 1000; // Carrying capacity
      const deltaN = r * sp.population * (1 - sp.population / K);

      sp.population = Math.max(0, sp.population + deltaN);
    });

    // Natural Selection & Evolution
    if (this.species.length >= 2) {
      // Sort by fitness
      this.species.sort((a, b) => b.fitness - a.fitness);

      // Top 2 mate if fit enough
      if (this.species[0].fitness > 0.6 && this.species[1].fitness > 0.5) {
        const speciationThreshold = 0.25;
        const crossoverRate = 0.15;

        if (Math.random() < crossoverRate) {
          const childGenome = Genome.crossover(this.species[0].genome, this.species[1].genome);

          // Only create new species if genetic distance is significant
          const distToParent1 = Genome.geneticDistance(childGenome, this.species[0].genome);
          const distToParent2 = Genome.geneticDistance(childGenome, this.species[1].genome);

          if (distToParent1 > speciationThreshold || distToParent2 > speciationThreshold) {
            const childSpecies = new Species(null, childGenome, this.generation, [this.species[0].name, this.species[1].name]);
            this.addSpecies(childSpecies);
          } else {
            // Otherwise just boost parent population (hybridization within same species)
            this.species[0].population += 20;
          }
        }
      }
    }

    // Extinction
    this.species = this.species.filter(sp => sp.population > 5);
  }
}

window.EcosystemSimulator = EcosystemSimulator;
