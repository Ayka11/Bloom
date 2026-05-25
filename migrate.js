const fs = require('fs');
const dataContent = fs.readFileSync('bloom-data.js', 'utf8');
const extractConst = (name, content) => {
    const regex = new RegExp('const ' + name + '\\s*=\\s*([\\s\\S]*?);(\\n\\n|\\n$|$)');
    const match = content.match(regex);
    if (!match) return null;
    return match[1];
};
const SVGS_str = extractConst('SVGS', dataContent);
const flowers_str = extractConst('flowers', dataContent);
const cats_str = extractConst('cats', dataContent);
const seasonMeta_str = extractConst('seasonMeta', dataContent);
const glossary_str = extractConst('glossary', dataContent);
const flowers = eval(flowers_str);
const migratedFlowers = flowers.map(f => {
    const [genus, species] = f.latin.split(' ');
    let plant_type = 'Herbaceous flowering';
    if (f.id === 'rose') plant_type = 'Shrubs';
    if (f.id === 'lavender') plant_type = 'Shrubs';
    if (f.id === 'aloe') plant_type = 'Succulents';
    if (f.cat === 'aquatic') plant_type = 'Aquatic plants';
    if (f.id === 'cactusFlower') plant_type = 'Succulents';
    if (f.id === 'wisteria') plant_type = 'Climbers / vines';
    if (f.id === 'jasmine') plant_type = 'Climbers / vines';
    if (f.id === 'passionflower') plant_type = 'Climbers / vines';
    if (f.id === 'magnolia' || f.id === 'cherry_blossom') plant_type = 'Trees (flowering)';
    let climate_zone = 'Temperate';
    if (f.cat === 'tropical') climate_zone = 'Tropical';
    if (f.cat === 'alpine') climate_zone = 'Alpine / cold';
    if (f.id === 'cactusFlower' || f.id === 'aloe') climate_zone = 'Arid / desert';
    if (f.cat === 'aquatic') climate_zone = 'Wetlands / aquatic';
    let decorative_use = ['Garden landscape'];
    if (f.uses.includes('Cut flowers')) decorative_use.push('Cut flowers');
    if (f.cat === 'herbal') decorative_use.push('Indoor plants');
    if (f.cat === 'alpine') decorative_use.push('Rock gardens / alpine');
    let lifecycle = 'Perennials';
    if (f.id === 'sunflower' || f.id === 'marigold' || f.id === 'zinnia' || f.id === 'nasturtium') lifecycle = 'Annuals';
    if (f.id === 'foxglove') lifecycle = 'Biennials';
    return {
        id: f.id,
        name: f.name,
        scientific_classification: { family: 'Unknown', genus: genus || '', species: species || '' },
        lifecycle: lifecycle,
        plant_type: plant_type,
        climate_zone: climate_zone,
        decorative_use: decorative_use,
        color: (f.tags && f.tags.includes('blue')) ? 'Blue' : 'Mixed',
        bloom_season: f.care.season,
        fragrance_level: (f.props && f.props.includes('Fragrant')) ? 'High' : 'Medium',
        toxicity: (f.props && f.props.includes('Toxic')) ? 'Toxic' : 'Non-toxic',
        description: f.desc,
        care: f.care,
        uses: f.uses,
        props: f.props,
        facts: f.facts,
        cat: f.cat,
        tags: f.tags
    };
});
const newContent = `const SVGS = ${SVGS_str};\n\nconst flowers = ${JSON.stringify(migratedFlowers, null, 2)};\n\nconst cats = ${cats_str};\n\nconst seasonMeta = ${seasonMeta_str};\n\nconst glossary = ${glossary_str};\n`;
fs.writeFileSync('bloom-data.js', newContent);
