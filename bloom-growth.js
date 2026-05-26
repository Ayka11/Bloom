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
    }

    calculateGrowth() {
        const photosynthesis = this.light * this.water * this.co2 * this.chlorophyll;
        const respiration = this.respirationRate * (1 + (Math.sin(Date.now()/1000)*0.1));
        const netGrowth = photosynthesis - respiration - this.stress;
        return Math.max(0, Math.min(1, netGrowth));
    }
}

const lab = new GrowthLab();
window.lab = lab;
