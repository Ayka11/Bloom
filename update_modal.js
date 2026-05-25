const fs = require('fs');
let appJs = fs.readFileSync('bloom-app.js', 'utf8');
const newOpenModal = `
function openModal(i){
  const f=flowers[i];
  document.getElementById('mc').innerHTML=\`
    <div class="modal-hdr">
      <div class="modal-ill" style="background:\${bgFor(f)};width:220px;height:220px">\${svgFor(f,200)}</div>
      <div style="padding-top:.5rem">
        <div class="modal-title">\${f.name}</div>
        <div class="modal-latin">\${f.scientific_classification.family} | \${f.scientific_classification.genus} \${f.scientific_classification.species}</div>
        <div class="modal-tags">
          <span class="tag tag-herbal">\${f.lifecycle}</span>
          <span class="tag tag-garden">\${f.plant_type}</span>
          <span class="tag tag-tropical">\${f.climate_zone}</span>
          <span class="tag tag-aquatic">\${f.color}</span>
        </div>
        <p class="modal-desc">\${f.description}</p>
      </div>
    </div>
    <div class="modal-grid">
      <div class="ic">
        <div class="ic-label">Care at a glance</div>
        <div class="care-g">
          <div class="cb"><div class="cb-icon">💧</div><div class="cb-l">Water</div><div class="cb-v">\${f.care.water}</div></div>
          <div class="cb"><div class="cb-icon">☀️</div><div class="cb-l">Sun</div><div class="cb-v">\${f.care.sun}</div></div>
          <div class="cb"><div class="cb-icon">🌱</div><div class="cb-l">Soil</div><div class="cb-v">\${f.care.soil}</div></div>
          <div class="cb"><div class="cb-icon">📅</div><div class="cb-l">Season</div><div class="cb-v">\${f.care.season}</div></div>
        </div>
      </div>
      <div class="ic">
        <div class="ic-label">Key details</div>
        <div class="info-row"><span class="ik">Difficulty</span><span class="iv">\${f.care.diff}</span></div>
        <div class="info-row"><span class="ik">Fragrance</span><span class="iv">\${f.fragrance_level}</span></div>
        <div class="info-row"><span class="ik">Toxicity</span><span class="iv">\${f.toxicity}</span></div>
        <div class="info-row"><span class="ik">Use</span><span class="iv">\${Array.isArray(f.decorative_use) ? f.decorative_use.join(', ') : f.decorative_use}</span></div>
      </div>
      <div class="ic">
        <div class="ic-label">Uses & applications</div>
        <div class="uses-list">\${f.uses.map(u=>\`<span class="uc">\${u}</span>\`).join('')}</div>
      </div>
      <div class="ic">
        <div class="ic-label">Properties</div>
        <div class="uses-list">\${f.props.map(p=>\`<span class="prop" style="font-size:.72rem">\${p}</span>\`).join('')}</div>
      </div>
      <div class="ic ic-full">
        <div class="ic-label">Fascinating facts</div>
        <div class="facts">\${f.facts.map(fc=>\`<div class="fact"><span class="fi">✦</span><span>\${fc}</span></div>\`).join('')}</div>
      </div>
    </div>\`;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow='hidden';
}
`;
appJs = appJs.replace(/function openModal\(i\)\s*\{[\s\S]*?\}\n\nfunction closeModal\(\)/, newOpenModal + "\nfunction closeModal()");
fs.writeFileSync('bloom-app.js', appJs);
