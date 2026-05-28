/**
 * Physiological Growth Simulation
 * Formula: Growth = Photosynthesis (Light * Water * CO2 * Chlorophyll) - Respiration - Stress
 */

class GrowthLab {
    constructor() {
        this.light = 0.8;
        this.water = 0.6;
        this.co2 = 1.0;
        this.chlorophyll = 0.9;
        this.respirationRate = 0.05;
        this.stress = 0.0;
        this.temperature = 22;
        this.humidity = 60;
        this.nutrients = 0.62;
        this.ageDays = 42;
    }

    environment(overrides = {}) {
        return {
            light: this.light,
            water: this.water,
            co2: this.co2,
            temperature: this.temperature,
            humidity: this.humidity,
            nutrients: this.nutrients,
            stress: this.stress,
            ageDays: this.ageDays,
            ...overrides
        };
    }

    calculateGrowth(species = null, overrides = {}) {
        const env = this.environment(overrides);
        const traits = species && window.BloomTaxonomy
            ? window.BloomTaxonomy.inferGrowthTraits(species)
            : {
                idealTemp: 22,
                waterNeed: 0.6,
                lightNeed: 0.8,
                humidityNeed: 60,
                stressTolerance: 0.6,
                growthSpeed: 1,
                matureDays: 90,
                nutrientNeed: 0.55,
                chlorophyll: this.chlorophyll,
                form: "plant"
            };

        const lightFit = 1 - Math.min(1, Math.abs(env.light - traits.lightNeed) / 0.85);
        const waterFit = 1 - Math.min(1, Math.abs(env.water - traits.waterNeed) / 0.9);
        const tempFit = 1 - Math.min(1, Math.abs(env.temperature - traits.idealTemp) / 22);
        const humidityFit = 1 - Math.min(1, Math.abs(env.humidity - traits.humidityNeed) / 80);
        const nutrientFit = 1 - Math.min(1, Math.abs(env.nutrients - traits.nutrientNeed) / 0.9);
        const maturity = Math.min(1, env.ageDays / traits.matureDays);
        const senescence = env.ageDays > traits.matureDays * 3 ? 0.88 : 1;

        const photosynthesis = env.light * env.co2 * traits.chlorophyll * (0.45 + lightFit * 0.55);
        const resourceFit = (waterFit * 0.28) + (tempFit * 0.24) + (humidityFit * 0.14) + (nutrientFit * 0.18) + (maturity * 0.16);
        const respiration = this.respirationRate * (1 + Math.max(0, env.temperature - traits.idealTemp) / 12);
        const stressLoad = (1 - resourceFit) * (1 - traits.stressTolerance * 0.45) + env.stress;
        const netGrowth = (photosynthesis * resourceFit * traits.growthSpeed * senescence) - respiration - stressLoad * 0.32;

        const score = Math.max(0, Math.min(1, netGrowth));
        return {
            score,
            stage: this.stageFor(maturity, score),
            limitingFactor: this.limitingFactor({ lightFit, waterFit, tempFit, humidityFit, nutrientFit }),
            traits,
            environment: env,
            components: {
                photosynthesis,
                resourceFit,
                respiration,
                stressLoad,
                maturity,
                senescence,
                waterFit,
                tempFit,
                lightFit,
                humidityFit,
                nutrientFit
            }
        };
    }

    stageFor(maturity, score) {
        if (score < 0.18) return "stressed";
        if (maturity < 0.2) return "seedling";
        if (maturity < 0.72) return "vegetative";
        return score > 0.62 ? "flowering" : "mature";
    }

    limitingFactor(fits) {
        return Object.entries(fits).sort((a, b) => a[1] - b[1])[0][0].replace("Fit", "");
    }
}

const lab = new GrowthLab();
window.lab = lab;
