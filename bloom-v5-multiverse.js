/**
 * BLOOM V5 — Multiverse / Self-Evolving Physics Engine
 *
 * Modules:
 *   PhysicsConstants     — mutable simulation physics that drift via meta-GA
 *   UniverseInstance     — one independent planetary state
 *   UniversePool         — manages N parallel universes
 *   TimelineBranching    — fork/navigate history at branch points
 *   MultiversalEcology   — cross-universe species migration events
 *   MultiverseRenderer   — canvas minimap of all universes + timeline tree
 *   V5Engine             — orchestrator / public API
 */
(function () {
'use strict';

// ─── PHYSICS CONSTANTS (mutable, self-evolving) ───────────────────────────────
class PhysicsConstants {
    constructor(seed = {}) {
        // Core simulation physics — all 0-1 normalised weights
        this.gravityStrength      = seed.gravityStrength      ?? 0.5;  // tectonic / plate velocity
        this.energyTransferRate   = seed.energyTransferRate   ?? 0.5;  // trophic efficiency multiplier
        this.mutationPressure     = seed.mutationPressure     ?? 0.4;  // base genome mutation σ
        this.speciationThreshold  = seed.speciationThreshold  ?? 0.5;  // divergence D needed to speciate
        this.extinctionBaseline   = seed.extinctionBaseline   ?? 0.3;  // background extinction rate
        this.co2Sensitivity       = seed.co2Sensitivity       ?? 0.5;  // climate feedback strength
        this.consciousnessRate    = seed.consciousnessRate    ?? 0.3;  // how fast consciousness accumulates
        this.timeDialation        = seed.timeDialation        ?? 1.0;  // simulated time multiplier

        // Meta-GA: these evolve the physics constants themselves
        this.metaMutationSigma    = seed.metaMutationSigma    ?? 0.02;
        this.metaStability        = seed.metaStability        ?? 0.7;  // resistance to change
        this._age                 = 0;
    }

    // One tick of physics evolution — constants drift slowly
    evolve() {
        this._age++;
        if (this._age % 50 !== 0) return; // evolve every 50 ticks

        const gauss = () => {
            let u, v, s;
            do { u = Math.random()*2-1; v = Math.random()*2-1; s = u*u+v*v; } while (s >= 1);
            return u * Math.sqrt(-2*Math.log(s)/s);
        };
        const drift = (v) => {
            if (Math.random() < this.metaStability) return v; // stable most of the time
            return Math.max(0.01, Math.min(0.99, v + gauss() * this.metaMutationSigma));
        };

        this.gravityStrength     = drift(this.gravityStrength);
        this.energyTransferRate  = drift(this.energyTransferRate);
        this.mutationPressure    = drift(this.mutationPressure);
        this.speciationThreshold = drift(this.speciationThreshold);
        this.extinctionBaseline  = drift(this.extinctionBaseline);
        this.co2Sensitivity      = drift(this.co2Sensitivity);
        this.consciousnessRate   = drift(this.consciousnessRate);
    }

    // Fitness of this physics set — measured by diversity × stability
    fitness(universeState) {
        const div = universeState.biodiversityIndex || 0.5;
        const stab = 1 - Math.abs(universeState.temperatureAnomaly || 0) / 10;
        return (div * 0.6 + Math.max(0, stab) * 0.4);
    }

    clone() {
        return new PhysicsConstants(JSON.parse(JSON.stringify(this)));
    }

    toJSON() {
        return {
            gravityStrength: this.gravityStrength,
            energyTransferRate: this.energyTransferRate,
            mutationPressure: this.mutationPressure,
            speciationThreshold: this.speciationThreshold,
            extinctionBaseline: this.extinctionBaseline,
            co2Sensitivity: this.co2Sensitivity,
            consciousnessRate: this.consciousnessRate,
            timeDialation: this.timeDialation,
            metaMutationSigma: this.metaMutationSigma,
            metaStability: this.metaStability,
        };
    }
}

// ─── TIMELINE BRANCH POINT ───────────────────────────────────────────────────
class BranchPoint {
    constructor(universeId, tick, event, snapshot) {
        this.id          = `bp_${Date.now()}_${Math.random().toString(36).slice(2,6)}`;
        this.universeId  = universeId;
        this.tick        = tick;
        this.event       = event;       // 'extinction' | 'speciation' | 'climate_shift' | 'fork'
        this.snapshot    = snapshot;    // deep copy of universe state at this point
        this.children    = [];          // child branch IDs spawned from here
        this.parentId    = null;
        this.timestamp   = Date.now();
    }
}

// ─── UNIVERSE INSTANCE ────────────────────────────────────────────────────────
// A lightweight independent planetary state that runs in parallel.
// Integrates with V3 data if available, otherwise runs standalone.

class UniverseInstance {
    constructor(id, physics, parentSnapshot = null) {
        this.id       = id;
        this.name     = this._generateName();
        this.physics  = physics.clone();
        this.tick     = 0;
        this.age      = 0;           // simulated years
        this.alive    = true;
        this.collapsed = false;

        // Core state (mirrors V3 metrics but independent)
        this.state = parentSnapshot ? this._fromSnapshot(parentSnapshot) : this._initState();

        // History ring (last 200 ticks for sparklines)
        this.history = {
            biodiversity: [],
            temperature:  [],
            consciousness: [],
            species:      [],
        };

        // Branch points this universe has recorded
        this.branchPoints = [];

        // Incoming migrant species from other universes
        this.migrants = [];
    }

    _generateName() {
        const prefixes = ['Alpha','Beta','Gamma','Delta','Epsilon','Zeta','Eta','Theta','Iota','Kappa'];
        const suffixes = ['Prime','Nexus','Bloom','Terra','Gaia','Vera','Nova','Flux','Aeon','Echo'];
        return prefixes[Math.floor(Math.random()*prefixes.length)] + '-' +
               suffixes[Math.floor(Math.random()*suffixes.length)];
    }

    _initState() {
        return {
            // Climate
            co2:                  400 + Math.random() * 80,
            temperature:          14  + Math.random() * 4,
            temperatureAnomaly:   Math.random() * 1.5,
            humidity:             0.5 + Math.random() * 0.3,
            // Biosphere
            biodiversityIndex:    0.4 + Math.random() * 0.4,
            speciesCount:         Math.round(50 + Math.random() * 200),
            extinctions:          0,
            speciations:          0,
            florabiomass:         300 + Math.random() * 200,
            // Ocean
            oceanPH:              8.1 - Math.random() * 0.1,
            // Consciousness
            consciousnessIndex:   Math.random() * 0.05,
            collectiveIQ:         0,
            // Civilization
            civLevel:             Math.random() * 0.2,
            // Meta
            lastEvent:            'Initialised',
            fitnessScore:         0.5,
            generation:           0,
        };
    }

    _fromSnapshot(snap) {
        return JSON.parse(JSON.stringify(snap));
    }

    // One simulation tick — applies physics constants to state evolution
    tick_sim() {
        if (!this.alive) return;
        this.tick++;
        this.age += Math.round(this.physics.timeDialation * 10000); // years per tick
        this.physics.evolve();

        const s = this.state;
        const p = this.physics;

        // Climate dynamics (CO2 sensitivity affects temperature)
        s.co2 += (0.5 + p.co2Sensitivity * 2) * (0.8 + Math.random() * 0.4);
        s.temperature = 14 + (s.co2 - 400) * 0.008 * p.co2Sensitivity + (Math.random()-0.5)*0.3;
        s.temperatureAnomaly = s.temperature - 15;

        // Biodiversity: energy transfer efficiency drives species richness
        const carryingCapacityFactor = p.energyTransferRate * (1 - Math.abs(s.temperatureAnomaly)/8);
        const extRate = p.extinctionBaseline * (1 + Math.max(0, s.temperatureAnomaly - 2) * 0.3);
        const specRate = p.mutationPressure * carryingCapacityFactor * 0.02;

        if (Math.random() < extRate * 0.1) {
            s.extinctions++;
            s.speciesCount = Math.max(1, s.speciesCount - Math.ceil(Math.random() * 5));
            this._recordBranch('extinction', `${Math.ceil(Math.random()*5)} species lost`);
        }
        if (Math.random() < specRate) {
            s.speciations++;
            s.speciesCount += Math.ceil(Math.random() * 3);
            this._recordBranch('speciation', `New species diverged`);
        }

        // Apply migrants from other universes (invasive effect)
        while (this.migrants.length) {
            const m = this.migrants.shift();
            s.speciesCount += 1;
            s.biodiversityIndex = Math.min(1, s.biodiversityIndex + 0.005);
            s.lastEvent = `Migrant: ${m.name} arrived`;
        }

        s.speciesCount = Math.max(1, s.speciesCount);
        s.biodiversityIndex = Math.min(1, Math.max(0,
            s.speciesCount / 400 * carryingCapacityFactor));
        s.florabiomass = 200 + s.biodiversityIndex * 400 * p.energyTransferRate;
        s.oceanPH = Math.max(7.6, 8.2 - (s.co2 - 280) * 0.001);

        // Consciousness accumulates from biodiversity × time × civilisation
        const cIncrease = s.biodiversityIndex * s.civLevel * p.consciousnessRate * 0.001;
        s.consciousnessIndex = Math.min(1, s.consciousnessIndex + cIncrease);
        s.collectiveIQ = Math.round(s.consciousnessIndex * 1000);
        s.civLevel = Math.min(1, s.civLevel + s.consciousnessIndex * 0.0001);

        // Fitness score for meta-GA selection
        s.fitnessScore = p.fitness(s);

        // Collapse condition: runaway greenhouse or total extinction
        if (s.co2 > 2000 || s.speciesCount < 1) {
            this.collapsed = true;
            this.alive = false;
            s.lastEvent = s.co2 > 2000 ? 'Greenhouse collapse' : 'Biosphere extinction';
        }

        // History
        const push = (arr, v) => { arr.push(v); if (arr.length > 200) arr.shift(); };
        push(this.history.biodiversity,  s.biodiversityIndex);
        push(this.history.temperature,   s.temperature);
        push(this.history.consciousness, s.consciousnessIndex);
        push(this.history.species,       s.speciesCount);
    }

    _recordBranch(event, desc) {
        if (this.branchPoints.length >= 100) this.branchPoints.shift();
        this.branchPoints.push(new BranchPoint(
            this.id, this.tick, event,
            JSON.parse(JSON.stringify(this.state))
        ));
    }

    snapshot() {
        return JSON.parse(JSON.stringify(this.state));
    }
}

// ─── UNIVERSE POOL ────────────────────────────────────────────────────────────
class UniversePool {
    constructor(maxUniverses = 6) {
        this.max      = maxUniverses;
        this.universes = [];
        this.nextId   = 0;

        // Spawn initial universe using V3 state if available
        this._spawnInitial();
    }

    _spawnInitial() {
        const physics = new PhysicsConstants();
        const u = new UniverseInstance(`u${this.nextId++}`, physics);
        // Bootstrap from V3 state if it exists
        if (window.bloomV3State) {
            const v3 = window.bloomV3State;
            if (v3.temperature)       u.state.temperature = v3.temperature;
            if (v3.co2)               u.state.co2 = v3.co2;
            if (v3.biodiversityIndex) u.state.biodiversityIndex = v3.biodiversityIndex;
        }
        this.universes.push(u);
    }

    // Spawn a new universe — optionally forked from an existing one
    spawn(parentId = null) {
        if (this.universes.length >= this.max) return null;
        const parent = parentId ? this.universes.find(u => u.id === parentId) : null;
        const physics = parent
            ? parent.physics.clone()
            : new PhysicsConstants();
        // Mutate physics for the child
        const childPhysics = this._mutatePhysics(physics);
        const snap = parent ? parent.snapshot() : null;
        const u = new UniverseInstance(`u${this.nextId++}`, childPhysics, snap);
        u.state.lastEvent = parent ? `Forked from ${parent.name}` : 'Big Bang';
        this.universes.push(u);
        return u;
    }

    _mutatePhysics(p) {
        const child = p.clone();
        const keys = ['gravityStrength','energyTransferRate','mutationPressure',
                      'speciationThreshold','extinctionBaseline','co2Sensitivity'];
        keys.forEach(k => {
            child[k] = Math.max(0.01, Math.min(0.99, p[k] + (Math.random()-0.5)*0.15));
        });
        return child;
    }

    destroy(id) {
        this.universes = this.universes.filter(u => u.id !== id);
    }

    // Run one tick across all living universes
    tick() {
        this.universes.forEach(u => { if (u.alive) u.tick_sim(); });

        // Meta-GA: every 200 ticks, eliminate weakest and spawn replacement
        const allTick = this.universes[0]?.tick || 0;
        if (allTick > 0 && allTick % 200 === 0 && this.universes.length >= 2) {
            const sorted = [...this.universes].sort((a,b) =>
                (b.state.fitnessScore||0) - (a.state.fitnessScore||0));
            const weakest = sorted[sorted.length - 1];
            if (weakest && weakest.state.fitnessScore < 0.25) {
                this.destroy(weakest.id);
                const best = sorted[0];
                this.spawn(best.id);
            }
        }
    }

    get(id) { return this.universes.find(u => u.id === id); }
    getAll() { return this.universes; }
    getPrimary() { return this.universes[0] || null; }
}

// ─── TIMELINE BRANCHING ───────────────────────────────────────────────────────
class TimelineBranching {
    constructor(pool) {
        this.pool       = pool;
        this.tree       = [];   // flat list of all BranchPoints across all universes
        this.activeFork = null; // currently inspecting this fork
    }

    collectBranches() {
        this.tree = [];
        this.pool.getAll().forEach(u => {
            u.branchPoints.forEach(bp => this.tree.push(bp));
        });
        // Sort by tick
        this.tree.sort((a,b) => a.tick - b.tick);
        return this.tree;
    }

    // Fork a universe at a branch point — creates a new universe from that snapshot
    forkAt(branchPointId) {
        const bp = this.tree.find(b => b.id === branchPointId);
        if (!bp) return null;
        const parent = this.pool.get(bp.universeId);
        if (!parent) return null;
        const child = this.pool.spawn(parent.id);
        if (!child) return null;
        // Restore state to branch point snapshot
        child.state = JSON.parse(JSON.stringify(bp.snapshot));
        child.tick  = bp.tick;
        child.state.lastEvent = `Forked at tick ${bp.tick}: ${bp.event}`;
        bp.children.push(child.id);
        this.activeFork = child.id;
        return child;
    }

    getRecentBranches(n = 20) {
        this.collectBranches();
        return this.tree.slice(-n).reverse();
    }
}

// ─── MULTIVERSAL ECOLOGY ──────────────────────────────────────────────────────
// Periodically migrates species between universes (invasive cross-universe events)

class MultiversalEcology {
    constructor(pool) {
        this.pool         = pool;
        this.migrationLog = [];
        this.tickCounter  = 0;
    }

    // Call every pool tick
    update() {
        this.tickCounter++;
        if (this.tickCounter % 80 !== 0) return; // migrate every 80 ticks

        const universes = this.pool.getAll().filter(u => u.alive && u.state.speciesCount > 10);
        if (universes.length < 2) return;

        // Pick a random source and target
        const src = universes[Math.floor(Math.random() * universes.length)];
        const targets = universes.filter(u => u.id !== src.id);
        if (!targets.length) return;
        const tgt = targets[Math.floor(Math.random() * targets.length)];

        // Generate a migrant species descriptor
        const migrant = {
            name:       this._migrantName(),
            fromUniverse: src.name,
            tick:       src.tick,
        };

        tgt.migrants.push(migrant);

        const entry = {
            from:  src.name,
            to:    tgt.name,
            species: migrant.name,
            tick:  this.tickCounter,
        };
        this.migrationLog.unshift(entry);
        if (this.migrationLog.length > 50) this.migrationLog.pop();
    }

    _migrantName() {
        const adj = ['Cosmic','Liminal','Quantum','Void','Spectral','Primordial','Ephemeral','Stellar'];
        const noun = ['Fern','Moss','Orchid','Lichen','Spore','Bloom','Tendril','Mycelium'];
        return adj[Math.floor(Math.random()*adj.length)] + ' ' + noun[Math.floor(Math.random()*noun.length)];
    }

    getLog() { return this.migrationLog; }
}

// ─── MULTIVERSE RENDERER ──────────────────────────────────────────────────────
// Draws the universe minimap on a canvas.
// Each universe = circle, sized by species count, coloured by consciousness.

class MultiverseRenderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx    = canvas.getContext('2d');
        this._nodes = []; // cached positions for hit-testing
    }

    render(pool, selected = null) {
        const { canvas: cv, ctx } = this;
        const W = cv.width, H = cv.height;
        ctx.clearRect(0, 0, W, H);

        // Background
        ctx.fillStyle = '#030810';
        ctx.fillRect(0, 0, W, H);

        // Grid lines
        ctx.strokeStyle = 'rgba(20,40,80,0.3)';
        ctx.lineWidth = 1;
        for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
        for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

        const universes = pool.getAll();
        if (!universes.length) return;

        this._nodes = [];
        const cols = Math.ceil(Math.sqrt(universes.length));
        const cellW = W / cols;
        const cellH = H / Math.ceil(universes.length / cols);

        universes.forEach((u, idx) => {
            const col = idx % cols;
            const row = Math.floor(idx / cols);
            const cx  = cellW * col + cellW / 2;
            const cy  = cellH * row + cellH / 2;
            const r   = Math.min(cellW, cellH) * 0.32 * (0.5 + u.state.biodiversityIndex * 0.5);

            this._nodes.push({ id: u.id, cx, cy, r });

            // Glow based on consciousness
            const ci = u.state.consciousnessIndex || 0;
            if (ci > 0.01) {
                const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 1.8);
                glow.addColorStop(0, `hsla(${180 + ci*120},80%,60%,${ci * 0.4})`);
                glow.addColorStop(1, 'transparent');
                ctx.beginPath(); ctx.arc(cx, cy, r*1.8, 0, Math.PI*2);
                ctx.fillStyle = glow; ctx.fill();
            }

            // Planet body — colour by temperature
            const temp = u.state.temperature || 15;
            const tempHue = Math.max(0, Math.min(240, 240 - (temp - 10) * 8));
            const grad = ctx.createRadialGradient(cx - r*0.3, cy - r*0.3, 0, cx, cy, r);
            grad.addColorStop(0, `hsl(${tempHue},70%,65%)`);
            grad.addColorStop(0.6, `hsl(${tempHue},60%,35%)`);
            grad.addColorStop(1, `hsl(${tempHue},50%,15%)`);
            ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2);
            ctx.fillStyle = grad; ctx.fill();

            // Collapsed overlay
            if (u.collapsed) {
                ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2);
                ctx.fillStyle = 'rgba(0,0,0,0.7)'; ctx.fill();
                ctx.fillStyle = '#ff6060'; ctx.font = `${r*0.4}px sans-serif`;
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText('✕', cx, cy);
            }

            // Selection ring
            if (selected === u.id) {
                ctx.beginPath(); ctx.arc(cx, cy, r + 4, 0, Math.PI*2);
                ctx.strokeStyle = '#6aaaff'; ctx.lineWidth = 2; ctx.stroke();
            }

            // Name label
            ctx.fillStyle = u.collapsed ? '#ff6060' : '#7aaad0';
            ctx.font = `${Math.max(9, r*0.25)}px 'Jost',sans-serif`;
            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
            ctx.fillText(u.name, cx, cy + r + 4);

            // Mini sparkline (biodiversity) beneath name
            const hist = u.history.biodiversity;
            if (hist.length > 4) {
                const sparkW = r * 1.6, sparkH = 12;
                const sx = cx - sparkW/2, sy = cy + r + 18;
                ctx.beginPath();
                hist.slice(-30).forEach((v, i, arr) => {
                    const px = sx + (i / (arr.length-1)) * sparkW;
                    const py = sy + sparkH - v * sparkH;
                    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
                });
                ctx.strokeStyle = `hsl(${tempHue},70%,60%)`; ctx.lineWidth = 1; ctx.stroke();
            }
        });
    }

    // Return universe id at canvas coords, or null
    hitTest(x, y) {
        for (const n of this._nodes) {
            const dx = x - n.cx, dy = y - n.cy;
            if (Math.sqrt(dx*dx + dy*dy) <= n.r + 8) return n.id;
        }
        return null;
    }

    // Draw timeline tree: branch points as ticks on a horizontal axis
    renderTimeline(ctx, branches, W, H, selectedBP = null) {
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#030810';
        ctx.fillRect(0, 0, W, H);

        if (!branches.length) {
            ctx.fillStyle = '#2a4a6a';
            ctx.font = '11px Jost,sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('No branch points yet — run the simulation', W/2, H/2);
            return;
        }

        const maxTick = Math.max(...branches.map(b => b.tick), 1);
        const colors = { extinction: '#ff6a6a', speciation: '#6aff9a', fork: '#6aaaff', climate_shift: '#ffaa40' };

        // Axis
        ctx.strokeStyle = '#1a3060'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(20, H/2); ctx.lineTo(W-20, H/2); ctx.stroke();

        branches.forEach(bp => {
            const x = 20 + (bp.tick / maxTick) * (W - 40);
            const col = colors[bp.event] || '#ffffff';
            ctx.beginPath();
            ctx.moveTo(x, H/2 - 16); ctx.lineTo(x, H/2 + 16);
            ctx.strokeStyle = col; ctx.lineWidth = selectedBP === bp.id ? 3 : 1.5; ctx.stroke();
            ctx.beginPath(); ctx.arc(x, H/2, 4, 0, Math.PI*2);
            ctx.fillStyle = col; ctx.fill();
            // Label
            if (branches.length < 30) {
                ctx.fillStyle = col; ctx.font = '8px monospace';
                ctx.textAlign = 'center';
                ctx.fillText(bp.event.slice(0,3).toUpperCase(), x, bp.tick % 2 === 0 ? H/2-22 : H/2+26);
            }
        });
    }
}

// ─── V5 ENGINE (orchestrator) ─────────────────────────────────────────────────
class V5Engine {
    constructor() {
        this.pool      = new UniversePool(6);
        this.timeline  = new TimelineBranching(this.pool);
        this.ecology   = new MultiversalEcology(this.pool);
        this.renderer  = null; // set when canvas is available
        this.running   = false;
        this.interval  = null;
        this.selected  = this.pool.getPrimary()?.id || null;
        this.tickCount = 0;
        this.onTick    = null; // callback for UI updates
    }

    start(tickMs = 400) {
        if (this.running) return;
        this.running = true;
        this.interval = setInterval(() => this._tick(), tickMs);
    }

    stop() {
        this.running = false;
        clearInterval(this.interval);
        this.interval = null;
    }

    _tick() {
        this.pool.tick();
        this.ecology.update();
        this.tickCount++;
        if (this.renderer) {
            this.renderer.render(this.pool, this.selected);
        }
        if (this.onTick) this.onTick(this.tickCount);
    }

    spawnUniverse(parentId = null) {
        return this.pool.spawn(parentId || this.selected);
    }

    destroyUniverse(id) {
        if (this.pool.universes.length <= 1) return;
        this.pool.destroy(id);
        if (this.selected === id) this.selected = this.pool.getPrimary()?.id;
    }

    selectUniverse(id) {
        this.selected = id;
    }

    forkAtBranch(bpId) {
        return this.timeline.forkAt(bpId);
    }

    getSelected() {
        return this.pool.get(this.selected);
    }

    getRecentBranches() {
        return this.timeline.getRecentBranches(25);
    }

    getMigrationLog() {
        return this.ecology.getLog();
    }

    getPhysicsSnapshot() {
        const u = this.getSelected();
        return u ? u.physics.toJSON() : null;
    }

    setPhysicsConstant(key, value) {
        const u = this.getSelected();
        if (u && key in u.physics) {
            u.physics[key] = Math.max(0.01, Math.min(0.99, value));
        }
    }

    // Export complete multiverse state as a reality seed (V9 prep)
    exportSeed() {
        return {
            version: 'V5',
            exported: new Date().toISOString(),
            universes: this.pool.getAll().map(u => ({
                id: u.id, name: u.name,
                state: u.snapshot(),
                physics: u.physics.toJSON(),
                branchCount: u.branchPoints.length,
            })),
            migrationLog: this.ecology.getLog().slice(0, 20),
        };
    }
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
window.BloomV5 = {
    PhysicsConstants,
    UniverseInstance,
    UniversePool,
    TimelineBranching,
    MultiversalEcology,
    MultiverseRenderer,
    V5Engine,
};

console.log('[Bloom V5] Multiverse engine loaded.');
})();
