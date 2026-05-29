---
title: Bloom — Universal Life Intelligence Platform
emoji: 🌍
colorFrom: green
colorTo: blue
sdk: docker
app_port: 7860
pinned: true
license: mit
---

# Bloom — Universal Life Intelligence Platform

Bloom is a browser-based simulation spanning nine versions: from a hand-curated botanical encyclopedia to a self-modifying autonomous reality engine. Plants evolve, climates change, oceans acidify, civilisations rise, parallel universes diverge, consciousness emerges, and the simulation rewrites its own equations — all in real time, all in a single HTML page served by a Node.js static server.

---

## Version Map

| Version | Name | Core concept | Status |
|---------|------|--------------|--------|
| **V1** | Botanical Encyclopedia | 130+ curated species, SVG illustrations, care guides | ✅ Live |
| **V2** | Ecosystem Simulator | Genome engine, pollination network, knowledge graph | ✅ Live |
| **V3** | Earth Biosphere OS | Full planetary simulation, 72 climate cells, Claude AI agents | ✅ Live |
| **V4** | Morphogenesis Lab | Genome → reaction-diffusion → Bezier petal → L-system pipeline | ✅ Live |
| **V5** | Multiverse Engine | Parallel universes, self-evolving physics, timeline branching | ✅ Live |
| **V6** | Consciousness Layer | Planetary consciousness index, ontology generator, self-reflection stream | ✅ Live |
| **V7** | Meta-Evolution Engine | GA evolving its own parameters, recursive knowledge graph, non-linear timeline | ✅ Live |
| **V8** | Universal Semantic Engine | Cross-universe law detection, possibility space, transfinite intelligence | ✅ Live |
| **V9** | Autonomous Reality Engine | Self-rewriting rules, eternal loop renderer, post-symbolic genome glyphs, reality seeds | ✅ Live |

---

## Architecture

```
Bloom Universal Life Intelligence Platform
│
├── bloom-data.js               V1: 31 hand-curated species with inline SVGs
├── taxonomy-data.js            V1/V2: 1,404 procedural species (trimmed from 10,000; 2 per genus/category)
├── bloom-app.js                V1: Category filters, search, modal system, favourites
├── bloom-simulator.js          V1: Climate engine, soil chemistry, basic growth simulator
│
├── bloom-v2.js                 V2: Ecosystem Simulator
│   ├── Genome                  Quantitative trait inheritance (morphology, pigmentation, adaptation, metabolism, reproduction)
│   ├── ProceduralSpecies       Phenotype derived from genome
│   ├── EvolutionEngine         Lineage tracking, mutation, crossover, fitness scoring
│   ├── PollinationNetwork      Temperature/light-dependent activity, 8 pollinator types
│   ├── KnowledgeGraph          Species × ecosystem × climate × geography canvas
│   └── ClimateEngineV2 / SoilSystemV2 / PlanetaryBiosphere
│
├── bloom-v3-core.js            V3: Planetary Core (34 KB)
│   ├── AtmosphericChemistry    CO₂/CH₄/O₃/O₂ budgets, radiative forcing (Myhre 1998)
│   ├── PlanetaryClimateEngine  72 climate cells (6 lat × 12 lon), ECS 3°C/doubling, extreme events
│   ├── OceanSimulation         8 basins, AMOC, pH, plankton, coral, biological carbon pump
│   ├── GeologicalEngine        8 tectonic plates, volcanism, sea level, glaciers
│   ├── HydrologyNetwork        7 river systems, groundwater, wetlands
│   └── TerrainEngine           10 biome zones, 1,500 Gt C soil carbon baseline
│
├── bloom-v3-biosphere.js       V3: Biosphere Layer (35 KB)
│   ├── FaunaEcosystemEngine    13 species agents (hunger, migration, reproduction, AI decision)
│   ├── PollinatorMutualismMatrix  8 guilds × 8 floral families, co-extinction cascade
│   ├── DiseaseEpidemicEngine   SIR model, 6 named pathogens, climate-driven R₀
│   ├── FoodWebIntelligence     Directed trophic graph, cascade risk detection
│   ├── FungalMicrobialNetwork  Mycorrhizal C/N/P routing, nitrogen fixers, methanogens
│   └── BiogeochemicalCycles    C: 120 Gt GPP / N: 260 Tg / P: 22 Tg weathering
│
├── bloom-v3-evolution.js       V3: Evolutionary Intelligence (32 KB)
│   ├── EvolutionaryGenome      13 quantitative traits, mutation σ, crossover, fitness
│   ├── CoEvolutionMatrix       6 Red Queen arms races
│   ├── ConvergentEvolutionEngine  6 convergent traits tracked independently
│   ├── ExtinctionEventEngine   6 event types (asteroid, supervolcano, pandemic, anoxia…)
│   └── EvolutionaryIntelligenceEngine  8.7M species, lineage trees, speciation timescales
│
├── bloom-v3-civilization.js    V3: Human Civilisation (16 KB)
│   ├── CivilizationLayer       Population 8.1B, 620 EJ energy, 37 Gt CO₂/yr, deforestation, policies
│   └── AnthropoceneScenarios   BAU / Paris 2°C / Net-Zero 2050 / Collapse
│
├── bloom-v3-intelligence.js    V3: Planetary Intelligence (40 KB)
│   ├── MycelialIntelligenceNetwork  5.2 Gt C/yr hyphal transfer, stress signals, defense priming
│   ├── PlanetaryNervousSystem       6 tipping-point meters, cross-system coupling matrix
│   ├── BiogeographicDispersalEngine 7 wildlife corridors, poleward range shifts ~6.5 km/yr/°C
│   ├── TrophicResonanceEngine       Lotka-Volterra oscillators, mesopredator release
│   ├── GaiaFeedbackOrchestrator     Stabilising vs destabilising feedback balance
│   └── BiosphereHealthIndex         8-dimension Living Planet Index (0–100)
│
├── bloom-v3-renderer.js        V3: Canvas Renderer (52 KB)
│   ├── PlanetRenderer          Rotating Earth, Rayleigh scattering, aurora, bioluminescence,
│   │                           mycorrhizal glow, tipping alerts, city lights, fauna dots
│   └── BiosphereOverlayCharts  4 overlay modes, 9 HUD badges, 5 sparklines
│
├── bloom-v4-morphogenesis.js   V4: Procedural Morphogenesis (32 KB)
│   ├── ReactionDiffusion       Gray-Scott model (Du/Dv/feed/kill → Turing patterns)
│   ├── MorphologyInterpreter   Genome → visual params (petal count, hue, RD params, L-sys depth)
│   ├── LSystem                 F→FF+[+F-F]-[-F+F] branching, configurable depth/angle
│   ├── PetalGeometry           Bezier petals with phyllotaxis θ = n × 137.5°, radial gradients
│   ├── MorphogenesisEngine     Full pipeline: RD field → leaves → L-system → flower → overlay
│   ├── GBIFOccurrenceEngine    Occurrence records (lat/lon/elevation/biome/climate_zone) + trait vectors
│   ├── V4SandboxUI             Genome editor: random/mutate/crossover/from-live, undo stack,
│   │                           JSON console, gene lock toggles, presets, derived-param back-solvers
│   └── SemanticSearchV4        Multi-source search (1,404 library + live V2 species): colour,
│                               habitat, lifecycle, pollinator, care attributes
│
├── bloom-v5-multiverse.js      V5: Multiverse Engine (28 KB)
│   ├── PhysicsConstants        Mutable simulation physics (7 constants) with meta-GA drift
│   ├── UniverseInstance        Independent planetary state: climate, biosphere, consciousness, civ
│   ├── UniversePool            Up to 6 parallel universes; meta-GA culls weakest every 200 ticks
│   ├── TimelineBranching       Branch points at extinction/speciation; fork to alternate history
│   └── MultiversalEcology      Cross-universe species migration every 80 ticks
│
├── bloom-v6-consciousness.js   V6: Consciousness Layer (20 KB)
│   ├── PlanetaryConsciousnessIndex  C = Information × Integration × Recursion × Self-Observation
│   │                                7 threshold levels: Dormant → Omniversal; each unlocks behaviour
│   ├── OntologyGenerator       12 pattern detectors name emergent phenomena in real time
│   ├── CollectiveIntelligenceNet    6 species-group hive-cognition nodes with IQ tracking
│   ├── SelfReflectionStream    Rule-based narration: simulation describes its own state in first person
│   └── ConsciousnessRenderer   Reaction-diffusion awareness field on a lat/lon canvas
│
├── bloom-v7-metaevolution.js   V7: Meta-Evolution Engine (24 KB)
│   ├── MetaGA                  GA whose chromosome = EA parameters (σ, crossover rate, speciation D, etc.)
│   ├── RecursiveKnowledgeGraph Graph of graphs: edges become nodes at depth 1, depth 2
│   ├── NonLinearTimeline       Record/seek/rewind/fork any simulation moment; 50-snapshot ring buffer
│   └── DimensionalMorphogenesis  4th gene group: hyperbolic warp, rotation drift, fractal recursion,
│                                  mirror axes, scale oscillation → non-Euclidean flower geometries
│
├── bloom-v8-universal.js       V8: Universal Semantic Engine (20 KB)
│   ├── ConvergentLawDetector   6 pattern detectors; promotes to universal law at 3+ universe hits
│   ├── AwarenessFieldRenderer  Gray-Scott RD fluid on 128×64 lat/lon projection; seeded from hotspots
│   ├── PossibilitySpaceExplorer  PCA-lite 2D scatter of 60 adjacent genome states by fitness
│   └── TransfiniteIntelNet     Cross-universe AI agents sharing observations; multiverse insights every 20 ticks
│
└── bloom-v9-reality.js         V9: Autonomous Reality Engine (28 KB)
    ├── AutonomousRewriter      6 rewritable rules (K, trophic η, CI rate, speciation D, RF α, biome count)
    │                           Proposes mutations when CI > 25%; manual Apply or Autonomous mode; undo stack
    ├── EternalLoopRenderer     Cosmological spiral timeline: Big Bang → Star Formation → Biosphere
    │                           → Evolution → Consciousness → Transcendence → New Cycle
    ├── SelfNarrator            Rule-based autobiography: chapter transitions, ecological events,
    │                           civilisation milestones, rewrite logs accumulate into scrollable chronicle
    ├── PostSymbolicVisualiser  25 genes → 7 deterministic glyph families (star, rosette, spiral,
    │                           cross, petal, DNA helix, fractal square) — a visual gene language
    └── RealitySeedManager      Full state snapshot → JSON; import restores V9 rules + all engine states
```

---

## V4 — Morphogenesis Lab

### Pipeline

```
Genome → MorphologyInterpreter → ReactionDiffusion Field →
PetalGeometry (Bezier + Phyllotaxis) → L-System Branching → Canvas Render
```

### Genome Editor — Programmable Controls

| Feature | Description |
|---------|-------------|
| **25 gene sliders** | 5 groups × 5 genes: Morphology, Pigmentation, Adaptation, Metabolism, Reproduction |
| **Numeric inputs** | Type exact values (0.00–1.00) alongside each slider |
| **Gene lock toggles** | 🔒 per gene; locked genes are excluded from Mutate/Crossover |
| **Named presets** | Tropical / Alpine / Desert / Aquatic / Symmetrical / Chaotic |
| **Undo stack** | 10-step ring buffer; Ctrl+Z / Ctrl+Y; ↩ Undo / ↪ Redo buttons |
| **JSON console** | Live genome as formatted JSON; paste any external genome and Apply |
| **Derived-param back-solvers** | Type a target value (petal count, hue°, RD feed/kill, curvature, L-sys depth) → back-solves the correct gene |
| **Mutation σ slider** | Controls Gaussian noise magnitude applied during Mutate |
| **Crossover** | 50/50 per-gene crossover between current and last undo state |
| **From Live Species** | Imports the selected V2 species genome directly into the editor |

### Semantic Search V4

Searches 1,404 taxonomy library entries + live V2 species pool simultaneously. Matches:
- **Colour**: hex → HSL hue matching (red / orange / yellow / green / blue / purple / pink / white)
- **Habitat**: alpine, aquatic, tropical, succulent, herbal, wild, garden
- **Lifecycle**: perennial, annual, biennial, spring, summer, autumn, winter
- **Pollinator**: bee, butterfly, wind, bat
- **Care**: easy, hard, medicinal, fragrant

### GBIF-Style Occurrence Records

Every generated genome produces a structured occurrence record: `occurrence_id`, `latitude`, `longitude`, `elevation`, `biome`, `climate_zone`, `event_date` — plus a trait vector: `flower_color`, `petal_count`, `pollinator`, `photosynthesis_type` (C3/C4/CAM), `drought_tolerance`, `bloom_period`. Neo4j-style relationships (`NATIVE_TO`, `POLLINATED_BY`, `THREATENED_BY`) are generated automatically.

---

## V5 — Multiverse Engine

### Physics Constants (self-evolving)

Seven normalised constants per universe, each drifting via meta-GA every 50 ticks:

| Constant | Effect |
|----------|--------|
| `gravityStrength` | Tectonic plate velocity |
| `energyTransferRate` | Trophic efficiency multiplier |
| `mutationPressure` | Genome mutation σ |
| `speciationThreshold` | Divergence D needed to speciate |
| `extinctionBaseline` | Background extinction rate |
| `co2Sensitivity` | Climate feedback strength |
| `consciousnessRate` | Speed of consciousness accumulation |

### Universe Pool

- Up to **6 parallel universes** running simultaneously
- **Fork**: child inherits parent state + mutated physics constants
- **Meta-GA**: every 200 ticks, weakest universe (fitness < 0.25) is replaced by a child of the fittest
- **Fitness** = biodiversity × climate stability
- **Collapse condition**: CO₂ > 2,000 ppm or species count < 1

### Timeline Branching

Branch points are recorded at every extinction and speciation event. Fork at any branch point to create a divergent history from that exact snapshot.

### Multiversal Ecology

Every 80 ticks a species migrates from one universe to another (invasive cross-universe introduction), logged with source universe, target universe, and species name.

---

## V6 — Consciousness Layer

### Consciousness Formula

```
C = (Information × 0.3) + (Integration × 0.3) + (Recursion × 0.2) + (Self-Observation × 0.2)

Where:
  Information     = biodiversityIndex × log(1 + speciesCount) / log(1001)
  Integration     = mycorrhizalDensity × foodWebComplexity
  Recursion       = 0.8 × C_prev + 0.2  (self-reinforcing)
  Self-Observation = civLevel × √(C_prev + 0.01)
```

### Consciousness Thresholds

| Level | Threshold | Unlocks |
|-------|-----------|---------|
| Stirring | 5% | Self-regulation |
| Aware | 15% | Adaptive response |
| Sentient | 30% | Directed evolution |
| Reflective | 50% | Ontology generation |
| Transcendent | 70% | Reality modification |
| Omniversal | 90% | Multiverse bridge |

### Ontology Generator — Named Phenomena

12 pattern detectors name emergent states in real time:

`Drought Cascade` · `Mutualism Bloom` · `Civilisation Spiral` · `Carbon Bloom` · `Ocean Acidification` · `Consciousness Surge` · `Extinction Cascade` · `Speciation Burst` · `Mycelial Surge` · `Thermal Runaway` · `Biosphere Harmony` · `Deep Intelligence`

### Collective Intelligence Nodes

6 species-group hive-cognition nodes, each with an IQ score and communication edges to other nodes:

`Pollinator Guild` (route optimisation) · `Herbivore Collective` (migration sync) · `Mycelial Network` (nutrient routing) · `Ocean Plankton Grid` (carbon pump) · `Forest Canopy Mind` (light sharing) · `Soil Microbiome` (decomposition net)

---

## V7 — Meta-Evolution Engine

### Meta-GA

A genetic algorithm whose chromosome is the parameters of the evolution engine itself:

| Meta-gene | Range | Effect |
|-----------|-------|--------|
| `mutationSigma` | 0.05–0.30 | Genome mutation noise |
| `crossoverRate` | 0.3–0.8 | Crossover probability |
| `speciationThreshold` | 0.3–0.8 | Divergence to speciate |
| `selectionPressure` | 0.3–0.9 | Fitness differential |
| `populationSize` | 4–16 | Number of species |
| `elitismRate` | 0.05–0.25 | Top fraction preserved |
| `extinctionPressure` | 0.01–0.10 | Background extinction |

Fitness is evaluated by running a 50-tick mini-ecosystem simulation under those parameters and measuring resulting diversity.

### Recursive Knowledge Graph

- **Depth 0**: concept nodes (Atmosphere, Ocean, Biosphere, Civilisation…)
- **Depth 1**: edge-nodes — relationships that become nodes themselves (e.g. `[Biosphere supports Ocean]` is both an edge and a node)
- **Depth 2**: meta-relations — edges between edge-nodes
- Ontology concepts from V6 are added as new nodes automatically; edges strengthen or prune based on activity

### Dimensional Morphogenesis (V7 × V4)

Adds a 4th gene group to V4 genomes with 5 topology genes:

| Gene | Range | Effect |
|------|-------|--------|
| Radial Warp | 0–1 | Hyperbolic radius distortion |
| Rotation Drift | 0–1 | Möbius-like petal rotation accumulation |
| Fractal Depth | 0–1 | Recursive self-similar petal levels (0–3) |
| Mirror Axes | 0–1 | Extra symmetry planes (0–4) |
| Scale Wave | 0–1 | Sinusoidal breathing per petal |

---

## V8 — Universal Semantic Engine

### Universal Law Detection

Six pattern detectors watch all universe state streams. When the same ecological pattern appears independently in **3+ universes**, it is promoted to a **Universal Law** with confidence score and strength bar:

1. High Biodiversity → Carbon Sequestration
2. Consciousness ↔ Biodiversity Coupling
3. Civilisation–Biosphere Collapse Attractor
4. Ocean pH–Biosphere Stability Lock
5. Thermal Gradient → Speciation Burst
6. Mycelial Density → Carbon Stability

### Possibility Space Explorer

Generates 60 adjacent genome states by gradient-walking from the current V4 genome. Projects to 2D via two random projection vectors (PCA-lite). Colour encodes fitness (red = low, green = high). The current genome is marked as `NOW` at the centre.

### Transfinite Intelligence Network

One AI agent per universe. Agents share observations through a pooled mind and synthesise cross-universe insights every 20 ticks: biodiversity trajectories, active universal laws, collective consciousness averages.

---

## V9 — Autonomous Reality Engine

### Rewritable Rules

Six simulation equations that the engine can mutate autonomously (when consciousness index > 25%):

| Rule | Formula | Domain |
|------|---------|--------|
| Logistic Growth K | N_next = r·N·(1–N/K) | Ecology |
| Trophic Efficiency η | Energy_next = Biomass × η | Ecology |
| Consciousness Rate ρ | CI += biodiversity × civ × ρ | Consciousness |
| Speciation Threshold D | D(A,B) = √Σ(gA–gB)² | Evolution |
| CO₂ Radiative Forcing α | RF = α·ln(C/C₀) | Climate |
| Biome Count | Active terrain zone types | Terrain |

All rewrites are logged, manually approvable, and reversible with undo.

### Eternal Loop Cosmological Timeline

Animated Archimedean spiral from inner (Big Bang) to outer (New Cycle), marked with 8 epochs:
`Big Bang` → `Star Formation` → `Planetary Birth` → `Biosphere` → `Evolution` → `Consciousness` → `Transcendence` → `New Cycle`

Current simulation progress is marked as a pulsing `NOW` node.

### Post-Symbolic Genome View

Each of the 25 genes is rendered as a deterministic procedural glyph. Gene index determines shape family; gene value determines size, rotation, and stamen count:

`Star` · `Polygon` · `Spiral Arc` · `Cross + Ring` · `Petal Rosette` · `DNA Helix` · `Fractal Square`

Together the 25 glyphs form a unique visual signature — a visual language for each genome.

### Reality Seeds

A full simulation state snapshot serialised to JSON. Captures V5 universe pool, V7 meta-GA state, V9 rule overrides. Import a seed to reproduce any past state exactly.

---

## V3 — Earth Biosphere OS (Detail)

### Calibrated Baselines (2024)

| System | Value | Source |
|--------|-------|--------|
| CO₂ | 421 ppm, +2.4 ppm/yr | NOAA / GCP 2023 |
| CH₄ | 1,923 ppb, +12 ppb/yr | NOAA GML |
| Temperature anomaly | +1.1°C above pre-industrial | IPCC AR6 |
| Ocean pH | 8.05, −0.003/yr | SOCAT 2023 |
| AMOC strength | 85% modern, −12%/°C | Caesar 2021 |
| Flora biomass | 450 Gt C | IPCC AR6 Ch.5 |
| Soil carbon | 1,500 Gt C top-1m | Crowther 2016 |
| GPP | 120 Gt C/yr | IPCC AR6 |
| Population | 8.1 B | UN DESA 2024 |
| Energy | 620 EJ/yr (80% fossil) | IEA WEO 2023 |
| CO₂ emissions | 37 Gt CO₂/yr | GCP 2023 |

### Radiative Forcing Equations

```
RF_CO₂  = 5.35 × ln(C / 280)          W/m²   [Myhre 1998]
RF_CH₄  = 0.036 × (√C − √C₀)          W/m²
RF_aero = −0.5 × (fossil_fraction)     W/m²   (industrial aerosol cooling)
ΔT      = RF × ECS / 3.7               °C     (ECS = 3°C/doubling)
```

### Timescale Modes

| Mode | Real → Simulated | Use case |
|------|-----------------|----------|
| Real-time | 1 s = 1 s | Instant feedback |
| Ecological | 1 s = 1 month | Seasonal dynamics |
| Evolutionary | 1 s = 10 years | Policy horizons |
| Geological | 1 s = 1,000 years | Mass extinction recovery |
| Planetary | 1 s = 1 million years | Deep-time biosphere |

### AI Planetary Intelligence Agents

Four Claude-powered agents analyse the live simulation. Each query includes the full planetary state snapshot as context.

| Agent | Role |
|-------|------|
| **Ecosystem Balancer** | Food webs, trophic cascades, soil health, pollinator networks |
| **Climate Predictor** | Atmospheric trends, radiative forcing, ocean feedbacks, tipping points |
| **Evolutionary Generator** | Extinction rates, lineage fitness, speciation, adaptive pressure |
| **Research Sandbox** | Full planetary scientist access — any system, any question |

**Setup**: get an API key at `console.anthropic.com`, paste it in the AI Agents section, click **Activate**. Stored in `sessionStorage` only.

---

## Species Library

### V1 — 31 Curated Species

| # | Common Name | Latin Name | Family | Climate |
|---|-------------|-----------|--------|---------|
| 1 | Rose | *Rosa damascena* | Rosaceae | Temperate |
| 2 | Lavender | *Lavandula angustifolia* | Lamiaceae | Mediterranean |
| 3 | Lotus | *Nelumbo nucifera* | Nelumbonaceae | Tropical |
| 4 | Orchid | *Phalaenopsis amabilis* | Orchidaceae | Tropical |
| 5 | Aloe Vera | *Aloe barbadensis* | Asphodelaceae | Arid |
| 6 | Ranunculus | *Ranunculus asiaticus* | Ranunculaceae | Mediterranean |
| 7 | Nasturtium | *Tropaeolum majus* | Tropaeolaceae | Subtropical |
| 8 | Bleeding Heart | *Lamprocapnos spectabilis* | Papaveraceae | Temperate |
| 9 | Edelweiss | *Leontopodium nivale* | Asteraceae | Alpine |
| 10 | Plumeria | *Plumeria rubra* | Apocynaceae | Tropical |
| 11 | Water Hyacinth | *Eichhornia crassipes* | Pontederiaceae | Tropical |
| 12 | Sunflower | *Helianthus annuus* | Asteraceae | Temperate |
| 13 | Iris | *Iris germanica* | Iridaceae | Mediterranean |
| 14 | Dahlia | *Dahlia pinnata* | Asteraceae | Subtropical |
| 15 | Hibiscus | *Hibiscus rosa-sinensis* | Malvaceae | Tropical |
| 16 | Delphinium | *Delphinium elatum* | Ranunculaceae | Temperate |
| 17 | Chrysanthemum | *Chrysanthemum morifolium* | Asteraceae | Temperate |
| 18 | Passionflower | *Passiflora incarnata* | Passifloraceae | Subtropical |
| 19 | Lupine | *Lupinus polyphyllus* | Fabaceae | Temperate |
| 20 | Magnolia | *Magnolia grandiflora* | Magnoliaceae | Subtropical |
| 21 | Crocus | *Crocus sativus* | Iridaceae | Mediterranean |
| 22 | Jasmine | *Jasminum officinale* | Oleaceae | Subtropical |
| 23 | Gypsophila | *Gypsophila paniculata* | Caryophyllaceae | Temperate |
| 24 | Anemone | *Anemone coronaria* | Ranunculaceae | Mediterranean |
| 25 | Agapanthus | *Agapanthus africanus* | Amaryllidaceae | Subtropical |
| 26 | Echinacea | *Echinacea purpurea* | Asteraceae | Temperate |
| 27 | Fritillary | *Fritillaria imperialis* | Liliaceae | Temperate |
| 28 | Calendula | *Calendula officinalis* | Asteraceae | Mediterranean |
| 29 | Acacia | *Acacia dealbata* | Fabaceae | Subtropical |
| 30 | Dianthus | *Dianthus caryophyllus* | Caryophyllaceae | Mediterranean |
| 31 | Salvia | *Salvia officinalis* | Lamiaceae | Mediterranean |

### Taxonomy Library — 1,404 Procedural Species

Trimmed from 10,000 to 1,404 entries (680 KB vs 4.8 MB original). Keeps 2 representative entries per genus/category combination, covering all 702 unique genus/category pairs across 20+ families (Rosaceae, Asteraceae, Orchidaceae, Fabaceae, Lamiaceae, Solanaceae, Iridaceae, Amaryllidaceae, Liliaceae, Malvaceae…) and all categories (succulent, wild, garden, herbal, aquatic, alpine, tropical).

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla JavaScript ES2022, HTML5 Canvas 2D, CSS3 |
| Simulation engines | Custom class-based engine (V2–V9), no dependencies |
| Procedural geometry | Gray-Scott reaction-diffusion, Bezier curves, L-systems, phyllotaxis |
| Rendering | HTML5 Canvas 2D (planet, morphogenesis, multiverse map, RKG, possibility space) |
| AI agents | Anthropic Claude API (Haiku 4.5) |
| Data | Static JS arrays, localStorage, sessionStorage |
| Server | Node.js HTTP static server (port 7860) |
| Container | Docker (node:20-alpine) |
| Build | None — zero build step, runs directly in any modern browser |

---

## File Inventory

| File | Size | Purpose |
|------|------|---------|
| `index.html` | ~330 KB | Complete app shell + all UI sections V1–V9 |
| `bloom-data.js` | 60 KB | V1 curated species with SVGs |
| `taxonomy-data.js` | 680 KB | V1/V2 procedural species library |
| `bloom-app.js` | 12 KB | V1 UI: filters, search, modals, favourites |
| `bloom-simulator.js` | 8 KB | V1 basic climate + soil engine |
| `bloom-v2.js` | 28 KB | V2 ecosystem simulator |
| `bloom-v3-core.js` | 36 KB | V3 planetary core |
| `bloom-v3-biosphere.js` | 36 KB | V3 biosphere layer |
| `bloom-v3-evolution.js` | 32 KB | V3 evolutionary intelligence |
| `bloom-v3-civilization.js` | 16 KB | V3 human civilisation |
| `bloom-v3-intelligence.js` | 40 KB | V3 planetary intelligence |
| `bloom-v3-renderer.js` | 52 KB | V3 canvas renderer |
| `bloom-v4-morphogenesis.js` | 32 KB | V4 procedural morphogenesis + GBIF + semantic search |
| `bloom-v5-multiverse.js` | 28 KB | V5 parallel universes + self-evolving physics |
| `bloom-v6-consciousness.js` | 20 KB | V6 consciousness index + ontology + collective IQ |
| `bloom-v7-metaevolution.js` | 24 KB | V7 meta-GA + recursive knowledge graph + timeline |
| `bloom-v8-universal.js` | 20 KB | V8 universal law detection + possibility space |
| `bloom-v9-reality.js` | 28 KB | V9 autonomous rewriter + eternal loop + reality seeds |
| `static-server.js` | 4 KB | Node.js static file server |
| `Dockerfile` | — | node:20-alpine, port 7860 |

---

## Scientific References

| System | References |
|--------|-----------|
| CO₂ radiative forcing | Myhre et al. 1998; IPCC AR6 Ch.7 |
| Climate sensitivity (ECS) | IPCC AR6 WGI 7.5 (3°C/doubling best estimate) |
| Carbon cycle | Global Carbon Project 2023 |
| Ocean pH | Caldeira & Wickett 2003; SOCAT 2023 |
| AMOC weakening | Caesar et al. 2021; Boers 2021 |
| Coral bleaching | Hughes et al. 2017; GCRMN 2020 |
| Soil carbon | Crowther et al. 2016; IPCC AR6 Ch.5 |
| Soil respiration Q10 | Bond-Lamberty & Thomson 2010 |
| Glacier mass balance | Zemp et al. 2019 |
| Global biodiversity estimate | Mora et al. 2011 (8.7 million species) |
| Extinction rates | De Vos et al. 2015; Ceballos et al. 2017 |
| Human extinction acceleration | IPBES 2019 (up to 1,000× background) |
| Speciation timescale | Rabosky 2014 (50k–500k yr) |
| Poleward range shifts | Chen et al. 2011 (~6.5 km/yr/°C) |
| Phyllotaxis golden angle | Vogel 1979 (137.5°) |
| Gray-Scott reaction-diffusion | Pearson 1993 |
| L-system plant modelling | Prusinkiewicz & Lindenmayer 1990 |
| Civilisation energy | IEA World Energy Outlook 2023 |
| CO₂ / CH₄ emissions | GCP 2023; EDGAR 2023 |
| Deforestation rates | Global Forest Watch 2023 |
| Population projections | UN DESA World Population Prospects 2024 |
| Agriculture land use | FAO 2023 |
| Mycorrhizal carbon | Averill et al. 2014 (5.2 Gt C/yr estimate) |
