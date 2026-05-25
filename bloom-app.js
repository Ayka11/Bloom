/* ─────────────────────────────────────────────
   REALISTIC BOTANICAL SVG ILLUSTRATIONS
   Each flower is hand-crafted with bezier curves,
   layered gradients, subtle shading, stems, leaves
───────────────────────────────────────────── */



/* ── FLOWER DATA ── */




let activeFilters = { lifecycle: 'all', plant_type: 'all', decorative_use: 'all', climate_zone: 'all', color: 'all' };

function svgFor(f, sz=180){
  const fn = SVGS[f.id];
  if(fn) return fn(sz);
  // fallback simple
  const c=f.color||'#a0c870';
  return `<svg width="${sz}" height="${sz}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="60" fill="${c}" opacity=".3"/><text x="100" y="108" text-anchor="middle" font-size="48">🌸</text></svg>`;
}

function bgFor(f){
  const bgs={rose:'#200810',lavender:'#160e2a',sunflower:'#1e1404',lotus:'#0e1a22',chamomile:'#141a08',orchid:'#160c28',tulip:'#1a0810',hibiscus:'#1e0606',daisy:'#141408',cherry_blossom:'#1c0e18',aloe:'#0a1a0e',peony:'#1e0a14',passionflower:'#100a22',echinacea:'#1a0c0c',marigold:'#1c1000',jasmine:'#141408',calendula:'#1c1000',bluebell:'#0c0e22',waterlily:'#0a1020',snowdrop:'#101414',hellebore:'#0c1018',iris:'#100e22',poppyField:'#1a0606',wisteria:'#100a20',cactusFlower:'#0c1008',magnolia:'#1a1008',ranunculus:'#241006',nasturtium:'#201004',bleedingheart:'#170a14',edelweiss:'#10161b',plumeria:'#1c1408',waterhyacinth:'#0b1820'};
  return bgs[f.id]||'#121a14';
}

function dc(d){return d==='Easy'?'d-e':d==='Hard'?'d-h':'d-m'}

function seasonsForFlower(f){
  const season = (f.care.season || '').toLowerCase();
  if (season.includes('year-round')) return seasonMeta.map(item => item.name);
  return seasonMeta
    .filter(item => season.includes(item.name.toLowerCase()))
    .map(item => item.name);
}

function updateSummaryCopy(){
  const statEls = document.querySelectorAll('.hero-stats .stat-n');
  const factsTotal = flowers.reduce((sum, flower) => sum + flower.facts.length, 0);
  if (statEls[0]) statEls[0].textContent = `${flowers.length}`;
  if (statEls[1]) statEls[1].textContent = `${new Set(flowers.map(flower => flower.cat)).size}`;
  if (statEls[2]) statEls[2].textContent = `${factsTotal}+`;

  const heroSub = document.querySelector('.hero-sub');
  if (heroSub) {
    heroSub.textContent = `Explore ${flowers.length} illustrated botanical species across ${new Set(flowers.map(flower => flower.cat)).size} plant worlds, from medicinal herbs and alpine rarities to lush tropical bloomers.`;
  }

  const collectionSub = document.querySelector('#collection .sec-sub');
  if (collectionSub) {
    collectionSub.textContent = `Browse ${flowers.length} hand-illustrated flowers, then open any card for care notes, uses, and botanical lore.`;
  }
}

function renderSeasonal(){
  const grid = document.querySelector('#seasonal .season-grid');
  if (!grid) return;
  grid.innerHTML = seasonMeta.map(item => {
    const names = flowers.filter(flower => seasonsForFlower(flower).includes(item.name)).map(flower => flower.name);
    return `<div class="sc ${item.key}">
      <div class="sc-top">
        <div class="sc-icon">${item.icon}</div>
        <div class="sc-count">${names.length} blooms</div>
      </div>
      <div class="sc-name">${item.name}</div>
      <div class="sc-list">${names.slice(0, 10).join(' · ')}${names.length > 10 ? ' · …' : ''}</div>
    </div>`;
  }).join('');
}

function renderGrid(){
  const q=(document.getElementById('si').value||'').toLowerCase();
  const g=document.getElementById('fg');
  g.innerHTML='';
  let matches = 0;
  flowers.forEach((f,i)=>{

    const mf = Object.entries(activeFilters).every(([key, value]) => {
      if (value === 'all') return true;
      if (key === 'decorative_use') {
        return Array.isArray(f[key]) && f[key].includes(value);
      }
      return f[key] === value;
    });

    const mq=!q||f.name.toLowerCase().includes(q)||f.latin.toLowerCase().includes(q)||f.desc.toLowerCase().includes(q);
    if(!mf||!mq)return;
    const d=document.createElement('div');
    d.className='card reveal';
    d.innerHTML=cardHTML(f,i);
    g.appendChild(d);
    matches += 1;
  });
  if(!matches){
    g.innerHTML = `<div class="empty-state reveal in"><h3>No blooms matched</h3><p>Try a broader search or switch the category filter to uncover more flowers in the library.</p></div>`;
    return;
  }
  observe();
}


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
    container.innerHTML = options.map(opt => `<button class="fb ${activeFilters[key] === opt ? 'on' : ''}" onclick="setFilter('${key}', '${opt}')">${opt}</button>`).join('');
  }
}
function setFilter(key, value) {
  activeFilters[key] = value;
  renderFilters();
  renderGrid();
}



function openModal(i){
  const f=flowers[i];
  document.getElementById('mc').innerHTML=`
    <div class="modal-hdr">
      <div class="modal-ill" style="background:${bgFor(f)};width:220px;height:220px">${svgFor(f,200)}</div>
      <div style="padding-top:.5rem">
        <div class="modal-title">${f.name}</div>
        <div class="modal-latin">${f.scientific_classification.family} | ${f.scientific_classification.genus} ${f.scientific_classification.species}</div>
        <div class="modal-tags">
          <span class="tag tag-herbal">${f.lifecycle}</span>
          <span class="tag tag-garden">${f.plant_type}</span>
          <span class="tag tag-tropical">${f.climate_zone}</span>
          <span class="tag tag-aquatic">${f.color}</span>
        </div>
        <p class="modal-desc">${f.description}</p>
      </div>
    </div>
    <div class="modal-grid">
      <div class="ic">
        <div class="ic-label">Care at a glance</div>
        <div class="care-g">
          <div class="cb"><div class="cb-icon">💧</div><div class="cb-l">Water</div><div class="cb-v">${f.care.water}</div></div>
          <div class="cb"><div class="cb-icon">☀️</div><div class="cb-l">Sun</div><div class="cb-v">${f.care.sun}</div></div>
          <div class="cb"><div class="cb-icon">🌱</div><div class="cb-l">Soil</div><div class="cb-v">${f.care.soil}</div></div>
          <div class="cb"><div class="cb-icon">📅</div><div class="cb-l">Season</div><div class="cb-v">${f.care.season}</div></div>
        </div>
      </div>
      <div class="ic">
        <div class="ic-label">Key details</div>
        <div class="info-row"><span class="ik">Difficulty</span><span class="iv">${f.care.diff}</span></div>
        <div class="info-row"><span class="ik">Fragrance</span><span class="iv">${f.fragrance_level}</span></div>
        <div class="info-row"><span class="ik">Toxicity</span><span class="iv">${f.toxicity}</span></div>
        <div class="info-row"><span class="ik">Use</span><span class="iv">${Array.isArray(f.decorative_use) ? f.decorative_use.join(', ') : f.decorative_use}</span></div>
      </div>
      <div class="ic">
        <div class="ic-label">Uses & applications</div>
        <div class="uses-list">${f.uses.map(u=>`<span class="uc">${u}</span>`).join('')}</div>
      </div>
      <div class="ic">
        <div class="ic-label">Properties</div>
        <div class="uses-list">${f.props.map(p=>`<span class="prop" style="font-size:.72rem">${p}</span>`).join('')}</div>
      </div>
      <div class="ic ic-full">
        <div class="ic-label">Fascinating facts</div>
        <div class="facts">${f.facts.map(fc=>`<div class="fact"><span class="fi">✦</span><span>${fc}</span></div>`).join('')}</div>
      </div>
    </div>`;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeModal(){document.getElementById('modal').classList.remove('open');document.body.style.overflow=''}
function bgClose(e){if(e.target===document.getElementById('modal'))closeModal()}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()})

// Hero floaters
(function(){
  const c=document.getElementById('hf');
  const pos=[{t:'12%',l:'6%',s:100},{t:'18%',r:'8%',s:120},{t:'55%',l:'2%',s:80},{t:'60%',r:'4%',s:95},{t:'78%',l:'48%',s:70},{t:'25%',l:'40%',s:90}];
  c.innerHTML=pos.map((p,i)=>{
    const f=flowers[i%flowers.length];
    const st=`position:absolute;top:${p.t||''};bottom:${p.b||''};left:${p.l||''};right:${p.r||''}`;
    return `<div class="floater" style="${st}">${svgFor(f,p.s)}</div>`;
  }).join('');
})();

function observe(){
  const els=document.querySelectorAll('.reveal:not(.in)');
  const ob=new IntersectionObserver(entries=>{
    entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*55);ob.unobserve(e.target)}});
  },{threshold:.1});
  els.forEach(el=>ob.observe(el));
}

document.getElementById('si').addEventListener('input',()=>renderGrid());

// ── FAVOURITES ──
let favs = JSON.parse(localStorage.getItem('bloom_favs')||'[]');
function saveFavs(){try{localStorage.setItem('bloom_favs',JSON.stringify(favs))}catch(e){}}
function toggleFav(id,e){
  e.stopPropagation();
  if(favs.includes(id)) favs=favs.filter(x=>x!==id);
  else favs.push(id);
  saveFavs();
  document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach(b=>{
    b.classList.toggle('active',favs.includes(id));
    b.textContent=favs.includes(id)?'♥':'♡';
  });
  renderFavs();
}
function renderFavs(){
  const g=document.getElementById('fav-grid');
  const e=document.getElementById('fav-empty');
  const favFlowers=flowers.filter(f=>favs.includes(f.id));
  if(favFlowers.length===0){g.innerHTML='';e.style.display='block';return;}
  e.style.display='none';
  g.innerHTML='';
  favFlowers.forEach((f,i)=>{
    const idx=flowers.indexOf(f);
    const d=document.createElement('div');
    d.className='card reveal';
    d.innerHTML=cardHTML(f,idx);
    g.appendChild(d);
  });
  observe();
}
function cardHTML(f,i){
  return `
    <div class="card-ill" style="background:${bgFor(f)}">
      ${svgFor(f,180)}
      <div class="card-tags">${f.tags.map(t=>`<span class="tag tag-${t}">${t}</span>`).join('')}</div>
      <button class="fav-btn ${favs.includes(f.id)?'active':''}" data-id="${f.id}" onclick="toggleFav('${f.id}',event)" title="Save to favourites">${favs.includes(f.id)?'♥':'♡'}</button>
    </div>
    <div class="card-body">
      <div class="card-name">${f.name}</div>
      <div class="card-latin">${f.latin}</div>
      <div class="card-desc">${f.desc}</div>
      <div class="card-props">${f.props.slice(0,3).map(p=>`<span class="prop">${p}</span>`).join('')}</div>
    </div>
    <div class="card-foot">
      <div class="care-row">
        <div class="ci"><div class="dot ${dc(f.care.diff)}"></div>${f.care.diff}</div>
        <div class="ci">💧 ${f.care.water}</div>
      </div>
      <button class="card-btn" onclick="openModal(${i})">Explore →</button>
    </div>`;
}

// ── FLOWER OF THE DAY ──
const fotdIdx = new Date().getDate() % flowers.length;
const fotdId = flowers[fotdIdx].id;
(function renderFotd(){
  const f=flowers[fotdIdx];
  const bg=bgFor(f);
  document.getElementById('fotd-ill').style.background=bg;
  document.getElementById('fotd-ill').innerHTML=svgFor(f,220);
  document.getElementById('fotd-name').textContent=f.name;
  document.getElementById('fotd-latin').textContent=f.latin;
  document.getElementById('fotd-desc').textContent=f.desc;
  document.getElementById('fotd-fact').textContent='✦ '+f.facts[0];
})();
function openModalById(id){
  const i=flowers.findIndex(f=>f.id===id);
  if(i>=0) openModal(i);
}

// ── GLOSSARY ──

(function renderGlossary(){
  const g=document.getElementById('glossary-grid');
  g.innerHTML=glossary.map(item=>`
    <div class="gl-card reveal">
      <div class="gl-term">${item.term}</div>
      <div class="gl-def">${item.def}</div>
    </div>`).join('');
})();

updateSummaryCopy();
renderSeasonal();
renderFilters();
renderGrid();
renderFavs();