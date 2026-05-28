/**
 * Bloom Procedural Evolution Generator
 */

class Genome {
  constructor(genes = null) {
    if (genes) {
      this.genes = { ...genes };
    } else {
      this.genes = {
        // Morphology (0.0 to 1.0)
        petal_count: Math.random(), // 3 to 20
        petal_shape: Math.random(), // star, bell, trumpet, heart, round
        stem_height: Math.random(),
        leaf_shape: Math.random(),
        flower_diameter: Math.random(),
        petal_curvature: Math.random(),
        symmetry: Math.random(), // radial vs bilateral

        // Color
        primary_hue: Math.random(),
        secondary_hue: Math.random(),
        pigment_intensity: Math.random(),
        uv_pattern: Math.random() > 0.8 ? 1.0 : 0.0,

        // Climate
        cold_resistance: Math.random(),
        heat_resistance: Math.random(),
        water_requirement: Math.random(),
        sunlight_preference: Math.random(),

        // Pollination
        pollinator_type: Math.random(), // bee, bird, wind, moth
        fragrance_strength: Math.random(),
        nectar_volume: Math.random(),
        flower_open_time: Math.random() // day vs night
      };
    }
  }

  mutate(rate = 0.1, amount = 0.2) {
    for (let gene in this.genes) {
      if (Math.random() < rate) {
        this.genes[gene] += (Math.random() - 0.5) * amount;
        this.genes[gene] = Math.max(0, Math.min(1, this.genes[gene]));
      }
    }
  }

  static crossover(parentA, parentB, mutationRate = 0.05) {
    const offspringGenes = {};
    const w1 = Math.random();
    const w2 = 1 - w1;

    for (let gene in parentA.genes) {
      // Weighted inheritance
      offspringGenes[gene] = w1 * parentA.genes[gene] + w2 * parentB.genes[gene];

      // Mutation
      if (Math.random() < mutationRate) {
        offspringGenes[gene] += (Math.random() - 0.5) * 0.2;
      }
      offspringGenes[gene] = Math.max(0, Math.min(1, offspringGenes[gene]));
    }
    return new Genome(offspringGenes);
  }

  static geneticDistance(g1, g2) {
    let sum = 0;
    let count = 0;
    for (let gene in g1.genes) {
      sum += Math.pow(g1.genes[gene] - g2.genes[gene], 2);
      count++;
    }
    return Math.sqrt(sum) / Math.sqrt(count); // Normalized
  }
}

class Species {
  constructor(name, genome, generation = 0, parents = []) {
    this.id = 'sp_' + Math.random().toString(36).substr(2, 9);
    this.name = name || Species.generateName(genome);
    this.genome = genome;
    this.generation = generation;
    this.parents = parents;
    this.population = 100;
    this.fitness = 0.5;
  }

  static generateName(genome) {
    const prefixes = ['Rosa', 'Iris', 'Tulipa', 'Salvia', 'Lilium', 'Bellis', 'Viola', 'Lotus'];
    const traits = ['nocti', 'cryo', 'magna', 'aureo', 'clari', 'dulci', 'grandi', 'mini'];
    const habitats = ['flora', 'vita', 'rensis', 'ensis', 'ica', 'iana', 'olens', 'alis'];

    const p = prefixes[Math.floor(genome.genes.petal_shape * prefixes.length)];
    const t = traits[Math.floor(genome.genes.primary_hue * traits.length)];
    const h = habitats[Math.floor(genome.genes.pollinator_type * habitats.length)];

    return `${p} ${t}${h}`;
  }
}

class EvolutionLab {
  constructor(size = 18) {
    this.environment = {
      temperature: 22,
      water: 0.6,
      light: 0.75,
      pollinatorPressure: 0.55
    };
    this.generation = 0;
    this.population = Array.from({ length: size }, () => new Genome());
  }

  fitness(genome, environment = this.environment) {
    const genes = genome.genes;
    const heatFit = 1 - Math.abs(genes.heat_resistance - environment.temperature / 42);
    const waterFit = 1 - Math.abs(genes.water_requirement - environment.water);
    const lightFit = 1 - Math.abs(genes.sunlight_preference - environment.light);
    const pollinatorFit = 1 - Math.abs(genes.nectar_volume - environment.pollinatorPressure);
    const morphologyCost = (genes.flower_diameter * 0.08) + (genes.stem_height * 0.05);
    const resilience = (genes.cold_resistance + genes.heat_resistance) / 2;
    return Math.max(0, Math.min(1,
      heatFit * 0.22 +
      waterFit * 0.24 +
      lightFit * 0.2 +
      pollinatorFit * 0.18 +
      resilience * 0.12 -
      morphologyCost
    ));
  }

  step() {
    const ranked = this.population
      .map(genome => ({ genome, fitness: this.fitness(genome) }))
      .sort((a, b) => b.fitness - a.fitness);
    const survivors = ranked.slice(0, Math.max(2, Math.ceil(ranked.length * 0.35)));
    const next = survivors.map(item => new Genome(item.genome.genes));

    while (next.length < this.population.length) {
      const a = survivors[Math.floor(Math.random() * survivors.length)].genome;
      const b = survivors[Math.floor(Math.random() * survivors.length)].genome;
      next.push(Genome.crossover(a, b, 0.08));
    }

    this.population = next;
    this.generation++;
    return this.summary();
  }

  summary() {
    const scored = this.population.map(genome => ({ genome, fitness: this.fitness(genome) }));
    const best = scored.reduce((winner, item) => item.fitness > winner.fitness ? item : winner, scored[0]);
    const avgFitness = scored.reduce((sum, item) => sum + item.fitness, 0) / scored.length;
    const diversity = this.population.reduce((sum, genome, index) => {
      if (index === 0) return sum;
      return sum + Genome.geneticDistance(this.population[index - 1], genome);
    }, 0) / Math.max(1, this.population.length - 1);

    return {
      generation: this.generation,
      bestGenome: best.genome,
      bestFitness: best.fitness,
      avgFitness,
      diversity
    };
  }
}

const ProceduralSVG = {
  generate(genome, size = 200) {
    const genes = genome.genes;
    const petalCount = 3 + Math.floor(genes.petal_count * 15);
    const hue1 = Math.floor(genes.primary_hue * 360);
    const hue2 = Math.floor(genes.secondary_hue * 360);
    const intensity = 40 + (genes.pigment_intensity * 40);
    const color1 = `hsl(${hue1}, ${intensity}%, 60%)`;
    const color2 = `hsl(${hue2}, ${intensity}%, 80%)`;
    const colorDeep = `hsl(${hue1}, ${Math.min(95, intensity + 12)}%, 34%)`;
    const stemColor = `hsl(120, ${30 + genes.cold_resistance * 40}%, ${20 + genes.heat_resistance * 20}%)`;

    const centerSize = 10 + genes.flower_diameter * 20;
    const petalLen = 20 + genes.flower_diameter * 60;
    const petalWidth = 10 + genes.petal_curvature * 30;
    const gid = `evo${Math.round(Object.values(genes).reduce((sum, value, index) => sum + value * (index + 11) * 997, 0))}`;

    let svg = `<svg width="${size}" height="${size}" viewBox="0 0 200 200" role="img" aria-label="Detailed mutation specimen" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="${gid}petal" cx="42%" cy="30%" r="76%">
          <stop offset="0%" stop-color="#fff1d5"/>
          <stop offset="22%" stop-color="${color2}"/>
          <stop offset="60%" stop-color="${color1}"/>
          <stop offset="100%" stop-color="${colorDeep}"/>
        </radialGradient>
        <linearGradient id="${gid}stem" x1="0" x2="1">
          <stop offset="0%" stop-color="${stemColor}"/>
          <stop offset="100%" stop-color="#9ec879"/>
        </linearGradient>
        <radialGradient id="${gid}bg" cx="45%" cy="38%" r="72%">
          <stop offset="0%" stop-color="#3c5131"/>
          <stop offset="60%" stop-color="#18251a"/>
          <stop offset="100%" stop-color="#0f1711"/>
        </radialGradient>
        <filter id="${gid}blur"><feGaussianBlur stdDeviation="2.2"/></filter>
      </defs>
      <rect width="200" height="200" fill="url(#${gid}bg)"/>
      <circle cx="40" cy="42" r="23" fill="#d8e8ad" opacity=".12" filter="url(#${gid}blur)"/>
      <ellipse cx="104" cy="184" rx="60" ry="11" fill="#000" opacity=".22" filter="url(#${gid}blur)"/>`;

    // Stem
    const stemH = 150 + genes.stem_height * 40;
    svg += `<path d="M100 190 Q${95 + genes.symmetry * 10} ${140} 100 100" stroke="url(#${gid}stem)" stroke-width="${3.5 + genes.stem_height * 3}" fill="none" stroke-linecap="round"/>
      <path d="M96 158 C76 150, 70 128, 98 138" fill="#568e55" opacity=".88"/>
      <path d="M104 164 C128 154, 136 132, 101 144" fill="#6fab65" opacity=".86"/>
      <path d="M84 148 C79 140, 76 134, 72 128" stroke="rgba(220,245,200,.38)" stroke-width=".8" fill="none"/>
      <path d="M118 154 C126 145, 130 138, 134 130" stroke="rgba(220,245,200,.38)" stroke-width=".8" fill="none"/>`;

    // Petals
    for (let i = 0; i < petalCount; i++) {
      const angle = (i / petalCount) * 360;
      const rotation = `transform="rotate(${angle} 100 100)"`;
      const veinOpacity = 0.18 + genes.pigment_intensity * 0.28;

      if (genes.petal_shape < 0.3) { // Star
        svg += `<g ${rotation}><path d="M100 100 L${100 - petalWidth/2} ${100 - petalLen/2} L100 ${100 - petalLen} L${100 + petalWidth/2} ${100 - petalLen/2} Z" fill="url(#${gid}petal)" opacity="0.9"/><path d="M100 100 L100 ${100 - petalLen}" stroke="#fff" stroke-width=".6" opacity="${veinOpacity}"/></g>`;
      } else if (genes.petal_shape < 0.6) { // Round
        svg += `<g ${rotation}><ellipse cx="100" cy="${100 - petalLen/2}" rx="${petalWidth}" ry="${petalLen/2}" fill="url(#${gid}petal)" opacity="0.88"/><path d="M100 100 C96 ${85 - petalLen * .08}, 101 ${75 - petalLen * .28}, 100 ${100 - petalLen}" stroke="#fff" stroke-width=".6" opacity="${veinOpacity}" fill="none"/><path d="M100 100 C${100 - petalWidth * .55} ${88 - petalLen * .1}, ${100 - petalWidth * .4} ${82 - petalLen * .2}, ${100 - petalWidth * .2} ${100 - petalLen * .72}" stroke="#4a2638" stroke-width=".45" opacity=".18" fill="none"/></g>`;
      } else { // Heart
        svg += `<g ${rotation}><path d="M100 100 Q${100 - petalWidth} ${100 - petalLen/2} 100 ${100 - petalLen} Q${100 + petalWidth} ${100 - petalLen/2} 100 100" fill="url(#${gid}petal)" opacity="0.9"/><path d="M100 100 C98 ${84 - petalLen * .1}, 101 ${76 - petalLen * .3}, 100 ${100 - petalLen}" stroke="#fff" stroke-width=".6" opacity="${veinOpacity}" fill="none"/></g>`;
      }
    }

    // Center
    svg += `<circle cx="100" cy="100" r="${centerSize}" fill="${color2}"/>
      <circle cx="100" cy="100" r="${centerSize * .56}" fill="#5f3b22" opacity=".78"/>`;
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * Math.PI * 2;
      const r = centerSize * (0.28 + (i % 5) * 0.08);
      svg += `<circle cx="${100 + Math.cos(a) * r}" cy="${100 + Math.sin(a) * r}" r="${0.7 + (i % 3) * 0.25}" fill="#e8c86a" opacity=".9"/>`;
    }

    // UV Pattern
    if (genes.uv_pattern > 0.5) {
      svg += `<circle cx="100" cy="100" r="${centerSize / 2}" fill="white" opacity="0.3"/>`;
    }

    svg += `</svg>`;
    return svg;
  }
};

window.Genome = Genome;
window.Species = Species;
window.EvolutionLab = EvolutionLab;
window.ProceduralSVG = ProceduralSVG;
