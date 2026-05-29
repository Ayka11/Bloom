/**
 * BLOOM V4 — Procedural Morphogenesis Engine
 * Implements the doc's sections 8-9: genome → reaction-diffusion → mesh → render.
 * WebGPU is used when available; falls back to Canvas 2D reaction-diffusion.
 *
 * Pipeline:
 *   Genome → MorphologyInterpreter → ReactionDiffusion Field →
 *   PetalGeometry (Bezier + phyllotaxis) → L-System branching → Canvas render
 */

(function () {
'use strict';

// ─── REACTION-DIFFUSION (Gray-Scott model) ───────────────────────────────────
// Mirrors the doc's WebGPU shader logic in CPU/Canvas form.
// Du, Dv, feed, kill parameters produce Turing-like petal patterns.

class ReactionDiffusion {
    constructor(w = 128, h = 128) {
        this.w = w; this.h = h;
        const n = w * h;
        this.u = new Float32Array(n).fill(1);
        this.v = new Float32Array(n).fill(0);
        this._seed();
    }

    _seed() {
        const { w, h } = this;
        const cx = (w / 2) | 0, cy = (h / 2) | 0, r = 8;
        for (let y = cy - r; y < cy + r; y++) {
            for (let x = cx - r; x < cx + r; x++) {
                if (x >= 0 && x < w && y >= 0 && y < h) {
                    const i = y * w + x;
                    this.v[i] = 0.5 + (Math.random() - 0.5) * 0.1;
                    this.u[i] = 0.5;
                }
            }
        }
    }

    // One Gray-Scott iteration step
    step(Du, Dv, feed, kill, steps = 1) {
        const { w, h, u, v } = this;
        const nu = new Float32Array(u);
        const nv = new Float32Array(v);

        for (let s = 0; s < steps; s++) {
            for (let y = 0; y < h; y++) {
                for (let x = 0; x < w; x++) {
                    const i = y * w + x;
                    const l = y * w + ((x - 1 + w) % w);
                    const r = y * w + ((x + 1) % w);
                    const t = ((y - 1 + h) % h) * w + x;
                    const b = ((y + 1) % h) * w + x;

                    const lapU = u[l] + u[r] + u[t] + u[b] - 4 * u[i];
                    const lapV = v[l] + v[r] + v[t] + v[b] - 4 * v[i];
                    const reaction = u[i] * v[i] * v[i];

                    nu[i] = u[i] + Du * lapU - reaction + feed * (1 - u[i]);
                    nv[i] = v[i] + Dv * lapV + reaction - (feed + kill) * v[i];
                    nu[i] = Math.max(0, Math.min(1, nu[i]));
                    nv[i] = Math.max(0, Math.min(1, nv[i]));
                }
            }
            u.set(nu); v.set(nv);
        }
    }

    // Render to an offscreen canvas with a given colour palette
    toCanvas(palette) {
        const { w, h, v } = this;
        const offscreen = document.createElement('canvas');
        offscreen.width = w; offscreen.height = h;
        const ctx = offscreen.getContext('2d');
        const img = ctx.createImageData(w, h);
        const [r1,g1,b1] = palette.low;
        const [r2,g2,b2] = palette.high;

        for (let i = 0; i < w * h; i++) {
            const t = Math.min(1, v[i] * 2);
            img.data[i * 4]     = (r1 + (r2 - r1) * t) | 0;
            img.data[i * 4 + 1] = (g1 + (g2 - g1) * t) | 0;
            img.data[i * 4 + 2] = (b1 + (b2 - b1) * t) | 0;
            img.data[i * 4 + 3] = 255;
        }
        ctx.putImageData(img, 0, 0);
        return offscreen;
    }
}

// ─── MORPHOLOGY INTERPRETER ──────────────────────────────────────────────────
// Maps genome traits → visual parameters per the doc's pipeline.

class MorphologyInterpreter {
    constructor(genome) {
        this.genome = genome;
    }

    // Returns morphology params derived from genome vectors
    interpret() {
        const g = this.genome;
        const morph = g.morphology || [0.5,0.5,0.5,0.5,0.5];
        const pigm  = g.pigmentation || [0.5,0.5,0.5,0.5,0.5];
        const adap  = g.adaptation || [0.5,0.5,0.5,0.5,0.5];
        const repr  = g.reproduction || [0.5,0.5,0.5,0.5,0.5];

        return {
            petalCount:   Math.max(3, Math.round(3 + morph[0] * 9)),   // 3–12
            petalLength:  0.3 + morph[1] * 0.5,                        // 0.3–0.8 (fraction of radius)
            petalWidth:   0.15 + morph[2] * 0.35,
            curvature:    (morph[3] - 0.5) * 1.2,                      // -0.6–+0.6
            centerRadius: 0.06 + morph[4] * 0.12,
            // Colour from pigmentation gene
            hue:          Math.round(pigm[0] * 360),
            saturation:   40 + Math.round(pigm[1] * 55),
            lightness:    35 + Math.round(pigm[2] * 35),
            secondHue:    Math.round(pigm[3] * 360),
            // Branching (L-system) from adaptation
            branchDepth:  Math.max(2, Math.round(adap[0] * 5)),
            leafSize:     0.15 + adap[1] * 0.3,
            stemHeight:   0.35 + adap[2] * 0.45,
            // RD parameters from reproduction gene
            rdFeed:       0.012 + repr[0] * 0.04,
            rdKill:       0.045 + repr[1] * 0.03,
            // Phyllotaxis rotation offset
            goldenAngle:  137.5 + (repr[2] - 0.5) * 6,
        };
    }

    // Derive RD colour palette from hue
    palette(hue) {
        const h2r = (h, s, l) => {
            s /= 100; l /= 100;
            const a = s * Math.min(l, 1 - l);
            const f = n => { const k = (n + h / 30) % 12; return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)); };
            return [Math.round(f(0)*255), Math.round(f(8)*255), Math.round(f(4)*255)];
        };
        return {
            low:  h2r(hue, 20, 88),
            high: h2r(hue, 80, 55),
        };
    }
}

// ─── L-SYSTEM BRANCHING ──────────────────────────────────────────────────────
// Rule: F → FF+[+F-F]-[-F+F]  (classic plant branching from doc section 8)

class LSystem {
    constructor(axiom = 'F', rules = { 'F': 'FF+[+F-F]-[-F+F]' }, angle = 25, depth = 3) {
        this.axiom = axiom;
        this.rules = rules;
        this.angle = angle;
        this.depth = depth;
    }

    generate() {
        let s = this.axiom;
        for (let i = 0; i < this.depth; i++) {
            s = s.split('').map(c => this.rules[c] || c).join('');
            if (s.length > 4000) break; // guard
        }
        return s;
    }

    // Draw the L-system string onto a canvas context
    draw(ctx, x, y, len, startAngle = -Math.PI / 2) {
        const stack = [];
        let cx = x, cy = y, angle = startAngle;
        const rad = this.angle * Math.PI / 180;

        ctx.lineWidth = 1.2;
        ctx.strokeStyle = 'rgba(80,160,60,0.7)';
        ctx.beginPath();

        for (const c of this.generate()) {
            if (c === 'F') {
                const nx = cx + len * Math.cos(angle);
                const ny = cy + len * Math.sin(angle);
                ctx.moveTo(cx, cy);
                ctx.lineTo(nx, ny);
                cx = nx; cy = ny;
            } else if (c === '+') {
                angle += rad;
            } else if (c === '-') {
                angle -= rad;
            } else if (c === '[') {
                stack.push({ cx, cy, angle });
            } else if (c === ']') {
                const s = stack.pop();
                if (s) { cx = s.cx; cy = s.cy; angle = s.angle; }
            }
        }
        ctx.stroke();
    }
}

// ─── PETAL GEOMETRY (Bezier + phyllotaxis) ────────────────────────────────────
// P(u,v) = Bezier(u,v) + Noise + Curvature  per doc section 8

class PetalGeometry {
    // Draw a single Bezier petal centred at (cx,cy), rotated by `angle` radians
    static drawPetal(ctx, cx, cy, radius, angle, params, colourGrad) {
        const { petalLength, petalWidth, curvature } = params;
        const len = radius * petalLength;
        const wid = radius * petalWidth;

        // Tip of petal (local space → rotated)
        const tipX = cx + len * Math.cos(angle);
        const tipY = cy + len * Math.sin(angle);

        // Control points: two side control points create the petal shape
        const perpX = -Math.sin(angle);
        const perpY =  Math.cos(angle);
        const midX = cx + (len * 0.55) * Math.cos(angle);
        const midY = cy + (len * 0.55) * Math.sin(angle);

        const cp1x = midX + perpX * wid + Math.cos(angle) * curvature * len * 0.3;
        const cp1y = midY + perpY * wid + Math.sin(angle) * curvature * len * 0.3;
        const cp2x = midX - perpX * wid + Math.cos(angle) * curvature * len * 0.3;
        const cp2y = midY - perpY * wid + Math.sin(angle) * curvature * len * 0.3;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.bezierCurveTo(cp1x, cp1y, tipX + perpX * wid * 0.2, tipY + perpY * wid * 0.2, tipX, tipY);
        ctx.bezierCurveTo(tipX - perpX * wid * 0.2, tipY - perpY * wid * 0.2, cp2x, cp2y, cx, cy);
        ctx.fillStyle = colourGrad;
        ctx.fill();
    }

    // Draw full flower with phyllotaxis petal arrangement: θ = n × goldenAngle°
    static drawFlower(ctx, cx, cy, radius, params) {
        const { petalCount, hue, saturation, lightness, secondHue, goldenAngle, centerRadius } = params;
        const goldenRad = goldenAngle * Math.PI / 180;

        // Outer shadow/glow
        const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 0.9);
        glow.addColorStop(0, `hsla(${hue},${saturation}%,${lightness + 20}%,0.15)`);
        glow.addColorStop(1, `hsla(${hue},${saturation}%,${lightness}%,0)`);
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.95, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Draw petals using phyllotaxis angle
        for (let n = 0; n < petalCount; n++) {
            const angle = n * goldenRad;
            // Alternate inner/outer lightness for depth
            const lShift = n % 2 === 0 ? 0 : -8;
            const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * params.petalLength);
            grad.addColorStop(0,   `hsla(${secondHue},${saturation}%,${lightness + 25 + lShift}%,0.95)`);
            grad.addColorStop(0.5, `hsla(${hue},${saturation}%,${lightness + lShift}%,0.92)`);
            grad.addColorStop(1,   `hsla(${hue},${saturation - 10}%,${lightness - 10 + lShift}%,0.85)`);
            PetalGeometry.drawPetal(ctx, cx, cy, radius, angle, params, grad);
        }

        // Centre disc
        const crad = radius * centerRadius;
        const centreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, crad);
        centreGrad.addColorStop(0, `hsl(${(hue + 60) % 360},70%,85%)`);
        centreGrad.addColorStop(1, `hsl(${(hue + 30) % 360},80%,55%)`);
        ctx.beginPath();
        ctx.arc(cx, cy, crad, 0, Math.PI * 2);
        ctx.fillStyle = centreGrad;
        ctx.fill();

        // Stamens
        const stamenCount = Math.max(6, petalCount);
        for (let i = 0; i < stamenCount; i++) {
            const a = (i / stamenCount) * Math.PI * 2;
            const sr = crad * 0.7;
            ctx.beginPath();
            ctx.arc(cx + sr * Math.cos(a), cy + sr * Math.sin(a), 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(${(hue + 90) % 360},80%,75%)`;
            ctx.fill();
        }
    }
}

// ─── MORPHOGENESIS ENGINE ─────────────────────────────────────────────────────
// Orchestrates the full pipeline for a given genome and canvas.

class MorphogenesisEngine {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.rdField = null;
        this.animFrame = null;
        this.stepCount = 0;
    }

    // Run the full pipeline for a genome object (compatible with V2 Genome class)
    generate(genome, animate = true) {
        const interp = new MorphologyInterpreter(genome);
        const params = interp.interpret();
        this.params = params;
        this.palette = interp.palette(params.hue);

        // Init reaction-diffusion field (64×64 is fast enough for real-time)
        this.rdField = new ReactionDiffusion(64, 64);

        if (animate) {
            this._animate(params);
        } else {
            this._runAndDraw(params, 120);
        }
    }

    _animate(params) {
        if (this.animFrame) cancelAnimationFrame(this.animFrame);
        const { rdField, canvas, ctx, palette } = this;
        let ticks = 0;
        const maxTicks = 160;

        const loop = () => {
            rdField.step(0.14, 0.06, params.rdFeed, params.rdKill, 4);
            ticks += 4;
            this._draw(params);
            if (ticks < maxTicks) {
                this.animFrame = requestAnimationFrame(loop);
            }
        };
        loop();
    }

    _runAndDraw(params, steps) {
        this.rdField.step(0.14, 0.06, params.rdFeed, params.rdKill, steps);
        this._draw(params);
    }

    _draw(params) {
        const { canvas, ctx, rdField, palette } = this;
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);

        // Background: dark botanical green
        ctx.fillStyle = '#080f09';
        ctx.fillRect(0, 0, W, H);

        // 1. Draw reaction-diffusion texture (as background pattern texture)
        const rdCanvas = rdField.toCanvas(palette);
        ctx.save();
        ctx.globalAlpha = 0.18;
        ctx.drawImage(rdCanvas, 0, 0, W, H);
        ctx.globalAlpha = 1;
        ctx.restore();

        const cx = W / 2, cy = H * 0.52;
        const radius = Math.min(W, H) * 0.36;

        // 2. Draw L-System stem + branching below flower
        const lsys = new LSystem('F', { 'F': 'FF+[+F-F]-[-F+F]' }, 22 + params.branchDepth * 2, Math.min(params.branchDepth, 3));
        const segLen = radius * 0.09;
        lsys.draw(ctx, cx, cy + radius * 0.1, segLen, -Math.PI / 2);

        // 3. Draw leaves (simple symmetrical)
        const leafR = radius * params.leafSize;
        ctx.save();
        ctx.translate(cx - radius * 0.18, cy + radius * 0.25);
        ctx.rotate(-0.6);
        this._drawLeaf(ctx, leafR, params.hue);
        ctx.restore();
        ctx.save();
        ctx.translate(cx + radius * 0.18, cy + radius * 0.25);
        ctx.rotate(0.6);
        this._drawLeaf(ctx, leafR, params.hue);
        ctx.restore();

        // 4. Draw procedural flower
        PetalGeometry.drawFlower(ctx, cx, cy, radius, params);

        // 5. Overlay RD pattern on petals for organic veining texture
        ctx.save();
        ctx.globalAlpha = 0.08;
        ctx.globalCompositeOperation = 'overlay';
        ctx.drawImage(rdCanvas, cx - radius, cy - radius, radius * 2, radius * 2);
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 1;
        ctx.restore();
    }

    _drawLeaf(ctx, r, hue) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-r * 0.5, -r * 0.8, -r * 0.2, -r * 1.6, 0, -r * 1.8);
        ctx.bezierCurveTo( r * 0.2, -r * 1.6,  r * 0.5, -r * 0.8, 0, 0);
        const lg = ctx.createLinearGradient(0, 0, 0, -r * 1.8);
        lg.addColorStop(0, `hsla(${(hue + 100) % 360},70%,25%,0.9)`);
        lg.addColorStop(1, `hsla(${(hue + 80)  % 360},80%,40%,0.9)`);
        ctx.fillStyle = lg;
        ctx.fill();
        // centre vein
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -r * 1.8);
        ctx.strokeStyle = `hsla(${(hue + 80) % 360},60%,55%,0.4)`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
    }

    stop() {
        if (this.animFrame) cancelAnimationFrame(this.animFrame);
        this.animFrame = null;
    }
}

// ─── GBIF OCCURRENCE ENGINE ───────────────────────────────────────────────────
// Section 2-4 of the doc: structured occurrence records + trait vectors

class GBIFOccurrenceEngine {
    constructor() {
        // Biome → lat/lon bounding boxes (simplified)
        this.biomeBoxes = {
            'Tropical Rainforest': { latMin: -10, latMax: 10,  lonMin: -80,  lonMax: 30 },
            'Temperate Forest':    { latMin: 35,  latMax: 60,  lonMin: -120, lonMax: 140 },
            'Boreal Forest':       { latMin: 55,  latMax: 70,  lonMin: -160, lonMax: 160 },
            'Savanna':             { latMin: -20, latMax: 20,  lonMin: -20,  lonMax: 50 },
            'Desert':              { latMin: 15,  latMax: 35,  lonMin: -20,  lonMax: 60 },
            'Alpine':              { latMin: 30,  latMax: 65,  lonMin: -120, lonMax: 100 },
            'Wetland':             { latMin: -30, latMax: 60,  lonMin: -100, lonMax: 140 },
            'Mediterranean':       { latMin: 30,  latMax: 45,  lonMin: -10,  lonMax: 40 },
            'Tundra':              { latMin: 65,  latMax: 80,  lonMin: -160, lonMax: 160 },
        };
    }

    // Generate an occurrence record for a species in a given biome
    generateOccurrence(species, biome) {
        const box = this.biomeBoxes[biome] || this.biomeBoxes['Temperate Forest'];
        const lat = box.latMin + Math.random() * (box.latMax - box.latMin);
        const lon = box.lonMin + Math.random() * (box.lonMax - box.lonMin);
        const elevation = biome === 'Alpine' ? 1500 + Math.random() * 3000 :
                          biome === 'Desert' ? 200 + Math.random() * 600 : Math.random() * 800;

        return {
            occurrence_id: `occ_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,
            species_id: species.id || species.commonName,
            latitude: +lat.toFixed(4),
            longitude: +lon.toFixed(4),
            elevation: +elevation.toFixed(0),
            event_date: this._randomDate(),
            source: 'BloomSim-V4',
            observer: 'AI-Agent',
            biome,
            climate_zone: this._climateZone(lat),
        };
    }

    // Build a trait vector from a species object
    buildTraitVector(species) {
        const g = species.genome || {};
        const adap = g.adaptation || [0.5,0.5,0.5,0.5,0.5];
        const morph = g.morphology  || [0.5,0.5,0.5,0.5,0.5];
        const repr  = g.reproduction || [0.5,0.5,0.5,0.5,0.5];

        const hue = species.hue || 0;
        const flowerColor = hue < 30 ? 'red' : hue < 70 ? 'orange' : hue < 140 ? 'yellow' : hue < 200 ? 'green' : hue < 260 ? 'blue' : hue < 310 ? 'purple' : 'pink';

        return {
            trait_id: `trait_${species.id || Math.random().toString(36).slice(2)}`,
            species_id: species.id || species.commonName,
            flower_color: flowerColor,
            petal_count: Math.max(3, Math.round(3 + morph[0] * 9)),
            pollinator: species.pollinatorAffinity > 0.6 ? 'bee/butterfly' : species.pollinatorAffinity < 0.3 ? 'wind/bat' : 'generalist',
            toxicity: adap[3] > 0.75,
            bloom_period: repr[2] < 0.33 ? 'Spring' : repr[2] < 0.66 ? 'Summer' : 'Autumn',
            photosynthesis_type: adap[1] < 0.4 ? 'CAM' : adap[1] < 0.7 ? 'C3' : 'C4',
            drought_tolerance: +adap[0].toFixed(2),
            shade_tolerance: +adap[2].toFixed(2),
        };
    }

    // Neo4j-style relationships (as plain objects)
    buildRelationships(species, biome, pollinators) {
        const rels = [
            { from: species.commonName, rel: 'NATIVE_TO', to: biome },
            { from: species.commonName, rel: 'THREATENED_BY', to: 'Climate Shift' },
        ];
        if (pollinators && pollinators.length) {
            pollinators.forEach(p => rels.push({ from: species.commonName, rel: 'POLLINATED_BY', to: p }));
        }
        return rels;
    }

    _randomDate() {
        const y = 2018 + Math.floor(Math.random() * 7);
        const m = String(1 + Math.floor(Math.random() * 12)).padStart(2,'0');
        const d = String(1 + Math.floor(Math.random() * 28)).padStart(2,'0');
        return `${y}-${m}-${d}`;
    }

    _climateZone(lat) {
        const a = Math.abs(lat);
        if (a < 23.5) return 'Tropical';
        if (a < 35)   return 'Subtropical';
        if (a < 55)   return 'Temperate';
        if (a < 66.5) return 'Subarctic';
        return 'Polar';
    }
}

// ─── V4 SANDBOX UI ────────────────────────────────────────────────────────────
// Enhanced genome editor + morphogenesis viewer + occurrence table

class V4SandboxUI {
    constructor(morphEngine, gbifEngine) {
        this.morph = morphEngine;
        this.gbif  = gbifEngine;
        this.currentGenome = null;
        this.occurrenceLog = [];
        this.traitLog = [];
    }

    // Build a random genome compatible with V2 Genome class shape
    randomGenome() {
        const vec = (len) => Array.from({ length: len }, () => Math.random());
        return {
            morphology:   vec(5),
            pigmentation: vec(5),
            adaptation:   vec(5),
            metabolism:   vec(5),
            reproduction: vec(5),
        };
    }

    // Mutate a genome by Gaussian noise (σ from slider)
    mutate(genome, sigma = 0.08) {
        const gauss = () => {
            let u, v, s;
            do { u = Math.random() * 2 - 1; v = Math.random() * 2 - 1; s = u*u + v*v; } while (s >= 1);
            return u * Math.sqrt(-2 * Math.log(s) / s);
        };
        const mut = (arr) => arr.map(v => Math.max(0, Math.min(1, v + gauss() * sigma)));
        return {
            morphology:   mut(genome.morphology),
            pigmentation: mut(genome.pigmentation),
            adaptation:   mut(genome.adaptation),
            metabolism:   mut(genome.metabolism),
            reproduction: mut(genome.reproduction),
        };
    }

    // Crossover two genomes (50/50 per gene)
    crossover(a, b) {
        const cross = (av, bv) => av.map((g, i) => Math.random() < 0.5 ? g : bv[i]);
        return {
            morphology:   cross(a.morphology,   b.morphology),
            pigmentation: cross(a.pigmentation, b.pigmentation),
            adaptation:   cross(a.adaptation,   b.adaptation),
            metabolism:   cross(a.metabolism,   b.metabolism),
            reproduction: cross(a.reproduction, b.reproduction),
        };
    }

    // Generate morphology from current simulation species (if V2 running)
    fromLiveSpecies(species) {
        if (!species || !species.genome) return this.randomGenome();
        return {
            morphology:   species.genome.morphology   || Array(5).fill(0.5),
            pigmentation: species.genome.pigmentation || Array(5).fill(0.5),
            adaptation:   species.genome.adaptation   || Array(5).fill(0.5),
            metabolism:   species.genome.metabolism   || Array(5).fill(0.5),
            reproduction: species.genome.reproduction || Array(5).fill(0.5),
        };
    }

    setGenome(genome) {
        this.currentGenome = genome;
        this.morph.generate(genome, true);
        this._updateSliders(genome);
        this._updateOccurrence(genome);
    }

    _updateSliders(genome) {
        const keys = ['morphology','pigmentation','adaptation','metabolism','reproduction'];
        keys.forEach((key, ki) => {
            genome[key].forEach((val, i) => {
                const el = document.getElementById(`v4-gene-${ki}-${i}`);
                if (el) { el.value = val; this._updateGeneDisplay(ki, i, val); }
            });
        });
    }

    _updateGeneDisplay(ki, i, val) {
        const bar = document.getElementById(`v4-gene-bar-${ki}-${i}`);
        const num = document.getElementById(`v4-gene-num-${ki}-${i}`);
        if (bar) bar.style.width = (val * 100).toFixed(1) + '%';
        if (num) num.textContent = val.toFixed(2);
    }

    _updateOccurrence(genome) {
        const interp = new MorphologyInterpreter(genome);
        const params = interp.interpret();
        const adap = genome.adaptation;
        const biome = adap[0] > 0.7 ? 'Desert' : adap[1] > 0.7 ? 'Alpine' : adap[2] > 0.7 ? 'Wetland' : 'Temperate Forest';
        const fakeSpecies = {
            id: 'v4_species_' + Math.random().toString(36).slice(2,6),
            commonName: 'V4 Procedural',
            hue: params.hue,
            pollinatorAffinity: genome.reproduction[3],
            genome,
        };
        const occ   = this.gbif.generateOccurrence(fakeSpecies, biome);
        const trait = this.gbif.buildTraitVector(fakeSpecies);
        const rels  = this.gbif.buildRelationships(fakeSpecies, biome, ['Honeybee', 'Bumblebee']);

        this.occurrenceLog.unshift({ occ, trait, rels });
        if (this.occurrenceLog.length > 20) this.occurrenceLog.pop();
        this._renderOccurrenceTable();
    }

    _renderOccurrenceTable() {
        const el = document.getElementById('v4-occ-table');
        if (!el || !this.occurrenceLog.length) return;
        const latest = this.occurrenceLog[0];
        el.innerHTML = `
          <table style="width:100%;border-collapse:collapse;font-size:.72rem">
            <tr><td class="ot-k">Species</td><td class="ot-v">${latest.occ.species_id}</td></tr>
            <tr><td class="ot-k">Biome</td><td class="ot-v">${latest.occ.biome}</td></tr>
            <tr><td class="ot-k">Lat / Lon</td><td class="ot-v">${latest.occ.latitude}°, ${latest.occ.longitude}°</td></tr>
            <tr><td class="ot-k">Elevation</td><td class="ot-v">${latest.occ.elevation} m</td></tr>
            <tr><td class="ot-k">Climate Zone</td><td class="ot-v">${latest.occ.climate_zone}</td></tr>
            <tr><td class="ot-k">Observed</td><td class="ot-v">${latest.occ.event_date}</td></tr>
            <tr><td class="ot-k">Flower Colour</td><td class="ot-v">${latest.trait.flower_color}</td></tr>
            <tr><td class="ot-k">Petal Count</td><td class="ot-v">${latest.trait.petal_count}</td></tr>
            <tr><td class="ot-k">Pollinator</td><td class="ot-v">${latest.trait.pollinator}</td></tr>
            <tr><td class="ot-k">Photosynthesis</td><td class="ot-v">${latest.trait.photosynthesis_type}</td></tr>
            <tr><td class="ot-k">Drought Tol.</td><td class="ot-v">${(latest.trait.drought_tolerance*100).toFixed(0)}%</td></tr>
            <tr><td class="ot-k">Bloom Period</td><td class="ot-v">${latest.trait.bloom_period}</td></tr>
            <tr><td class="ot-k">Relationships</td><td class="ot-v">${latest.rels.map(r=>`${r.from} —[${r.rel}]→ ${r.to}`).join('<br>')}</td></tr>
          </table>`;
    }
}

// ─── SEMANTIC SEARCH V4 ────────────────────────────────────────────────────────
// Richer than V2: matches taxonomy-data.js (TAXONOMY_FLOWERS) + live species

class SemanticSearchV4 {
    constructor() {
        this.colorMap = {
            red:    [0, 15, 345, 360],
            orange: [15, 45],
            yellow: [45, 75],
            green:  [75, 165],
            blue:   [200, 260],
            purple: [260, 310],
            pink:   [310, 345],
            violet: [260, 300],
            white:  [],   // handled by saturation
        };
        this.traitMap = {
            'drought':     s => (s.adaptation?.[0] || 0.5) > 0.6,
            'shade':       s => (s.adaptation?.[2] || 0.5) > 0.6,
            'alpine':      s => s.biome === 'Alpine' || (s.care?.origin||'').includes('alpine'),
            'aquatic':     s => s.cat === 'aquatic' || s.biome === 'Wetland',
            'succulent':   s => s.cat === 'succulent',
            'tropical':    s => s.cat === 'tropical' || (s.care?.origin||'').includes('trop'),
            'herbal':      s => s.cat === 'herbal',
            'wild':        s => s.cat === 'wild',
            'garden':      s => s.cat === 'garden',
            'perennial':   s => (s.care?.season||'').includes('Year') || (s.props||[]).includes('perennial'),
            'annual':      s => (s.props||[]).includes('annual'),
            'bee':         s => (s.pollinatorAffinity || 0.5) > 0.55,
            'butterfly':   s => (s.pollinatorAffinity || 0.5) > 0.6,
            'wind':        s => (s.pollinatorAffinity || 0.5) < 0.3,
            'bat':         s => (s.pollinatorAffinity || 0.5) < 0.25,
            'easy':        s => s.care?.diff === 'Easy',
            'hard':        s => s.care?.diff === 'Hard',
            'spring':      s => (s.care?.season||'').includes('Spring'),
            'summer':      s => (s.care?.season||'').includes('Summer'),
            'autumn':      s => (s.care?.season||'').includes('Autumn'),
            'winter':      s => (s.care?.season||'').includes('Winter'),
            'medicinal':   s => !!(s.medicinal),
            'fragrant':    s => !!(s.facts||[]).some(f => f.toLowerCase().includes('fragrant') || f.toLowerCase().includes('scent')),
        };
    }

    // Search both TAXONOMY_FLOWERS (static lib) and live V2 species
    search(query, liveSpecies = []) {
        const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
        const candidates = [
            ...(typeof TAXONOMY_FLOWERS !== 'undefined' ? TAXONOMY_FLOWERS : []).slice(0, 1404),
            ...liveSpecies.map(s => ({ ...s, _live: true })),
            ...(typeof FLOWERS !== 'undefined' ? FLOWERS : []),
        ];

        const scored = candidates.map(s => {
            let score = 0;
            tokens.forEach(tok => {
                // Colour matching
                score += this._matchColour(tok, s) ? 2 : 0;
                // Trait matching
                score += (this.traitMap[tok] && this.traitMap[tok](s)) ? 2 : 0;
                // Text matching (name, desc, latin)
                const text = `${s.name||s.commonName||''} ${s.latin||''} ${s.desc||s.description||''} ${(s.facts||[]).join(' ')} ${s.care?.origin||s.origin||''}`.toLowerCase();
                if (text.includes(tok)) score += 1;
                // Family/taxonomy
                const fam = (s.family || s.facts?.[0] || '').toLowerCase();
                if (fam.includes(tok)) score += 1;
            });
            return { s, score };
        }).filter(x => x.score > 0).sort((a, b) => b.score - a.score).slice(0, 8);

        return scored;
    }

    _matchColour(token, species) {
        // For TAXONOMY species: colour is a hex string
        if (species.color) {
            const hex = species.color;
            const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
            const hue = this._hexToHue(r, g, b);
            const ranges = this.colorMap[token];
            if (!ranges) return false;
            if (token === 'white') return (r + g + b) > 600;
            return ranges.some((_, i, arr) => i % 2 === 0 && hue >= arr[i] && hue < arr[i+1]);
        }
        // For live species: hue property
        if (species.hue !== undefined) {
            const hue = species.hue;
            const ranges = this.colorMap[token];
            if (!ranges) return false;
            if (token === 'white') return false;
            return ranges.some((_, i, arr) => i % 2 === 0 && hue >= arr[i] && hue < arr[i+1]);
        }
        return false;
    }

    _hexToHue(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
        if (d === 0) return 0;
        let h;
        if (max === r) h = ((g - b) / d) % 6;
        else if (max === g) h = (b - r) / d + 2;
        else h = (r - g) / d + 4;
        return ((h * 60) + 360) % 360;
    }
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
// Expose globally so the V4 UI panel in index.html can access them.

window.BloomV4 = {
    ReactionDiffusion,
    MorphologyInterpreter,
    LSystem,
    PetalGeometry,
    MorphogenesisEngine,
    GBIFOccurrenceEngine,
    V4SandboxUI,
    SemanticSearchV4,
};

console.log('[Bloom V4] Morphogenesis engine loaded.');

})();
