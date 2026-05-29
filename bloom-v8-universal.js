/**
 * BLOOM V8 — Universal Semantic Engine
 *
 * Modules:
 *   ConvergentLawDetector   — finds patterns that emerge in 3+ universes independently
 *   AwarenessFieldRenderer  — fluid RD consciousness overlay on planet canvas
 *   PossibilitySpaceExplorer— PCA-like scatter of adjacent possible genome states
 *   TransfiniteIntelNet     — cross-universe AI agents sharing observations
 *   V8Engine                — orchestrator
 */
(function () {
'use strict';

// ─── CONVERGENT LAW DETECTOR ──────────────────────────────────────────────────
// Watches multiple universe state streams; when the same ecological pattern
// emerges independently in 3+ universes, it's elevated to a "universal law".

const PATTERN_DETECTORS = [
    {
        id: 'high_biodiversity_co2_sink',
        label: 'High Biodiversity → Carbon Sequestration',
        desc: 'Universes with biodiversity > 0.7 consistently develop enhanced CO₂ sinks.',
        test: s => s.biodiversityIndex > 0.7 && s.co2 < 450,
    },
    {
        id: 'consciousness_biodiversity_link',
        label: 'Consciousness ↔ Biodiversity Coupling',
        desc: 'Planetary consciousness index correlates strongly with species richness.',
        test: s => s.consciousnessIndex > 0.2 && s.biodiversityIndex > 0.6,
    },
    {
        id: 'civilisation_collapse_loop',
        label: 'Civilisation–Biosphere Collapse Attractor',
        desc: 'Civilisations above 0.6 consistently trigger biodiversity loss before correction.',
        test: s => s.civLevel > 0.6 && s.biodiversityIndex < 0.4,
    },
    {
        id: 'ocean_biosphere_pH_lock',
        label: 'Ocean pH–Biosphere Stability Lock',
        desc: 'Ocean pH above 8.0 universally correlates with stable ecosystems.',
        test: s => s.oceanPH >= 8.0 && s.biodiversityIndex > 0.65,
    },
    {
        id: 'thermal_speciation_burst',
        label: 'Thermal Gradient → Speciation Burst',
        desc: 'Moderate warming (1–2°C anomaly) consistently accelerates speciation.',
        test: s => s.temperatureAnomaly > 0.8 && s.temperatureAnomaly < 2.2 && s.speciesCount > 150,
    },
    {
        id: 'mycelial_carbon_pump',
        label: 'Mycelial Density → Carbon Stability',
        desc: 'High mycorrhizal coverage universally stabilises atmospheric carbon.',
        test: s => (s.mycorrhizalDensity||0.5) > 0.75 && s.co2 < 460,
    },
];

class ConvergentLawDetector {
    constructor() {
        this.universeCounts = new Map(); // patternId → Set of universeIds that triggered it
        this.laws           = new Map(); // patternId → law entry (promoted from pattern)
        this.candidates     = new Map(); // patternId → hit count this session
        this.history        = [];
    }

    // Feed one universe's state
    observeUniverse(universeId, state) {
        PATTERN_DETECTORS.forEach(pd => {
            if (!pd.test(state)) return;
            if (!this.universeCounts.has(pd.id)) this.universeCounts.set(pd.id, new Set());
            this.universeCounts.get(pd.id).add(universeId);

            // Promote to universal law when 3+ distinct universes trigger it
            const count = this.universeCounts.get(pd.id).size;
            if (count >= 3 && !this.laws.has(pd.id)) {
                const law = {
                    ...pd,
                    promotedAt:   Date.now(),
                    universeCount: count,
                    confidence:   Math.min(0.99, count / 6),
                    strength:     0.5,
                };
                this.laws.set(pd.id, law);
                this.history.unshift({ type: 'law_discovered', law: pd.label, universeCount: count });
                if (this.history.length > 50) this.history.pop();
            }
            // Strengthen existing laws
            if (this.laws.has(pd.id)) {
                const law = this.laws.get(pd.id);
                law.universeCount = count;
                law.confidence = Math.min(0.99, count / 6);
                law.strength   = Math.min(1, law.strength + 0.001);
            }
        });
    }

    getLaws()     { return [...this.laws.values()]; }
    getHistory()  { return this.history; }
    getLawCount() { return this.laws.size; }
}

// ─── AWARENESS FIELD RENDERER ─────────────────────────────────────────────────
// Full-screen fluid consciousness overlay using Gray-Scott reaction-diffusion
// on a lat/lon projection — blended on top of the V3 planet canvas.

class AwarenessFieldRenderer {
    constructor(W = 128, H = 64) {
        this.W = W; this.H = H;
        const n = W * H;
        this.u = new Float32Array(n).fill(1);
        this.v = new Float32Array(n).fill(0);
        this.canvas = document.createElement('canvas');
        this.canvas.width = W; this.canvas.height = H;
    }

    seed(hotspots) {
        // Seed from consciousness hotspots (geographic lat/lon → field coords)
        hotspots.forEach(([lat, lon, strength]) => {
            const x = Math.round(((lon + 180) / 360) * this.W);
            const y = Math.round(((90 - lat) / 180) * this.H);
            const r = 3;
            for (let dy = -r; dy <= r; dy++) {
                for (let dx = -r; dx <= r; dx++) {
                    const fx = ((x+dx+this.W)%this.W);
                    const fy = Math.max(0, Math.min(this.H-1, y+dy));
                    this.v[fy*this.W+fx] = Math.min(1, this.v[fy*this.W+fx] + strength);
                }
            }
        });
    }

    step(feed = 0.035, kill = 0.065, steps = 3) {
        const { W, H, u, v } = this;
        for (let s = 0; s < steps; s++) {
            const nu = new Float32Array(u);
            const nv = new Float32Array(v);
            for (let y = 0; y < H; y++) {
                for (let x = 0; x < W; x++) {
                    const i = y*W+x;
                    const l = y*W+((x-1+W)%W), r = y*W+((x+1)%W);
                    const t = ((y-1+H)%H)*W+x, b = ((y+1)%H)*W+x;
                    const lapU = u[l]+u[r]+u[t]+u[b]-4*u[i];
                    const lapV = v[l]+v[r]+v[t]+v[b]-4*v[i];
                    const rxn  = u[i]*v[i]*v[i];
                    nu[i] = Math.min(1,Math.max(0, u[i]+0.14*lapU-rxn+feed*(1-u[i])));
                    nv[i] = Math.min(1,Math.max(0, v[i]+0.06*lapV+rxn-(feed+kill)*v[i]));
                }
            }
            u.set(nu); v.set(nv);
        }
    }

    toCanvas(hue = 240, alpha = 0.35) {
        const { W, H, v, canvas } = this;
        const ctx = canvas.getContext('2d');
        const img = ctx.createImageData(W, H);
        for (let i = 0; i < W*H; i++) {
            const t = Math.min(1, v[i]*2);
            const a = Math.floor(t * 255 * alpha * 3);
            // Simple hue → RGB for awareness tint
            const r = Math.round(Math.sin(hue/60)*128+100);
            const g = Math.round(Math.sin((hue-120)/60)*80+60);
            const b = Math.round(Math.sin((hue-240)/60)*200+180);
            img.data[i*4]   = Math.min(255,Math.max(0,r));
            img.data[i*4+1] = Math.min(255,Math.max(0,g));
            img.data[i*4+2] = Math.min(255,Math.max(0,b));
            img.data[i*4+3] = Math.min(255, a);
        }
        ctx.putImageData(img, 0, 0);
        return canvas;
    }
}

// ─── POSSIBILITY SPACE EXPLORER ───────────────────────────────────────────────
// Given a genome + physics, generates N adjacent possible states by gradient-
// walking in genome space. Projects to 2D via PCA-lite (2 random projections)
// and draws a scatter of the possibility cloud.

class PossibilitySpaceExplorer {
    constructor() {
        this.cloud   = [];   // [{ genome, x, y, fitness, label }]
        this.basis1  = null; // random projection vector 1
        this.basis2  = null; // random projection vector 2
    }

    // Generate N nearby genomes by gradient-walking with small random steps
    explore(genome, n = 60, stepSize = 0.06) {
        if (!genome) return;
        const keys = ['morphology','pigmentation','adaptation','metabolism','reproduction'];
        const flat  = keys.flatMap(k => genome[k] || [0.5,0.5,0.5,0.5,0.5]);
        const dim   = flat.length;

        // Random projection basis (stable per explore call)
        this.basis1 = Array.from({length:dim}, () => (Math.random()-0.5)*2);
        this.basis2 = Array.from({length:dim}, () => (Math.random()-0.5)*2);
        const norm = v => { const m = Math.sqrt(v.reduce((s,x)=>s+x*x,0)); return v.map(x=>x/m); };
        this.basis1 = norm(this.basis1);
        this.basis2 = norm(this.basis2);

        this.cloud = [];

        // Centre point
        this.cloud.push(this._makePoint(flat, keys, 'current', 1.0));

        for (let i = 0; i < n; i++) {
            const perturbed = flat.map(v => {
                const delta = (Math.random()-0.5)*stepSize*(1 + i/n);
                return Math.max(0, Math.min(1, v+delta));
            });
            this.cloud.push(this._makePoint(perturbed, keys, `p${i}`, 0.5));
        }
    }

    _makePoint(flat, keys, label, weight) {
        // Project onto 2D
        const x = flat.reduce((s,v,i)=>s+v*this.basis1[i], 0);
        const y = flat.reduce((s,v,i)=>s+v*this.basis2[i], 0);
        // Fitness proxy: diversity of values × mean
        const mean = flat.reduce((s,v)=>s+v,0)/flat.length;
        const variance = flat.reduce((s,v)=>s+(v-mean)**2,0)/flat.length;
        const fitness = mean * 0.5 + variance * 2;

        // Reconstruct genome from flat
        const genome = {};
        let idx = 0;
        keys.forEach(k => { genome[k] = flat.slice(idx, idx+5); idx+=5; });

        return { genome, x, y, fitness: Math.min(1,fitness), label, weight };
    }

    render(canvas, selectedIdx = 0) {
        const ctx = canvas.getContext('2d');
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#030810'; ctx.fillRect(0, 0, W, H);

        if (!this.cloud.length) {
            ctx.fillStyle = '#2a4a6a'; ctx.font = '11px Jost,sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Generate a genome to explore possibility space', W/2, H/2);
            return;
        }

        // Normalise x,y to canvas coords
        const xs = this.cloud.map(p=>p.x), ys = this.cloud.map(p=>p.y);
        const minX=Math.min(...xs), maxX=Math.max(...xs);
        const minY=Math.min(...ys), maxY=Math.max(...ys);
        const rangeX = maxX-minX || 1, rangeY = maxY-minY || 1;
        const pad = 30;

        const toCanv = (p) => ({
            cx: pad + (p.x-minX)/rangeX * (W-2*pad),
            cy: pad + (p.y-minY)/rangeY * (H-2*pad),
        });

        // Draw possibility cloud
        this.cloud.forEach((p, i) => {
            const { cx, cy } = toCanv(p);
            const r = 3 + p.fitness * 5;
            const hue = p.fitness * 120; // red → green by fitness
            const isCenter = i === 0;
            const isSel    = i === selectedIdx;

            if (!isCenter) {
                ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2);
                ctx.fillStyle = `hsla(${hue},70%,55%,${0.3+p.fitness*0.5})`;
                ctx.fill();
            }
            if (isSel && !isCenter) {
                ctx.beginPath(); ctx.arc(cx, cy, r+3, 0, Math.PI*2);
                ctx.strokeStyle = '#6aaaff'; ctx.lineWidth = 1.5; ctx.stroke();
            }
        });

        // Draw centre (current genome)
        const centre = toCanv(this.cloud[0]);
        ctx.beginPath(); ctx.arc(centre.cx, centre.cy, 8, 0, Math.PI*2);
        ctx.fillStyle = '#fff'; ctx.fill();
        ctx.beginPath(); ctx.arc(centre.cx, centre.cy, 10, 0, Math.PI*2);
        ctx.strokeStyle = '#6aaaff'; ctx.lineWidth = 2; ctx.stroke();
        ctx.fillStyle = '#fff'; ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'center'; ctx.fillText('NOW', centre.cx, centre.cy + 18);

        // Axes
        ctx.strokeStyle = 'rgba(100,170,255,0.15)';
        ctx.lineWidth = 1;
        ctx.setLineDash([3,6]);
        ctx.beginPath(); ctx.moveTo(pad,H/2); ctx.lineTo(W-pad,H/2); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(W/2,pad); ctx.lineTo(W/2,H-pad); ctx.stroke();
        ctx.setLineDash([]);

        // Legend
        ctx.fillStyle = '#3a6a8a'; ctx.font = '9px monospace'; ctx.textAlign = 'left';
        ctx.fillText('PC1 →', W-pad-24, H/2-4);
        ctx.fillText('PC2 ↑', W/2+4, pad+10);
        ctx.fillStyle = '#2a5a7a'; ctx.font = '10px Jost,sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(`${this.cloud.length} possible states`, W/2, H-8);
    }

    getCloud() { return this.cloud; }
}

// ─── TRANSFINITE INTELLIGENCE NETWORK ────────────────────────────────────────
// Cross-universe AI agents that share observations and reason about the whole
// multiverse, building a meta-intelligence layer above individual agents.

class TransfiniteIntelNet {
    constructor() {
        this.agents      = [];   // one per universe
        this.sharedMind  = [];   // pooled observations
        this.laws        = [];   // universal laws passed in from ConvergentLawDetector
        this.insights    = [];   // cross-universe insights generated here
        this.tick        = 0;
    }

    // Register an agent for a universe
    registerAgent(universeId, universeName) {
        if (!this.agents.find(a => a.id === universeId)) {
            this.agents.push({
                id:   universeId,
                name: universeName,
                observations: [],
                iq:   0,
            });
        }
    }

    // Feed a universe's state into its agent
    observe(universeId, state, consciousnessIndex = 0) {
        const agent = this.agents.find(a => a.id === universeId);
        if (!agent) return;
        agent.iq = consciousnessIndex;
        const obs = {
            tick:   this.tick,
            bio:    state.biodiversityIndex,
            temp:   state.temperature,
            ci:     consciousnessIndex,
            co2:    state.co2,
            species:state.speciesCount,
        };
        agent.observations.push(obs);
        if (agent.observations.length > 20) agent.observations.shift();
        this.sharedMind.push({ ...obs, universeId, universeName: agent.name });
        if (this.sharedMind.length > 200) this.sharedMind.shift();
    }

    // Generate cross-universe insights by comparing agent observations
    synthesise() {
        this.tick++;
        if (this.tick % 20 !== 0 || this.agents.length < 2) return;

        const insights = [];
        const activeAgents = this.agents.filter(a => a.observations.length > 3);
        if (activeAgents.length < 2) return;

        // Compare biodiversity trajectories
        const bioSlopes = activeAgents.map(a => {
            const obs = a.observations;
            const slope = obs.length > 1 ? obs[obs.length-1].bio - obs[0].bio : 0;
            return { name: a.name, slope };
        });
        const allUp   = bioSlopes.every(b => b.slope > 0.01);
        const allDown = bioSlopes.every(b => b.slope < -0.01);

        if (allUp)   insights.push(`All ${activeAgents.length} observed universes show biodiversity growth — universal expansion phase.`);
        if (allDown) insights.push(`Universal biodiversity decline detected across ${activeAgents.length} realities — meta-collapse risk.`);

        // Cross-reference universal laws
        this.laws.forEach(law => {
            const triggered = activeAgents.filter(a => {
                const last = a.observations[a.observations.length-1];
                return last && law.test(last);
            });
            if (triggered.length >= 2) {
                insights.push(`Universal law "${law.label}" active in ${triggered.length} universes simultaneously.`);
            }
        });

        // Avg consciousness across all agents
        const avgCI = activeAgents.reduce((s,a) => s + (a.iq||0), 0) / activeAgents.length;
        if (avgCI > 0.3) insights.push(`Collective consciousness IQ across observed universes: ${(avgCI*100).toFixed(1)}%.`);

        if (insights.length) {
            this.insights.unshift({ tick: this.tick, texts: insights });
            if (this.insights.length > 30) this.insights.pop();
        }
    }

    setLaws(laws) { this.laws = laws; }
    getInsights() { return this.insights; }
    getAgents()   { return this.agents; }
}

// ─── V8 ENGINE ────────────────────────────────────────────────────────────────
class V8Engine {
    constructor() {
        this.lawDetector   = new ConvergentLawDetector();
        this.awarenessField= new AwarenessFieldRenderer();
        this.possibility   = new PossibilitySpaceExplorer();
        this.intelNet      = new TransfiniteIntelNet();
        this.tick          = 0;
        this.onTick        = null;
    }

    // Feed all universe states
    update(universes, v6State = null) {
        this.tick++;

        universes.forEach(u => {
            const state = u.state || u;
            const ci    = state.consciousnessIndex || 0;
            this.lawDetector.observeUniverse(u.id || u.name, state);
            this.intelNet.registerAgent(u.id || u.name, u.name || u.id);
            this.intelNet.observe(u.id || u.name, state, ci);
        });

        this.intelNet.setLaws(this.lawDetector.getLaws());
        this.intelNet.synthesise();

        // Seed awareness field from consciousness hotspots
        if (this.tick % 5 === 0) {
            const hotspots = [
                [0, -60, v6State?.consciousness?.value || 0.1],   // Amazon
                [60, 90, (v6State?.consciousness?.value||0)*0.7],  // Siberia
                [-30, 25, (v6State?.consciousness?.value||0)*0.5], // Africa
            ];
            this.awarenessField.seed(hotspots);
            this.awarenessField.step(0.035, 0.065, 3);
        }

        if (this.onTick) this.onTick(this.tick);
    }

    explorePossibility(genome) {
        this.possibility.explore(genome, 60, 0.06);
    }

    renderAwarenessOn(targetCanvas, hue = 260, alpha = 0.3) {
        const fieldCanvas = this.awarenessField.toCanvas(hue, alpha);
        const ctx = targetCanvas.getContext('2d');
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.drawImage(fieldCanvas, 0, 0, targetCanvas.width, targetCanvas.height);
        ctx.restore();
    }

    renderPossibilitySpace(canvas, selectedIdx = 0) {
        this.possibility.render(canvas, selectedIdx);
    }

    getLaws()          { return this.lawDetector.getLaws(); }
    getInsights()      { return this.intelNet.getInsights(); }
    getCloud()         { return this.possibility.getCloud(); }
    getLawHistory()    { return this.lawDetector.getHistory(); }
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
window.BloomV8 = {
    ConvergentLawDetector,
    AwarenessFieldRenderer,
    PossibilitySpaceExplorer,
    TransfiniteIntelNet,
    V8Engine,
    PATTERN_DETECTORS,
};

console.log('[Bloom V8] Universal Semantic engine loaded.');
})();
