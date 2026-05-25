/*
   BLOOM BOTANICAL DATA
   Unified species library with growth simulation parameters.
*/

const PLANT_SVGS = {
  rose: (s=88, stage=2) => {
    const scale = stage === 0 ? 0.5 : 1;
    const flowerOpacity = stage === 2 ? 1 : 0;
    return `<svg width="${s}" height="${s}" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(${scale}) translate(${44/scale - 44}, ${88/scale - 88})">
        <path d="M44 80C41 73 40 64 41 54" stroke="#4e8a45" stroke-width="4" stroke-linecap="round"/>
        <path d="M42 65C35 61 30 56 27 50C33 51 39 56 42 65Z" fill="#6daf5b"/>
        <path d="M46 59C53 55 58 50 61 44C55 45 49 50 46 59Z" fill="#4f9445"/>
        <g opacity="${flowerOpacity}">
          <path d="M44 23C31 23 22 32 22 44C22 55 31 63 44 63C57 63 66 55 66 44C66 32 57 23 44 23Z" fill="#cf3558"/>
          <path d="M44 28C35 28 28 35 28 44C28 52 35 58 44 58C53 58 60 52 60 44C60 35 53 28 44 28Z" fill="#ea6b88"/>
          <path d="M44 33C38 33 34 38 34 44C34 49 38 54 44 54C50 54 54 49 54 44C54 38 50 33 44 33Z" fill="#f6b0c1"/>
          <circle cx="44" cy="44" r="7" fill="#bf2448"/>
        </g>
      </g>
    </svg>`;
  },
  lavender: (s=88, stage=2) => {
    const scale = stage === 0 ? 0.5 : 1;
    const bloomOpacity = stage === 2 ? 1 : 0;
    return `<svg width="${s}" height="${s}" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(${scale}) translate(${44/scale - 44}, ${88/scale - 88})">
        <path d="M44 80V30" stroke="#5b9b4b" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M44 68C36 66 31 63 28 59C34 59 39 62 44 68Z" fill="#6ba85a"/>
        <path d="M44 60C52 58 57 55 60 51C54 51 49 54 44 60Z" fill="#558f46"/>
        <g opacity="${bloomOpacity}">
          <ellipse cx="38" cy="39" rx="6" ry="11" fill="#8d6ad1"/>
          <ellipse cx="44" cy="32" rx="6" ry="13" fill="#a588df"/>
          <ellipse cx="50" cy="39" rx="6" ry="11" fill="#8160c6"/>
          <ellipse cx="44" cy="24" rx="4" ry="9" fill="#6f50b6"/>
        </g>
      </g>
    </svg>`;
  },
  lotus: (s=88, stage=2) => {
    const scale = stage === 0 ? 0.5 : 1;
    const flowerOpacity = stage === 2 ? 1 : 0;
    return `<svg width="${s}" height="${s}" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(${scale}) translate(${44/scale - 44}, ${88/scale - 88})">
        <ellipse cx="44" cy="70" rx="24" ry="8" fill="#87c7b7"/>
        <path d="M44 68V42" stroke="#5e9f62" stroke-width="3.5" stroke-linecap="round"/>
        <g opacity="${flowerOpacity}">
          <path d="M44 29L31 45L44 40L57 45L44 29Z" fill="#f6c2d0"/>
          <path d="M44 24L35 41L44 36L53 41L44 24Z" fill="#f09ab2"/>
          <path d="M26 49C33 38 39 34 44 34C38 43 33 48 26 49Z" fill="#f8dce5"/>
          <path d="M62 49C55 38 49 34 44 34C50 43 55 48 62 49Z" fill="#f8dce5"/>
          <circle cx="44" cy="42" r="5" fill="#e9bc68"/>
        </g>
      </g>
    </svg>`;
  },
  orchid: (s=88, stage=2) => {
    const scale = stage === 0 ? 0.5 : 1;
    const flowerOpacity = stage === 2 ? 1 : 0;
    return `<svg width="${s}" height="${s}" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(${scale}) translate(${44/scale - 44}, ${88/scale - 88})">
        <path d="M44 80V34" stroke="#5a9b4d" stroke-width="3.5" stroke-linecap="round"/>
        <g opacity="${flowerOpacity}">
          <path d="M32 36C28 25 33 16 43 18C43 27 39 34 32 36Z" fill="#d8c2ff"/>
          <path d="M56 36C60 25 55 16 45 18C45 27 49 34 56 36Z" fill="#d8c2ff"/>
          <ellipse cx="31" cy="47" rx="11" ry="8" fill="#c6a8ff"/>
          <ellipse cx="57" cy="47" rx="11" ry="8" fill="#c6a8ff"/>
          <ellipse cx="44" cy="51" rx="12" ry="10" fill="#f0ddff"/>
          <path d="M44 43C39 43 35 47 35 52C35 57 39 60 44 60C49 60 53 57 53 52C53 47 49 43 44 43Z" fill="#8e63d6"/>
          <circle cx="44" cy="52" r="4" fill="#f0c94b"/>
        </g>
      </g>
    </svg>`;
  },
  aloe: (s=88, stage=2) => {
    const scale = stage === 0 ? 0.4 : stage === 1 ? 0.8 : 1;
    return `<svg width="${s}" height="${s}" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(${scale}) translate(${44/scale - 44}, ${76/scale - 76})">
        <path d="M44 76C40 62 40 49 44 18C48 49 48 62 44 76Z" fill="#6dbd69"/>
        <path d="M39 74C32 61 29 48 32 26C37 44 39 56 39 74Z" fill="#8cd487"/>
        <path d="M49 74C56 61 59 48 56 26C51 44 49 56 49 74Z" fill="#58aa58"/>
        <path d="M34 72C25 63 21 53 22 39C29 48 32 58 34 72Z" fill="#9cdea0"/>
        <path d="M54 72C63 63 67 53 66 39C59 48 56 58 54 72Z" fill="#63b764"/>
      </g>
    </svg>`;
  },
  ranunculus: (s=88, stage=2) => {
    const scale = stage === 0 ? 0.5 : 1;
    const flowerOpacity = stage === 2 ? 1 : 0;
    return `<svg width="${s}" height="${s}" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(${scale}) translate(${44/scale - 44}, ${80/scale - 80})">
        <path d="M44 80C42 71 41 62 42 52" stroke="#4f8c44" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M41 65C34 62 29 58 26 53C31 53 37 57 41 65Z" fill="#69a759"/>
        <path d="M46 60C53 57 58 53 61 48C56 48 50 52 46 60Z" fill="#578f47"/>
        <g opacity="${flowerOpacity}">
          <ellipse cx="44" cy="36" rx="22" ry="20" fill="#ef6f44"/>
          <ellipse cx="44" cy="36" rx="17" ry="15" fill="#ff9468"/>
          <ellipse cx="44" cy="36" rx="12" ry="10" fill="#ffc19d"/>
          <circle cx="44" cy="36" r="5" fill="#8e2a1c"/>
        </g>
      </g>
    </svg>`;
  },
  nasturtium: (s=88, stage=2) => {
    const scale = stage === 0 ? 0.5 : 1;
    const flowerOpacity = stage === 2 ? 1 : 0;
    return `<svg width="${s}" height="${s}" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(${scale}) translate(${44/scale - 44}, ${80/scale - 80})">
        <path d="M44 80C44 70 45 60 48 47" stroke="#5b9744" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="28" cy="57" r="11" fill="#6aa84f"/>
        <circle cx="60" cy="50" r="9" fill="#5e9946"/>
        <circle cx="28" cy="57" r="2.5" fill="#89c56e"/>
        <circle cx="60" cy="50" r="2.5" fill="#89c56e"/>
        <g opacity="${flowerOpacity}">
          <ellipse cx="44" cy="35" rx="12" ry="18" fill="#ffd062"/>
          <ellipse cx="36" cy="40" rx="11" ry="16" fill="#ff9e3f"/>
          <ellipse cx="52" cy="40" rx="11" ry="16" fill="#ff8a33"/>
          <ellipse cx="44" cy="46" rx="13" ry="12" fill="#ffb14a"/>
          <circle cx="44" cy="40" r="4.5" fill="#b22222"/>
        </g>
      </g>
    </svg>`;
  },
  bleedingHeart: (s=88, stage=2) => {
    const scale = stage === 0 ? 0.5 : 1;
    const flowerOpacity = stage === 2 ? 1 : 0;
    return `<svg width="${s}" height="${s}" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(${scale}) translate(${44/scale - 44}, ${79/scale - 79})">
        <path d="M20 30C34 22 51 23 66 34" stroke="#80b26e" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M37 79C39 70 40 61 41 52" stroke="#669954" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path d="M35 57C30 55 27 52 24 48C28 48 32 51 35 57Z" fill="#77ab63"/>
        <g opacity="${flowerOpacity}">
          <path d="M31 40C28 35 21 35 19 40C18 45 23 49 31 56C39 49 44 45 43 40C41 35 34 35 31 40Z" fill="#f18db1"/>
          <path d="M46 36C43 31 36 31 34 36C33 41 38 45 46 52C54 45 59 41 58 36C56 31 49 31 46 36Z" fill="#ef7da6"/>
          <path d="M58 42C55 37 48 37 46 42C45 47 50 51 58 58C66 51 71 47 70 42C68 37 61 37 58 42Z" fill="#f5a3c0"/>
          <path d="M31 56V63" stroke="#f7f3ee" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M46 52V59" stroke="#f7f3ee" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M58 58V65" stroke="#f7f3ee" stroke-width="2.5" stroke-linecap="round"/>
        </g>
      </g>
    </svg>`;
  },
  edelweiss: (s=88, stage=2) => {
    const scale = stage === 0 ? 0.5 : 1;
    const flowerOpacity = stage === 2 ? 1 : 0;
    return `<svg width="${s}" height="${s}" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(${scale}) translate(${44/scale - 44}, ${80/scale - 80})">
        <path d="M44 80C43 70 43 61 44 51" stroke="#6d9d57" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M42 65C36 62 32 58 29 53C34 53 39 57 42 65Z" fill="#7cad65"/>
        <path d="M46 61C52 58 56 54 59 49C54 49 49 53 46 61Z" fill="#678f50"/>
        <g opacity="${flowerOpacity}">
          <path d="M44 20L49 31L61 27L54 38L66 44L53 46L56 58L44 50L32 58L35 46L22 44L34 38L27 27L39 31Z" fill="#f7f7f7" stroke="#ced3d8" stroke-width="1.5"/>
          <circle cx="44" cy="44" r="8" fill="#e7ca63"/>
          <circle cx="44" cy="44" r="3" fill="#8d6a17"/>
        </g>
      </g>
    </svg>`;
  },
  plumeria: (s=88, stage=2) => {
    const scale = stage === 0 ? 0.5 : 1;
    const flowerOpacity = stage === 2 ? 1 : 0;
    return `<svg width="${s}" height="${s}" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(${scale}) translate(${44/scale - 44}, ${80/scale - 80})">
        <path d="M44 80C45 68 46 58 49 46" stroke="#5e9147" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M42 62C35 59 30 55 27 50C32 50 38 54 42 62Z" fill="#6ea85a"/>
        <path d="M48 58C56 55 60 50 63 45C58 45 52 49 48 58Z" fill="#528341"/>
        <g opacity="${flowerOpacity}">
          <ellipse cx="44" cy="33" rx="11" ry="18" fill="#fff7dc"/>
          <ellipse cx="34" cy="39" rx="10" ry="17" fill="#fff5d2"/>
          <ellipse cx="54" cy="39" rx="10" ry="17" fill="#fff5d2"/>
          <ellipse cx="38" cy="50" rx="10" ry="14" fill="#faf8ef"/>
          <ellipse cx="50" cy="50" rx="10" ry="14" fill="#faf8ef"/>
          <circle cx="44" cy="42" r="8" fill="#f3cf5a"/>
        </g>
      </g>
    </svg>`;
  },
  waterHyacinth: (s=88, stage=2) => {
    const scale = stage === 0 ? 0.5 : 1;
    const flowerOpacity = stage === 2 ? 1 : 0;
    return `<svg width="${s}" height="${s}" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(${scale}) translate(${44/scale - 44}, ${72/scale - 72})">
        <ellipse cx="44" cy="72" rx="24" ry="8" fill="#6db7b8"/>
        <path d="M44 70V43" stroke="#62a14e" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M39 62C32 58 27 53 24 48C30 49 35 53 39 62Z" fill="#74b461"/>
        <path d="M49 58C57 54 61 49 64 44C58 44 53 48 49 58Z" fill="#609d4d"/>
        <g opacity="${flowerOpacity}">
          <ellipse cx="44" cy="31" rx="8" ry="15" fill="#d8cbff"/>
          <ellipse cx="36" cy="38" rx="8" ry="14" fill="#cab8ff"/>
          <ellipse cx="52" cy="38" rx="8" ry="14" fill="#cab8ff"/>
          <ellipse cx="44" cy="45" rx="9" ry="13" fill="#efe9ff"/>
          <circle cx="44" cy="35" r="4" fill="#f0d25d"/>
        </g>
      </g>
    </svg>`;
  }
};

const FLOWERS = [
  {
    id: 1,
    name: "Rose",
    latin: "Rosa damascena",
    category: "Garden",
    svg: PLANT_SVGS.rose,
    difficulty: "Medium",
    watering: "Moderate",
    growthRate: 0.05,
    preferredLight: 80,
    preferredMinerals: 70,
    care: "Full sun, rich soil, and regular pruning keep blooms strong through the warm season.",
    medicinal: "Astringent, anti-inflammatory, soothing for skin.",
    uses: "Perfume, tea, syrups, skincare.",
    origin: "Persia, Europe, North Africa",
    description: "A layered, fragrant classic grown for beauty, medicine, and perfume.",
    season: "Spring/Summer",
    facts: [
      "Rose hips are rich in vitamin C.",
      "Damask roses are prized for perfume oil.",
      "Roses have been cultivated for thousands of years.",
      "A mature rose shrub can bloom repeatedly with deadheading."
    ]
  },
  {
    id: 2,
    name: "Lavender",
    latin: "Lavandula angustifolia",
    category: "Herbal",
    svg: PLANT_SVGS.lavender,
    difficulty: "Easy",
    watering: "Low",
    growthRate: 0.07,
    preferredLight: 90,
    preferredMinerals: 30,
    care: "Needs full sun, lean soil, and excellent drainage. Avoid overwatering.",
    medicinal: "Calming, antiseptic, mildly analgesic.",
    uses: "Aromatherapy, sachets, desserts, oils.",
    origin: "Mediterranean",
    description: "Silver-green stems topped with calming violet flower spikes.",
    season: "Summer",
    facts: [
      "Lavender attracts bees in large numbers.",
      "The scent has long been used for rest and relaxation.",
      "It thrives in poor soil where many flowers struggle.",
      "Cutting it back lightly helps keep the mound compact."
    ]
  },
  {
    id: 3,
    name: "Lotus",
    latin: "Nelumbo nucifera",
    category: "Aquatic",
    svg: PLANT_SVGS.lotus,
    difficulty: "Hard",
    watering: "High",
    growthRate: 0.03,
    preferredLight: 85,
    preferredMinerals: 80,
    care: "Grow in still warm water with rich submerged soil and full sun.",
    medicinal: "Antioxidant, anti-inflammatory, cooling.",
    uses: "Food, medicine, rituals, pond displays.",
    origin: "Asia",
    description: "A sacred water flower rising cleanly above still ponds.",
    season: "Summer",
    facts: [
      "Lotus seeds can stay viable for centuries.",
      "Leaves repel water with a famous self-cleaning surface.",
      "Roots, seeds, and stems are edible.",
      "It symbolizes purity in several traditions."
    ]
  },
  {
    id: 4,
    name: "Orchid",
    latin: "Phalaenopsis amabilis",
    category: "Tropical",
    svg: PLANT_SVGS.orchid,
    difficulty: "Medium",
    watering: "Low to moderate",
    growthRate: 0.02,
    preferredLight: 60,
    preferredMinerals: 50,
    care: "Give bright indirect light, bark-based mix, and airflow around roots.",
    medicinal: "Traditionally used as tonic plants; vanilla is orchid-derived.",
    uses: "Ornamental growing, gifting, vanilla production.",
    origin: "Tropical Asia",
    description: "Elegant long-lasting blooms with a poised, sculptural shape.",
    season: "Year-round",
    facts: [
      "Orchids are among the largest plant families.",
      "Many bloom for weeks at a time indoors.",
      "Some species mimic insects to attract pollinators.",
      "Vanilla comes from an orchid vine."
    ]
  },
  {
    id: 5,
    name: "Aloe Vera",
    latin: "Aloe barbadensis miller",
    category: "Succulent",
    svg: PLANT_SVGS.aloe,
    difficulty: "Easy",
    watering: "Low",
    growthRate: 0.04,
    preferredLight: 70,
    preferredMinerals: 40,
    care: "Bright light and fast-draining soil are essential. Water only when dry.",
    medicinal: "Cooling gel for burns and irritated skin.",
    uses: "Skincare, cosmetics, traditional home remedies.",
    origin: "Arabian Peninsula",
    description: "A hardy medicinal succulent with water-storing leaves.",
    season: "Year-round",
    facts: [
      "The leaves store moisture for drought survival.",
      "Aloe gel is a common soothing ingredient.",
      "Too much water is the fastest way to damage it.",
      "It offsets soft flowers nicely in mixed collections."
    ]
  },
  {
    id: 6,
    name: "Ranunculus",
    latin: "Ranunculus asiaticus",
    category: "Garden",
    svg: PLANT_SVGS.ranunculus,
    difficulty: "Medium",
    watering: "Moderate",
    growthRate: 0.06,
    preferredLight: 75,
    preferredMinerals: 65,
    care: "Likes cool growth, rich soil, and steady moisture without sogginess.",
    medicinal: "Buttercup relatives were used cautiously in folk practice.",
    uses: "Bouquets, borders, spring displays.",
    origin: "Eastern Mediterranean",
    description: "A luxurious spring bloomer packed with papery petals.",
    season: "Spring",
    facts: [
      "Ranunculus corms resemble tiny claws.",
      "Florists love their long vase life.",
      "Cool weather helps the best blooms form.",
      "They bridge the look between roses and poppies."
    ]
  },
  {
    id: 7,
    name: "Nasturtium",
    latin: "Tropaeolum majus",
    category: "Herbal",
    svg: PLANT_SVGS.nasturtium,
    difficulty: "Easy",
    watering: "Low to moderate",
    growthRate: 0.09,
    preferredLight: 80,
    preferredMinerals: 45,
    care: "Grow in lean soil for more flowers. Too much fertilizer makes leaves outrun blooms.",
    medicinal: "Peppery leaves were used in traditional tonics.",
    uses: "Salads, edible garnishes, companion planting.",
    origin: "South America",
    description: "Bright edible flowers with rounded leaves and a lively peppery bite.",
    season: "Summer/Autumn",
    facts: [
      "Both flowers and leaves are edible.",
      "Aphids often choose nasturtiums before vegetables nearby.",
      "Poorer soil usually means better flowering.",
      "The flavor is similar to watercress."
    ]
  },
  {
    id: 8,
    name: "Bleeding Heart",
    latin: "Lamprocapnos spectabilis",
    category: "Wild",
    svg: PLANT_SVGS.bleedingHeart,
    difficulty: "Easy",
    watering: "Moderate",
    growthRate: 0.045,
    preferredLight: 40,
    preferredMinerals: 55,
    care: "Prefers cool shade, moist humus-rich soil, and shelter from harsh afternoon sun.",
    medicinal: "Historically noted, though not commonly used now.",
    uses: "Woodland borders, shade gardens, spring displays.",
    origin: "China, Korea, Siberia",
    description: "Arching stems carry dangling heart-shaped blossoms in spring.",
    season: "Spring",
    facts: [
      "It often goes dormant after flowering.",
      "The blooms are famous in cottage and woodland gardens.",
      "Cool shade keeps it looking fresh longer.",
      "Its unusual shape makes it instantly recognizable."
    ]
  },
  {
    id: 9,
    name: "Edelweiss",
    latin: "Leontopodium nivale",
    category: "Wild",
    svg: PLANT_SVGS.edelweiss,
    difficulty: "Hard",
    watering: "Low",
    growthRate: 0.035,
    preferredLight: 100,
    preferredMinerals: 35,
    care: "Needs sun, sharp drainage, and cool root conditions like a rock garden.",
    medicinal: "Used in mountain herbal traditions.",
    uses: "Alpine collections, rock gardens, dried arrangements.",
    origin: "Alps and Carpathians",
    description: "A silvery alpine star adapted to wind, glare, and thin soils.",
    season: "Summer",
    facts: [
      "Its woolly bracts help reflect ultraviolet light.",
      "It became a symbol of mountain courage.",
      "Wild plants are protected in several regions.",
      "Drainage matters more than fertilizer for success."
    ]
  },
  {
    id: 10,
    name: "Plumeria",
    latin: "Plumeria rubra",
    category: "Tropical",
    svg: PLANT_SVGS.plumeria,
    difficulty: "Medium",
    watering: "Low to moderate",
    growthRate: 0.055,
    preferredLight: 95,
    preferredMinerals: 50,
    care: "Give heat, strong light, and dry intervals between drinks.",
    medicinal: "Traditionally used in some local folk systems.",
    uses: "Lei making, perfumery, patio growing.",
    origin: "Central America and Caribbean",
    description: "A warm-climate flower with buttery centers and evening fragrance.",
    season: "Summer",
    facts: [
      "The scent is strongest toward dusk.",
      "Branches store water for dry spells.",
      "Flowers are widely used in leis.",
      "It loves bright heat more than rich soil."
    ]
  },
  {
    id: 11,
    name: "Water Hyacinth",
    latin: "Eichhornia crassipes",
    category: "Aquatic",
    svg: PLANT_SVGS.waterHyacinth,
    difficulty: "Easy",
    watering: "High",
    growthRate: 0.1,
    preferredLight: 90,
    preferredMinerals: 75,
    care: "Thrives in warm still water with full sun, but needs careful containment.",
    medicinal: "Mostly valued ecologically rather than medicinally.",
    uses: "Pond ornament, water filtration, biomass.",
    origin: "Amazon Basin",
    description: "Floating rosettes with lilac flower spikes above glossy leaves.",
    season: "Summer",
    facts: [
      "Air-filled leaf stalks help it float.",
      "It grows extremely fast in warm nutrient-rich water.",
      "It can help absorb excess nutrients from water.",
      "It must be managed carefully because it can become invasive."
    ]
  }
];

const CATEGORIES = ["Garden", "Herbal", "Wild", "Tropical", "Aquatic", "Succulent"];
const SEASONS = ["Spring", "Summer", "Autumn", "Winter"];
const CARE_TIPS = [
  "Water early in the morning for best absorption.",
  "Group plants with similar needs together.",
  "Rotate pots for even sun exposure.",
  "Use rainwater for sensitive species.",
  "Check soil moisture before watering.",
  "Fertilize during active growth only.",
  "Prune dead or diseased parts promptly.",
  "Repot when roots outgrow the pot.",
  "Mulch to retain soil moisture.",
  "Clean leaves to prevent pests.",
  "Avoid wetting leaves of succulents.",
  "Use pots with drainage holes.",
  "Acclimate new plants gradually.",
  "Label your plants for easy care.",
  "Observe for signs of stress.",
  "Research each plant's unique needs."
];
