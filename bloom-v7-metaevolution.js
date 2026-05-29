/**
 * BLOOM V7 — Meta-Evolution Engine
 *
 * Modules:
 *   MetaGA                  — GA that evolves its own GA parameters
 *   RecursiveKnowledgeGraph — knowledge graph of knowledge graphs (fractal)
 *   NonLinearTimeline       — scrub / rewind / fork any point in history
 *   DimensionalMorphogenesis— 4th gene group: non-Euclidean canvas transforms
 *   V7Engine                — orchestrator
 */
(function () {
'use strict';

// ─── META-GA ──────────────────────────────────────────────────────────────────
// A genetic algorithm whose chromosome IS the parameters of the V2/V5 evolution
// engine. Each meta-individual is a set of EA config; selection pressure is
// measured by the diversity output produced under those parameters.

class MetaIndividual {
    constructor(genes = null) {
        this.genes = genes || {
            mutationSigma:       0.05 + Math.random() * 0.25,   // 0.05–0.30
            crossoverRate:       0.3  + Math.random() * 0.5,    // 0.3–0.8
            speciationThreshold: 0.3  + Math.random() * 0.5,    // 0.3–0.8
            selectionPressure:   0.3  + Math.random() * 0.6,    // 0.3–0.9
            populationSize:      Math.round(4 + Math.random()*12), // 4–16
            elitismRate:         0.05 + Math.random() * 0.2,    // 0.05–0.25
            extinctionPressure:  0.01 + Math.random() * 0.09,   // 0.01–0.10
        };
        this.fitness    = 0;
        this.age        = 0;
        this.id         = Math.random().toString(36).slice(2, 8);
        this.lineage    = [];
    }

    mutate(sigma = 0.05) {
        const gauss = () => { let u,v,s; do{u=Math.random()*2-1;v=Math.random()*2-1;s=u*u+v*v;}while(s>=1); return u*Math.sqrt(-2*Math.log(s)/s); };
        const child = new MetaIndividual(JSON.parse(JSON.stringify(this.genes)));
        Object.keys(child.genes).forEach(k => {
            child.genes[k] = Math.max(0.001, child.genes[k] + gauss() * sigma);
        });
        child.genes.populationSize = Math.round(Math.max(2, Math.min(20, child.genes.populationSize)));
        child.lineage = [this.id];
        return child;
    }

    crossover(other) {
        const child = new MetaIndividual();
        Object.keys(this.genes).forEach(k => {
            child.genes[k] = Math.random() < 0.5 ? this.genes[k] : other.genes[k];
        });
        child.lineage = [this.id, other.id];
        return child;
    }

    // Evaluate fitness: simulate a mini-ecosystem under these EA params and
    // measure resulting diversity. Higher diversity = better EA.
    evaluate() {
        const { mutationSigma, crossoverRate, speciationThreshold, selectionPressure,
                populationSize, elitismRate, extinctionPressure } = this.genes;

        // Mini-simulation: random walk species pool under these parameters
        let species = populationSize;
        let diversity = species / 20;
        let events = 0;

        for (let t = 0; t < 50; t++) {
            // Speciation
            if (Math.random() < mutationSigma * crossoverRate * 0.5) {
                species += 1; events++;
            }
            // Extinction
            if (Math.random() < extinctionPressure + selectionPressure * 0.05) {
                species = Math.max(1, species - 1);
            }
            // Elitism: preserve top fraction
            diversity = (species / Math.max(populationSize, 1)) * (1 - Math.abs(speciationThreshold - 0.5));
        }

        this.fitness = Math.min(1, diversity * (events / 10 + 0.1));
        this.age++;
        return this.fitness;
    }
}

class MetaGA {
    constructor(popSize = 8) {
        this.population  = Array.from({ length: popSize }, () => new MetaIndividual());
        this.generation  = 0;
        this.best        = null;
        this.history     = [];   // [{ gen, bestFitness, avgFitness }]
        this.lineageTree = [];   // parent-child pairs
    }

    step() {
        // Evaluate all
        this.population.forEach(ind => ind.evaluate());
        this.population.sort((a,b) => b.fitness - a.fitness);

        const best = this.population[0];
        const avg  = this.population.reduce((s,i) => s+i.fitness, 0) / this.population.length;
        this.best  = best;
        this.history.push({ gen: this.generation, bestFitness: best.fitness, avgFitness: avg });
        if (this.history.length > 200) this.history.shift();

        // Next generation: keep top 25%, breed rest
        const eliteCount = Math.max(1, Math.round(this.population.length * 0.25));
        const elites     = this.population.slice(0, eliteCount);
        const children   = [];

        while (children.length < this.population.length - eliteCount) {
            const p1 = elites[Math.floor(Math.random() * elites.length)];
            const p2 = this.population[Math.floor(Math.random() * this.population.length)];
            const child = Math.random() < (best.genes.crossoverRate || 0.5)
                ? p1.crossover(p2)
                : p1.mutate(best.genes.mutationSigma || 0.05);
            children.push(child);
            this.lineageTree.push({ parent: p1.id, child: child.id, gen: this.generation });
        }
        if (this.lineageTree.length > 500) this.lineageTree.splice(0, 100);

        this.population = [...elites, ...children];
        this.generation++;
        return { best: best.genes, fitness: best.fitness, generation: this.generation };
    }

    getBestGenes()  { return this.best?.genes || null; }
    getHistory()    { return this.history; }
    getLineage()    { return this.lineageTree.slice(-80); }
    getPopulation() { return this.population; }
}

// ─── RECURSIVE KNOWLEDGE GRAPH ────────────────────────────────────────────────
// Nodes = concepts; edges = relationships between concepts.
// Meta-level: edges can themselves be nodes (relationships about relationships).

class RKGNode {
    constructor(id, label, type = 'concept', value = 0.5) {
        this.id       = id;
        this.label    = label;
        this.type     = type;   // 'concept' | 'relation' | 'meta-relation'
        this.value    = value;
        this.edges    = [];     // edge IDs
        this.depth    = 0;      // 0=concept, 1=relation, 2=meta-relation
        this.created  = Date.now();
    }
}

class RecursiveKnowledgeGraph {
    constructor() {
        this.nodes   = new Map();
        this.edges   = new Map();
        this._nextId = 0;
        this._seed();
    }

    _seed() {
        // Core concept nodes
        const concepts = [
            'Atmosphere','Ocean','Biosphere','Soil','Evolution',
            'Civilisation','Consciousness','Multiverse','Time','Energy',
        ];
        concepts.forEach(c => this.addNode(c, 'concept', 0.5));

        // Base relations
        this.addEdge('Atmosphere','Ocean',      'exchanges_with',   0.7);
        this.addEdge('Ocean',     'Biosphere',  'supports',         0.8);
        this.addEdge('Biosphere', 'Soil',       'enriches',         0.7);
        this.addEdge('Evolution', 'Biosphere',  'shapes',           0.9);
        this.addEdge('Civilisation','Atmosphere','modifies',         0.85);
        this.addEdge('Consciousness','Evolution','transcends',       0.5);
        this.addEdge('Multiverse','Time',       'contains',         0.6);
        this.addEdge('Energy',   'Atmosphere',  'drives',           0.75);
    }

    addNode(label, type = 'concept', value = 0.5) {
        const id = `n${this._nextId++}`;
        this.nodes.set(id, new RKGNode(id, label, type, value));
        return id;
    }

    addEdge(fromLabel, toLabel, relLabel, strength = 0.5) {
        const from = [...this.nodes.values()].find(n => n.label === fromLabel);
        const to   = [...this.nodes.values()].find(n => n.label === toLabel);
        if (!from || !to) return null;

        const eId = `e${this._nextId++}`;
        this.edges.set(eId, { id: eId, from: from.id, to: to.id, label: relLabel, strength, depth: 0 });
        from.edges.push(eId);

        // Meta-level: if graph is mature, add this edge as a node too (depth 1)
        if (this.nodes.size > 8 && Math.random() < 0.3) {
            const metaId = this.addNode(`[${from.label} ${relLabel} ${to.label}]`, 'relation', strength);
            const metaNode = this.nodes.get(metaId);
            metaNode.depth = 1;
            // Connect meta-node to concepts it references
            this.edges.set(`me${this._nextId++}`, { from: metaId, to: from.id, label: 'describes', strength: 0.4, depth: 1 });
        }
        return eId;
    }

    // Evolve the graph: strengthen active edges, add new relations from ontology concepts
    evolve(ontologyConcepts) {
        // Strengthen edges based on active concepts
        ontologyConcepts.forEach(c => {
            this.edges.forEach(e => {
                if (e.strength < 0.99) e.strength += 0.001;
            });
            // Add new ontology concept as node if not present
            const exists = [...this.nodes.values()].find(n => n.label === c.label);
            if (!exists && this.nodes.size < 40) {
                this.addNode(c.label, 'concept', c.strength);
                // Connect to a random existing concept
                const existing = [...this.nodes.values()].filter(n => n.type === 'concept');
                if (existing.length) {
                    const target = existing[Math.floor(Math.random()*existing.length)];
                    this.addEdge(c.label, target.label, 'relates_to', c.strength);
                }
            }
        });

        // Prune very weak edges
        this.edges.forEach((e, id) => {
            e.strength -= 0.0005;
            if (e.strength < 0.05) this.edges.delete(id);
        });
    }

    getForRender(maxNodes = 30) {
        const nodes = [...this.nodes.values()].slice(0, maxNodes);
        const edges = [...this.edges.values()].filter(
            e => nodes.some(n=>n.id===e.from) && nodes.some(n=>n.id===e.to)
        );
        return { nodes, edges };
    }

    stats() {
        return { nodes: this.nodes.size, edges: this.edges.size,
                 depth2: [...this.nodes.values()].filter(n=>n.depth>=1).length };
    }
}

// ─── NON-LINEAR TIMELINE ──────────────────────────────────────────────────────
// Records full state snapshots at key ticks; lets user scrub to any point,
// rewind, or inject a past state as the current one (temporal fork).

class NonLinearTimeline {
    constructor(maxSnapshots = 50) {
        this.max         = maxSnapshots;
        this.snapshots   = [];   // { tick, state, label }
        this.branches    = [];   // { fromTick, toBranch, label }
        this.cursor      = -1;  // which snapshot we're viewing (-1 = live)
        this.currentTick = 0;
    }

    record(tick, state, label = '') {
        this.currentTick = tick;
        if (this.snapshots.length >= this.max) this.snapshots.shift();
        this.snapshots.push({
            tick,
            state:  JSON.parse(JSON.stringify(state)),
            label:  label || `Tick ${tick}`,
            ts:     Date.now(),
        });
    }

    // Return snapshot at index (or null if out of range)
    seek(idx) {
        if (idx < 0 || idx >= this.snapshots.length) return null;
        this.cursor = idx;
        return this.snapshots[idx];
    }

    seekLive() { this.cursor = -1; }

    rewind(steps = 1) {
        const target = this.cursor === -1
            ? this.snapshots.length - 1 - steps
            : Math.max(0, this.cursor - steps);
        return this.seek(target);
    }

    forward(steps = 1) {
        if (this.cursor === -1) return null;
        const target = this.cursor + steps;
        if (target >= this.snapshots.length) { this.seekLive(); return null; }
        return this.seek(target);
    }

    // Fork: mark current cursor as a branch point; caller uses returned snapshot
    fork(label = 'Fork') {
        const snap = this.cursor === -1
            ? this.snapshots[this.snapshots.length - 1]
            : this.snapshots[this.cursor];
        if (!snap) return null;
        this.branches.push({ fromTick: snap.tick, label, ts: Date.now() });
        return snap;
    }

    isLive()        { return this.cursor === -1; }
    getCursor()     { return this.cursor; }
    getSnapshots()  { return this.snapshots; }
    getBranches()   { return this.branches; }
    getCurrent()    { return this.cursor >= 0 ? this.snapshots[this.cursor] : this.snapshots[this.snapshots.length-1]; }
}

// ─── DIMENSIONAL MORPHOGENESIS ────────────────────────────────────────────────
// Adds a 4th "dimensional" gene group to V4 genomes:
// topology genes warp the canvas transform during flower rendering.
// Results: hyperbolic flowers, Möbius leaf structures, fractal petal recursion.

class DimensionalMorphogenesis {
    // Returns a set of canvas transform functions derived from a dimension genome
    static interpretDimensionGenes(dimGenes = [0.5,0.5,0.5,0.5,0.5]) {
        return {
            // Hyperbolic scaling: radius grows non-linearly
            radialWarp:    dimGenes[0],   // 0=linear, 1=hyperbolic
            // Rotation accumulation per petal (Möbius-like)
            rotationDrift: (dimGenes[1] - 0.5) * Math.PI * 0.5,
            // Fractal recursion depth (0=none, 1=max 3 levels)
            fractalDepth:  Math.round(dimGenes[2] * 3),
            // Mirror symmetry across extra axis
            mirrorAxes:    Math.round(dimGenes[3] * 4),
            // Scale oscillation (breathing)
            scaleWave:     dimGenes[4],
        };
    }

    // Render a dimensionally-warped flower on the given ctx
    static render(ctx, cx, cy, radius, params, dimGenes) {
        const dp = this.interpretDimensionGenes(dimGenes);
        const { petalCount, hue, saturation, lightness, goldenAngle } = params;
        const goldenRad = (goldenAngle || 137.5) * Math.PI / 180;

        ctx.save();

        for (let level = 0; level <= dp.fractalDepth; level++) {
            const scaleFactor = Math.pow(0.55, level);
            const r = radius * scaleFactor;

            for (let n = 0; n < petalCount; n++) {
                const baseAngle = n * goldenRad + dp.rotationDrift * level;

                // Radial warp: hyperbolic distortion
                const warpedR = dp.radialWarp > 0.5
                    ? r * (1 + Math.sinh(dp.radialWarp * 1.5) * 0.3)
                    : r;

                // Scale oscillation
                const wave = 1 + Math.sin(n * dp.scaleWave * Math.PI * 2) * 0.15;

                const tipX = cx + warpedR * wave * Math.cos(baseAngle);
                const tipY = cy + warpedR * wave * Math.sin(baseAngle);
                const wid  = r * (params.petalWidth || 0.25) * wave;
                const perpX = -Math.sin(baseAngle), perpY = Math.cos(baseAngle);

                const grad = ctx.createLinearGradient(cx, cy, tipX, tipY);
                const lShift = level * -8;
                grad.addColorStop(0,   `hsla(${hue},${saturation}%,${lightness+20+lShift}%,${0.9-level*0.2})`);
                grad.addColorStop(1,   `hsla(${(hue+30)%360},${saturation}%,${lightness+lShift}%,${0.7-level*0.2})`);

                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.bezierCurveTo(
                    cx + perpX*wid, cy + perpY*wid,
                    tipX + perpX*wid*0.3, tipY + perpY*wid*0.3, tipX, tipY
                );
                ctx.bezierCurveTo(
                    tipX - perpX*wid*0.3, tipY - perpY*wid*0.3,
                    cx - perpX*wid, cy - perpY*wid, cx, cy
                );
                ctx.fillStyle = grad;
                ctx.fill();

                // Mirror axes
                if (dp.mirrorAxes > 0) {
                    for (let m = 1; m <= dp.mirrorAxes; m++) {
                        ctx.save();
                        ctx.translate(cx, cy);
                        ctx.rotate((m / dp.mirrorAxes) * Math.PI * 2);
                        ctx.translate(-cx, -cy);
                        ctx.beginPath();
                        ctx.moveTo(cx, cy);
                        ctx.lineTo(tipX, tipY);
                        ctx.strokeStyle = `hsla(${(hue+60)%360},60%,60%,0.15)`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            }
        }

        // Centre
        ctx.beginPath();
        ctx.arc(cx, cy, radius * (params.centerRadius || 0.08), 0, Math.PI*2);
        const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius*0.1);
        cg.addColorStop(0, `hsl(${(hue+60)%360},80%,85%)`);
        cg.addColorStop(1, `hsl(${(hue+30)%360},70%,55%)`);
        ctx.fillStyle = cg; ctx.fill();

        ctx.restore();
    }
}

// ─── V7 ENGINE ────────────────────────────────────────────────────────────────
class V7Engine {
    constructor() {
        this.metaGA    = new MetaGA(8);
        this.rkg       = new RecursiveKnowledgeGraph();
        this.timeline  = new NonLinearTimeline(50);
        this.dimMorph  = DimensionalMorphogenesis;
        this.tick      = 0;
        this.running   = false;
        this.interval  = null;
        this.onTick    = null;

        // Default dimension genes (can be edited in UI)
        this.dimGenes  = [0.3, 0.5, 0.4, 0.2, 0.6];
    }

    start(tickMs = 800) {
        if (this.running) return;
        this.running = true;
        this.interval = setInterval(() => this._tick(), tickMs);
    }

    stop() {
        this.running = false;
        clearInterval(this.interval);
    }

    _tick() {
        this.tick++;
        // Step meta-GA
        const result = this.metaGA.step();
        // Evolve RKG using V6 ontology if available
        const ontConcepts = window.bloomV6State?.ontologyConcepts || [];
        this.rkg.evolve(ontConcepts);
        // Record timeline snapshot
        if (this.tick % 5 === 0) {
            this.timeline.record(this.tick, {
                metaBestFitness: result.fitness,
                metaGeneration:  result.generation,
                rkg:             this.rkg.stats(),
                bestGenes:       result.best,
            });
        }
        if (this.onTick) this.onTick(this.tick, result);
    }

    stepMetaGA()         { return this.metaGA.step(); }
    getRKGForRender()    { return this.rkg.getForRender(); }
    getTimeline()        { return this.timeline; }
    seekTimeline(idx)    { return this.timeline.seek(idx); }
    forkTimeline(label)  { return this.timeline.fork(label); }

    setDimGenes(genes)   { this.dimGenes = genes; }
    getDimGenes()        { return this.dimGenes; }

    renderDimFlower(canvas, genome) {
        if (!genome) return;
        const { MorphologyInterpreter } = window.BloomV4 || {};
        if (!MorphologyInterpreter) return;
        const params = new MorphologyInterpreter(genome).interpret();
        const ctx = canvas.getContext('2d');
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#080f09'; ctx.fillRect(0, 0, W, H);
        DimensionalMorphogenesis.render(ctx, W/2, H/2, Math.min(W,H)*0.38, params, this.dimGenes);
    }

    exportState() {
        return {
            version: 'V7', tick: this.tick,
            metaGA:  { generation: this.metaGA.generation, bestFitness: this.metaGA.best?.fitness },
            rkg:     this.rkg.stats(),
            timeline:{ snapshots: this.timeline.snapshots.length, branches: this.timeline.branches.length },
        };
    }
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
window.BloomV7 = {
    MetaGA, MetaIndividual,
    RecursiveKnowledgeGraph, RKGNode,
    NonLinearTimeline,
    DimensionalMorphogenesis,
    V7Engine,
};

console.log('[Bloom V7] Meta-evolution engine loaded.');
})();
