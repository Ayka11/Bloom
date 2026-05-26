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

const ProceduralSVG = {
  generate(genome, size = 200) {
    const genes = genome.genes;
    const petalCount = 3 + Math.floor(genes.petal_count * 15);
    const hue1 = Math.floor(genes.primary_hue * 360);
    const hue2 = Math.floor(genes.secondary_hue * 360);
    const intensity = 40 + (genes.pigment_intensity * 40);
    const color1 = `hsl(${hue1}, ${intensity}%, 60%)`;
    const color2 = `hsl(${hue2}, ${intensity}%, 80%)`;
    const stemColor = `hsl(120, ${30 + genes.cold_resistance * 40}%, ${20 + genes.heat_resistance * 20}%)`;

    const centerSize = 10 + genes.flower_diameter * 20;
    const petalLen = 20 + genes.flower_diameter * 60;
    const petalWidth = 10 + genes.petal_curvature * 30;

    let svg = `<svg width="${size}" height="${size}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">`;

    // Stem
    const stemH = 150 + genes.stem_height * 40;
    svg += `<path d="M100 190 Q${95 + genes.symmetry * 10} ${140} 100 100" stroke="${stemColor}" stroke-width="4" fill="none" stroke-linecap="round"/>`;

    // Petals
    for (let i = 0; i < petalCount; i++) {
      const angle = (i / petalCount) * 360;
      const rotation = `transform="rotate(${angle} 100 100)"`;

      if (genes.petal_shape < 0.3) { // Star
        svg += `<path d="M100 100 L${100 - petalWidth/2} ${100 - petalLen/2} L100 ${100 - petalLen} L${100 + petalWidth/2} ${100 - petalLen/2} Z" fill="${color1}" opacity="0.8" ${rotation}/>`;
      } else if (genes.petal_shape < 0.6) { // Round
        svg += `<ellipse cx="100" cy="${100 - petalLen/2}" rx="${petalWidth}" ry="${petalLen/2}" fill="${color1}" opacity="0.7" ${rotation}/>`;
      } else { // Heart
        svg += `<path d="M100 100 Q${100 - petalWidth} ${100 - petalLen/2} 100 ${100 - petalLen} Q${100 + petalWidth} ${100 - petalLen/2} 100 100" fill="${color1}" opacity="0.8" ${rotation}/>`;
      }
    }

    // Center
    svg += `<circle cx="100" cy="100" r="${centerSize}" fill="${color2}"/>`;

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
window.ProceduralSVG = ProceduralSVG;
