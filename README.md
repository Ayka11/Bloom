---
title: Bloom
emoji: 🌸
colorFrom: green
colorTo: blue
sdk: docker
app_file: index.html
pinned: false
---

# Bloom Unified

Bloom Unified is an interactive botanical encyclopedia and plant simulation lab. It combines a searchable plant library, a climate-driven ecosystem biosphere, an evolutionary mutation sandbox, and a physiological growth lab.

The current build includes the original illustrated flower collection plus an imported taxonomy dataset of 10,000 generated species. Each species is normalized into the same botanical model and receives a deterministic procedural botanical illustration.

## Features

- Botanical encyclopedia with searchable and filterable species cards.
- 10,000 additional species imported from `flowers_10000_taxonomy.json`.
- Organized filters for plant type, climate, lifecycle, family, color, and sorting.
- Procedural botanical illustrations for every loaded species.
- Ecosystem Biosphere with climate, soil, pollination, population, fitness, biodiversity, and carrying-capacity dynamics.
- Evolution Sandbox with genome mutation, selection, crossover, fitness scoring, and genetic diversity tracking.
- Growth Lab with plant-specific physiological simulation for light, water, temperature, nutrients, respiration, stress, and limiting factors.
- Playwright smoke test covering library loading, search/filter behavior, Ecosystem, Evolution, and Growth Lab.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the local static server:

```bash
npm start
```

Open:

```text
http://127.0.0.1:4173/index.html
```

Run tests:

```bash
npm test
```

## Deploy to Hugging Face Spaces

This app is containerized and ready to deploy to [Hugging Face Spaces](https://huggingface.co/spaces). 

### Prerequisites

- A GitHub repository with this code (e.g., `Ayka11/Bloom`)
- A Hugging Face account

### Deployment Steps

1. **Create a new Space on Hugging Face**
   - Go to [https://huggingface.co/spaces](https://huggingface.co/spaces)
   - Click "Create new Space"
   - Name: `Bloom` (or your preferred name)
   - Space type: **Docker**
   - Visibility: Public or Private (your choice)
   - Create Space

2. **Connect your GitHub repository**
   - In the Space settings, connect your GitHub repository (`Ayka11/Bloom`)
   - Select the branch: `feature/unified-bloom-10741476734650900024`
   - Save settings

3. **Deploy**
   - HF Spaces will automatically build and deploy the Docker container
   - The app will be accessible at `https://huggingface.co/spaces/Aygun1489/Bloom`
   - Any pushes to the connected branch will trigger automatic redeployment

### Local Docker Testing

To test the Docker container locally before deploying:

```bash
# Build the Docker image
docker build -t bloom .

# Run the container on port 7860
docker run -p 7860:7860 bloom
```

Then open `http://localhost:7860/` in your browser.

### Environment Variables

The app respects the `PORT` environment variable. By default, it listens on port 7860 (Hugging Face Spaces standard). When running locally, you can override:

```bash
docker run -e PORT=8000 -p 8000:8000 bloom
```

## Project Structure

```text
index.html                    Main unified application shell and UI logic
bloom-data.json               Original curated botanical library data
bloom-generated-species.json  Imported 10,000-species taxonomy dataset
bloom-taxonomy.js             Species normalization, trait inference, and botanical illustration renderer
bloom-growth.js               Physiological growth simulation
bloom-simulator.js            Ecosystem climate, soil, pollination, population, and diversity model
bloom-evolution.js            Genome, mutation, crossover, selection, and procedural specimen renderer
bloom-artwork.js              Legacy botanical SVG artwork collection
tools/static-server.js        Minimal local static server
tests/unified_simulators.spec.js  Playwright regression smoke test
```

## Botanical Library

The encyclopedia combines curated data from `bloom-data.json` with generated taxonomy records from `bloom-generated-species.json`.

Each species is normalized into a shared shape:

- `id`
- `name`
- `latin`
- `cat`
- `tags`
- `desc`
- `care`
- `taxonomy`
- `illustration`

The taxonomy model includes:

- family
- genus
- species
- lifecycle
- plant type
- climate
- dominant color

Search covers common name, Latin name, genus, family, type, climate, lifecycle, color, description, and tags. Rendering is capped to a visible subset for performance while search and filters continue to operate over the full catalog.

## Illustration System

The current illustration engine is deterministic and procedural. It is designed to scale to thousands of species without storing thousands of large bitmap files.

The renderer applies a botanical-documentation style inspired by the project prompt:

- macro botanical composition
- natural habitat background
- shallow-depth background blur effect
- species-specific dominant color
- petal gradients and subtle natural variation
- petal vein strokes
- leaf vein strokes
- pollen structures
- soft daylight and gentle shadows
- family/type/climate-aware plant form

For example, `Rosa gallica` is inferred as a Rosaceae perennial shrub and rendered with rose-family color and morphology cues.

## Ecosystem Biosphere

The Ecosystem simulator models a simplified plant community under changing environmental conditions.

Current modeled variables:

- temperature
- humidity
- sunlight
- soil fertility
- species fitness
- plant vitality
- population size
- density pressure
- pollination activity
- family richness
- Shannon diversity

Fitness is estimated from:

- light fit
- water fit
- temperature fit
- humidity fit
- nutrient fit
- stress tolerance
- pollination bonus
- competition penalty

The canvas visualization shows a layered biome with canopy ambience, sunlight, soil horizon, root zone, flowering individuals, and pollinator movement. Plant size and color respond to live vitality/fitness.

## Growth Lab

Growth Lab simulates one selected plant at a time using inferred species traits and adjustable environmental conditions.

Inputs:

- species
- light
- water
- temperature
- nutrients

Live indicators show the actual current values.

Computed outputs:

- vitality score
- growth stage
- limiting factor
- ideal temperature
- water need
- photosynthesis
- resource fit
- respiration
- stress load
- temperature fit
- water fit

The model is a simplified net-growth approximation:

```text
net growth = photosynthesis * resource fit * growth speed * senescence
             - respiration
             - stress penalty
```

It is inspired by core plant physiology concepts: photosynthesis, respiration, Liebig-style limiting resources, maturity, stress tolerance, and environmental fit.

## Evolution Sandbox

The Evolution tool models a population of quantitative genomes.

Genome parameters:

- petal count
- petal shape
- stem height
- leaf shape
- flower diameter
- petal curvature
- symmetry
- primary hue
- secondary hue
- pigment intensity
- UV pattern
- cold resistance
- heat resistance
- water requirement
- sunlight preference
- pollinator type
- fragrance strength
- nectar volume
- flower open time

Evolution operations:

- random mutation
- fitness scoring
- survivor selection
- crossover
- mutation after crossover
- generation advancement
- mean fitness tracking
- best fitness tracking
- genetic diversity tracking

The specimen renderer creates a detailed flower image from the best genome, including petal gradients, veins, pollen details, leaf/stem structure, and macro-style background treatment. Genetic parameters are displayed as readable metric cards.

## Data Import Notes

The imported taxonomy data originated from:

```text
C:\Users\User\Downloads\flowers_10000_taxonomy.json
```

It was normalized into:

```text
bloom-generated-species.json
```

The generated data is intentionally compact JSON so the browser can load it as a static file.

## Testing

The Playwright smoke test verifies:

- the app loads the 10k species dataset
- the library renders the capped visible card set
- search works against imported taxonomy fields
- filters work and can be cleared
- Ecosystem starts and reports live diversity/population metrics
- Evolution runs a selection step and reports fitness
- Growth Lab can select a deep imported species entry
- Growth Lab reports live indicators and physiological metrics

Run:

```bash
npm test
```

## Current Limitations

- The scientific models are educational approximations, not calibrated biological research models.
- Procedural illustrations are deterministic SVG-style renderings, not generated bitmap photography.
- The full 10,000-species library is searched and filtered, but visible rendering is capped for browser performance.
- Imported taxonomy rows are synthetic and should be treated as structured demo data unless replaced with a verified botanical source.

## Future Improvements

- Add calibrated species trait data from botanical databases.
- Add virtualized scrolling for the entire library.
- Add downloadable species profiles.
- Add time-series charts for growth and ecosystem metrics.
- Add seed dispersal and spatial competition.
- Add genotype-to-phenotype charts in Evolution.
- Add optional raster image generation pipeline for selected species hero illustrations.

