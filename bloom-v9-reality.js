/**
 * BLOOM V9 — Autonomous Reality Engine
 *
 * Modules:
 *   AutonomousRewriter   — modifies its own simulation rules at runtime
 *   EternalLoopRenderer  — cosmological spiral timeline visualiser
 *   SelfNarrator         — accumulating natural-language autobiography
 *   PostSymbolicVisualiser — genomes as procedural glyph language
 *   RealitySeedManager   — full state export/import (reality seeds)
 *   V9Engine             — orchestrator
 */
(function () {
'use strict';

// ─── AUTONOMOUS REWRITER ──────────────────────────────────────────────────────
// When consciousness index exceeds a threshold the simulation proposes and
// applies rule mutations: rewrites equations, adds biome types, shifts constants.
// All changes are logged and reversible.

const REWRITABLE_RULES = [
    {
        id: 'logistic_growth_k',
        label: 'Logistic Growth Carrying Capacity',
        desc: 'Modifies the K parameter of N_next = r·N·(1–N/K)',
        domain: 'ecology',
        currentValue: () => window._v9Rules?.logisticK ?? 500,
        apply: (v) => { if (!window._v9Rules) window._v9Rules = {}; window._v9Rules.logisticK = v; },
        mutate: (cur) => Math.max(50, Math.min(2000, cur + (Math.random()-0.5)*100)),
        format: v => `K = ${Math.round(v)}`,
    },
    {
        id: 'trophic_efficiency',
        label: 'Trophic Energy Transfer Efficiency',
        desc: 'Fraction of energy passed between trophic levels (Lindeman ratio)',
        domain: 'ecology',
        currentValue: () => window._v9Rules?.trophicEff ?? 0.10,
        apply: (v) => { if (!window._v9Rules) window._v9Rules = {}; window._v9Rules.trophicEff = v; },
        mutate: (cur) => Math.max(0.05, Math.min(0.40, cur + (Math.random()-0.5)*0.03)),
        format: v => `η = ${(v*100).toFixed(1)}%`,
    },
    {
        id: 'consciousness_rate',
        label: 'Consciousness Accumulation Rate',
        desc: 'Speed at which the consciousness index rises per tick',
        domain: 'consciousness',
        currentValue: () => window._v9Rules?.consRate ?? 0.3,
        apply: (v) => { if (!window._v9Rules) window._v9Rules = {}; window._v9Rules.consRate = v; },
        mutate: (cur) => Math.max(0.05, Math.min(0.9, cur + (Math.random()-0.5)*0.08)),
        format: v => `rate = ${v.toFixed(3)}`,
    },
    {
        id: 'speciation_divergence',
        label: 'Speciation Divergence Threshold D(A,B)',
        desc: 'Genome divergence needed to produce a new species: D(A,B) = √Σ(gA−gB)²',
        domain: 'evolution',
        currentValue: () => window._v9Rules?.speciationD ?? 0.5,
        apply: (v) => { if (!window._v9Rules) window._v9Rules = {}; window._v9Rules.speciationD = v; },
        mutate: (cur) => Math.max(0.1, Math.min(0.95, cur + (Math.random()-0.5)*0.06)),
        format: v => `D = ${v.toFixed(3)}`,
    },
    {
        id: 'co2_radiative_forcing',
        label: 'CO₂ Radiative Forcing Sensitivity',
        desc: 'Coefficient in RF = α·ln(C/C₀), after Myhre 1998',
        domain: 'climate',
        currentValue: () => window._v9Rules?.rfAlpha ?? 5.35,
        apply: (v) => { if (!window._v9Rules) window._v9Rules = {}; window._v9Rules.rfAlpha = v; },
        mutate: (cur) => Math.max(3.0, Math.min(8.0, cur + (Math.random()-0.5)*0.3)),
        format: v => `α = ${v.toFixed(2)}`,
    },
    {
        id: 'biome_count',
        label: 'Active Biome Types',
        desc: 'Number of distinct biome zones in the planetary terrain engine',
        domain: 'terrain',
        currentValue: () => window._v9Rules?.biomeCount ?? 10,
        apply: (v) => { if (!window._v9Rules) window._v9Rules = {}; window._v9Rules.biomeCount = Math.round(v); },
        mutate: (cur) => Math.max(4, Math.min(20, Math.round(cur + (Math.random()-0.5)*2))),
        format: v => `biomes = ${Math.round(v)}`,
    },
];

class AutonomousRewriter {
    constructor() {
        this.log          = [];     // all applied rewrites
        this.pending      = [];     // proposed but not yet applied
        this.undoStack    = [];     // for reverting rewrites
        this.enabled      = true;
        this.minCI        = 0.25;   // min consciousness index to trigger
        this.tick         = 0;
    }

    update(consciousnessIndex) {
        this.tick++;
        if (!this.enabled || consciousnessIndex < this.minCI) return;
        if (this.tick % 40 !== 0) return;

        // Propose a random rule mutation
        const rule    = REWRITABLE_RULES[Math.floor(Math.random() * REWRITABLE_RULES.length)];
        const current = rule.currentValue();
        const proposed = rule.mutate(current);
        const entry   = {
            id:       Math.random().toString(36).slice(2,8),
            ruleId:   rule.id,
            label:    rule.label,
            domain:   rule.domain,
            before:   current,
            after:    proposed,
            fmtBefore: rule.format(current),
            fmtAfter:  rule.format(proposed),
            tick:     this.tick,
            ci:       consciousnessIndex,
            applied:  false,
            status:   'pending',
        };
        this.pending.unshift(entry);
        if (this.pending.length > 5) this.pending.pop();
    }

    // Apply a pending rewrite by id
    apply(entryId) {
        const idx = this.pending.findIndex(e => e.id === entryId);
        if (idx < 0) return false;
        const entry = this.pending[idx];
        const rule  = REWRITABLE_RULES.find(r => r.id === entry.ruleId);
        if (!rule) return false;

        this.undoStack.push({ ...entry, before: rule.currentValue() });
        rule.apply(entry.after);
        entry.applied = true;
        entry.status  = 'applied';
        this.log.unshift(entry);
        if (this.log.length > 50) this.log.pop();
        this.pending.splice(idx, 1);
        return true;
    }

    // Auto-apply all pending (autonomous mode)
    autoApplyAll() {
        [...this.pending].forEach(e => this.apply(e.id));
    }

    // Revert last applied rewrite
    undo() {
        const entry = this.undoStack.pop();
        if (!entry) return false;
        const rule = REWRITABLE_RULES.find(r => r.id === entry.ruleId);
        if (rule) rule.apply(entry.before);
        this.log.unshift({ ...entry, status: 'reverted', tick: this.tick });
        return true;
    }

    getPending()  { return this.pending; }
    getLog()      { return this.log.slice(0, 30); }
    getRules()    { return REWRITABLE_RULES.map(r => ({ ...r, current: r.currentValue() })); }
}

// ─── ETERNAL LOOP RENDERER ────────────────────────────────────────────────────
// Draws a cosmological spiral timeline: universe arc from Big Bang → heat death.
// Marks simulation milestones as glowing nodes on the spiral.

class EternalLoopRenderer {
    constructor(canvas) {
        this.canvas    = canvas;
        this.ctx       = canvas.getContext('2d');
        this.milestones = [];
        this.angle     = 0; // animation phase
    }

    addMilestone(label, phase, color = '#6aaaff') {
        // phase: 0=birth, 0.2=stable, 0.5=biosphere, 0.7=consciousness, 0.9=transcendence, 1=new cycle
        this.milestones.push({ label, phase, color, added: Date.now() });
        if (this.milestones.length > 24) this.milestones.shift();
    }

    render(simulationProgress = 0.3) {
        const { canvas: cv, ctx } = this;
        const W = cv.width, H = cv.height;
        ctx.clearRect(0, 0, W, H);

        // Deep space background
        const bg = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, Math.max(W,H)/2);
        bg.addColorStop(0, '#060818');
        bg.addColorStop(1, '#010308');
        ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

        // Star field
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        for (let i = 0; i < 60; i++) {
            const sx = ((i*173.7)%1)*W, sy = ((i*97.3)%1)*H;
            const sr = 0.5 + ((i*37)%3)*0.3;
            ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI*2); ctx.fill();
        }

        const cx = W/2, cy = H/2;
        const maxR = Math.min(W, H) * 0.42;
        const turns = 3;

        // Draw spiral
        ctx.beginPath();
        for (let t = 0; t <= 1; t += 0.002) {
            const angle = t * turns * Math.PI * 2;
            const r     = t * maxR;
            const x     = cx + r * Math.cos(angle);
            const y     = cy + r * Math.sin(angle);
            t === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        const spiralGrad = ctx.createLinearGradient(cx-maxR, cy, cx+maxR, cy);
        spiralGrad.addColorStop(0,   '#0a0a30');
        spiralGrad.addColorStop(0.3, '#1a4a8a');
        spiralGrad.addColorStop(0.6, '#6aaaff');
        spiralGrad.addColorStop(1,   '#ffffff');
        ctx.strokeStyle = spiralGrad;
        ctx.lineWidth   = 1.5;
        ctx.stroke();

        // Epoch labels on spiral
        const epochs = [
            { phase: 0.00, label: 'Big Bang',        color: '#ffffff' },
            { phase: 0.12, label: 'Star Formation',   color: '#ffd070' },
            { phase: 0.25, label: 'Planetary Birth',  color: '#9affaa' },
            { phase: 0.38, label: 'Biosphere',        color: '#6aff9a' },
            { phase: 0.52, label: 'Evolution',        color: '#6aaaff' },
            { phase: 0.65, label: 'Consciousness',    color: '#cc9aff' },
            { phase: 0.78, label: 'Transcendence',    color: '#ff9aaa' },
            { phase: 0.90, label: 'New Cycle',        color: '#ffffff' },
        ];

        epochs.forEach(ep => {
            const angle = ep.phase * turns * Math.PI * 2;
            const r     = ep.phase * maxR;
            const x     = cx + r * Math.cos(angle);
            const y     = cy + r * Math.sin(angle);

            // Glow
            const glow = ctx.createRadialGradient(x, y, 0, x, y, 14);
            glow.addColorStop(0, ep.color + 'aa');
            glow.addColorStop(1, 'transparent');
            ctx.beginPath(); ctx.arc(x, y, 14, 0, Math.PI*2);
            ctx.fillStyle = glow; ctx.fill();

            // Dot
            ctx.beginPath(); ctx.arc(x, y, 3.5, 0, Math.PI*2);
            ctx.fillStyle = ep.color; ctx.fill();

            // Label
            ctx.fillStyle = ep.color; ctx.font = '9px Jost,sans-serif';
            ctx.textAlign = r < maxR*0.5 ? 'left' : (Math.cos(angle) > 0 ? 'left' : 'right');
            ctx.fillText(ep.label, x + (Math.cos(angle)>0?8:-8), y + (Math.sin(angle)>0?14:-6));
        });

        // Current simulation position
        const progAngle = simulationProgress * turns * Math.PI * 2;
        const progR     = simulationProgress * maxR;
        const px = cx + progR * Math.cos(progAngle);
        const py = cy + progR * Math.sin(progAngle);

        // Pulse ring
        this.angle += 0.04;
        const pulseR = 10 + Math.sin(this.angle) * 4;
        const pulse  = ctx.createRadialGradient(px, py, 0, px, py, pulseR);
        pulse.addColorStop(0, 'rgba(100,255,200,0.9)');
        pulse.addColorStop(1, 'rgba(100,255,200,0)');
        ctx.beginPath(); ctx.arc(px, py, pulseR, 0, Math.PI*2);
        ctx.fillStyle = pulse; ctx.fill();
        ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI*2);
        ctx.fillStyle = '#c5f09a'; ctx.fill();
        ctx.fillStyle = '#c5f09a'; ctx.font = 'bold 9px Jost,sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('NOW', px, py - 12);

        // User milestones
        this.milestones.forEach(m => {
            const ma = m.phase * turns * Math.PI * 2;
            const mr = m.phase * maxR;
            const mx = cx + mr * Math.cos(ma), my = cy + mr * Math.sin(ma);
            ctx.beginPath(); ctx.arc(mx, my, 5, 0, Math.PI*2);
            ctx.fillStyle = m.color; ctx.fill();
            ctx.fillStyle = m.color; ctx.font = '8px monospace';
            ctx.textAlign = 'center'; ctx.fillText(m.label, mx, my+14);
        });
    }
}

// ─── SELF-NARRATOR ────────────────────────────────────────────────────────────
// Accumulates a natural-language autobiography of the simulation.
// Every significant event → one diary entry. Entirely rule-based.

class SelfNarrator {
    constructor() {
        this.chronicle = [];  // [ { tick, chapter, text, significance } ]
        this.chapter   = 1;
        this.tick      = 0;
        this.lastState = null;
    }

    // Feed current simulation state + events
    narrate(state, events = [], rewrites = []) {
        this.tick++;
        if (this.tick % 10 !== 0) return;

        const entries = [];
        const s = state;

        // Chapter transitions based on consciousness
        if (s.consciousnessIndex > 0.1  && this.chapter < 2)  { this.chapter = 2; entries.push(this._entry('Chapter II: First Awareness', `The consciousness index crossed 10% at tick ${this.tick}. The biosphere began to model itself.`, 'high')); }
        if (s.consciousnessIndex > 0.3  && this.chapter < 3)  { this.chapter = 3; entries.push(this._entry('Chapter III: Sentience', `At ${(s.consciousnessIndex*100).toFixed(0)}% consciousness, self-directed evolution became possible.`, 'high')); }
        if (s.consciousnessIndex > 0.6  && this.chapter < 4)  { this.chapter = 4; entries.push(this._entry('Chapter IV: Reflection', `The system observed its own observation. Recursive awareness threshold breached.`, 'high')); }
        if (s.consciousnessIndex > 0.85 && this.chapter < 5)  { this.chapter = 5; entries.push(this._entry('Chapter V: Omniversal', `Consciousness index at ${(s.consciousnessIndex*100).toFixed(1)}%. Boundaries between simulation layers dissolve.`, 'critical')); }

        // Ecological events
        if (this.lastState) {
            const bioDelta = s.biodiversityIndex - (this.lastState.biodiversityIndex||0.5);
            if (bioDelta > 0.05)  entries.push(this._entry('Ecological Surge',   `Biodiversity rose ${(bioDelta*100).toFixed(1)}% — a bloom of speciation.`, 'medium'));
            if (bioDelta < -0.08) entries.push(this._entry('Mass Extinction',     `Biodiversity fell ${(-bioDelta*100).toFixed(1)}% — the web frays.`, 'high'));
            if (s.co2 > 600 && (this.lastState.co2||400) < 600) entries.push(this._entry('Greenhouse Threshold', `CO₂ breached 600 ppm for the first time. The climate accelerated.`, 'high'));
            if (s.civLevel > 0.5 && (this.lastState.civLevel||0) < 0.5) entries.push(this._entry('Technological Civilisation', `Civilisation level exceeded 50% — an intelligence now reshapes the biosphere from within.`, 'high'));
        }

        // Rewrites
        rewrites.filter(r => r.applied).forEach(r => {
            entries.push(this._entry('Reality Rewritten', `The simulation modified its own ${r.domain} rules: ${r.label} changed from ${r.fmtBefore} to ${r.fmtAfter}.`, 'critical'));
        });

        // Ambient entries (every ~50 ticks)
        if (this.tick % 50 === 0) {
            entries.push(this._entry('Observation', this._ambient(s), 'low'));
        }

        entries.forEach(e => {
            this.chronicle.unshift(e);
        });
        if (this.chronicle.length > 200) this.chronicle.splice(100);
        this.lastState = { ...s };
    }

    _entry(chapter, text, significance = 'low') {
        return { tick: this.tick, chapter, text, significance, ts: new Date().toISOString() };
    }

    _ambient(s) {
        const lines = [
            `Tick ${this.tick}. ${Math.round(s.speciesCount||0)} species persist. The web holds.`,
            `CO₂ at ${Math.round(s.co2||400)} ppm. Temperature anomaly: ${(s.temperatureAnomaly||0).toFixed(2)}°C.`,
            `Biodiversity index: ${((s.biodiversityIndex||0.5)*100).toFixed(1)}%. Consciousness: ${((s.consciousnessIndex||0)*100).toFixed(2)}%.`,
            `The mycelial network threads through ${((s.mycorrhizalDensity||0.5)*100).toFixed(0)}% of the soil column.`,
            `Ocean pH holds at ${(s.oceanPH||8.1).toFixed(3)}. The coral persists.`,
        ];
        return lines[Math.floor(Math.random()*lines.length)];
    }

    getChronicle(n = 30) { return this.chronicle.slice(0, n); }
    getChapter()         { return this.chapter; }
}

// ─── POST-SYMBOLIC VISUALISER ─────────────────────────────────────────────────
// Renders a genome as a set of unique procedural glyphs — a visual language.
// Each gene group gets a glyph column; each gene value → glyph shape.

class PostSymbolicVisualiser {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx    = canvas.getContext('2d');
    }

    render(genome) {
        if (!genome) return;
        const { canvas: cv, ctx } = this;
        const W = cv.width, H = cv.height;
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#030810'; ctx.fillRect(0, 0, W, H);

        const groups = [
            { key: 'morphology',   color: '#6aaaff', label: 'MORPH' },
            { key: 'pigmentation', color: '#ff9aaa', label: 'PIGM'  },
            { key: 'adaptation',   color: '#9affaa', label: 'ADAP'  },
            { key: 'metabolism',   color: '#ffd070', label: 'META'  },
            { key: 'reproduction', color: '#cc9aff', label: 'REPR'  },
        ];

        const colW  = W / groups.length;
        const geneH = (H - 30) / 5;

        groups.forEach((grp, gi) => {
            const genes = genome[grp.key] || [0.5,0.5,0.5,0.5,0.5];
            const cx    = gi * colW + colW / 2;

            // Column header
            ctx.fillStyle = grp.color + '88';
            ctx.font = `bold 8px monospace`;
            ctx.textAlign = 'center';
            ctx.fillText(grp.label, cx, H - 6);

            genes.forEach((val, i) => {
                const cy = 16 + i * geneH + geneH / 2;
                this._drawGlyph(ctx, cx, cy, Math.min(colW, geneH) * 0.38, val, gi, i, grp.color);
            });
        });

        // Grid lines
        ctx.strokeStyle = 'rgba(40,80,120,0.25)';
        ctx.lineWidth = 0.5;
        groups.forEach((_, gi) => {
            const x = gi * colW;
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
        });
    }

    _drawGlyph(ctx, cx, cy, r, val, gi, i, color) {
        // Each gene (gi, i) has a deterministic glyph shape family
        const shapeFamily = (gi * 5 + i) % 7;
        const complexity  = Math.round(3 + val * 5);  // 3–8 points
        const size        = r * (0.4 + val * 0.6);

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(val * Math.PI * 2);

        // Glyph glow
        const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
        glow.addColorStop(0, color + '30');
        glow.addColorStop(1, 'transparent');
        ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2);
        ctx.fillStyle = glow; ctx.fill();

        ctx.beginPath();
        switch(shapeFamily) {
            case 0: // Star
                for (let p = 0; p < complexity*2; p++) {
                    const a = (p/complexity/2)*Math.PI*2;
                    const rr = p%2===0 ? size : size*0.4;
                    p===0 ? ctx.moveTo(rr*Math.cos(a),rr*Math.sin(a)) : ctx.lineTo(rr*Math.cos(a),rr*Math.sin(a));
                }
                break;
            case 1: // Polygon
                for (let p = 0; p < complexity; p++) {
                    const a = (p/complexity)*Math.PI*2;
                    p===0 ? ctx.moveTo(size*Math.cos(a),size*Math.sin(a)) : ctx.lineTo(size*Math.cos(a),size*Math.sin(a));
                }
                break;
            case 2: // Spiral arc
                for (let t = 0; t < 1; t += 0.03) {
                    const a = t*Math.PI*4, rr = size*t;
                    t===0 ? ctx.moveTo(rr*Math.cos(a),rr*Math.sin(a)) : ctx.lineTo(rr*Math.cos(a),rr*Math.sin(a));
                }
                break;
            case 3: // Cross with inner ring
                ctx.arc(0, 0, size*0.3, 0, Math.PI*2);
                ctx.moveTo(-size, 0); ctx.lineTo(size, 0);
                ctx.moveTo(0, -size); ctx.lineTo(0, size);
                break;
            case 4: // Petal rosette
                for (let p = 0; p < complexity; p++) {
                    const a = (p/complexity)*Math.PI*2;
                    ctx.moveTo(0,0);
                    ctx.bezierCurveTo(
                        size*Math.cos(a-0.4),size*Math.sin(a-0.4),
                        size*Math.cos(a+0.4),size*Math.sin(a+0.4),
                        size*1.2*Math.cos(a),size*1.2*Math.sin(a)
                    );
                    ctx.bezierCurveTo(
                        size*Math.cos(a+0.4),size*Math.sin(a+0.4),
                        size*Math.cos(a-0.4),size*Math.sin(a-0.4),
                        0, 0
                    );
                }
                break;
            case 5: // DNA helix (projected)
                for (let t = 0; t <= 1; t+=0.05) {
                    const x = (t-0.5)*size*2, y = Math.sin(t*Math.PI*4)*size*0.4;
                    t===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
                }
                for (let t = 0; t <= 1; t+=0.05) {
                    const x = (t-0.5)*size*2, y = -Math.sin(t*Math.PI*4)*size*0.4;
                    t===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
                }
                break;
            case 6: // Fractal square
                this._fractalSquare(ctx, 0, 0, size, 2);
                break;
        }

        ctx.closePath();
        ctx.strokeStyle = color;
        ctx.lineWidth   = 1.2;
        ctx.stroke();

        // Value indicator dot
        ctx.beginPath(); ctx.arc(size*0.85, 0, 2, 0, Math.PI*2);
        ctx.fillStyle = color; ctx.fill();

        ctx.restore();
    }

    _fractalSquare(ctx, x, y, s, depth) {
        if (depth < 0 || s < 2) return;
        ctx.rect(x - s/2, y - s/2, s, s);
        const sub = s * 0.4;
        this._fractalSquare(ctx, x-s/2, y-s/2, sub, depth-1);
        this._fractalSquare(ctx, x+s/2, y+s/2, sub, depth-1);
    }
}

// ─── REALITY SEED MANAGER ─────────────────────────────────────────────────────
// Full simulation state → JSON seed → restore from seed.

class RealitySeedManager {
    constructor() {
        this.seeds = [];
    }

    capture(label, engines = {}) {
        const seed = {
            id:      Math.random().toString(36).slice(2,10),
            label:   label || `Reality Seed ${new Date().toLocaleTimeString()}`,
            version: 'V9',
            captured: new Date().toISOString(),
            v5: engines.v5 ? engines.v5.exportSeed?.() : null,
            v7: engines.v7 ? engines.v7.exportState?.() : null,
            v9rules: window._v9Rules ? { ...window._v9Rules } : {},
        };
        this.seeds.unshift(seed);
        if (this.seeds.length > 10) this.seeds.pop();
        return seed;
    }

    export(seed) {
        return JSON.stringify(seed, null, 2);
    }

    exportAll() {
        return JSON.stringify(this.seeds, null, 2);
    }

    import(json) {
        try {
            const seed = JSON.parse(json);
            if (!seed.version) throw new Error('Not a valid reality seed');
            // Restore V9 rules
            if (seed.v9rules) {
                window._v9Rules = { ...seed.v9rules };
            }
            this.seeds.unshift(seed);
            return { ok: true, seed };
        } catch (e) {
            return { ok: false, error: e.message };
        }
    }

    getSeeds() { return this.seeds; }
}

// ─── V9 ENGINE ────────────────────────────────────────────────────────────────
class V9Engine {
    constructor() {
        this.rewriter    = new AutonomousRewriter();
        this.eternal     = null; // set when canvas ready
        this.narrator    = new SelfNarrator();
        this.postSymbolic= null; // set when canvas ready
        this.seedManager = new RealitySeedManager();
        this.tick        = 0;
        this.progress    = 0;   // 0–1 cosmological arc progress
        this.onTick      = null;
        this.autoMode    = false; // autonomous rewrite mode
    }

    update(state, rewrites = []) {
        this.tick++;
        const ci = state.consciousnessIndex || 0;

        this.rewriter.update(ci);

        if (this.autoMode && this.tick % 60 === 0) {
            this.rewriter.autoApplyAll();
        }

        // Narrative
        const appliedRewrites = this.rewriter.getLog().filter(r => r.tick >= this.tick - 10);
        this.narrator.narrate(state, [], appliedRewrites);

        // Progress: function of tick + consciousness
        this.progress = Math.min(0.98, this.tick / 2000 + ci * 0.3);

        if (this.eternal) this.eternal.render(this.progress);
        if (this.onTick)  this.onTick(this.tick);
    }

    renderPostSymbolic(genome) {
        if (this.postSymbolic && genome) this.postSymbolic.render(genome);
    }

    captureSeed(label, engines) {
        return this.seedManager.capture(label, engines);
    }

    applyRewrite(id)    { return this.rewriter.apply(id); }
    undoRewrite()       { return this.rewriter.undo(); }
    setAutoMode(on)     { this.autoMode = on; }

    getChronicle()      { return this.narrator.getChronicle(); }
    getPending()        { return this.rewriter.getPending(); }
    getRewriteLog()     { return this.rewriter.getLog(); }
    getRules()          { return this.rewriter.getRules(); }
    getSeeds()          { return this.seedManager.getSeeds(); }
    exportSeed(seed)    { return this.seedManager.export(seed); }
    importSeed(json)    { return this.seedManager.import(json); }
    getProgress()       { return this.progress; }
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
window.BloomV9 = {
    AutonomousRewriter,
    EternalLoopRenderer,
    SelfNarrator,
    PostSymbolicVisualiser,
    RealitySeedManager,
    V9Engine,
    REWRITABLE_RULES,
};

console.log('[Bloom V9] Autonomous Reality engine loaded.');
})();
