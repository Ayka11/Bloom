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
        // Use display size if canvas CSS width differs from pixel width
        const W = cv.width  || cv.offsetWidth  || 520;
        const H = cv.height || cv.offsetHeight || 260;
        ctx.clearRect(0, 0, W, H);

        // Deep space background with subtle nebula
        const bg = ctx.createRadialGradient(W*0.5, H*0.4, 0, W*0.5, H*0.5, Math.max(W,H)*0.8);
        bg.addColorStop(0, '#060d1e');
        bg.addColorStop(0.5, '#030810');
        bg.addColorStop(1, '#010204');
        ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

        // Subtle star field
        ctx.save();
        for (let i = 0; i < 120; i++) {
            const sx = (Math.sin(i * 7.31 + 1.2) * 0.5 + 0.5) * W;
            const sy = (Math.cos(i * 13.7 + 2.4) * 0.5 + 0.5) * H;
            const a  = 0.15 + (Math.sin(i * 2.1) * 0.5 + 0.5) * 0.5;
            ctx.globalAlpha = a;
            ctx.fillStyle = i % 5 === 0 ? '#ffe8c8' : '#c8d8ff';
            ctx.fillRect(sx|0, sy|0, i % 7 === 0 ? 2 : 1, i % 7 === 0 ? 2 : 1);
        }
        ctx.globalAlpha = 1;
        ctx.restore();

        const universes = pool.getAll();
        if (!universes.length) {
            ctx.fillStyle = '#2a4a6a'; ctx.font = '13px Jost,sans-serif';
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText('No universes — click Spawn Universe', W/2, H/2);
            return;
        }

        this._nodes = [];
        const cols  = Math.min(universes.length, Math.ceil(Math.sqrt(universes.length * (W/H))));
        const rows  = Math.ceil(universes.length / cols);
        const cellW = W / cols;
        const cellH = H / rows;

        universes.forEach((u, idx) => {
            const col = idx % cols;
            const row = Math.floor(idx / cols);
            const cx  = cellW * col + cellW / 2;
            const cy  = cellH * row + cellH / 2;
            // Radius: sized to fill cell, modulated by biodiversity
            const maxR = Math.min(cellW, cellH) * 0.36;
            const r    = maxR * (0.55 + (u.state.biodiversityIndex || 0.5) * 0.45);

            this._nodes.push({ id: u.id, cx, cy, r });

            const temp    = u.state.temperature || 15;
            const ci      = u.state.consciousnessIndex || 0;
            const bio     = u.state.biodiversityIndex   || 0.5;
            const co2     = u.state.co2                 || 420;
            // Hue: 200 (ice-blue) at cold → 30 (orange) at hot
            const tempHue = Math.max(15, Math.min(220, 220 - (temp - 5) * 7));

            // Outer consciousness glow ring
            if (ci > 0.005) {
                const glowR = r * 1.7;
                const glow  = ctx.createRadialGradient(cx, cy, r * 0.8, cx, cy, glowR);
                glow.addColorStop(0, `hsla(${200 + ci*100},90%,65%,${ci * 0.55})`);
                glow.addColorStop(1, 'transparent');
                ctx.beginPath(); ctx.arc(cx, cy, glowR, 0, Math.PI*2);
                ctx.fillStyle = glow; ctx.fill();
            }

            // Atmospheric halo (thin blue ring around planet)
            const atmoG = ctx.createRadialGradient(cx, cy, r*0.92, cx, cy, r*1.10);
            atmoG.addColorStop(0,   `rgba(80,160,255,${0.30 + (co2-280)/1800*0.15})`);
            atmoG.addColorStop(0.5, `rgba(50,120,220,0.12)`);
            atmoG.addColorStop(1,   'transparent');
            ctx.beginPath(); ctx.arc(cx, cy, r*1.10, 0, Math.PI*2);
            ctx.fillStyle = atmoG; ctx.fill();

            // Planet sphere with realistic lighting
            const grad = ctx.createRadialGradient(cx - r*0.28, cy - r*0.28, r*0.05, cx, cy, r);
            grad.addColorStop(0,    `hsl(${tempHue},65%,68%)`);
            grad.addColorStop(0.35, `hsl(${tempHue},58%,42%)`);
            grad.addColorStop(0.75, `hsl(${tempHue},50%,22%)`);
            grad.addColorStop(1,    `hsl(${tempHue},40%,10%)`);
            ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2);
            ctx.fillStyle = grad; ctx.fill();

            // Green vegetation band at temperate latitudes (biodiversity tint)
            if (bio > 0.2 && !u.collapsed) {
                const vegG = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
                vegG.addColorStop(0,   `rgba(30,180,60,${bio * 0.28})`);
                vegG.addColorStop(0.7, `rgba(20,120,40,${bio * 0.15})`);
                vegG.addColorStop(1,   'transparent');
                ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2);
                ctx.fillStyle = vegG; ctx.fill();
            }

            // Ice caps at poles (high-latitude white arcs)
            if (temp < 20 && !u.collapsed) {
                const iceFrac = Math.max(0, (20 - temp) / 30);
                ctx.save();
                ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.clip();
                ctx.fillStyle = `rgba(200,230,255,${iceFrac * 0.55})`;
                ctx.fillRect(cx - r, cy - r, r*2, r * (0.1 + iceFrac * 0.22)); // N cap
                ctx.fillRect(cx - r, cy + r*(0.68 - iceFrac*0.22), r*2, r * (0.1 + iceFrac*0.22)); // S cap
                ctx.restore();
            }

            // Day/night terminator (dark half)
            const nightG = ctx.createRadialGradient(cx + r*0.5, cy, 0, cx, cy, r);
            nightG.addColorStop(0,    'rgba(0,0,0,0)');
            nightG.addColorStop(0.42, 'rgba(0,0,0,0)');
            nightG.addColorStop(0.58, 'rgba(0,0,0,0.35)');
            nightG.addColorStop(1,    'rgba(0,0,0,0.72)');
            ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2);
            ctx.fillStyle = nightG; ctx.fill();

            // Specular highlight
            const specG = ctx.createRadialGradient(cx - r*0.30, cy - r*0.30, 0, cx - r*0.05, cy - r*0.05, r*0.6);
            specG.addColorStop(0,   'rgba(255,255,255,0.20)');
            specG.addColorStop(0.4, 'rgba(255,255,255,0.05)');
            specG.addColorStop(1,   'rgba(255,255,255,0)');
            ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2);
            ctx.fillStyle = specG; ctx.fill();

            // Edge limb darkening
            const limbG = ctx.createRadialGradient(cx, cy, r*0.70, cx, cy, r);
            limbG.addColorStop(0, 'rgba(0,0,0,0)');
            limbG.addColorStop(1, 'rgba(0,0,0,0.60)');
            ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2);
            ctx.fillStyle = limbG; ctx.fill();

            // Collapsed overlay
            if (u.collapsed) {
                ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2);
                ctx.fillStyle = 'rgba(0,0,0,0.78)'; ctx.fill();
                ctx.fillStyle = '#ff6060';
                ctx.font = `bold ${Math.max(11, r*0.45)}px sans-serif`;
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText('✕', cx, cy);
                ctx.font = `${Math.max(8, r*0.2)}px Jost,sans-serif`;
                ctx.fillStyle = '#ff9090';
                ctx.fillText(u.state.lastEvent || 'Collapsed', cx, cy + r*0.42);
            }

            // Selection ring (animated)
            if (selected === u.id) {
                ctx.beginPath(); ctx.arc(cx, cy, r + 3.5, 0, Math.PI*2);
                ctx.strokeStyle = '#6aaaff'; ctx.lineWidth = 2.5; ctx.stroke();
                // Outer pulsing ring
                ctx.beginPath(); ctx.arc(cx, cy, r + 7, 0, Math.PI*2);
                ctx.strokeStyle = 'rgba(100,170,255,0.3)'; ctx.lineWidth = 1.5; ctx.stroke();
            }

            // Name label
            const fsize = Math.max(9, Math.min(12, r * 0.28));
            ctx.fillStyle = u.collapsed ? '#ff7070' : (selected === u.id ? '#a0d0ff' : '#6aaad0');
            ctx.font = `${fsize}px 'Jost',sans-serif`;
            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
            ctx.fillText(u.name, cx, cy + r + 4);

            // Key stats beneath name
            if (!u.collapsed && r > 22) {
                const statsY = cy + r + fsize + 6;
                ctx.font = `${Math.max(7, fsize*0.72)}px 'Jost',monospace`;
                ctx.fillStyle = `hsl(${tempHue},60%,55%)`;
                ctx.fillText(`${temp.toFixed(1)}°C`, cx, statsY);
                ctx.fillStyle = '#6aff9a88';
                ctx.fillText(`${u.state.speciesCount} sp`, cx, statsY + fsize * 0.85);
            }

            // Biodiversity sparkline beneath stats
            const hist = u.history.biodiversity;
            if (hist.length > 4 && r > 18) {
                const sparkW = r * 1.8, sparkH = 10;
                const sparkY  = cy + r + fsize*2 + (r > 22 ? fsize*1.8 : 0) + 7;
                const sx = cx - sparkW/2;
                ctx.beginPath();
                hist.slice(-40).forEach((v, i, arr) => {
                    const px = sx + (i / (arr.length-1)) * sparkW;
                    const py = sparkY + sparkH - v * sparkH;
                    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
                });
                ctx.strokeStyle = `hsla(${tempHue},70%,60%,0.7)`; ctx.lineWidth = 1; ctx.stroke();
                // Axis
                ctx.strokeStyle = 'rgba(100,160,255,0.12)'; ctx.lineWidth = 0.5;
                ctx.beginPath(); ctx.moveTo(sx, sparkY + sparkH/2); ctx.lineTo(sx+sparkW, sparkY + sparkH/2); ctx.stroke();
            }
        });

        // Legend bar at bottom
        ctx.save();
        ctx.font = '8px Jost,monospace'; ctx.textBaseline = 'middle';
        const legendItems = [
            { col:'#6aaaff', label:'selected' },
            { col:'#6aff9a', label:'alive' },
            { col:'#ff6060', label:'collapsed' },
        ];
        let lx = 8;
        legendItems.forEach(li => {
            ctx.fillStyle = li.col; ctx.fillRect(lx, H-10, 7, 7);
            ctx.fillStyle = '#3a5a7a'; ctx.fillText(li.label, lx+9, H-7);
            lx += 50;
        });
        ctx.fillStyle = '#1a3a5a';
        ctx.fillText('size=biodiversity · color=temp · glow=consciousness', W - 8, H-7);
        ctx.textAlign = 'right';
        ctx.restore();
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
