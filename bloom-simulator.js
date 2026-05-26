/**
 * Unified Bloom Ecosystem Simulator
 * Integrates Climate, Soil, and Pollination dynamics.
 */

class ClimateEngine {
  constructor() {
    this.temperature = 22;
    this.humidity = 60;
    this.sunlight = 0.8;
  }
  update() {
    this.temperature += (Math.random() - 0.5) * 0.1;
    this.humidity = Math.max(0, Math.min(100, this.humidity + (Math.random() - 0.5) * 1));
    this.sunlight = 0.5 + Math.sin(Date.now() / 5000) * 0.4;
  }
}

class SoilChemistry {
  constructor() {
    this.nitrogen = 0.5;
    this.phosphorus = 0.5;
    this.potassium = 0.5;
    this.ph = 6.5;
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
  population: []
};

function runEcosystemTick() {
  ecosystem.climate.update();
  ecosystem.bees.forEach(b => b.update());
}

window.ecosystem = ecosystem;
window.runEcosystemTick = runEcosystemTick;
