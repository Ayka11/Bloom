# Bloom — Earth Biosphere OS

Bloom is a planetary-scale living biosphere simulator and botanical encyclopedia. Plants evolve, climates change, oceans acidify, species go extinct, civilisations rise, and AI agents monitor it all — in real time.

---

## Version History

| Version | Focus | Status |
|---------|-------|--------|
| **V1** | Botanical encyclopedia — 130+ species, care guides, SVG illustrations | ✅ Live |
| **V2** | Ecosystem simulator — genome engine, pollination network, knowledge graph, biome evolution | ✅ Live |
| **V3** | Earth Biosphere OS — full planetary simulation + Claude AI agents | ✅ Live |

---

## V3 — Earth Biosphere OS

V3 transforms the platform into a complete Earth-scale living system. Every subsystem is grounded in peer-reviewed science (IPCC AR6, GCP 2023, NOAA, FAO, IPBES, GFW).

### Architecture

```
Earth Biosphere OS
├── bloom-v3-core.js          Planetary Core
│   ├── AtmosphericChemistry  CO₂/CH₄/O₃ budgets, radiative forcing (Myhre 1998)
│   ├── PlanetaryClimateEngine 72 climate cells, ECS feedback, extreme events
│   ├── OceanSimulation       8 basins, AMOC, pH, plankton, coral, carbon pump
│   ├── GeologicalEngine      8 tectonic plates, volcanism, sea level
│   ├── HydrologyNetwork      7 rivers, glaciers, groundwater, wetlands
│   └── TerrainEngine         10 biome zones, soil carbon (1,500 Gt C)
│
├── bloom-v3-biosphere.js     Biosphere Layer
│   ├── FaunaEcosystemEngine  13 species agents (hunger, migration, breeding, AI)
│   ├── PollinatorMutualismMatrix  8 pollinator guilds × floral families
│   ├── DiseaseEpidemicEngine SIR epidemic model (6 pathogens, climate-driven)
│   ├── FoodWebIntelligence   Directed trophic graph, cascade risk detection
│   ├── FungalMicrobialNetwork Mycorrhizal, N-fixers, methanogens, pathogens
│   └── BiogeochemicalCycles  C/N/P cycles (GPP 120 Gt C/yr, NPP 60 Gt C/yr)
│
├── bloom-v3-evolution.js     Evolutionary Intelligence
│   ├── EvolutionaryGenome    13 quantitative traits, mutation, crossover, fitness
│   ├── ProceduralSpeciesGenerator  Infinite procedural species
│   ├── ExtinctionEventEngine 6 event types (asteroid, supervolcano, pandemic…)
│   ├── EvolutionaryIntelligenceEngine  Lineage tracking, speciation, adaptation
│   ├── PlanetaryKnowledgeGraph  12-node system graph, 9+ relationship edges
│   └── AIPlanetaryIntelligence  Rule-based monitoring, threshold alerts
│
├── bloom-v3-civilization.js  Human Layer
│   ├── CivilizationLayer     Population, energy mix, emissions, land use, policies
│   └── AnthropoceneScenarios 4 scenarios (BAU, Paris 2°C, Net-Zero, Collapse)
│
├── bloom-v3-intelligence.js  Planetary Intelligence Layer  ← NEW
│   ├── MycelialIntelligenceNetwork  Wood-wide web: C/N/P routing, stress signals, defense priming
│   ├── PlanetaryNervousSystem       6 tipping-point proximity meters, cross-system coupling matrix
│   ├── BiogeographicDispersalEngine 7 wildlife corridors, poleward range shifts, invasive vectors
│   ├── TrophicResonanceEngine       Lotka-Volterra oscillators, mesopredator release, biomagnification
│   ├── GaiaFeedbackOrchestrator     Stabilising vs destabilising feedback balance (Lovelock)
│   └── BiosphereHealthIndex         Composite Living Planet Index (0-100) across 8 dimensions
│
└── bloom-v3-renderer.js      Canvas Renderer
    ├── PlanetRenderer        Realistic Earth: lat/lon projected landmasses, depth ocean gradient,
    │                         Rayleigh scattering atmosphere, aurora borealis, bioluminescence,
    │                         mycorrhizal thread glow, biosphere health pulse ring, tipping alerts
    └── BiosphereOverlayCharts  Sparklines + merged Vital Signs quick-stats panel
```

### Simulation Systems

#### Planetary Climate Engine
- **72 climate cells** (6 latitude bands × 12 longitude sectors) with per-cell temperature, precipitation, humidity
- **Seasons** drive cell temperature offsets (±8°C swing at temperate latitudes)
- **Stochastic extreme events**: heat waves, hurricanes, droughts — probability scaled by warming
- **ECS feedback**: 0.81°C per W/m² radiative forcing (IPCC AR6 best estimate)

#### Atmospheric Chemistry
Calibrated to 2024 NOAA baselines:

| Gas | Baseline | Rise rate | Formula source |
|-----|----------|-----------|---------------|
| CO₂ | 421 ppm | +2.4 ppm/yr | GCP 2023 |
| CH₄ | 1923 ppb | +12 ppb/yr net | NOAA GML |
| O₂  | 20.95% | stable | — |
| O₃ (ozone) | 1.0 index (≈300 DU) | CFC-driven depletion | UNEP |

- **Radiative forcing**: `RF_CO₂ = 5.35 × ln(C/280)` W/m² [Myhre 1998]
- **Methane forcing**: `0.036 × (√C − √C₀)` W/m²
- **Industrial aerosol cooling**: −0.5 W/m² (scales with fossil fuel use)
- **Geoengineering**: Stratospheric aerosol injection offsets up to −2.0 W/m²
- **Permafrost feedback**: Non-linear CH₄ pulse above +3°C warming
- **Volcanic SO₂**: Injection events cool climate via aerosol veil

#### Ocean Simulation
- **8 major basins** with individual temperature, salinity, oxygen
- **Surface pH**: `8.2 − log₂(CO₂/280) × 0.30` [Caldeira & Wickett 2003] — starts at 8.05 (2024)
- **AMOC**: starts at 85% modern strength; weakens −12%/°C above baseline [Caesar 2021]
- **Coral bleaching**: compound thermal + pH stress up to 20%/yr loss rate [GCRMN 2020]
- **Biological pump**: plankton-driven carbon sequestration ~2.5 Gt C/yr
- **Thermohaline currents**: Gulf Stream, Kuroshio, Antarctic Circumpolar, Humboldt + 2 more

#### Biosphere
- **Flora biomass**: 450 Gt C baseline [IPCC AR6 Ch.5]
- **GPP**: 120 Gt C/yr; logarithmic CO₂ fertilisation; −1%/°C respiration temperature sensitivity [Heskel 2016]
- **Net NPP**: ~60 Gt C/yr (autotrophic respiration ~50%)
- **Soil carbon**: 1,500 Gt C top-1m [Crowther 2016]; Q10 decomposition factor [Bond-Lamberty 2010]
- **Pollinator mutualism**: 8 guilds × 8 floral families; co-extinction cascade risk tracking
- **Disease epidemics**: SIR dynamics (6 named pathogens); R₀ scales with warming and monoculture
- **Fauna agents**: 13 species across 5 guilds (herbivore, predator, pollinator, decomposer, scavenger)

#### Biogeochemical Cycles

**Carbon Cycle** (Gt C/yr at 2024 baseline):
```
Fossil fuels       +10.0 Gt C/yr  (GCP 2023)
Land-use change    + 1.1 Gt C/yr
Land sink          − 3.1 Gt C/yr
Ocean sink         − 2.5 Gt C/yr
────────────────────────────────
Net atmospheric    + 5.5 Gt C/yr → +2.4 ppm/yr CO₂
```

**Nitrogen Cycle**: biological fixation 140 Tg N/yr + Haber-Bosch 120 Tg N/yr; denitrification 260 Tg N/yr

**Phosphorus Cycle**: rock weathering 22 Tg P/yr; mining pressure tracks civilisation intensity

#### Evolution Engine
- **8.7 million species** tracked [Mora 2011 global estimate]
- **Background extinction**: 0.5 E/MSY (species/million-species-year) [De Vos 2015]
- **Current human acceleration**: up to 500× background at max biodiversity pressure [IPBES 2019]
- **Speciation timescale**: 50,000–500,000 year countdown per lineage [Rabosky 2014]
- **13 quantitative genome traits**: heat tolerance, cold tolerance, drought resistance, disease resistance, body size, growth rate, reproduction rate, toxin production, camouflage, social behaviour, migration tendency, diet breadth, longevity
- **6 extinction event types**: asteroid impact, supervolcano (LIP), rapid climate shift, ocean anoxia, pandemic, invasive species cascade

#### Planetary Intelligence Network (NEW)
- **MycelialIntelligenceNetwork**: hyphal C transfer (5.2 Gt C/yr), N/P routing, stress signalling, defense priming cascade; network density degrades with deforestation/soil disturbance
- **PlanetaryNervousSystem**: 6 tipping-point proximity meters (Arctic ice, Amazon, AMOC, permafrost, coral, West Antarctic ice sheet); resonance index amplifies when feedbacks cluster
- **BiogeographicDispersalEngine**: 7 corridor integrity values (Amazon-Andes, Serengeti, Atlantic flyway, Gulf Stream, etc.); poleward range shifts ~6.5 km/yr/°C [Chen 2011]; invasive species introduction rates
- **TrophicResonanceEngine**: Lotka-Volterra oscillators for Wolf-Deer, Hare-Lynx, Plankton-Krill, Acacia-Elephant; mesopredator release index; biomagnification factor; pollinator collapse risk
- **GaiaFeedbackOrchestrator**: balances stabilising (vegetation albedo, silicate weathering, DMS, mycorrhizal C pump) against destabilising (ice-albedo, permafrost CH₄, Amazon dieback) feedbacks; Daisyworld balance proxy
- **BiosphereHealthIndex**: 8-dimension weighted composite LPI (0–100) — climate stability, ocean health, terrestrial biomass, soil integrity, biodiversity, mycorrhizal network, pollinator health, atmospheric chemistry
- **Co-Evolution Matrix**: Red Queen arms races for 6 species pairs (Wolf-Deer, Pollinator-Flower, Mycorrhiza-Root, Plant-Herbivore, Parasite-Host, Lion-Prey)
- **ConvergentEvolutionEngine**: tracks independent parallel evolution of 6 convergent traits (echolocation, wing, desert adaptation, etc.)
- **Genome Epistasis**: gene-gene interaction terms in fitness function (size/reproduction trade-off, heat/drought synergy)

#### Human Civilisation Layer
Calibrated to 2024 baselines (IEA, UN DESA, GCP, EDGAR, GFW, FAO):

| Metric | Baseline | Source |
|--------|----------|--------|
| Population | 8.1 B | UN DESA 2024 |
| Growth rate | 0.9%/yr | UN DESA |
| Primary energy | 620 EJ/yr | IEA WEO 2023 |
| Fossil share | 80% | IEA |
| CO₂ emissions | 37 Gt CO₂/yr | GCP 2023 |
| CH₄ emissions | 570 Tg/yr | EDGAR 2023 |
| Deforestation | 0.25%/yr forest | GFW 2023 |
| Agricultural land | 50% habitable | FAO 2023 |
| Protected areas | 17% land | CBD Aichi T11 |

**Policy levers**: carbon tax (−15% emissions), renewable mandate (+2%/yr renewables), deforestation ban, biodiversity treaty

**Scenarios**:
- **Business as Usual** — 600 ppm CO₂ by 2100, ~3.5°C warming
- **Paris 2°C** — carbon pricing, rapid renewable transition, 30% protected areas
- **High Ambition Net-Zero** — full decarbonisation 2050, rewilding, CCS, synbio
- **Societal Collapse** — resource wars, agricultural failure, 70% biodiversity loss

**Geoengineering**: stratospheric aerosol injection (SRM) now physically coupled to radiative budget (up to −2.0 W/m² offset). Ocean iron fertilisation and synthetic biology also available.

#### Timescale Modes

| Mode | Real → Simulated | Use case |
|------|-----------------|---------|
| Real-time | 1 s = 1 s | Instant feedback |
| Ecological | 1 s = 1 month | Seasonal dynamics |
| Evolutionary | 1 s = 10 years | Policy horizons |
| Geological | 1 s = 1,000 years | Mass extinction recovery |
| Planetary | 1 s = 1 million years | Deep-time biosphere |

#### Renderer
- **Single rotating planet** — realistic Earth geometry via lat/lon polygon landmass projection
- **Deep ocean gradient** — dark polar navy to vivid tropical teal, realistic depth shading
- **Rayleigh scattering atmosphere halo** — limb brightening, shifts warmer with rising CO₂
- **Authentic landmasses** — North/South America, Europe, Africa, Asia, Australia, Antarctica with biome colouring
- **Polar ice caps** — rendered as latitude-band fills; ice edge recedes with warming
- **Aurora Borealis / Australis** — multi-band polar light waves
- **Deep-ocean bioluminescence** — temperature-driven glow at depth
- **Mycorrhizal network glow** — purple filament threads scaled to network density
- **Biosphere health pulse ring** — colour and pulse speed driven by Living Planet Index
- **Tipping-point alert markers** — flashing arc labels at danger proximity (>65% threshold)
- **City lights** — placed at real mega-city lon/lat positions, population-scaled
- **Fauna dots** — placed on realistic biome anchor coordinates
- **4 overlay modes**: Biosphere health / Temperature / Carbon / Civilization pressure
- **HUD badges** (9): temp, CO₂, population, species, soil health, extinction rate, LPI, tipping count, mycorrhizal density
- **Merged Vital Signs + History panel** — 4 key quick-stats above 5 auto-scaling sparklines

---

## AI Planetary Intelligence Agents (Claude API)

Four Claude-powered agents analyse the live simulation and answer questions in natural language. Each query includes the full planetary state snapshot as context.

### Setup
1. Get an API key at **console.anthropic.com**
2. Scroll to the **AI Planetary Intelligence** section
3. Paste your key and click **Activate Agents**
4. Your key is stored in `sessionStorage` only — never persisted, never logged

### Agents

| Agent | Role | Example queries |
|-------|------|----------------|
| **Ecosystem Balancer** | Food webs, trophic cascades, soil health, pollinator networks | "What cascade risks exist?" · "Which species are most at risk?" |
| **Climate Predictor** | Atmospheric trends, radiative forcing, ocean feedbacks, tipping points | "2100 temperature projection?" · "How close to AMOC collapse?" |
| **Evolutionary Generator** | Extinction rates, lineage fitness, speciation, adaptive pressure | "Generate a species for current conditions" · "Mass extinction risk?" |
| **Research Sandbox** | Full planetary scientist — any system, any question | "Compare Paris vs BAU" · "Explain the nitrogen cycle state" |

Each agent receives the complete live simulation snapshot (atmosphere, climate, ocean, biosphere, carbon cycle, evolution, civilization) with every query. Uses **Claude Haiku** for fast responses.

---

## V1 & V2 Features

### Botanical Encyclopedia (V1)
- **130+ species** with detailed care guides, medicinal properties, seasonal availability
- **Hand-crafted SVG illustrations** for every species
- **Seasonal planning guide** (Spring / Summer / Autumn / Winter)
- **Botanical glossary** — 20+ terms
- **Favourites system** — localStorage-backed bookmarking
- **Search** across all species names, families, properties

### Ecosystem Simulator (V2)
- **Genome engine**: quantitative trait inheritance, mutation, crossover
- **Pollination network**: temperature/light-dependent activity, network score
- **Knowledge graph**: species × ecosystem × climate × geography × evolution
- **Soil chemistry**: N/P/K dynamic cycling
- **Population dynamics**: logistic growth per species
- **Real-time dashboard**: 25+ live metrics

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla JavaScript ES2022, HTML5, CSS3 |
| Simulation | Custom class-based ECS-inspired engine |
| Rendering | HTML5 Canvas 2D |
| AI Agents | Anthropic Claude API (Haiku model) |
| Data | Static JSON, localStorage, sessionStorage |
| Build | None — runs directly in any modern browser |

---

## Scientific References

| System | Key references |
|--------|---------------|
| CO₂ forcing | Myhre et al. 1998; IPCC AR6 Ch.7 |
| Climate sensitivity | IPCC AR6 WGI 7.5; ECS = 3°C/doubling |
| Carbon cycle | Global Carbon Project 2023 |
| Ocean pH | Caldeira & Wickett 2003; SOCAT 2023 |
| AMOC | Caesar et al. 2021; Boers 2021 |
| Coral | Hughes et al. 2017; GCRMN 2020 |
| Soil carbon | Crowther et al. 2016; IPCC AR6 Ch.5 |
| Soil respiration | Bond-Lamberty & Thomson 2010 |
| Glacier mass | Zemp et al. 2019 |
| Biodiversity | Mora et al. 2011; IPBES 2019 |
| Extinction rates | De Vos et al. 2015; Ceballos et al. 2017 |
| Speciation | Rabosky 2014 |
| Civilisation energy | IEA World Energy Outlook 2023 |
| Emissions | GCP 2023; EDGAR 2023 |
| Deforestation | Global Forest Watch 2023 |
| Population | UN DESA World Population Prospects 2024 |
| Agriculture | FAO 2023 |

---

## Species Library (V1 core — 31 curated species)

| # | Common Name | Latin Name | Family | Climate |
|---|------------|-----------|--------|---------|
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

Plus **100+ procedurally generated species** from `taxonomy-data.js` spanning 20+ families, all climates and lifecycle types.
