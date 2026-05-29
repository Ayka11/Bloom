# Bloom — Botanical Encyclopedia

Bloom is a living artificial biosphere system and botanical encyclopedia where plants evolve, climates change, and ecosystems interact.

## 🌿 Ecosystem Simulator Architecture

The simulation core is built on a modular architecture that connects environmental factors with plant biology:

- **Climate Engine**: Simulates seasonal variations in temperature, sunlight, rainfall, and humidity.
- **Soil Chemistry System**: Tracks nutrient levels (Nitrogen, Phosphorus, Potassium) and pH, influenced by plant growth and natural recovery.
- **Growth Simulator**: Implements a physiological growth model where `GrowthRate = Photosynthesis - Respiration - Stress`.
- **Pollination Simulator**: Models pollinator activity and success rates based on environmental conditions and plant biomass.

## 🚀 Features

- **Live Simulation**: Experience a real-time botanical biosphere with dynamic interactions.
- **Botanical Library**: Explore 60+ species with detailed care guides, medicinal properties, and natural history.
- **Interactive Sandbox**: Monitor ecosystem health through a real-time dashboard.
- **Visual Illustrations**: High-quality SVG botanical illustrations for every species.

## 🛠️ Technology Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Simulation**: Custom ECS-inspired JavaScript engine
- **Icons/Graphics**: Hand-crafted Procedural SVGs

## 🌸 Species Library

The botanical library now includes **31 species** drawn from the `flowers_10000_taxonomy.json` dataset, spanning 20 plant families across all major climate zones.

| # | Common Name | Latin Name | Family | Climate | Season |
|---|------------|-----------|--------|---------|--------|
| 1 | Rose | *Rosa damascena* | Rosaceae | Temperate | Spring/Summer |
| 2 | Lavender | *Lavandula angustifolia* | Lamiaceae | Mediterranean | Summer |
| 3 | Lotus | *Nelumbo nucifera* | Nelumbonaceae | Tropical | Summer |
| 4 | Orchid | *Phalaenopsis amabilis* | Orchidaceae | Tropical | Year-round |
| 5 | Aloe Vera | *Aloe barbadensis miller* | Asphodelaceae | Arid | Year-round |
| 6 | Ranunculus | *Ranunculus asiaticus* | Ranunculaceae | Mediterranean | Spring |
| 7 | Nasturtium | *Tropaeolum majus* | Tropaeolaceae | Subtropical | Summer/Autumn |
| 8 | Bleeding Heart | *Lamprocapnos spectabilis* | Papaveraceae | Temperate | Spring |
| 9 | Edelweiss | *Leontopodium nivale* | Asteraceae | Alpine | Summer |
| 10 | Plumeria | *Plumeria rubra* | Apocynaceae | Tropical | Summer |
| 11 | Water Hyacinth | *Eichhornia crassipes* | Pontederiaceae | Tropical | Summer |
| 12 | Sunflower | *Helianthus annuus* | Asteraceae | Temperate | Summer |
| 13 | Iris | *Iris germanica* | Iridaceae | Mediterranean | Spring |
| 14 | Dahlia | *Dahlia pinnata* | Asteraceae | Subtropical | Summer/Autumn |
| 15 | Hibiscus | *Hibiscus rosa-sinensis* | Malvaceae | Tropical | Year-round |
| 16 | Delphinium | *Delphinium elatum* | Ranunculaceae | Temperate | Summer |
| 17 | Chrysanthemum | *Chrysanthemum morifolium* | Asteraceae | Temperate | Autumn |
| 18 | Passionflower | *Passiflora incarnata* | Passifloraceae | Subtropical | Summer |
| 19 | Lupine | *Lupinus polyphyllus* | Fabaceae | Temperate | Spring/Summer |
| 20 | Magnolia | *Magnolia grandiflora* | Magnoliaceae | Subtropical | Summer |
| 21 | Crocus | *Crocus sativus* | Iridaceae | Mediterranean | Autumn |
| 22 | Jasmine | *Jasminum officinale* | Oleaceae | Subtropical | Summer |
| 23 | Gypsophila | *Gypsophila paniculata* | Caryophyllaceae | Temperate | Summer |
| 24 | Anemone | *Anemone coronaria* | Ranunculaceae | Mediterranean | Spring |
| 25 | Agapanthus | *Agapanthus africanus* | Amaryllidaceae | Subtropical | Summer |
| 26 | Echinacea | *Echinacea purpurea* | Asteraceae | Temperate | Summer/Autumn |
| 27 | Fritillary | *Fritillaria imperialis* | Liliaceae | Temperate | Spring |
| 28 | Calendula | *Calendula officinalis* | Asteraceae | Mediterranean | Spring/Autumn |
| 29 | Acacia | *Acacia dealbata* | Fabaceae | Subtropical | Winter/Spring |
| 30 | Dianthus | *Dianthus caryophyllus* | Caryophyllaceae | Mediterranean | Spring/Summer |
| 31 | Salvia | *Salvia officinalis* | Lamiaceae | Mediterranean | Summer |

### Taxonomy Coverage

| Attribute | Values |
|-----------|--------|
| **Families** | Asteraceae, Rosaceae, Fabaceae, Lamiaceae, Ranunculaceae, Iridaceae, Malvaceae, Liliaceae, Orchidaceae, Amaryllidaceae, Oleaceae, Caryophyllaceae, Magnoliaceae, Passifloraceae, Apocynaceae, Papaveraceae, and more |
| **Plant Types** | herb, shrub, tree, vine, bulb, succulent, aquatic |
| **Climates** | temperate, tropical, subtropical, arid, alpine |
| **Lifecycles** | annual, biennial, perennial |
| **Colors** | pink, red, purple, blue, yellow, orange, white |

Source data: `flowers_10000_taxonomy.json` — 10,000 records across 117 genera and 20+ families.

## 📖 Glossary

The application includes a comprehensive botanical glossary to help users master the terminology of the plant world.
