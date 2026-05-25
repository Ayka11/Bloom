const fs = require('fs');
let appJs = fs.readFileSync('bloom-app.js', 'utf8');
const betterSvgFor = `
function svgFor(f, sz=180){
  const fn = SVGS[f.id];
  if(fn) return fn(sz);
  const colors = { 'Red': '#ff4d4d', 'Pink': '#ff80bf', 'White': '#f2f2f2', 'Yellow': '#ffff66', 'Blue': '#4da6ff', 'Purple': '#b366ff', 'Orange': '#ffa64d', 'Mixed': '#ff9999' };
  const c = colors[f.color] || '#a0c870';
  if (f.plant_type === 'Trees (flowering)') {
    return \`<svg width="\${sz}" height="\${sz}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M100 180 L100 120" stroke="#5d4037" stroke-width="8"/><circle cx="100" cy="100" r="60" fill="#4caf50" opacity="0.8"/><circle cx="80" cy="80" r="10" fill="\${c}"/><circle cx="120" cy="90" r="8" fill="\${c}"/><circle cx="100" cy="110" r="12" fill="\${c}"/></svg>\`;
  }
  if (f.plant_type === 'Succulents') {
    return \`<svg width="\${sz}" height="\${sz}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M100 180 Q70 150 70 120 Q70 90 100 60 Q130 90 130 120 Q130 150 100 180" fill="#8bc34a"/><circle cx="100" cy="80" r="15" fill="\${c}" opacity="0.9"/></svg>\`;
  }
  return \`<svg width="\${sz}" height="\${sz}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M100 180 L100 140" stroke="#4caf50" stroke-width="4"/><circle cx="100" cy="100" r="30" fill="\${c}"/>\${[0, 60, 120, 180, 240, 300].map(a => \`<circle cx="\${100 + 40 * Math.cos(a * Math.PI / 180)}" cy="\${100 + 40 * Math.sin(a * Math.PI / 180)}" r="25" fill="\${c}" opacity="0.6"/>\`).join('')}<circle cx="100" cy="100" r="10" fill="#ffeb3b"/></svg>\`;
}
`;
appJs = appJs.replace(/function svgFor\(f, sz=180\)\s*\{[\s\S]*?\}\n/, betterSvgFor + "\n");
fs.writeFileSync('bloom-app.js', appJs);
