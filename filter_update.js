const fs = require('fs');
let indexHtml = fs.readFileSync('index.html', 'utf8');
const filterBarOld = '<div class="filter-bar" id="fb"></div>';
const filterBarNew = `
  <div class="filter-controls">
    <div class="filter-group">
      <label>Life Cycle</label>
      <div class="filter-bar" id="fb-lifecycle"></div>
    </div>
    <div class="filter-group">
      <label>Plant Type</label>
      <div class="filter-bar" id="fb-type"></div>
    </div>
    <div class="filter-group">
      <label>Decorative Use</label>
      <div class="filter-bar" id="fb-use"></div>
    </div>
    <div class="filter-group">
      <label>Climate</label>
      <div class="filter-bar" id="fb-climate"></div>
    </div>
    <div class="filter-group">
      <label>Color</label>
      <div class="filter-bar" id="fb-color"></div>
    </div>
  </div>
`;
indexHtml = indexHtml.replace(filterBarOld, filterBarNew);
let styleCss = fs.readFileSync('bloom-style.css', 'utf8');
styleCss += `
.filter-controls { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; }
.filter-group { display: flex; flex-direction: column; gap: 0.5rem; }
.filter-group label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); }
`;
fs.writeFileSync('bloom-style.css', styleCss);
fs.writeFileSync('index.html', indexHtml);
let appJs = fs.readFileSync('bloom-app.js', 'utf8');
appJs = appJs.replace("let active = 'all';", "let activeFilters = { lifecycle: 'all', plant_type: 'all', decorative_use: 'all', climate_zone: 'all', color: 'all' };");
const filterData = `
const filterOptions = {
  lifecycle: ['all', 'Perennials', 'Annuals', 'Biennials', 'Mixed / flexible'],
  plant_type: ['all', 'Herbaceous flowering', 'Shrubs', 'Trees (flowering)', 'Bulb plants', 'Climbers / vines', 'Succulents', 'Aquatic plants'],
  decorative_use: ['all', 'Garden landscape', 'Indoor plants', 'Cut flowers', 'Parks & public spaces', 'Rock gardens / alpine', 'Vertical gardens', 'Aquatic decoration'],
  climate_zone: ['all', 'Temperate', 'Tropical', 'Subtropical', 'Arid / desert', 'Alpine / cold', 'Wetlands / aquatic'],
  color: ['all', 'Red', 'Pink', 'White', 'Yellow', 'Blue', 'Purple', 'Orange', 'Mixed']
};
function renderFilters() {
  for (const [key, options] of Object.entries(filterOptions)) {
    let containerId = 'fb-' + key;
    if (key === 'plant_type') containerId = 'fb-type';
    if (key === 'decorative_use') containerId = 'fb-use';
    if (key === 'climate_zone') containerId = 'fb-climate';
    const container = document.getElementById(containerId);
    if (!container) continue;
    container.innerHTML = options.map(opt => \`<button class="fb \${activeFilters[key] === opt ? 'on' : ''}" onclick="setFilter('\${key}', '\${opt}')">\${opt}</button>\`).join('');
  }
}
function setFilter(key, value) {
  activeFilters[key] = value;
  renderFilters();
  renderGrid();
}
`;
appJs = appJs.replace(/function renderFilters\(\)\{[\s\S]*?\}\n\nfunction setFilter\(f\)\{active=f;renderFilters\(\);renderGrid\(\)\}/, filterData);
appJs = appJs.replace("const mf=active==='all'||f.tags.includes(active)||f.cat===active;", `
    const mf = Object.entries(activeFilters).every(([key, value]) => {
      if (value === 'all') return true;
      if (key === 'decorative_use') {
        return Array.isArray(f[key]) && f[key].includes(value);
      }
      return f[key] === value;
    });
`);
fs.writeFileSync('bloom-app.js', appJs);
