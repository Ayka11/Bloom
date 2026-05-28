const BloomTaxonomy = (() => {
  const COLOR_HEX = {
    red: "#d94a4a",
    pink: "#ef7fa6",
    purple: "#9a6ad6",
    blue: "#5d95d8",
    yellow: "#e0b849",
    orange: "#df8542",
    white: "#f2ead9"
  };

  const TYPE_FORM = {
    succulent: { petals: 8, leafScale: 1.3, stem: 0.45 },
    vine: { petals: 5, leafScale: 0.9, stem: 0.8 },
    shrub: { petals: 11, leafScale: 1.1, stem: 0.65 },
    tree: { petals: 9, leafScale: 1.0, stem: 1.0 },
    bulb: { petals: 6, leafScale: 0.8, stem: 0.7 },
    herb: { petals: 7, leafScale: 0.75, stem: 0.55 },
    aquatic: { petals: 12, leafScale: 1.2, stem: 0.35 }
  };

  const CLIMATE_TRAITS = {
    alpine: { temp: 12, water: 0.42, light: 0.78, humidity: 48, stress: 0.78 },
    arid: { temp: 30, water: 0.2, light: 0.92, humidity: 25, stress: 0.86 },
    temperate: { temp: 21, water: 0.58, light: 0.72, humidity: 55, stress: 0.62 },
    subtropical: { temp: 25, water: 0.68, light: 0.76, humidity: 68, stress: 0.58 },
    tropical: { temp: 28, water: 0.82, light: 0.64, humidity: 78, stress: 0.5 }
  };

  const LIFECYCLE_TRAITS = {
    annual: { speed: 1.25, longevity: 120 },
    biennial: { speed: 0.9, longevity: 420 },
    perennial: { speed: 0.72, longevity: 1200 }
  };

  const GENUS_HINTS = {
    Rosa: { family: "Rosaceae", plant_type: "shrub", lifecycle: "perennial", color: "pink" },
    Prunus: { family: "Rosaceae", plant_type: "tree", lifecycle: "perennial" },
    Malus: { family: "Rosaceae", plant_type: "tree", lifecycle: "perennial" },
    Pyrus: { family: "Rosaceae", plant_type: "tree", lifecycle: "perennial" },
    Lavandula: { family: "Lamiaceae", plant_type: "shrub", lifecycle: "perennial", color: "purple" },
    Helianthus: { family: "Asteraceae", plant_type: "herb", lifecycle: "annual", color: "yellow" }
  };

  function clamp(value, min = 0, max = 1) {
    return Math.max(min, Math.min(max, value));
  }

  function hashString(value) {
    let hash = 2166136261;
    for (let i = 0; i < value.length; i++) {
      hash ^= value.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function normalizedSpecies(species) {
    const taxonomy = species.taxonomy || {};
    const latin = species.latin || taxonomy.species || species.name || "Unknown species";
    const genus = taxonomy.genus || latin.split(" ")[0] || "Plant";
    const hint = GENUS_HINTS[genus] || {};
    const cat = taxonomy.plant_type || hint.plant_type || species.cat || "garden";
    const climate = taxonomy.climate || (species.tags || []).find(tag => CLIMATE_TRAITS[tag]) || "temperate";
    const color = taxonomy.color || species.color || hint.color || "pink";

    return {
      ...species,
      id: species.id || latin.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
      name: species.name || latin,
      latin,
      cat,
      tags: species.tags || [cat, climate],
      desc: species.desc || `A ${color} ${cat} adapted to ${climate} growing conditions.`,
      care: {
        water: "Moderate",
        sun: "Full sun",
        soil: "Well-drained",
        diff: "Medium",
        season: "Growing season",
        ...(species.care || {})
      },
      taxonomy: {
        family: taxonomy.family || hint.family || "Mixed",
        genus,
        species: taxonomy.species || latin,
        lifecycle: taxonomy.lifecycle || hint.lifecycle || "perennial",
        plant_type: taxonomy.plant_type || cat,
        climate,
        color
      }
    };
  }

  function inferGrowthTraits(species) {
    const plant = normalizedSpecies(species);
    const climate = CLIMATE_TRAITS[plant.taxonomy.climate] || CLIMATE_TRAITS.temperate;
    const lifecycle = LIFECYCLE_TRAITS[plant.taxonomy.lifecycle] || LIFECYCLE_TRAITS.perennial;
    const type = plant.taxonomy.plant_type;
    const isSucculent = type === "succulent";
    const isAquatic = type === "aquatic";

    return {
      idealTemp: climate.temp,
      waterNeed: isSucculent ? Math.min(0.32, climate.water) : isAquatic ? 0.95 : climate.water,
      lightNeed: climate.light,
      humidityNeed: climate.humidity,
      stressTolerance: climate.stress,
      growthSpeed: lifecycle.speed,
      matureDays: lifecycle.longevity * 0.22,
      nutrientNeed: type === "tree" || type === "shrub" ? 0.68 : 0.52,
      chlorophyll: type === "succulent" ? 0.72 : 0.86,
      form: type
    };
  }

  function renderSpeciesSvg(species, size = 150) {
    const plant = normalizedSpecies(species);
    const taxonomy = plant.taxonomy;
    const seed = Number(plant.sourceId ?? plant.illustration?.seed ?? hashString(plant.id));
    const color = COLOR_HEX[taxonomy.color] || COLOR_HEX.pink;
    const accent = seed % 3 === 0 ? "#f3d98b" : seed % 3 === 1 ? "#f6ece0" : "#cfe7a2";
    const form = TYPE_FORM[taxonomy.plant_type] || TYPE_FORM.herb;
    const petalCount = Math.max(4, form.petals + (seed % 5) - 2);
    const petalLength = 34 + (seed % 28);
    const petalWidth = 10 + ((seed >> 4) % 14);
    const stemHeight = 74 + Math.round(form.stem * 42);
    const leafScale = form.leafScale;
    const gid = `g${seed}`;
    const petals = [];

    for (let i = 0; i < petalCount; i++) {
      const angle = (360 / petalCount) * i;
      const curve = taxonomy.plant_type === "bulb" ? 8 : taxonomy.plant_type === "vine" ? 18 : 12;
      petals.push(`<g transform="rotate(${angle} 100 96)">
        <path d="M100 94 C${100 - petalWidth} ${94 - curve}, ${100 - petalWidth} ${94 - petalLength}, 100 ${88 - petalLength} C${100 + petalWidth} ${94 - petalLength}, ${100 + petalWidth} ${94 - curve}, 100 94Z" fill="url(#${gid}p)" opacity=".92"/>
        <path d="M100 93 C${99 - petalWidth * .16} ${82 - petalLength * .26}, ${100 + petalWidth * .1} ${72 - petalLength * .45}, 100 ${89 - petalLength}" stroke="rgba(255,255,255,.42)" stroke-width=".55" fill="none"/>
        <path d="M100 93 C${100 + petalWidth * .3} ${82 - petalLength * .28}, ${100 + petalWidth * .42} ${78 - petalLength * .38}, ${100 + petalWidth * .2} ${92 - petalLength * .58}" stroke="rgba(80,32,54,.22)" stroke-width=".45" fill="none"/>
      </g>`);
    }

    const vine = taxonomy.plant_type === "vine"
      ? `<path d="M92 156 C54 146, 68 104, 44 94" stroke="#6fa65d" stroke-width="2" fill="none"/><path d="M108 154 C150 144, 130 103, 158 88" stroke="#6fa65d" stroke-width="2" fill="none"/>`
      : "";
    const base = taxonomy.plant_type === "bulb"
      ? `<ellipse cx="100" cy="174" rx="22" ry="13" fill="#d6bd82" opacity=".82"/><path d="M84 174 Q100 151 116 174" stroke="#9b774c" fill="none" opacity=".55"/>`
      : taxonomy.plant_type === "succulent"
        ? `<path d="M74 174 Q100 126 126 174Z" fill="#6ea66f" opacity=".7"/><path d="M60 178 Q100 140 140 178Z" fill="#568d61" opacity=".68"/>`
        : "";

    return `<svg width="${size}" height="${size}" viewBox="0 0 200 200" role="img" aria-label="${plant.name} botanical illustration" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="${gid}p" cx="45%" cy="35%" r="70%">
          <stop offset="0%" stop-color="#fff2da"/>
          <stop offset="18%" stop-color="${accent}"/>
          <stop offset="42%" stop-color="${color}"/>
          <stop offset="100%" stop-color="#6d3151"/>
        </radialGradient>
        <radialGradient id="${gid}bg" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stop-color="#56784f"/>
          <stop offset="55%" stop-color="#24351f"/>
          <stop offset="100%" stop-color="#172015"/>
        </radialGradient>
        <linearGradient id="${gid}s" x1="0" x2="1">
          <stop offset="0%" stop-color="#4d7d45"/>
          <stop offset="100%" stop-color="#8fbd70"/>
        </linearGradient>
        <filter id="${gid}soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.8"/>
        </filter>
        <filter id="${gid}grain">
          <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="${seed % 97}"/>
          <feColorMatrix type="saturate" values=".15"/>
          <feBlend mode="multiply" in2="SourceGraphic"/>
        </filter>
      </defs>
      <rect width="200" height="200" fill="url(#${gid}bg)"/>
      <circle cx="38" cy="46" r="24" fill="#d8e8ad" opacity=".16" filter="url(#${gid}soft)"/>
      <circle cx="158" cy="58" r="15" fill="#e8d794" opacity=".13" filter="url(#${gid}soft)"/>
      <ellipse cx="100" cy="172" rx="76" ry="15" fill="#10160f" opacity=".24" filter="url(#${gid}soft)"/>
      ${vine}
      <path d="M100 182 C${86 + (seed % 12)} ${150 - stemHeight / 3}, ${105 + (seed % 9)} ${128 - stemHeight / 5}, 100 95" stroke="url(#${gid}s)" stroke-width="${taxonomy.plant_type === "tree" ? 7 : 4}" fill="none" stroke-linecap="round"/>
      <path d="M96 148 C${76 - leafScale * 8} ${137}, ${70 - leafScale * 5} ${118}, ${100} ${132}" fill="#4f8f49" opacity=".88"/>
      <path d="M86 140 C80 134, 78 128, 74 122" stroke="rgba(210,235,187,.36)" stroke-width=".7" fill="none"/>
      <path d="M104 158 C${126 + leafScale * 8} ${147}, ${132 + leafScale * 4} ${126}, ${100} ${139}" fill="#6aa65d" opacity=".88"/>
      <path d="M114 150 C122 142, 126 135, 130 128" stroke="rgba(210,235,187,.36)" stroke-width=".7" fill="none"/>
      ${base}
      <g>${petals.join("")}</g>
      <circle cx="100" cy="96" r="${9 + (seed % 7)}" fill="${accent}"/>
      <circle cx="100" cy="96" r="${4 + (seed % 4)}" fill="#5f3f24" opacity=".72"/>
      <g fill="#332414" opacity=".72">
        <circle cx="96" cy="94" r="1.1"/><circle cx="103" cy="93" r=".9"/><circle cx="99" cy="100" r="1"/><circle cx="106" cy="99" r=".75"/>
      </g>
      <rect width="200" height="200" fill="transparent" filter="url(#${gid}grain)" opacity=".05"/>
    </svg>`;
  }

  return { normalizedSpecies, inferGrowthTraits, renderSpeciesSvg, clamp };
})();

window.BloomTaxonomy = BloomTaxonomy;
