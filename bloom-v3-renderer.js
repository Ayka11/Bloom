(function () {
/**
 * BLOOM V3 — Biosphere Renderer
 * Canvas-based rotating planet with atmosphere, oceans, continents,
 * ice caps, vegetation, fauna, weather, civilization and overlay modes.
 */

'use strict';

// ─── REALISTIC EARTH PALETTE ─────────────────────────────────────────────────

const V3_PALETTE = {
    // Ocean: deep navy at poles, vivid blue-cyan at tropics
    ocean_deep_cold: '#06193a',
    ocean_cold:      '#0b2d6e',
    ocean_mid:       '#1155a8',
    ocean_tropical:  '#0e7ac4',
    ocean_shallow:   '#1c9ed6',
    // Land biomes — photorealistic satellite tones
    ice:             '#e8f4ff',
    ice_glow:        '#c8e0ff',
    tundra:          '#a0b090',
    boreal:          '#2a6035',
    temperate:       '#4a8c3f',
    tropical:        '#1a7a2a',
    savanna:         '#b8952a',
    desert:          '#d4a84a',
    desert_rock:     '#b07840',
    wetland:         '#2a8a60',
    montane:         '#7a7a8a',
    montane_snow:    '#d8dde8',
    urban:           '#787880',
    farmland:        '#a8a04a',
    // Health overlays
    health_good:     'rgba(40,200,70,0.25)',
    health_med:      'rgba(220,180,30,0.28)',
    health_bad:      'rgba(210,60,40,0.30)',
    // Atmosphere
    atmo_inner:      'rgba(60,140,255,0.45)',
    atmo_mid:        'rgba(40,100,220,0.22)',
    atmo_outer:      'rgba(20,60,190,0)',
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

function lerpColor(hex1, hex2, t) {
    const a = hexToRgb(hex1), b = hexToRgb(hex2);
    return `rgb(${Math.round(a.r + (b.r - a.r) * t)},${Math.round(a.g + (b.g - a.g) * t)},${Math.round(a.b + (b.b - a.b) * t)})`;
}

// ─── PLANET CANVAS RENDERER ───────────────────────────────────────────────────

class PlanetRenderer {
    constructor(canvas) {
        this.canvas  = canvas;
        this.ctx     = canvas.getContext('2d');
        // Use the canvas pixel dimensions
        this.W       = canvas.width  || 520;
        this.H       = canvas.height || 520;
        this.cx      = this.W / 2;
        this.cy      = this.H / 2;
        this.radius  = Math.min(this.W, this.H) * 0.44;

        this.rotation   = 0;
        this.rotSpeed   = 0.003;
        this._timeMode  = 'ecological';
        this._sunAngle  = 0.6;   // initial sun angle (radians)

        this.overlayMode = 'biosphere';

        // Pre-bake stable star positions
        this._stars = [];
        for (let i = 0; i < 180; i++) {
            const sx = (Math.sin(i * 7.3 + 42) * 0.5 + 0.5) * this.W;
            const sy = (Math.cos(i * 13.7 + 42) * 0.5 + 0.5) * this.H;
            const dx = sx - this.cx, dy = sy - this.cy;
            const outside = dx * dx + dy * dy > (this.radius + 25) * (this.radius + 25);
            this._stars.push({ x: sx, y: sy, a: 0.25 + (Math.sin(i * 2.1) * 0.5 + 0.5) * 0.65, outside });
        }

        // Earth landmasses — lon/lat polygon outlines (simplified but recognisable)
        // Each point: [longitude°, latitude°] — converted to canvas at render time
        // lon: -180→+180 (west→east), lat: -90→+90 (south→north)
        this._landmasses = [
            // North America
            { name:'north_america', biome:'temperate',
              pts:[[-168,71],[-140,70],[-90,72],[-60,63],[-52,47],[-66,44],[-82,29],[-90,20],[-104,19],[-120,23],[-118,34],[-124,48],[-168,59]] },
            // Greenland
            { name:'greenland', biome:'tundra',
              pts:[[-73,83],[-30,83],[-18,77],[-17,70],[-38,65],[-50,66],[-58,75],[-73,83]] },
            // South America
            { name:'south_america', biome:'tropical',
              pts:[[-80,12],[-60,12],[-35,5],[-35,-10],[-50,-30],[-68,-55],[-75,-50],[-80,-40],[-80,-10],[-80,12]] },
            // Europe
            { name:'europe', biome:'temperate',
              pts:[[0,51],[15,60],[30,70],[28,65],[20,55],[25,45],[15,38],[5,36],[-10,36],[-8,44],[0,51]] },
            // Africa
            { name:'africa', biome:'savanna',
              pts:[[-18,15],[15,38],[38,37],[50,12],[43,-12],[35,-35],[18,-35],[12,-18],[8,4],[-18,15]] },
            // Asia (main)
            { name:'asia', biome:'boreal',
              pts:[[35,70],[80,73],[140,72],[168,64],[135,43],[120,22],[100,10],[80,10],[60,23],[45,38],[35,38],[28,44],[28,60],[35,70]] },
            // Australia
            { name:'australia', biome:'desert',
              pts:[[114,-22],[122,-18],[136,-12],[142,-10],[148,-20],[154,-28],[148,-38],[138,-38],[128,-34],[114,-32],[114,-22]] },
            // Antarctica
            { name:'antarctica', biome:'tundra',
              pts:[[-180,-70],[0,-68],[180,-70],[180,-90],[-180,-90],[-180,-70]] },
        ];
    }

    setOverlay(mode) { this.overlayMode = mode; }

    // timeMode is passed from the core so the renderer can visually reflect simulation speed
    setTimeMode(mode) { this._timeMode = mode; }

    render(planetState, biosphereState, evolutionState, civilizationState, intelligenceState) {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.W, this.H);

        // Rotation speed varies by time mode for visual feedback
        const timeSpeeds = {
            'real-time':    0.0005,
            'ecological':   0.003,
            'evolutionary': 0.010,
            'geological':   0.025,
            'planetary':    0.055,
        };
        this.rotSpeed = timeSpeeds[this._timeMode] || 0.003;
        this.rotation += this.rotSpeed;

        // Sun angle drives day/night terminator — advances slowly
        this._sunAngle = (this._sunAngle || 0) + 0.0007;

        this._drawSpace(ctx);
        this._drawAtmosphereHalo(ctx, planetState);

        // --- planet body clip ---
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);
        ctx.clip();

        this._drawOceanBase(ctx, planetState);
        this._drawBioluminescence(ctx, planetState);
        this._drawOceanSheen(ctx);
        this._drawContinents(ctx, planetState, biosphereState);
        this._drawMycelialGlow(ctx, intelligenceState);
        this._drawVegetationLayer(ctx, biosphereState);
        this._drawIceCaps(ctx, planetState);
        this._drawCloudLayer(ctx, planetState);
        this._drawOverlayLayer(ctx, planetState, biosphereState, civilizationState);
        this._drawFaunaDots(ctx, biosphereState);
        this._drawWeatherSystems(ctx, planetState);
        this._drawCityLights(ctx, civilizationState);
        this._drawTerminator(ctx);       // day/night shadow
        this._drawLimb(ctx);
        this._drawSpecularHighlight(ctx);

        ctx.restore();
        // --- end clip ---

        this._drawAuroraBorealis(ctx, planetState);
        this._drawBiospherePulseRing(ctx, intelligenceState);
        this._drawTippingAlerts(ctx, intelligenceState);
        this._drawTimeModeIndicator(ctx);
        this._drawHUDBadges(ctx, planetState, biosphereState, evolutionState, civilizationState, intelligenceState);
    }

    // ── True orthographic projection: lon/lat → canvas pixel ─────────────────
    // Rotates the globe around the Y-axis (longitude shift via this.rotation).
    _project(lon, lat) {
        const lonRad = (lon * Math.PI / 180) + this.rotation;
        const latRad =  lat * Math.PI / 180;

        // 3-D unit vector on sphere
        const cosLat = Math.cos(latRad);
        const x3 =  Math.sin(lonRad) * cosLat;   // right
        const y3 = -Math.sin(latRad);             // up
        const z3 =  Math.cos(lonRad) * cosLat;   // towards viewer

        // z3 > 0 → front hemisphere, z3 < 0 → back hemisphere
        const visible = z3 > 0;
        const fade    = Math.max(0, z3);          // Lambertian fade at limb

        const px = this.cx + x3 * this.radius;
        const py = this.cy + y3 * this.radius;

        return { x: px, y: py, visible, fade, z: z3 };
    }

    // ── Space background ──────────────────────────────────────────────────────
    _drawSpace(ctx) {
        // r0 must be < r1; guard against zero/NaN radius on first frame
        const r0 = Math.max(0, this.radius * 0.90);
        const r1 = Math.max(r0 + 1, Math.max(this.W, this.H) * 0.95);
        const g = ctx.createRadialGradient(this.cx, this.cy, r0, this.cx, this.cy, r1);
        g.addColorStop(0, '#050c14');
        g.addColorStop(1, '#010204');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, this.W, this.H);

        // Stars — two sizes, vary brightness by twinkle
        this._stars.forEach(s => {
            if (!s.outside) return;
            const twinkle = 0.6 + Math.sin(this.rotation * 1.1 + s.x * 0.05) * 0.4;
            ctx.globalAlpha = s.a * twinkle;
            // Slightly warm or blue stars
            ctx.fillStyle = s.x % 7 === 0 ? '#ffe8c8' : s.x % 5 === 0 ? '#c8d8ff' : '#ffffff';
            const size = s.a > 0.7 ? 2 : 1;
            ctx.fillRect((s.x | 0), (s.y | 0), size, size);
        });
        ctx.globalAlpha = 1;
    }

    // ── Atmosphere halo — Rayleigh scattering glow ────────────────────────────
    _drawAtmosphereHalo(ctx, planetState) {
        const co2    = parseFloat(planetState?.climate?.atmosphere?.co2_ppm ?? 421);
        const warmth = Math.min(1, (co2 - 280) / 600);
        // Rayleigh: blue-dominant on the thin edge, shifts warmer with GHG loading
        const haloR  = this.radius * 1.14;

        // Outer diffuse blue glow
        const g = ctx.createRadialGradient(this.cx, this.cy, this.radius * 0.92, this.cx, this.cy, haloR);
        g.addColorStop(0,    `rgba(80,160,255,${0.42 + warmth * 0.18})`);
        g.addColorStop(0.35, `rgba(50,120,240,${0.22 + warmth * 0.10})`);
        g.addColorStop(0.70, `rgba(30,80,200,${0.08})`);
        g.addColorStop(1,    'rgba(10,30,120,0)');
        ctx.beginPath();
        ctx.arc(this.cx, this.cy, haloR, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        // Limb brightening: thin bright ring at planet edge
        const limbG = ctx.createRadialGradient(this.cx, this.cy, this.radius * 0.96, this.cx, this.cy, this.radius * 1.04);
        limbG.addColorStop(0,   'rgba(120,200,255,0)');
        limbG.addColorStop(0.5, `rgba(100,180,255,${0.30 + warmth * 0.12})`);
        limbG.addColorStop(1,   'rgba(60,120,220,0)');
        ctx.beginPath();
        ctx.arc(this.cx, this.cy, this.radius * 1.04, 0, Math.PI * 2);
        ctx.fillStyle = limbG;
        ctx.fill();
    }

    // ── Ocean base — realistic depth-based colouring ──────────────────────────
    _drawOceanBase(ctx, planetState) {
        const temp   = parseFloat(planetState?.climate?.global_temp ?? 14);
        const warmth = Math.max(0, Math.min(1, (temp - 2) / 30));

        // Deep ocean gradient from polar dark blue to tropical teal
        const g = ctx.createRadialGradient(
            this.cx - this.radius * 0.05, this.cy - this.radius * 0.05, 0,
            this.cx, this.cy, this.radius
        );
        // Pole-edge deep dark navy
        g.addColorStop(0,   lerpColor(V3_PALETTE.ocean_mid,        V3_PALETTE.ocean_tropical,  warmth));
        g.addColorStop(0.45,lerpColor(V3_PALETTE.ocean_cold,       V3_PALETTE.ocean_mid,        warmth));
        g.addColorStop(0.75,lerpColor(V3_PALETTE.ocean_deep_cold,  V3_PALETTE.ocean_cold,       warmth * 0.6));
        g.addColorStop(1,   V3_PALETTE.ocean_deep_cold);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    // ── Ocean sheen — subtle specular + current lines ─────────────────────────
    _drawOceanSheen(ctx) {
        // Depth shadow at edges
        const g = ctx.createRadialGradient(
            this.cx - this.radius * 0.15, this.cy - this.radius * 0.08, this.radius * 0.05,
            this.cx, this.cy, this.radius
        );
        g.addColorStop(0,   'rgba(160,220,255,0.14)');
        g.addColorStop(0.55,'rgba(20,80,180,0.06)');
        g.addColorStop(1,   'rgba(0,10,40,0.35)');
        ctx.beginPath();
        ctx.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        // Subtle ocean current lines
        ctx.strokeStyle = 'rgba(100,180,255,0.07)';
        ctx.lineWidth   = 1;
        for (let i = 0; i < 5; i++) {
            const phase = this.rotation * (0.25 + i * 0.1) + i * 1.3;
            ctx.save();
            ctx.translate(this.cx + Math.cos(phase * 0.6) * this.radius * 0.25,
                          this.cy + Math.sin(phase * 0.4) * this.radius * 0.18);
            ctx.rotate(phase * 0.3);
            ctx.beginPath();
            ctx.ellipse(0, 0, this.radius * (0.14 + i * 0.06), this.radius * (0.04 + i * 0.015), 0, 0, Math.PI * 1.5);
            ctx.stroke();
            ctx.restore();
        }
    }

    // ── Continents — orthographic-projected landmasses with climate tinting ────
    _drawContinents(ctx, planetState, biosphereState) {
        const biomass_Gt      = parseFloat(biosphereState?.flora_biomass_Gt ?? 450);
        const greenness       = Math.min(1.3, biomass_Gt / 450);
        const temp            = parseFloat(planetState?.climate?.global_temp ?? 14);
        const desertification = Math.max(0, (temp - 16) * 0.04);
        const iceFrac         = parseFloat(planetState?.climate?.ice_fraction ?? 3.5);
        // In geological/planetary time, ice ages / hothouse alternations
        const timeMode = this._timeMode || 'ecological';
        const glacialTint = (timeMode === 'geological' || timeMode === 'planetary')
            ? Math.abs(Math.sin(this.rotation * 0.002)) * 0.4 : 0;

        const biomeColor = {
            temperate: V3_PALETTE.temperate,
            tropical:  V3_PALETTE.tropical,
            savanna:   V3_PALETTE.savanna,
            boreal:    V3_PALETTE.boreal,
            tundra:    V3_PALETTE.tundra,
            desert:    V3_PALETTE.desert,
            wetland:   V3_PALETTE.wetland,
            montane:   V3_PALETTE.montane,
        };

        this._landmasses.forEach(land => {
            const projected = land.pts.map(([lon, lat]) => this._project(lon, lat));
            const visiblePts = projected.filter(p => p.visible);
            if (visiblePts.length === 0) return;

            const avgFade = visiblePts.reduce((s, p) => s + p.fade, 0) / visiblePts.length;
            if (avgFade < 0.01) return;

            ctx.save();
            ctx.globalAlpha = Math.min(0.97, avgFade * 1.15);

            ctx.beginPath();
            // Only connect consecutive visible points; lift pen at big visibility breaks
            projected.forEach((p, i) => {
                if (i === 0) { ctx.moveTo(p.x, p.y); return; }
                const prev = projected[i - 1];
                // Skip edge if both points on far side
                if (!p.visible && !prev.visible) return;
                ctx.lineTo(p.x, p.y);
            });
            ctx.closePath();

            ctx.fillStyle = biomeColor[land.biome] || V3_PALETTE.temperate;
            ctx.fill();

            // Vegetation tint
            if (land.biome !== 'desert' && land.biome !== 'tundra' && greenness > 0.3) {
                ctx.fillStyle = `rgba(30,180,50,${Math.min(0.30, 0.10 * greenness - desertification * 0.04)})`;
                ctx.fill();
            }
            // Desert heat tint from warming
            if (desertification > 0.05 && (land.biome === 'savanna' || land.biome === 'desert')) {
                ctx.fillStyle = `rgba(200,140,30,${desertification * 0.35})`;
                ctx.fill();
            }
            // Glacial ice sheet overlay (geological time)
            if (glacialTint > 0.05) {
                ctx.fillStyle = `rgba(200,230,255,${glacialTint * avgFade})`;
                ctx.fill();
            }

            // Terrain edge shadow for 3-D depth
            ctx.strokeStyle = 'rgba(0,0,0,0.22)';
            ctx.lineWidth   = 0.6;
            ctx.stroke();

            ctx.restore();
        });

        ctx.globalAlpha = 1;
    }

    // ── Vegetation density glow ───────────────────────────────────────────────
    _drawVegetationLayer(ctx, biosphereState) {
        if (!biosphereState) return;
        const biomass = parseFloat(biosphereState.flora_biomass_Gt ?? 450);
        const density = Math.min(1, biomass / 550);
        if (density < 0.1) return;

        ctx.globalAlpha = 0.18 * density;
        ctx.fillStyle   = '#44ff88';
        for (let i = 0; i < 40; i++) {
            const a = (i / 40) * Math.PI * 2 + this.rotation * 0.18;
            const r = this.radius * (0.15 + (Math.abs(Math.sin(i * 3.7)) * 0.60));
            ctx.beginPath();
            ctx.arc(this.cx + Math.cos(a) * r, this.cy + Math.sin(a) * r * 0.88, 4 + density * 5, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
    }

    // ── Ice caps — orthographic polar bands with correct sphere shape ─────────
    _drawIceCaps(ctx, planetState) {
        const icePct     = parseFloat(planetState?.climate?.ice_fraction ?? 3.5);
        const iceEdgeLat = 90 - icePct * 14;   // e.g. 3.5% → 41° from pole = 49° lat

        const drawCap = (sign) => {
            ctx.beginPath();
            let started = false;
            // Walk ice-edge latitude ring at fine resolution
            for (let lon = -180; lon <= 180; lon += 4) {
                const p = this._project(lon, sign * iceEdgeLat);
                if (!started) { ctx.moveTo(p.x, p.y); started = true; }
                else ctx.lineTo(p.x, p.y);
            }
            // Walk pole ring
            for (let lon = 180; lon >= -180; lon -= 4) {
                const p = this._project(lon, sign * 89.5);
                ctx.lineTo(p.x, p.y);
            }
            ctx.closePath();

            const capCy = sign > 0 ? this.cy - this.radius * 0.80 : this.cy + this.radius * 0.80;
            const g = ctx.createRadialGradient(this.cx, capCy, 0, this.cx, capCy, this.radius * 0.42);
            g.addColorStop(0,   V3_PALETTE.ice);
            g.addColorStop(0.6, V3_PALETTE.ice_glow);
            g.addColorStop(1,   'rgba(200,230,255,0.55)');
            ctx.fillStyle   = g;
            ctx.globalAlpha = 0.90;
            ctx.fill();
            ctx.globalAlpha = 1;

            // Subtle ice edge crack lines
            ctx.strokeStyle = 'rgba(180,215,255,0.30)';
            ctx.lineWidth   = 0.5;
            ctx.stroke();
        };

        drawCap( 1);   // Arctic
        drawCap(-1);   // Antarctic
        ctx.globalAlpha = 1;
    }

    // ── Cloud layer — animated white swirls over the globe ────────────────────
    _drawCloudLayer(ctx, planetState) {
        const coverage = Math.min(1, 0.55 + (parseFloat(planetState?.climate?.global_temp ?? 14) - 14) * 0.01);
        ctx.save();
        ctx.globalAlpha = 0.55 * coverage;

        // Several cloud bands at different latitudes, rotating faster than surface
        const cloudRot = this.rotation * 1.28;
        const bands = [
            { lat: 55,  lon0: -60,  dLon: 80, thick: 12 },
            { lat: 30,  lon0:  20,  dLon: 70, thick: 9  },
            { lat:  8,  lon0: 100,  dLon: 90, thick: 10 },
            { lat: -15, lon0: -40,  dLon: 75, thick: 8  },
            { lat: -45, lon0:  80,  dLon: 85, thick: 11 },
            { lat:  62, lon0: 140,  dLon: 65, thick: 8  },
        ];

        bands.forEach((band, bi) => {
            const spread  = 14;
            const rotOff  = cloudRot * (1 + bi * 0.07) + bi * 1.1;
            // Draw cloud as a wide bezier band at this latitude
            ctx.beginPath();
            let first = true;
            for (let dLon = 0; dLon <= band.dLon; dLon += 3) {
                const lon = band.lon0 + dLon + (rotOff * 180 / Math.PI) % 360;
                const lat = band.lat + Math.sin((dLon / band.dLon) * Math.PI * 2.5 + rotOff) * spread;
                const p   = this._projectCloud(lon, lat);
                if (!p.visible) continue;
                if (first) { ctx.moveTo(p.x, p.y); first = false; }
                else ctx.lineTo(p.x, p.y);
            }
            for (let dLon = band.dLon; dLon >= 0; dLon -= 3) {
                const lon = band.lon0 + dLon + (rotOff * 180 / Math.PI) % 360;
                const lat = band.lat + Math.sin((dLon / band.dLon) * Math.PI * 2.5 + rotOff) * spread + band.thick;
                const p   = this._projectCloud(lon, lat);
                ctx.lineTo(p.x, p.y);
            }
            ctx.closePath();
            ctx.fillStyle = `rgba(255,255,255,${0.55 + bi * 0.03})`;
            ctx.fill();
        });

        ctx.restore();
    }

    // Cloud layer gets its own projection (slightly elevated above surface)
    _projectCloud(lon, lat) {
        const r = this.radius * 1.008;
        const lonRad = (lon * Math.PI / 180) + this.rotation * 1.28;
        const latRad =  lat * Math.PI / 180;
        const cosLat = Math.cos(latRad);
        const x3 =  Math.sin(lonRad) * cosLat;
        const y3 = -Math.sin(latRad);
        const z3 =  Math.cos(lonRad) * cosLat;
        return { x: this.cx + x3 * r, y: this.cy + y3 * r, visible: z3 > -0.1 };
    }

    // ── Day/Night terminator ──────────────────────────────────────────────────
    _drawTerminator(ctx) {
        // Sun at a fixed screen direction (rotates slowly). The terminator is a
        // great circle on the sphere perpendicular to the sun direction.
        const sa = this._sunAngle;
        // Sun direction vector in the globe's frame
        const sx = Math.cos(sa), sz = Math.sin(sa);

        // Shade the hemisphere facing away from the sun
        // We sample every pixel of the sphere in a 1px-wide scanline approach
        // and paint a semi-transparent night gradient instead.
        const g = ctx.createRadialGradient(
            this.cx + sx * this.radius * 0.85,
            this.cy,
            0,
            this.cx, this.cy, this.radius
        );
        // Day side transparent; night side dark with blue tint
        g.addColorStop(0,    'rgba(0,0,0,0)');
        g.addColorStop(0.48, 'rgba(0,0,0,0)');
        g.addColorStop(0.56, 'rgba(5,10,30,0.30)');
        g.addColorStop(1,    'rgba(2,5,20,0.72)');

        // Apply the gradient with a clip covering the night half
        ctx.save();
        ctx.translate(this.cx - sx * this.radius * 0.08, this.cy);
        ctx.rotate(-sa + Math.PI / 2);
        ctx.fillStyle = g;
        ctx.fillRect(-this.radius * 1.1, -this.radius * 1.1, this.radius * 2.2, this.radius * 2.2);
        ctx.restore();
    }

    // ── Time mode speed indicator (corner badge) ──────────────────────────────
    _drawTimeModeIndicator(ctx) {
        const labels = {
            'real-time':    { text: '⏱ REAL-TIME',   color: '#88ddff' },
            'ecological':   { text: '🌿 ECOLOGICAL',  color: '#66ff99' },
            'evolutionary': { text: '🧬 EVOLUTIONARY',color: '#bbaaff' },
            'geological':   { text: '🌋 GEOLOGICAL',  color: '#ffaa44' },
            'planetary':    { text: '🪐 PLANETARY',   color: '#ff7744' },
        };
        const info = labels[this._timeMode] || labels['ecological'];
        const tx = this.cx - this.radius + 6;
        const ty = this.cy - this.radius + 14;
        ctx.save();
        ctx.font = 'bold 9px "Jost", monospace';
        ctx.textBaseline = 'middle';
        const tw = ctx.measureText(info.text).width;
        ctx.fillStyle = 'rgba(0,8,4,0.72)';
        ctx.fillRect(tx - 3, ty - 8, tw + 10, 17);
        ctx.fillStyle = info.color;
        ctx.fillText(info.text, tx + 2, ty + 1);
        ctx.restore();
    }

    // ── Overlay heat-maps — latitude-graded, visually distinct per mode ──────
    _drawOverlayLayer(ctx, planetState, biosphereState, civilizationState) {
        if (this.overlayMode === 'none') return;

        ctx.save();
        ctx.globalCompositeOperation = 'source-atop';

        if (this.overlayMode === 'temperature') {
            // Warm tropics → cool poles gradient, shifted by global temp
            const temp  = parseFloat(planetState?.climate?.global_temp ?? 14);
            const shift = (temp - 14) / 20;   // positive = warmer, red band widens
            // Vertical gradient: hot equator (red-orange) to cold poles (blue)
            const g = ctx.createLinearGradient(this.cx, this.cy - this.radius, this.cx, this.cy + this.radius);
            g.addColorStop(0,    `rgba(80,130,255,${0.32 + shift * 0.1})`);  // N pole — blue
            g.addColorStop(0.25, `rgba(60,180,200,${0.20})`);                 // sub-arctic
            g.addColorStop(0.50, `rgba(255,${Math.max(40,120-Math.round(shift*160))},0,${0.28 + shift * 0.18})`); // equator
            g.addColorStop(0.75, `rgba(60,180,200,${0.20})`);
            g.addColorStop(1,    `rgba(80,130,255,${0.32 + shift * 0.1})`);  // S pole
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);
            ctx.fill();

        } else if (this.overlayMode === 'carbon') {
            // CO₂ shown as a atmospheric orange-brown haze, stronger at mid-latitudes
            const co2 = parseFloat(planetState?.climate?.atmosphere?.co2_ppm ?? 421);
            const t   = Math.max(0, Math.min(1, (co2 - 280) / 520));
            // Radial gradient — heavier at equatorial band, lighter at poles
            const g = ctx.createRadialGradient(this.cx, this.cy, 0, this.cx, this.cy, this.radius);
            g.addColorStop(0,    `rgba(255,140,0,${t * 0.35})`);
            g.addColorStop(0.55, `rgba(200,90,0,${t * 0.28})`);
            g.addColorStop(0.85, `rgba(120,50,0,${t * 0.15})`);
            g.addColorStop(1,    'rgba(0,0,0,0)');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);
            ctx.fill();
            // Extra CO₂ ring at the top of atmosphere
            if (t > 0.3) {
                ctx.strokeStyle = `rgba(255,160,30,${t * 0.22})`;
                ctx.lineWidth   = 4 * t;
                ctx.beginPath();
                ctx.arc(this.cx, this.cy, this.radius * 0.96, 0, Math.PI * 2);
                ctx.stroke();
            }

        } else if (this.overlayMode === 'civilization') {
            // Human pressure: dense mid-latitude red band + bright city-region patches
            const bdp = parseFloat(civilizationState?.civilization?.biodiversity_pressure ?? 65) / 100;
            const pop = parseFloat(civilizationState?.civilization?.population_B ?? 8.1);
            // Latitude band where population is concentrated (20–60° N/S)
            const g = ctx.createLinearGradient(this.cx, this.cy - this.radius, this.cx, this.cy + this.radius);
            g.addColorStop(0,    `rgba(220,50,20,${bdp * 0.08})`);   // far N
            g.addColorStop(0.22, `rgba(220,50,20,${bdp * 0.38})`);   // N temperate
            g.addColorStop(0.35, `rgba(255,100,0,${bdp * 0.28})`);   // N tropical
            g.addColorStop(0.50, `rgba(255,60,20,${bdp * 0.20})`);   // equator
            g.addColorStop(0.65, `rgba(255,100,0,${bdp * 0.28})`);   // S tropical
            g.addColorStop(0.78, `rgba(220,50,20,${bdp * 0.32})`);   // S temperate
            g.addColorStop(1,    `rgba(220,50,20,${bdp * 0.08})`);   // far S
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);
            ctx.fill();
            // Deforestation hot-spots (tropical belt flicker)
            const defor = parseFloat(civilizationState?.civilization?.deforestation_rate ?? 0.01);
            if (defor > 0.001) {
                const flash = 0.08 + Math.abs(Math.sin(this.rotation * 4)) * 0.10;
                ctx.fillStyle = `rgba(255,50,0,${flash * Math.min(1, defor * 50)})`;
                // Tropical band ~15° lat
                const trop  = this.cy + (15 / 90) * this.radius;
                const bandH = (10 / 90) * this.radius;
                ctx.fillRect(this.cx - this.radius, trop - bandH, this.radius * 2, bandH * 2);
            }

        } else {   // biosphere
            // Soil/vegetation health: green (good) → yellow → red gradient
            const soil    = parseFloat(biosphereState?.fungal?.soil_health ?? 0.75);
            const biomass = parseFloat(biosphereState?.flora_biomass_Gt ?? 450);
            const health  = Math.min(1, (soil * 0.6 + (biomass / 600) * 0.4));
            // Color: vivid green for healthy, amber for stressed, crimson for failing
            const r = health > 0.6 ? Math.round((1 - health) * 2 * 200) : 220;
            const g2= health > 0.6 ? 200 : Math.round(health * 2 * 200);
            const b2= 30;
            const grd = ctx.createRadialGradient(this.cx, this.cy - this.radius * 0.1, 0, this.cx, this.cy, this.radius);
            grd.addColorStop(0,    `rgba(${r},${g2},${b2},${0.08 + (1 - health) * 0.20})`);
            grd.addColorStop(0.6,  `rgba(${r},${g2},${b2},${0.20 + (1 - health) * 0.15})`);
            grd.addColorStop(1,    `rgba(${r},${g2},${b2},0.05)`);
            ctx.fillStyle = grd;
            ctx.beginPath();
            ctx.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    // ── Fauna dots — placed on realistic biome locations ─────────────────────
    _drawFaunaDots(ctx, biosphereState) {
        if (!biosphereState?.fauna?.species_detail) return;
        const typeCol = { herbivore: '#66ff88', predator: '#ff6644', pollinator: '#ffee44', decomposer: '#88aaff', scavenger: '#ffaa44' };
        const agents  = window.bloomV3Biosphere?.fauna?.agents || [];
        // Approximate biome anchor lon/lat for each agent
        const biomeLonLat = {
            temperate_forest:   [-80, 45],
            tropical_savanna:   [30, 5],
            tundra:             [100, 68],
            temperate_grassland:[-95, 40],
            ocean:              [160, 0],
            tropical_rainforest:[60, -5],
        };

        biosphereState.fauna.species_detail.forEach((sp, i) => {
            if (sp.population < 1) return;
            const agent = agents[i];
            const type  = agent?.species?.type || 'herbivore';
            const biome = agent?.species?.biome || 'temperate_forest';
            const color = typeCol[type] || '#aaffaa';

            const anchor = biomeLonLat[biome] || [0, 0];
            // Scatter around the biome anchor
            const jLon = anchor[0] + Math.sin(i * 7.3) * 18;
            const jLat = anchor[1] + Math.cos(i * 5.1) * 12;
            const p    = this._project(jLon, jLat);
            if (!p.visible || p.fade < 0.1) return;

            const size = Math.max(2.5, Math.log10(Math.max(10, sp.population)) * 2);
            ctx.globalAlpha = p.fade * 0.72;
            ctx.fillStyle   = color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
            ctx.fill();
            // Outer glow
            const glow = ctx.createRadialGradient(p.x, p.y, size * 0.5, p.x, p.y, size * 2.5);
            glow.addColorStop(0, color.replace(')', ',0.3)').replace('rgb', 'rgba'));
            glow.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(p.x, p.y, size * 2.5, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1;
    }

    // ── Weather spiral systems ────────────────────────────────────────────────
    _drawWeatherSystems(ctx, planetState) {
        const events = planetState?.climate?.active_events ?? 0;
        if (events === 0) return;

        ctx.lineWidth = 1.5;
        for (let e = 0; e < Math.min(events, 4); e++) {
            const baseAngle = (e / 4) * Math.PI * 2;
            const wx  = this.cx + Math.cos(baseAngle + this.rotation * 0.3) * this.radius * 0.50;
            const wy  = this.cy + Math.sin(baseAngle + this.rotation * 0.3) * this.radius * 0.45;

            ctx.save();
            ctx.translate(wx, wy);
            ctx.strokeStyle = `rgba(200,240,255,${0.25 + e * 0.05})`;
            ctx.beginPath();
            for (let a = 0; a < Math.PI * 3.5; a += 0.15) {
                const r  = (a / (Math.PI * 3.5)) * (14 + e * 8);
                const px = Math.cos(a + this.rotation * (e % 2 === 0 ? 1.5 : -1.5)) * r;
                const py = Math.sin(a + this.rotation * (e % 2 === 0 ? 1.5 : -1.5)) * r * 0.65;
                a < 0.15 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
            }
            ctx.stroke();
            ctx.restore();
        }
    }

    // ── City lights — placed along real population-dense coastlines ──────────
    _drawCityLights(ctx, civilizationState) {
        const pop   = parseFloat(civilizationState?.civilization?.population_B ?? 8.1);
        // Approximate major city lon/lat positions
        const cities = [
            // Mega-cities (pop > 10M) — always shown
            [-74,41],[2,49],[37,55],[116,40],[121,31],[139,36],[77,29],[88,23],
            [28,41],[31,30],[55,25],[103,1],[107,-6],[-46,-23],[-43,-23],[-99,19],
            [-87,42],[-118,34],[-80,25],[-122,37],[-79,44],[174,-37],[151,-34],
            // Secondary cities
            [-0,52],[13,52],[17,59],[10,53],[4,51],[20,52],[19,48],[14,50],
            [-9,39],[12,42],[15,37],[23,38],[44,34],[67,25],[73,19],[80,13],
            [112,23],[113,22],[120,24],[127,37],[131,43],[144,43],[141,38],
            [-105,40],[-90,30],[-83,44],[-71,42],[-78,36],[-73,4],[-58,-34],
            [-70,-33],[25,-26],[36,-1],[3,6],[39,-8],[38,9],[36,-19],
        ];

        const visCount = Math.min(cities.length, Math.floor(pop * 5));
        for (let i = 0; i < visCount; i++) {
            const [lon, lat] = cities[i];
            const p = this._project(lon, lat);
            if (!p.visible || p.fade < 0.1) continue;
            ctx.globalAlpha = p.fade * (0.45 + Math.sin(this.rotation * 2.5 + i * 0.7) * 0.12);
            // Larger cities get bigger dots
            const dotR = i < 10 ? 2.5 : i < 25 ? 1.8 : 1.2;
            ctx.fillStyle = i < 10 ? '#ffe8a0' : '#ffd060';
            ctx.beginPath();
            ctx.arc(p.x, p.y, dotR, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
    }

    // ── Dark limb (edge shadow) ───────────────────────────────────────────────
    _drawLimb(ctx) {
        const g = ctx.createRadialGradient(
            this.cx + this.radius * 0.12, this.cy - this.radius * 0.10, this.radius * 0.70,
            this.cx, this.cy, this.radius
        );
        g.addColorStop(0,   'rgba(0,0,0,0)');
        g.addColorStop(0.75,'rgba(0,0,0,0.08)');
        g.addColorStop(1,   'rgba(0,0,0,0.65)');

        ctx.beginPath();
        ctx.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
    }

    // ── Specular highlight ────────────────────────────────────────────────────
    _drawSpecularHighlight(ctx) {
        const g = ctx.createRadialGradient(
            this.cx - this.radius * 0.30, this.cy - this.radius * 0.30, 0,
            this.cx - this.radius * 0.05, this.cy - this.radius * 0.05, this.radius * 0.65
        );
        g.addColorStop(0,   'rgba(255,255,255,0.22)');
        g.addColorStop(0.35,'rgba(255,255,255,0.06)');
        g.addColorStop(1,   'rgba(255,255,255,0)');

        ctx.beginPath();
        ctx.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
    }

    // ── Deep-ocean bioluminescence ────────────────────────────────────────────
    _drawBioluminescence(ctx, planetState) {
        const temp = parseFloat(planetState?.climate?.global_temp ?? 14);
        if (temp < 12) return;
        const intensity = Math.min(1, (temp - 12) * 0.08);
        ctx.globalAlpha = 0.06 * intensity;
        for (let i = 0; i < 18; i++) {
            const a  = (i / 18) * Math.PI * 2 + this.rotation * 0.08;
            const r  = this.radius * (0.55 + Math.abs(Math.sin(i * 4.1)) * 0.35);
            const px = this.cx + Math.cos(a) * r;
            const py = this.cy + Math.sin(a) * r * 0.9;
            const g  = ctx.createRadialGradient(px, py, 0, px, py, 12 + intensity * 10);
            g.addColorStop(0,   `rgba(0,255,200,${0.7 * intensity})`);
            g.addColorStop(1,   'rgba(0,80,120,0)');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(px, py, 12 + intensity * 10, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
    }

    // ── Mycorrhizal network glow ──────────────────────────────────────────────
    _drawMycelialGlow(ctx, intelligenceState) {
        const density = parseFloat(intelligenceState?.mycelial?.network_density_pct ?? 80) / 100;
        if (density < 0.2) return;
        ctx.globalAlpha = 0.07 * density;
        ctx.strokeStyle = `rgba(180,120,255,${0.5 * density})`;
        ctx.lineWidth   = 0.8;
        // Thread-like mycelial filaments radiating between continent blobs
        const numThreads = Math.floor(density * 22);
        for (let i = 0; i < numThreads; i++) {
            const a1 = (i / numThreads) * Math.PI * 2 + this.rotation * 0.04;
            const a2 = a1 + 0.6 + Math.sin(i * 1.7) * 0.4;
            const r1 = this.radius * (0.2 + Math.abs(Math.sin(i * 3.1)) * 0.5);
            const r2 = this.radius * (0.2 + Math.abs(Math.cos(i * 2.3)) * 0.5);
            ctx.beginPath();
            ctx.moveTo(this.cx + Math.cos(a1) * r1, this.cy + Math.sin(a1) * r1 * 0.85);
            ctx.bezierCurveTo(
                this.cx + Math.cos(a1 + 0.3) * r1 * 0.7, this.cy + Math.sin(a1 + 0.3) * r1 * 0.7,
                this.cx + Math.cos(a2 - 0.3) * r2 * 0.7, this.cy + Math.sin(a2 - 0.3) * r2 * 0.7,
                this.cx + Math.cos(a2) * r2,              this.cy + Math.sin(a2) * r2 * 0.85
            );
            ctx.stroke();
        }
        ctx.globalAlpha = 1;
    }

    // ── Aurora Borealis / Australis ───────────────────────────────────────────
    _drawAuroraBorealis(ctx, planetState) {
        const ice = parseFloat(planetState?.climate?.ice_fraction ?? 3.5);
        const temp= parseFloat(planetState?.climate?.global_temp ?? 14);
        // Auroras more vivid when solar wind strong; simplified: always present at poles,
        // intensity inversely related to warming (more magnetic disruption)
        const intensity = Math.max(0.05, Math.min(0.8, (ice / 3.5) * 0.5 + 0.1));

        const drawAurora = (cy, mirror) => {
            const numBands = 4;
            for (let b = 0; b < numBands; b++) {
                ctx.beginPath();
                const phase = this.rotation * (0.2 + b * 0.07) + b * 1.1;
                const baseR = this.radius * (1.02 + b * 0.025);
                for (let a = 0; a <= Math.PI; a += 0.05) {
                    const wave = Math.sin(a * 3 + phase) * this.radius * 0.04 * (1 + b * 0.3);
                    const r    = baseR + wave;
                    const px   = this.cx + Math.cos(a * mirror) * r;
                    const py   = cy       + Math.sin(a) * r * 0.18;
                    a < 0.05 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
                }
                const hue = 140 + b * 15;   // green → teal
                ctx.strokeStyle = `hsla(${hue},100%,65%,${intensity * (0.4 - b * 0.07)})`;
                ctx.lineWidth   = 1.5 + b * 0.5;
                ctx.stroke();
            }
        };

        // North pole
        drawAurora(this.cy - this.radius * 0.88, 1);
        // South pole
        drawAurora(this.cy + this.radius * 0.88, -1);
    }

    // ── Biosphere health pulse ring ───────────────────────────────────────────
    _drawBiospherePulseRing(ctx, intelligenceState) {
        const lpi   = parseFloat(intelligenceState?.health?.composite_lpi ?? 75);
        const color = intelligenceState?.health?.status_color ?? '#44ff88';
        // Pulsing outer ring whose speed and color reflect planetary health
        const pulseSpeed = 1 + (100 - lpi) * 0.02;
        const pulseAlpha = 0.08 + Math.abs(Math.sin(this.rotation * pulseSpeed)) * 0.12;
        const ringR      = this.radius * (1.06 + Math.sin(this.rotation * pulseSpeed) * 0.012);

        ctx.beginPath();
        ctx.arc(this.cx, this.cy, ringR, 0, Math.PI * 2);
        // Parse color for rgba
        const hex = color.replace('#', '');
        const r = parseInt(hex.slice(0,2),16), g = parseInt(hex.slice(2,4),16), b = parseInt(hex.slice(4,6),16);
        ctx.strokeStyle = `rgba(${r},${g},${b},${pulseAlpha})`;
        ctx.lineWidth   = 2.5;
        ctx.stroke();
    }

    // ── Tipping-point alerts (arc markers around planet) ─────────────────────
    _drawTippingAlerts(ctx, intelligenceState) {
        const warnings = intelligenceState?.nervous?.tipping_labels ?? [];
        if (warnings.length === 0) return;

        const flash = Math.abs(Math.sin(this.rotation * 3)) * 0.6 + 0.2;
        ctx.font      = 'bold 9px "Jost", monospace';
        ctx.textAlign = 'left';
        warnings.slice(0, 4).forEach((label, i) => {
            const angle  = (i / 4) * Math.PI * 2 - Math.PI / 2 + this.rotation * 0.05;
            const markerR= this.radius * 1.16;
            const px     = this.cx + Math.cos(angle) * markerR;
            const py     = this.cy + Math.sin(angle) * markerR;

            // Warning dot
            ctx.globalAlpha = flash;
            ctx.fillStyle   = '#ff6644';
            ctx.beginPath();
            ctx.arc(px, py, 4, 0, Math.PI * 2);
            ctx.fill();

            // Label (short)
            ctx.globalAlpha = flash * 0.85;
            ctx.fillStyle   = '#ffaa66';
            const short = label.length > 20 ? label.slice(0, 18) + '…' : label;
            ctx.fillText(short, px + 7, py + 3);
        });
        ctx.globalAlpha = 1;
        ctx.textAlign   = 'left';
    }

    // ── HUD badges ────────────────────────────────────────────────────────────
    _drawHUDBadges(ctx, planet, biosphere, evolution, civilization, intelligenceState) {
        const temp    = parseFloat(planet?.climate?.global_temp    ?? 14).toFixed(1);
        const co2     = parseFloat(planet?.climate?.atmosphere?.co2_ppm ?? 421).toFixed(0);
        const pop     = parseFloat(civilization?.civilization?.population_B ?? 8.1).toFixed(2);
        const species = evolution?.evolution?.total_species ?? '8,700,000';
        const soil    = parseFloat(biosphere?.fungal?.soil_health ?? 0.75);
        const extRate = parseFloat(evolution?.evolution?.extinction?.extinction_rate_yr ?? 2).toFixed(0);

        const tempColor  = parseFloat(temp) > 16 ? '#ff9060' : '#88ddff';
        const co2Color   = parseFloat(co2)  > 450 ? '#ffcc44' : '#99eeaa';
        const soilColor  = soil < 0.4 ? '#ff8844' : '#66ddaa';
        const extColor   = parseFloat(extRate) > 50 ? '#ff6644' : '#ffcc66';

        const lpi        = parseFloat(intelligenceState?.health?.composite_lpi ?? 75);
        const lpiColor   = intelligenceState?.health?.status_color ?? '#44ff88';
        const tipping    = intelligenceState?.nervous?.tipping_warnings ?? 0;
        const tipColor   = tipping > 2 ? '#ff4444' : tipping > 0 ? '#ffaa44' : '#55ff99';
        const myc        = parseFloat(intelligenceState?.mycelial?.network_density_pct ?? 80);
        const mycColor   = myc < 40 ? '#ff8844' : '#cc88ff';

        ctx.font         = 'bold 12px "Jost", monospace';
        ctx.textBaseline = 'middle';

        const right = this.cx + this.radius + 14;
        const badges = [
            { text: `🌡 ${temp}°C`,                x: right, y: this.cy - 76, color: tempColor },
            { text: `CO₂ ${co2}ppm`,               x: right, y: this.cy - 52, color: co2Color  },
            { text: `👥 ${pop}B`,                  x: right, y: this.cy - 28, color: '#aaaaff' },
            { text: `🧬 ${typeof species === 'number' ? species.toLocaleString() : species} sp`, x: right, y: this.cy - 4, color: '#66ffaa' },
            { text: `🌱 soil ${(soil*100).toFixed(0)}%`,    x: right, y: this.cy + 20, color: soilColor  },
            { text: `💀 ext ${extRate}/yr`,         x: right, y: this.cy + 44, color: extColor   },
            { text: `🌐 LPI ${lpi.toFixed(0)}`,    x: right, y: this.cy + 68, color: lpiColor   },
            { text: `⚠ tip ${tipping}`,            x: right, y: this.cy + 92, color: tipColor   },
            { text: `🍄 myc ${myc.toFixed(0)}%`,   x: right, y: this.cy + 116,color: mycColor   },
        ];

        badges.forEach(b => {
            const tw = ctx.measureText(b.text).width;
            ctx.fillStyle   = 'rgba(5,15,10,0.78)';
            ctx.fillRect(b.x - 4, b.y - 9, tw + 10, 20);
            ctx.fillStyle   = b.color;
            ctx.fillText(b.text, b.x, b.y);
        });
    }
}

// ─── BIOSPHERE SPARKLINE CHARTS ───────────────────────────────────────────────

class BiosphereOverlayCharts {
    constructor(containerEl) {
        this.container  = containerEl;
        this._history   = { temp: [], co2: [], biomass: [], soilHealth: [], species: [] };
        this.maxHistory = 120;
    }

    record(planet, biosphere, evolution) {
        const push = (arr, val) => { arr.push(val); if (arr.length > this.maxHistory) arr.shift(); };
        push(this._history.temp,       parseFloat(planet?.climate?.global_temp ?? 14));
        push(this._history.co2,        parseFloat(planet?.climate?.atmosphere?.co2_ppm ?? 421));
        push(this._history.biomass,    parseFloat(biosphere?.flora_biomass_Gt ?? 450));
        push(this._history.soilHealth, parseFloat(biosphere?.fungal?.soil_health ?? 0.75) * 100);
        const sp = (evolution?.evolution?.total_species ?? '8700000').toString().replace(/,/g, '');
        push(this._history.species,    parseFloat(sp) / 1e6);
    }

    renderSparklines() {
        if (!this.container) return;
        const entries = [
            { key: 'temp',       label: 'Temp °C',    color: '#ff9060' },
            { key: 'co2',        label: 'CO₂ ppm',    color: '#ffcc44' },
            { key: 'biomass',    label: 'Biomass Gt', color: '#66ff88' },
            { key: 'soilHealth', label: 'Soil %',     color: '#44ccff' },
            { key: 'species',    label: 'Species M',  color: '#cc88ff' },
        ];
        this.container.innerHTML = entries.map(e => {
            const data = this._history[e.key];
            if (!data || data.length < 2) return `
            <div class="v3-sparkline-row">
              <span class="v3-sparkline-label">${e.label}</span>
              <svg width="120" height="28"><text x="4" y="18" fill="${e.color}" font-size="10" font-family="monospace">loading…</text></svg>
              <span class="v3-sparkline-val" style="color:${e.color}">—</span>
            </div>`;
            // Auto-scale: use actual data range with a minimum padding so flat lines show mid
            const dMin = Math.min(...data);
            const dMax = Math.max(...data);
            const pad  = (dMax - dMin) < 0.001 ? Math.abs(dMin) * 0.05 + 0.5 : 0;
            const path = this._path(data, dMin - pad, dMax + pad, 120, 26);
            const last = data[data.length - 1];
            return `
            <div class="v3-sparkline-row">
              <span class="v3-sparkline-label">${e.label}</span>
              <svg width="120" height="28" class="v3-sparkline-svg">
                <path d="${path}" fill="none" stroke="${e.color}" stroke-width="1.8" stroke-linejoin="round"/>
              </svg>
              <span class="v3-sparkline-val" style="color:${e.color}">${last.toFixed(1)}</span>
            </div>`;
        }).join('');
    }

    _path(data, min, max, w, h) {
        const range = (max - min) || 1;
        return data.map((v, i) => {
            const x = ((i / (data.length - 1)) * w).toFixed(1);
            const y = (h - ((v - min) / range) * h).toFixed(1);
            return (i === 0 ? 'M' : 'L') + x + ' ' + y;
        }).join(' ');
    }
}

// Export to global scope
window.BloomV3Renderer = { PlanetRenderer, BiosphereOverlayCharts };
})();
