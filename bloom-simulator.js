/**
 * Bloom Ecosystem Simulator
 * Based on the Plant Ecosystem Simulator Architecture
 */

class ClimateEngine {
    constructor() {
        this.temperature = 22; // Celsius
        this.humidity = 50;    // Percentage
        this.rainfall = 10;    // mm
        this.sunlight = 0.7;   // 0 to 1 scale
        this.season = 'Spring';
        this.time = 0;
    }

    update() {
        this.time += 0.01;
        // Simulate seasonal variations
        this.sunlight = 0.5 + 0.4 * Math.sin(this.time);
        this.temperature = 15 + 15 * Math.sin(this.time);
        this.rainfall = 5 + 15 * Math.abs(Math.cos(this.time));
        this.humidity = 40 + 40 * Math.abs(Math.sin(this.time * 0.5));

        if (Math.sin(this.time) > 0.5) this.season = 'Summer';
        else if (Math.sin(this.time) > -0.5) this.season = this.time % (2 * Math.PI) > Math.PI ? 'Autumn' : 'Spring';
        else this.season = 'Winter';
    }
}

class SoilChemistrySystem {
    constructor() {
        this.nitrogen = 0.6;
        this.phosphorus = 0.4;
        this.potassium = 0.7;
        this.ph = 6.8;
        this.organic_matter = 0.5;
    }

    update(growthImpact) {
        // Plants consume nutrients
        this.nitrogen -= growthImpact * 0.01;
        this.phosphorus -= growthImpact * 0.005;
        this.potassium -= growthImpact * 0.008;

        // Natural recovery
        this.nitrogen = Math.min(1.0, this.nitrogen + 0.001);
        this.phosphorus = Math.min(1.0, this.phosphorus + 0.0005);
        this.potassium = Math.min(1.0, this.potassium + 0.0008);

        // Clamp values
        this.nitrogen = Math.max(0.1, this.nitrogen);
        this.phosphorus = Math.max(0.1, this.phosphorus);
        this.potassium = Math.max(0.1, this.potassium);
    }
}

class GrowthSimulator {
    constructor() {
        this.biomass = 1.0;
        this.growthRate = 0;
        this.stress = 0;
    }

    calculateGrowth(climate, soil) {
        const co2 = 1.0; // Constant for simplicity
        const chlorophyll = 0.8;

        // Photosynthesis = Light * Water * CO2 * Chlorophyll
        // Using rainfall as a proxy for available water
        const waterAvailability = Math.min(1.0, climate.rainfall / 10);
        const photosynthesis = climate.sunlight * waterAvailability * co2 * chlorophyll;

        // Respiration increases with temperature
        const respiration = 0.05 * (climate.temperature / 20);

        // Stress from extreme conditions or low nutrients
        this.stress = 0;
        if (climate.temperature > 35 || climate.temperature < 5) this.stress += 0.1;
        if (soil.nitrogen < 0.2) this.stress += 0.1;
        if (waterAvailability < 0.2) this.stress += 0.2;

        // GrowthRate = Photosynthesis - Respiration - Stress
        this.growthRate = photosynthesis - respiration - this.stress;

        // Logistic growth factor (carrying capacity K = 100)
        const K = 100;
        const logisticFactor = (1 - this.biomass / K);

        this.biomass += this.growthRate * logisticFactor;
        if (this.biomass < 0.1) this.biomass = 0.1;

        return this.growthRate;
    }
}

class PollinationSimulator {
    constructor() {
        this.pollinatorActivity = 0;
        this.pollinationSuccess = 0;
        this.pollinatorDensity = 0.5; // Baseline
    }

    update(climate, growth) {
        // Pollinators prefer mild temperatures (e.g., 15-30°C)
        let tempFactor = 0;
        if (climate.temperature > 10 && climate.temperature < 35) {
            tempFactor = 1 - Math.abs(climate.temperature - 22) / 13;
        }
        tempFactor = Math.max(0, tempFactor);

        // More activity in sunlight
        const lightFactor = climate.sunlight;

        this.pollinatorActivity = tempFactor * lightFactor;

        // P(Pollination) = Visibility + Fragrance + Nectar + PollinatorDensity
        // Using biomass as proxy for visibility/fragrance/nectar
        const visibility = Math.min(1.0, growth.biomass / 50);
        const nectar = Math.min(1.0, growth.biomass / 30);

        // Simplified formula based on requested architecture
        this.pollinationSuccess = (visibility * 0.3 + nectar * 0.3 + this.pollinatorDensity * 0.4) * this.pollinatorActivity;

        return this.pollinationSuccess;
    }
}

class HydrologySystem {
    constructor() {
        this.groundwater = 50; // mm
        this.evaporation = 2;   // mm/step
        this.waterFlow = 0;
    }

    update(climate, growth) {
        // WaterFlow = Rainfall + Groundwater - Evaporation - PlantConsumption
        // Simplified plant consumption based on biomass
        const plantConsumption = growth.biomass * 0.01;
        this.evaporation = 0.5 + (climate.temperature / 20);

        this.waterFlow = climate.rainfall + this.groundwater - this.evaporation - plantConsumption;

        // Update groundwater reservoir based on net balance
        const balance = climate.rainfall - this.evaporation - plantConsumption;
        this.groundwater = Math.max(10, Math.min(100, this.groundwater + balance * 0.05));

        return this.waterFlow;
    }
}

class PopulationDynamics {
    constructor() {
        this.populationSize = 100; // Baseline starting population
        this.growthRate_r = 0.05;  // Intrinsic rate of increase
        this.carryingCapacity_K = 1000;
        this.dNdt = 0;
    }

    update(growth) {
        // Logistic growth formula: dN/dt = rN(1 - N/K)
        // Adjust intrinsic rate r based on biomass/growth state
        const adjusted_r = this.growthRate_r * (growth.growthRate > 0 ? 1.2 : 0.8);

        this.dNdt = adjusted_r * this.populationSize * (1 - this.populationSize / this.carryingCapacity_K);

        // Update population size
        this.populationSize += this.dNdt;

        // Handle extinction/collapse
        if (this.populationSize < 1) this.populationSize = 0;

        return this.populationSize;
    }
}

class EcosystemSimulator {
    constructor() {
        this.climate = new ClimateEngine();
        this.soil = new SoilChemistrySystem();
        this.growth = new GrowthSimulator();
        this.pollination = new PollinationSimulator();
        this.hydrology = new HydrologySystem();
        this.population = new PopulationDynamics();
        this.isRunning = false;
        this.listeners = [];
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.loop();
    }

    stop() {
        this.isRunning = false;
    }

    loop() {
        if (!this.isRunning) return;

        this.climate.update();
        const growthImpact = this.growth.calculateGrowth(this.climate, this.soil);
        this.soil.update(Math.max(0, growthImpact));
        this.pollination.update(this.climate, this.growth);
        this.hydrology.update(this.climate, this.growth);
        this.population.update(this.growth);

        this.notify();

        setTimeout(() => this.loop(), 1000); // Update every second
    }

    addListener(callback) {
        this.listeners.push(callback);
    }

    notify() {
        const state = {
            climate: { ...this.climate },
            soil: { ...this.soil },
            growth: { ...this.growth },
            pollination: { ...this.pollination },
            hydrology: { ...this.hydrology },
            population: { ...this.population }
        };
        this.listeners.forEach(cb => cb(state));
    }
}

// Global instance
const bloomSimulator = new EcosystemSimulator();
