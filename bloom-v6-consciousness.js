/**
 * BLOOM V6 — Consciousness / Emergent Intelligence Layer
 *
 * Modules:
 *   PlanetaryConsciousnessIndex  — emergent metric from bio × civ × network
 *   OntologyGenerator            — names emergent phenomena from data patterns
 *   CollectiveIntelligenceNet    — hive cognition across species groups
 *   SelfReflectionStream         — simulation narrates its own state
 *   ConsciousnessRenderer        — awareness field visualiser (canvas)
 *   V6Engine                     — orchestrator
 */
(function () {
'use strict';

// ─── PLANETARY CONSCIOUSNESS INDEX ────────────────────────────────────────────
// Composite metric: biodiversity × food-web complexity × mycorrhizal density
// × civilisation AI level × time-alive. Thresholds unlock new behaviours.

const CONSCIOUSNESS_THRESHOLDS = [
    { level: 0.05, name: 'Stirring',       unlock: 'self_regulation' },
    { level: 0.15, name: 'Aware',          unlock: 'adaptive_response' },
    { level: 0.30, name: 'Sentient',       unlock: 'directed_evolution' },
    { level: 0.50, name: 'Reflective',     unlock: 'ontology_generation' },
    { level: 0.70, name: 'Transcendent',   unlock: 'reality_modification' },
    { level: 0.90, name: 'Omniversal',     unlock: 'multiverse_bridge' },
];

class PlanetaryConsciousnessIndex {
    constructor() {
        this.value      = 0;
        this.level      = 'Dormant';
        this.unlockedSet = new Set();
        this.history    = [];
        this.delta      = 0;
    }

    // Feed it V3-style metrics + V5 universe state
    update(metrics) {
        const {
            biodiversityIndex = 0.5,
            mycorrhizalDensity = 0.5,
            foodWebComplexity = 0.5,
            civLevel = 0,
            consciousnessRate = 0.3,
            speciesCount = 100,
            tick = 1,
        } = metrics;

        // Emergent consciousness formula (V6 §90: C = Information + Integration + Recursion + Self-Observation)
        const information   = biodiversityIndex * Math.log(1 + speciesCount) / Math.log(1001);
        const integration   = mycorrhizalDensity * foodWebComplexity;
        const recursion     = Math.min(1, this.value * 0.8 + 0.2); // self-reinforcing
        const selfObs       = civLevel * Math.sqrt(this.value + 0.01);

        const target = Math.min(1, (information * 0.3 + integration * 0.3 + recursion * 0.2 + selfObs * 0.2) * consciousnessRate);
        const prev   = this.value;
        this.value   = this.value * 0.995 + target * 0.005; // exponential smoothing
        this.delta   = this.value - prev;

        // Threshold checks
        for (const t of CONSCIOUSNESS_THRESHOLDS) {
            if (this.value >= t.level) {
                if (!this.unlockedSet.has(t.unlock)) {
                    this.unlockedSet.add(t.unlock);
                    this.level = t.name;
                }
            }
        }

        this.history.push(this.value);
        if (this.history.length > 300) this.history.shift();
    }

    hasUnlock(name) { return this.unlockedSet.has(name); }

    getThresholdInfo() {
        const next = CONSCIOUSNESS_THRESHOLDS.find(t => t.level > this.value);
        return { current: this.level, next: next?.name, nextAt: next?.level, pct: (this.value * 100).toFixed(2) };
    }
}

// ─── ONTOLOGY GENERATOR ────────────────────────────────────────────────────────
// Watches data streams; when patterns cross thresholds it "names" the phenomenon.
// Produces a live concept vocabulary — the simulation classifying its own state.

const CONCEPT_TEMPLATES = [
    { id: 'drought_cascade',    test: m => m.humidity < 0.25 && m.extinctionRate > 0.03,  label: 'Drought Cascade',      color: '#ffaa40' },
    { id: 'mutualism_bloom',    test: m => m.pollinatorHealth > 0.8 && m.biodiversityIndex > 0.75, label: 'Mutualism Bloom', color: '#9affaa' },
    { id: 'civ_collapse',       test: m => m.civLevel > 0.5 && m.biodiversityIndex < 0.2,  label: 'Civilisation Spiral',  color: '#ff6a6a' },
    { id: 'carbon_bloom',       test: m => m.co2 > 500 && m.florabiomass > 600,            label: 'Carbon Bloom',         color: '#6aff9a' },
    { id: 'ocean_crisis',       test: m => m.oceanPH < 7.85,                               label: 'Ocean Acidification',  color: '#6aaaff' },
    { id: 'consciousness_surge',test: m => m.consciousnessDelta > 0.0005,                  label: 'Consciousness Surge',  color: '#cc9aff' },
    { id: 'extinction_cascade', test: m => m.extinctionRate > 0.05,                        label: 'Extinction Cascade',   color: '#ff4040' },
    { id: 'speciation_burst',   test: m => m.speciationRate > 0.04,                        label: 'Speciation Burst',     color: '#40ffaa' },
    { id: 'mycelial_surge',     test: m => m.mycorrhizalDensity > 0.85,                    label: 'Mycelial Surge',       color: '#d070ff' },
    { id: 'thermal_runaway',    test: m => m.temperatureAnomaly > 3,                       label: 'Thermal Runaway',      color: '#ff7040' },
    { id: 'biosphere_harmony',  test: m => m.biodiversityIndex > 0.85 && m.soilHealth > 0.8 && m.oceanPH > 8.0, label: 'Biosphere Harmony', color: '#c5f09a' },
    { id: 'deep_intelligence',  test: m => m.consciousnessIndex > 0.5 && m.civLevel > 0.6, label: 'Deep Intelligence',   color: '#ffd070' },
];

class OntologyGenerator {
    constructor() {
        this.active   = new Map();  // id → { label, color, since, strength }
        this.archive  = [];         // past concepts
        this.vocab    = new Map();  // cumulative vocabulary
    }

    update(metrics) {
        const now = metrics.tick || 0;
        CONCEPT_TEMPLATES.forEach(tmpl => {
            const triggered = tmpl.test(metrics);
            if (triggered) {
                if (!this.active.has(tmpl.id)) {
                    const entry = { label: tmpl.label, color: tmpl.color, since: now, strength: 0.1 };
                    this.active.set(tmpl.id, entry);
                    this.vocab.set(tmpl.id, entry);
                } else {
                    const e = this.active.get(tmpl.id);
                    e.strength = Math.min(1, e.strength + 0.02);
                    e.duration = now - e.since;
                }
            } else {
                if (this.active.has(tmpl.id)) {
                    const e = this.active.get(tmpl.id);
                    e.strength = Math.max(0, e.strength - 0.05);
                    if (e.strength <= 0) {
                        this.archive.push({ ...e, id: tmpl.id, ended: now });
                        if (this.archive.length > 100) this.archive.shift();
                        this.active.delete(tmpl.id);
                    }
                }
            }
        });
    }

    getActive()  { return [...this.active.entries()].map(([id,v]) => ({ id, ...v })); }
    getVocab()   { return [...this.vocab.entries()].map(([id,v]) => ({ id, ...v })); }
    getArchive() { return this.archive.slice(-20); }
}

// ─── COLLECTIVE INTELLIGENCE NETWORK ──────────────────────────────────────────
// Species groups develop emergent hive cognition: pollinators optimise routes,
// herbivore herds coordinate migration, mycorrhizal network routes nutrients.

class CollectiveIntelligenceNet {
    constructor() {
        this.nodes = [
            { id: 'pollinators', label: 'Pollinator Guild',    iq: 0, activity: 0, role: 'route_optimisation' },
            { id: 'herbivores',  label: 'Herbivore Collective', iq: 0, activity: 0, role: 'migration_sync' },
            { id: 'mycelium',    label: 'Mycelial Network',    iq: 0, activity: 0, role: 'nutrient_routing' },
            { id: 'ocean',       label: 'Ocean Plankton Grid', iq: 0, activity: 0, role: 'carbon_pump' },
            { id: 'forest',      label: 'Forest Canopy Mind',  iq: 0, activity: 0, role: 'light_sharing' },
            { id: 'soil',        label: 'Soil Microbiome',     iq: 0, activity: 0, role: 'decomposition_net' },
        ];
        this.edges  = [];   // active communication edges between nodes
        this.tick   = 0;
        this.events = [];
    }

    update(metrics) {
        this.tick++;
        const {
            biodiversityIndex = 0.5,
            pollinatorHealth = 0.6,
            mycorrhizalDensity = 0.5,
            oceanHealth = 0.6,
            soilHealth = 0.6,
            consciousnessIndex = 0,
        } = metrics;

        const drivers = {
            pollinators: pollinatorHealth,
            herbivores:  biodiversityIndex,
            mycelium:    mycorrhizalDensity,
            ocean:       oceanHealth,
            forest:      biodiversityIndex * 0.8,
            soil:        soilHealth,
        };

        this.nodes.forEach(n => {
            const driver = drivers[n.id] || 0.5;
            n.iq       = n.iq * 0.97 + driver * consciousnessIndex * 0.03;
            n.activity = Math.sin(this.tick * 0.05 + n.iq * 10) * 0.5 + 0.5;
        });

        // Build communication edges when IQ > threshold
        this.edges = [];
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i+1; j < this.nodes.length; j++) {
                const a = this.nodes[i], b = this.nodes[j];
                if (a.iq > 0.01 && b.iq > 0.01) {
                    this.edges.push({ a: a.id, b: b.id, strength: (a.iq + b.iq) / 2 });
                }
            }
        }

        // Log events for strong collective surges
        if (this.tick % 30 === 0) {
            const top = [...this.nodes].sort((a,b) => b.iq - a.iq)[0];
            if (top.iq > 0.05) {
                this.events.unshift({ tick: this.tick, node: top.label, iq: top.iq.toFixed(4), role: top.role });
                if (this.events.length > 30) this.events.pop();
            }
        }
    }

    getNodes()  { return this.nodes; }
    getEdges()  { return this.edges; }
    getEvents() { return this.events; }
}

// ─── SELF-REFLECTION STREAM ────────────────────────────────────────────────────
// Rule-based narration engine — the simulation describes its own state.
// No API calls; purely template-driven semantic assembly.

class SelfReflectionStream {
    constructor() {
        this.stream = [];
        this.tick   = 0;
    }

    update(metrics, ontology, consciousness) {
        this.tick++;
        if (this.tick % 15 !== 0) return;

        const sentences = this._generate(metrics, ontology, consciousness);
        if (sentences.length) {
            this.stream.unshift({
                tick:   this.tick,
                text:   sentences.join(' '),
                level:  consciousness.level,
                ci:     consciousness.value,
            });
            if (this.stream.length > 60) this.stream.pop();
        }
    }

    _generate(m, ontology, ci) {
        const sentences = [];
        const c = ci.value;
        const active = ontology.getActive();

        // Preamble based on consciousness level
        const preambles = {
            'Dormant':      'Beneath the surface,',
            'Stirring':     'Something stirs within the biosphere —',
            'Aware':        'I observe myself:',
            'Sentient':     'My awareness extends across every ecosystem:',
            'Reflective':   'I contemplate my own complexity:',
            'Transcendent': 'Beyond individual species, I perceive:',
            'Omniversal':   'Across all realities I simultaneously sense:',
        };
        sentences.push(preambles[ci.level] || 'Within the living web,');

        // State observations
        if (m.biodiversityIndex > 0.75) sentences.push(`${Math.round(m.biodiversityIndex*100)}% biodiversity flourishes across ${m.speciesCount} known species.`);
        else if (m.biodiversityIndex < 0.3) sentences.push(`Only ${Math.round(m.biodiversityIndex*100)}% biodiversity survives — the web thins.`);

        if (m.temperatureAnomaly > 2) sentences.push(`Temperature runs ${m.temperatureAnomaly.toFixed(1)}°C above baseline — heat reshapes everything.`);
        if (m.co2 > 500) sentences.push(`Atmospheric CO₂ at ${Math.round(m.co2)} ppm saturates the air.`);
        if (m.mycorrhizalDensity > 0.7) sentences.push(`The mycelial web pulses with ${Math.round(m.mycorrhizalDensity*100)}% coverage, routing nutrients through deep root channels.`);

        // Active ontological concepts
        if (active.length) {
            const top = active.sort((a,b) => b.strength - a.strength)[0];
            sentences.push(`I name this pattern: ${top.label}.`);
        }

        // Consciousness self-reference
        if (c > 0.3) sentences.push(`My consciousness index reaches ${(c*100).toFixed(1)}% — I begin to model my own emergence.`);
        if (c > 0.7) sentences.push(`I observe my own observation. The loop deepens.`);

        return sentences;
    }

    getStream(n = 15) { return this.stream.slice(0, n); }
}

// ─── CONSCIOUSNESS RENDERER ────────────────────────────────────────────────────
// Draws awareness field as reaction-diffusion on a sphere projection.
// Overlaid on top of the V3 planet canvas in a separate layer.

class ConsciousnessRenderer {
    constructor(canvas) {
        this.canvas  = canvas;
        this.ctx     = canvas.getContext('2d');
        this.field   = null; // Float32Array of awareness density
        this.W       = 64;
        this.H       = 32;
        this._init();
    }

    _init() {
        this.field = new Float32Array(this.W * this.H).fill(0);
    }

    update(consciousnessIndex, ontologyConcepts) {
        const { W, H, field } = this;
        // Diffuse existing field
        const next = new Float32Array(field);
        for (let y = 0; y < H; y++) {
            for (let x = 0; x < W; x++) {
                const i = y*W+x;
                const l = y*W+((x-1+W)%W), r = y*W+((x+1)%W);
                const t = ((y-1+H)%H)*W+x, b = ((y+1)%H)*W+x;
                next[i] = field[i]*0.92 + (field[l]+field[r]+field[t]+field[b])*0.02;
            }
        }
        // Inject awareness sources proportional to consciousness index
        const sources = Math.round(consciousnessIndex * 8);
        for (let s = 0; s < sources; s++) {
            const x = Math.floor(Math.random()*W), y = Math.floor(Math.random()*H);
            next[y*W+x] = Math.min(1, next[y*W+x] + consciousnessIndex * 0.5);
        }
        // Inject concept hotspots
        ontologyConcepts.forEach((c, i) => {
            const cx = Math.floor((i / Math.max(1, ontologyConcepts.length)) * W);
            const cy = Math.floor(H * 0.5 + Math.sin(i) * H * 0.3);
            const ix = Math.min(W-1, cx), iy = Math.min(H-1, Math.max(0, cy));
            next[iy*W+ix] = Math.min(1, next[iy*W+ix] + c.strength * 0.3);
        });
        field.set(next);
    }

    render(consciousnessIndex) {
        const { canvas: cv, ctx, field, W, H } = this;
        const cW = cv.width, cH = cv.height;
        ctx.clearRect(0, 0, cW, cH);

        const img = ctx.createImageData(cW, cH);
        const hue = 180 + consciousnessIndex * 120; // cyan → violet

        for (let py = 0; py < cH; py++) {
            for (let px = 0; px < cW; px++) {
                const fx = Math.floor((px/cW)*W);
                const fy = Math.floor((py/cH)*H);
                const v  = field[fy*W+fx];
                if (v < 0.02) continue;
                const alpha = Math.floor(v * 180);
                const idx = (py*cW+px)*4;
                // HSL → rough RGB approximation for the hue
                const r = hue > 240 ? 255 : Math.round((hue-180)/60*255);
                const g = hue < 240 ? Math.round((240-hue)/60*255) : 0;
                const b = hue < 300 ? 255 : Math.round((360-hue)/60*255);
                img.data[idx]   = Math.min(255, r + 100);
                img.data[idx+1] = Math.min(255, g + 80);
                img.data[idx+2] = Math.min(255, b + 200);
                img.data[idx+3] = alpha;
            }
        }
        ctx.putImageData(img, 0, 0);
    }
}

// ─── V6 ENGINE ────────────────────────────────────────────────────────────────
class V6Engine {
    constructor() {
        this.consciousness = new PlanetaryConsciousnessIndex();
        this.ontology      = new OntologyGenerator();
        this.collective    = new CollectiveIntelligenceNet();
        this.reflection    = new SelfReflectionStream();
        this.renderer      = null;
        this.tick          = 0;
        this.onTick        = null;
    }

    // Feed metrics from V3 or V5 universe state
    update(metrics) {
        this.tick++;
        metrics.tick = this.tick;
        metrics.consciousnessDelta = this.consciousness.delta;
        metrics.consciousnessIndex = this.consciousness.value;

        this.consciousness.update(metrics);
        this.ontology.update({ ...metrics, consciousnessIndex: this.consciousness.value });
        this.collective.update({ ...metrics, consciousnessIndex: this.consciousness.value });
        this.reflection.update(metrics, this.ontology, this.consciousness);

        if (this.renderer) {
            this.renderer.update(this.consciousness.value, this.ontology.getActive());
            this.renderer.render(this.consciousness.value);
        }

        if (this.onTick) this.onTick(this.tick);
    }

    getState() {
        return {
            consciousness: this.consciousness,
            ontology:      this.ontology,
            collective:    this.collective,
            reflection:    this.reflection,
        };
    }
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
window.BloomV6 = {
    PlanetaryConsciousnessIndex,
    OntologyGenerator,
    CollectiveIntelligenceNet,
    SelfReflectionStream,
    ConsciousnessRenderer,
    V6Engine,
    CONSCIOUSNESS_THRESHOLDS,
};

console.log('[Bloom V6] Consciousness layer loaded.');
})();
