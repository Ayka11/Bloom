const SVGS = {
rose(s=200){
  const h=s, w=s, cx=w/2, cy=h/2;
  return `<svg width="${w}" height="${h}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="rg1" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#e8607a"/><stop offset="100%" stop-color="#8c1a2a"/></radialGradient>
    <radialGradient id="rg2" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#f07888"/><stop offset="100%" stop-color="#b03050"/></radialGradient>
    <linearGradient id="rgstem" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#2a6830"/><stop offset="100%" stop-color="#4a9040"/></linearGradient>
  </defs>
  <!-- stem -->
  <path d="M100 155 Q95 170 88 185" stroke="url(#rgstem)" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <!-- leaves -->
  <path d="M96 165 Q80 158 74 145 Q86 148 96 165Z" fill="#3a8038" opacity=".9"/>
  <path d="M98 172 Q114 165 118 152 Q106 157 98 172Z" fill="#2e6a2c" opacity=".85"/>
  <!-- outer petals -->
  <path d="M100 140 Q68 135 60 110 Q58 90 78 78 Q100 68 100 68 Q100 68 122 78 Q142 90 140 110 Q132 135 100 140Z" fill="#b83050" opacity=".8"/>
  <!-- mid petals -->
  <path d="M100 130 Q76 122 72 102 Q70 85 86 76 Q100 70 100 70 Q100 70 114 76 Q130 85 128 102 Q124 122 100 130Z" fill="url(#rg2)" opacity=".9"/>
  <!-- inner spiral petals -->
  <path d="M100 118 Q84 112 84 98 Q84 84 96 79 Q108 74 116 82 Q124 90 118 104 Q112 116 100 118Z" fill="url(#rg1)"/>
  <path d="M100 110 Q90 104 91 95 Q92 87 100 84 Q108 81 113 88 Q118 96 112 105 Q106 112 100 110Z" fill="#d05070"/>
  <path d="M100 102 Q95 98 96 93 Q97 88 102 87 Q108 86 109 92 Q110 98 105 101 Q102 103 100 102Z" fill="#f08090"/>
  <!-- petal highlights -->
  <path d="M86 95 Q82 102 84 112" stroke="#f0a0b0" stroke-width="1" fill="none" opacity=".5"/>
  <path d="M114 95 Q118 102 116 112" stroke="#902040" stroke-width="1" fill="none" opacity=".4"/>
</svg>`;
},

lavender(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8860c8"/><stop offset="100%" stop-color="#5838a0"/></linearGradient>
    <linearGradient id="lgstem" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#4a8040"/><stop offset="100%" stop-color="#6aaa58"/></linearGradient>
  </defs>
  <!-- main stem -->
  <path d="M100 190 L100 80" stroke="url(#lgstem)" stroke-width="2.8" stroke-linecap="round"/>
  <!-- small stems -->
  <path d="M100 120 L88 105" stroke="#5a9048" stroke-width="1.5" fill="none"/>
  <path d="M100 120 L112 105" stroke="#5a9048" stroke-width="1.5" fill="none"/>
  <path d="M100 108 L90 95" stroke="#5a9048" stroke-width="1.5" fill="none"/>
  <path d="M100 108 L110 95" stroke="#5a9048" stroke-width="1.5" fill="none"/>
  <!-- leaves -->
  <path d="M100 160 Q82 155 78 148 Q86 150 100 160Z" fill="#5a9048"/>
  <path d="M100 160 Q118 155 122 148 Q114 150 100 160Z" fill="#4a7838"/>
  <path d="M100 148 Q82 143 78 136 Q86 138 100 148Z" fill="#5a9048"/>
  <path d="M100 148 Q118 143 122 136 Q114 138 100 148Z" fill="#4a7838"/>
  <!-- flower clusters -->
  ${[...Array(5)].map((_,i)=>{
    const y = 80 + i*8; const x = 100;
    return `<ellipse cx="${x-8}" cy="${y}" rx="5" ry="7" fill="url(#lg1)" opacity="${0.95-i*.05}" transform="rotate(-8 ${x-8} ${y})"/>
    <ellipse cx="${x}" cy="${y-4}" rx="5" ry="7" fill="#7050b8" opacity="${0.9-i*.05}"/>
    <ellipse cx="${x+8}" cy="${y}" rx="5" ry="7" fill="url(#lg1)" opacity="${0.95-i*.05}" transform="rotate(8 ${x+8} ${y})"/>`;
  }).join('')}
  <!-- tiny highlights -->
  <ellipse cx="92" cy="79" rx="2" ry="3" fill="#b090e8" opacity=".6"/>
  <ellipse cx="108" cy="79" rx="2" ry="3" fill="#b090e8" opacity=".6"/>
</svg>`;
},

sunflower(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sfcenter" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#4a2a08"/><stop offset="60%" stop-color="#2a1404"/><stop offset="100%" stop-color="#1a0c02"/></radialGradient>
    <radialGradient id="sfpetal" cx="50%" cy="0%" r="100%"><stop offset="0%" stop-color="#f5c820"/><stop offset="60%" stop-color="#e8a010"/><stop offset="100%" stop-color="#c07008"/></radialGradient>
    <linearGradient id="sfstem" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#3a7030"/><stop offset="100%" stop-color="#5a9848"/></linearGradient>
  </defs>
  <!-- stem -->
  <path d="M102 155 Q99 170 95 188" stroke="url(#sfstem)" stroke-width="4" fill="none" stroke-linecap="round"/>
  <!-- big leaf -->
  <path d="M99 168 Q78 160 68 148 Q72 146 82 150 Q88 158 99 168Z" fill="#4a8838"/>
  <path d="M99 168 Q80 162 74 153" stroke="#3a7028" stroke-width=".8" fill="none"/>
  <!-- outer petals -->
  ${[...Array(16)].map((_,i)=>{
    const a = (i/16)*360; const r = 56;
    return `<ellipse cx="100" cy="${100-r}" rx="8" ry="22" fill="url(#sfpetal)" opacity="${.85+.1*(i%2)}" transform="rotate(${a} 100 100)"/>`;
  }).join('')}
  <!-- inner petals -->
  ${[...Array(16)].map((_,i)=>{
    const a = (i/16)*360+11.25; const r = 46;
    return `<ellipse cx="100" cy="${100-r}" rx="6" ry="16" fill="#e09010" opacity=".7" transform="rotate(${a} 100 100)"/>`;
  }).join('')}
  <!-- seed disc -->
  <circle cx="100" cy="100" r="30" fill="url(#sfcenter)"/>
  <!-- seed pattern -->
  ${[...Array(24)].map((_,i)=>{
    const a=(i/24)*360; const r=18;
    const x=100+r*Math.sin(a*Math.PI/180), y=100-r*Math.cos(a*Math.PI/180);
    return `<ellipse cx="${x}" cy="${y}" rx="2.5" ry="3.2" fill="#5a3010" opacity=".8" transform="rotate(${a} ${x} ${y})"/>`;
  }).join('')}
  ${[...Array(12)].map((_,i)=>{
    const a=(i/12)*360; const r=9;
    const x=100+r*Math.sin(a*Math.PI/180), y=100-r*Math.cos(a*Math.PI/180);
    return `<ellipse cx="${x}" cy="${y}" rx="2" ry="2.8" fill="#3a2008" opacity=".9" transform="rotate(${a} ${x} ${y})"/>`;
  }).join('')}
  <circle cx="100" cy="100" r="4" fill="#2a1404"/>
</svg>`;
},

lotus(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="lotg" cx="50%" cy="80%" r="70%"><stop offset="0%" stop-color="#f090b0"/><stop offset="70%" stop-color="#d05888"/><stop offset="100%" stop-color="#a03060"/></radialGradient>
    <radialGradient id="lotinner" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff5e0"/><stop offset="100%" stop-color="#f5c060"/></radialGradient>
  </defs>
  <!-- water surface -->
  <ellipse cx="100" cy="168" rx="68" ry="10" fill="#1a3a50" opacity=".6"/>
  <!-- lily pad -->
  <path d="M100 168 Q65 155 55 168 Q65 175 100 172 Q135 175 145 168 Q135 155 100 168Z" fill="#2a6828" opacity=".85"/>
  <path d="M100 168 L100 150" stroke="#3a7838" stroke-width="1.5" fill="none" opacity=".6"/>
  <!-- back outer petals -->
  <path d="M100 155 Q72 140 70 112 Q80 90 100 85 Q120 90 130 112 Q128 140 100 155Z" fill="#c04878" opacity=".5" transform="rotate(-25 100 120)"/>
  <path d="M100 155 Q72 140 70 112 Q80 90 100 85 Q120 90 130 112 Q128 140 100 155Z" fill="#c04878" opacity=".5" transform="rotate(25 100 120)"/>
  <!-- middle petals -->
  ${[-40,-20,0,20,40].map(a=>`<path d="M100 150 Q${100-28} 128 ${100-20} 100 Q${100-8} 82 100 78 Q${100+8} 82 ${100+20} 100 Q${100+28} 128 100 150Z" fill="url(#lotg)" opacity=".85" transform="rotate(${a} 100 130)"/>`).join('')}
  <!-- inner petals -->
  ${[-20,0,20].map(a=>`<path d="M100 138 Q88 118 90 102 Q94 88 100 85 Q106 88 110 102 Q112 118 100 138Z" fill="#f090b0" opacity=".95" transform="rotate(${a} 100 115)"/>`).join('')}
  <!-- stamens/centre -->
  <circle cx="100" cy="110" r="14" fill="url(#lotinner)"/>
  ${[...Array(10)].map((_,i)=>{const a=(i/10)*360;const r=9;const x=100+r*Math.sin(a*Math.PI/180),y=110-r*Math.cos(a*Math.PI/180);return `<line x1="100" y1="110" x2="${x}" y2="${y}" stroke="#c8a030" stroke-width="1.2"/><circle cx="${x}" cy="${y}" r="2" fill="#e8c040"/>`;}).join('')}
  <circle cx="100" cy="110" r="5" fill="#f5d860"/>
  <!-- vein details on petals -->
  <path d="M100 148 L100 90" stroke="#e878a8" stroke-width=".6" fill="none" opacity=".4"/>
</svg>`;
},

chamomile(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="chc" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f5d840"/><stop offset="50%" stop-color="#d8a820"/><stop offset="100%" stop-color="#a07010"/></radialGradient>
    <linearGradient id="chstem" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#4a8840"/><stop offset="100%" stop-color="#6aaa58"/></linearGradient>
  </defs>
  <path d="M102 155 Q98 168 94 185" stroke="url(#chstem)" stroke-width="2.8" fill="none" stroke-linecap="round"/>
  <path d="M102 155 Q110 148 118 138 Q112 136 106 140 Q104 148 102 155Z" fill="#4a8840"/>
  <path d="M100 165 Q92 158 84 148 Q90 146 96 152 Q98 158 100 165Z" fill="#3a7030"/>
  <!-- feathery foliage -->
  <path d="M100 175 Q86 170 80 162 Q85 160 90 164 Q95 169 100 175Z" fill="#4a8840" opacity=".7"/>
  <!-- ray petals - white/cream -->
  ${[...Array(18)].map((_,i)=>{
    const a=(i/18)*360;
    return `<ellipse cx="100" cy="${100-40}" rx="5.5" ry="18" fill="#f5f8ee" stroke="#e0e8d8" stroke-width=".5" opacity="${.9+.08*(i%2)}" transform="rotate(${a} 100 100)"/>`;
  }).join('')}
  <!-- disc florets - dome shaped -->
  <circle cx="100" cy="100" r="22" fill="url(#chc)"/>
  <circle cx="100" cy="100" r="22" fill="none" stroke="#c89020" stroke-width=".8" opacity=".5"/>
  <!-- tiny floret texture -->
  ${[...Array(30)].map((_,i)=>{
    const a=(i/30)*360; const r=12+Math.random()*8;
    const x=100+r*Math.sin(a*Math.PI/180)*0.6, y=100-r*Math.cos(a*Math.PI/180)*0.6;
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.8" fill="#e09018" opacity=".7"/>`;
  }).join('')}
  <circle cx="100" cy="100" r="8" fill="#f0c030"/>
</svg>`;
},

orchid(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="og1" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#f0d8f8"/><stop offset="100%" stop-color="#c8a0e0"/></radialGradient>
    <radialGradient id="og2" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#e8c8f5"/><stop offset="100%" stop-color="#b080d0"/></radialGradient>
    <linearGradient id="ostem" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#4a7840"/><stop offset="100%" stop-color="#6a9858"/></linearGradient>
  </defs>
  <!-- aerial root -->
  <path d="M80 185 Q75 175 78 165 Q82 155 85 150" stroke="#8ab878" stroke-width="2" fill="none" opacity=".6" stroke-linecap="round"/>
  <!-- stem/spike -->
  <path d="M100 185 Q103 162 108 140 Q114 118 118 100" stroke="url(#ostem)" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- leaves - thick succulent -->
  <path d="M98 182 Q70 175 62 162 Q68 158 80 165 Q88 172 98 182Z" fill="#3a6830" opacity=".9"/>
  <path d="M100 182 Q128 175 136 162 Q130 158 118 165 Q110 172 100 182Z" fill="#2e5828" opacity=".85"/>
  <!-- 3 flowers on spike -->
  <!-- flower 1 - bottom -->
  <path d="M118 100 Q105 88 92 90 Q86 100 92 110 Q105 118 118 108Z" fill="url(#og1)" opacity=".85"/>
  <path d="M118 100 Q125 88 130 78 Q122 75 115 82 Q114 90 118 100Z" fill="#d0a8e8" opacity=".8"/>
  <!-- labellum (lip petal) -->
  <path d="M100 100 Q90 108 88 118 Q96 122 106 118 Q112 108 108 100Z" fill="#e0c0f0"/>
  <path d="M100 103 Q96 110 96 116 Q100 118 104 116 Q106 110 104 103Z" fill="#c080d0" opacity=".7"/>
  <!-- column -->
  <ellipse cx="105" cy="100" rx="6" ry="8" fill="#f8f0ff"/>
  <ellipse cx="105" cy="97" rx="4" ry="5" fill="#e0c0f0"/>
  <circle cx="105" cy="94" r="3" fill="#f0a0d0"/>
  <!-- flower 2 - mid -->
  <path d="M112 128 Q99 116 86 118 Q80 128 86 138 Q99 146 112 136Z" fill="url(#og2)" opacity=".85"/>
  <path d="M112 128 Q120 118 124 108 Q116 105 110 112 Q109 120 112 128Z" fill="#c898e0" opacity=".8"/>
  <path d="M94 128 Q84 136 82 146 Q90 150 100 146 Q106 136 102 128Z" fill="#ddb8f0"/>
  <path d="M94 131 Q90 138 90 144 Q94 146 98 144 Q100 138 98 131Z" fill="#b870c8" opacity=".7"/>
  <ellipse cx="99" cy="128" rx="6" ry="8" fill="#f8f0ff"/>
  <circle cx="99" cy="122" r="3" fill="#f0a0d0"/>
  <!-- flower 3 bud -->
  <path d="M108 158 Q102 148 96 150 Q93 157 98 165 Q104 168 110 162Z" fill="#d8b0e8" opacity=".75"/>
  <!-- spots/markings -->
  <circle cx="103" cy="103" r="1.5" fill="#9040a0" opacity=".5"/>
  <circle cx="106" cy="107" r="1" fill="#9040a0" opacity=".4"/>
  <circle cx="97" cy="131" r="1.5" fill="#9040a0" opacity=".5"/>
</svg>`;
},

tulip(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="tg1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d03850"/><stop offset="50%" stop-color="#e85070"/><stop offset="100%" stop-color="#c02840"/></linearGradient>
    <linearGradient id="tg2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#b02040"/><stop offset="100%" stop-color="#d84060"/></linearGradient>
    <linearGradient id="tgstem" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#3a7830"/><stop offset="100%" stop-color="#58a048"/></linearGradient>
  </defs>
  <!-- stem -->
  <path d="M100 155 Q99 168 98 185" stroke="url(#tgstem)" stroke-width="4" fill="none" stroke-linecap="round"/>
  <!-- leaf 1 -->
  <path d="M100 158 Q78 145 68 128 Q72 124 82 130 Q90 140 100 158Z" fill="#4a9038"/>
  <path d="M100 158 Q78 148 72 138" stroke="#3a7828" stroke-width=".9" fill="none"/>
  <!-- leaf 2 -->
  <path d="M100 165 Q120 150 128 135 Q124 130 115 136 Q108 145 100 165Z" fill="#3a8030" opacity=".9"/>
  <!-- outer petals left/right -->
  <path d="M78 120 Q70 100 75 82 Q82 68 90 65 Q94 80 90 100 Q86 118 78 120Z" fill="url(#tg2)"/>
  <path d="M122 120 Q130 100 125 82 Q118 68 110 65 Q106 80 110 100 Q114 118 122 120Z" fill="url(#tg2)"/>
  <!-- centre petals -->
  <path d="M90 125 Q82 105 84 85 Q88 68 100 63 Q112 68 116 85 Q118 105 110 125 Q104 138 100 140 Q96 138 90 125Z" fill="url(#tg1)"/>
  <!-- inner petal -->
  <path d="M93 120 Q88 102 90 85 Q94 72 100 70 Q106 72 110 85 Q112 102 107 120 Q104 130 100 132 Q96 130 93 120Z" fill="#e86080"/>
  <!-- highlights -->
  <path d="M96 110 Q94 95 96 80" stroke="#f8a0b0" stroke-width="1.5" fill="none" opacity=".5" stroke-linecap="round"/>
  <path d="M104 110 Q106 95 104 80" stroke="#f8a0b0" stroke-width="1" fill="none" opacity=".3" stroke-linecap="round"/>
  <!-- pistil/stamen glimpse at top -->
  <path d="M100 72 Q96 68 100 65 Q104 68 100 72Z" fill="#f5d020" opacity=".8"/>
</svg>`;
},

hibiscus(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="hg1" cx="30%" cy="70%" r="80%"><stop offset="0%" stop-color="#ff6040"/><stop offset="50%" stop-color="#e82030"/><stop offset="100%" stop-color="#a00818"/></radialGradient>
    <radialGradient id="hg2" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ff7050"/><stop offset="100%" stop-color="#c02828"/></radialGradient>
    <linearGradient id="hstem" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#3a7830"/><stop offset="100%" stop-color="#5a9848"/></linearGradient>
  </defs>
  <!-- stem -->
  <path d="M105 158 Q102 170 100 185" stroke="url(#hstem)" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <!-- leaves -->
  <path d="M102 168 Q82 162 72 150 Q76 146 88 152 Q94 160 102 168Z" fill="#3a8030"/>
  <path d="M103 175 Q122 168 130 156 Q126 152 116 158 Q110 165 103 175Z" fill="#2e6828"/>
  <!-- 5 broad petals with veins -->
  <path d="M100 150 Q65 138 58 108 Q56 82 72 68 Q90 58 100 60 Q110 58 128 68 Q144 82 142 108 Q135 138 100 150Z" fill="#c02030" opacity=".3"/>
  <!-- individual petals -->
  <path d="M100 148 Q72 135 68 110 Q66 88 80 74 Q92 64 100 65 L100 148Z" fill="url(#hg1)" opacity=".9"/>
  <path d="M100 148 Q128 135 132 110 Q134 88 120 74 Q108 64 100 65 L100 148Z" fill="url(#hg2)" opacity=".85"/>
  <path d="M100 148 Q72 130 70 105 Q78 76 100 70 L100 148Z" fill="#e83040" opacity=".5"/>
  <path d="M100 148 Q128 130 130 105 Q122 76 100 70 L100 148Z" fill="#c82030" opacity=".45"/>
  <!-- top 2 petals -->
  <path d="M86 72 Q78 55 88 45 Q96 40 100 48 Q98 58 86 72Z" fill="url(#hg1)" opacity=".9"/>
  <path d="M114 72 Q122 55 112 45 Q104 40 100 48 Q102 58 114 72Z" fill="url(#hg2)" opacity=".9"/>
  <!-- staminal column -->
  <path d="M100 148 L100 90" stroke="#f5d020" stroke-width="2.5" fill="none"/>
  <!-- anthers -->
  ${[...Array(8)].map((_,i)=>{
    const a=(i/8)*360; const r=10; const y=90;
    const x=100+r*Math.sin(a*Math.PI/180)*0.5, yy=y-r*Math.cos(a*Math.PI/180)*0.3;
    return `<circle cx="${x.toFixed(1)}" cy="${yy.toFixed(1)}" r="2.5" fill="#f5d020"/><line x1="100" y1="90" x2="${x.toFixed(1)}" y2="${yy.toFixed(1)}" stroke="#d4a010" stroke-width="1"/>`;
  }).join('')}
  <circle cx="100" cy="90" r="5" fill="#ff6020"/>
  <!-- petal veins -->
  <path d="M100 148 Q88 130 78 110" stroke="#f05050" stroke-width=".8" fill="none" opacity=".4"/>
  <path d="M100 148 Q112 130 122 110" stroke="#a02020" stroke-width=".8" fill="none" opacity=".35"/>
</svg>`;
},

daisy(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="dcenter" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f8e040"/><stop offset="60%" stop-color="#e0b818"/><stop offset="100%" stop-color="#b08010"/></radialGradient>
  </defs>
  <!-- stem -->
  <path d="M100 155 Q103 168 101 185" stroke="#4a9038" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- leaves alternate -->
  <path d="M101 168 Q84 162 76 150 Q82 147 92 153 Q96 160 101 168Z" fill="#4a9038"/>
  <path d="M100 158 Q116 150 122 140 Q118 137 110 142 Q106 150 100 158Z" fill="#3a8030"/>
  <!-- shadow layer -->
  <ellipse cx="100" cy="100" r="44" fill="#e8e0d0" opacity=".15"/>
  <!-- ray petals - long white -->
  ${[...Array(22)].map((_,i)=>{
    const a=(i/22)*360;
    return `<ellipse cx="100" cy="${100-40}" rx="5" ry="22" fill="${i%2===0?'#f8f5ee':'#ece8df'}" stroke="#d8d4c8" stroke-width=".4" opacity="${.92+.06*(i%3===0?1:0)}" transform="rotate(${a} 100 100)"/>`;
  }).join('')}
  <!-- disc -->
  <circle cx="100" cy="100" r="26" fill="url(#dcenter)"/>
  <!-- disc texture -->
  ${[...Array(28)].map((_,i)=>{
    const a=(i/28)*360; const ri=14;
    const x=100+ri*Math.sin(a*Math.PI/180), y=100-ri*Math.cos(a*Math.PI/180);
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.2" fill="#d09010" opacity=".8"/>`;
  }).join('')}
  ${[...Array(14)].map((_,i)=>{
    const a=(i/14)*360; const ri=7;
    const x=100+ri*Math.sin(a*Math.PI/180), y=100-ri*Math.cos(a*Math.PI/180);
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="#b87810" opacity=".85"/>`;
  }).join('')}
  <circle cx="100" cy="100" r="4" fill="#f0d028"/>
</svg>`;
},

cherry_blossom(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="cbg" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#fce8f0"/><stop offset="60%" stop-color="#f0b8d0"/><stop offset="100%" stop-color="#d88ab0"/></radialGradient>
  </defs>
  <!-- branch -->
  <path d="M30 185 Q60 165 80 140 Q100 118 120 105" stroke="#6a4020" stroke-width="6" fill="none" stroke-linecap="round"/>
  <path d="M120 105 Q140 92 155 80" stroke="#6a4020" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  <path d="M100 120 Q110 108 125 98" stroke="#7a5030" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- bark texture -->
  <path d="M60 168 Q65 158 68 148" stroke="#8a5828" stroke-width="1.2" fill="none" opacity=".5"/>
  <path d="M80 148 Q84 140 86 130" stroke="#8a5828" stroke-width="1" fill="none" opacity=".4"/>
  <!-- flower clusters -->
  <!-- cluster 1 at branch end -->
  ${[[-25,0],[0,-20],[25,0],[-12,-30],[12,-30]].map(([dx,dy],i)=>{
    const bx=152+dx, by=78+dy;
    return `<g transform="translate(${bx},${by})">
      ${[0,72,144,216,288].map((a,j)=>`<path d="M0,0 Q${-10+j%2*2} ${-24} 0,${-30} Q${10-j%2*2} ${-24} 0,0Z" fill="url(#cbg)" opacity="${.85+.1*(j%2)}" transform="rotate(${a})"/>`).join('')}
      <circle cx="0" cy="0" r="5" fill="#f8e8f0"/>
      ${[...Array(6)].map((_,k)=>{const a=k/6*360;return `<line x1="0" y1="0" x2="${6*Math.sin(a*Math.PI/180)}" y2="${-6*Math.cos(a*Math.PI/180)}" stroke="#e87898" stroke-width="1"/><circle cx="${7*Math.sin(a*Math.PI/180)}" cy="${-7*Math.cos(a*Math.PI/180)}" r="1.8" fill="#f0a0b8"/>`;}).join('')}
    </g>`;
  }).join('')}
  <!-- cluster 2 mid branch -->
  ${[[-8,0],[8,-15],[20,5]].map(([dx,dy])=>{
    const bx=107+dx, by=118+dy;
    return `<g transform="translate(${bx},${by})">
      ${[0,72,144,216,288].map((a,j)=>`<path d="M0,0 Q${-8} ${-18} 0,${-24} Q${8} ${-18} 0,0Z" fill="#f4c8dc" opacity="${.8+.1*(j%2)}" transform="rotate(${a})"/>`).join('')}
      <circle cx="0" cy="0" r="4" fill="#fef0f5"/>
      ${[...Array(5)].map((_,k)=>{const a=k/5*360;return `<line x1="0" y1="0" x2="${5*Math.sin(a*Math.PI/180)}" y2="${-5*Math.cos(a*Math.PI/180)}" stroke="#e87090" stroke-width="1"/><circle cx="${6*Math.sin(a*Math.PI/180)}" cy="${-6*Math.cos(a*Math.PI/180)}" r="1.5" fill="#f09ab5"/>`;}).join('')}
    </g>`;
  }).join('')}
  <!-- falling petals -->
  <path d="M145 130 Q150 138 155 145" stroke="#f0b0c8" stroke-width="5" fill="none" opacity=".3" stroke-linecap="round"/>
  <path d="M55 110 Q48 118 42 125" stroke="#f0b0c8" stroke-width="4" fill="none" opacity=".2" stroke-linecap="round"/>
</svg>`;
},

aloe(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="alg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#78c898"/><stop offset="50%" stop-color="#50a878"/><stop offset="100%" stop-color="#307850"/></linearGradient>
    <linearGradient id="alg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#68b888"/><stop offset="100%" stop-color="#406848"/></linearGradient>
    <linearGradient id="alg3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#90d8a8"/><stop offset="100%" stop-color="#58a870"/></linearGradient>
    <radialGradient id="alpot" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#8a6040"/><stop offset="100%" stop-color="#4a3020"/></radialGradient>
  </defs>
  <!-- pot -->
  <path d="M68 175 Q68 185 100 185 Q132 185 132 175 L128 158 Q128 153 100 153 Q72 153 72 158Z" fill="url(#alpot)"/>
  <ellipse cx="100" cy="155" rx="28" ry="7" fill="#6a4830"/>
  <path d="M72 162 Q100 168 128 162" stroke="#5a3820" stroke-width="1" fill="none" opacity=".5"/>
  <!-- soil -->
  <ellipse cx="100" cy="154" rx="26" ry="5" fill="#3a2510"/>
  <!-- back leaves -->
  <path d="M100 152 Q85 130 70 95 Q68 80 74 68 Q80 60 86 65 Q90 72 88 90 Q86 110 100 152Z" fill="url(#alg2)" opacity=".75"/>
  <path d="M100 152 Q115 130 130 95 Q132 80 126 68 Q120 60 114 65 Q110 72 112 90 Q114 110 100 152Z" fill="url(#alg2)" opacity=".75"/>
  <!-- spot texture on back leaves -->
  <path d="M84 100 Q82 95 84 90" stroke="#90e8b0" stroke-width="1.5" fill="none" opacity=".4"/>
  <path d="M116 100 Q118 95 116 90" stroke="#90e8b0" stroke-width="1.5" fill="none" opacity=".4"/>
  <!-- mid leaves -->
  <path d="M100 150 Q90 128 78 102 Q76 86 82 75 Q88 68 94 74 Q96 82 95 100 Q94 122 100 150Z" fill="url(#alg1)"/>
  <path d="M100 150 Q110 128 122 102 Q124 86 118 75 Q112 68 106 74 Q104 82 105 100 Q106 122 100 150Z" fill="url(#alg1)"/>
  <!-- spines on edge -->
  ${[...Array(6)].map((_,i)=>{
    const y=80+i*11; const x=78-i*0.3;
    return `<line x1="${x}" y1="${y}" x2="${x-5}" y2="${y-3}" stroke="#f0e0a0" stroke-width="1.2" opacity=".7"/>`;
  }).join('')}
  ${[...Array(6)].map((_,i)=>{
    const y=80+i*11; const x=122+i*0.3;
    return `<line x1="${x}" y1="${y}" x2="${x+5}" y2="${y-3}" stroke="#f0e0a0" stroke-width="1.2" opacity=".7"/>`;
  }).join('')}
  <!-- front/centre leaf -->
  <path d="M100 150 Q94 130 94 108 Q94 88 98 78 Q100 72 102 78 Q106 88 106 108 Q106 130 100 150Z" fill="url(#alg3)"/>
  <!-- centre vein -->
  <path d="M100 148 Q100 120 100 80" stroke="#40a060" stroke-width="1.2" fill="none" opacity=".6"/>
  <!-- gel shimmer -->
  <path d="M98 90 Q97 105 98 120" stroke="#c0f8d8" stroke-width="1.5" fill="none" opacity=".35"/>
  <!-- terminal spine -->
  <line x1="100" y1="78" x2="100" y2="70" stroke="#f0e090" stroke-width="1.5"/>
  <!-- flower spike -->
  <path d="M100 80 Q102 65 104 50" stroke="#d87030" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".8"/>
  ${[...Array(5)].map((_,i)=>{const y=75-i*7;return `<ellipse cx="${102+i*0.5}" cy="${y}" rx="3" ry="5" fill="#e88040" opacity=".85" transform="rotate(15 ${102+i*0.5} ${y})"/>`;}).join('')}
</svg>`;
},

peony(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="pg1" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#f8c8d8"/><stop offset="70%" stop-color="#e890b0"/><stop offset="100%" stop-color="#c05878"/></radialGradient>
    <radialGradient id="pg2" cx="40%" cy="40%" r="70%"><stop offset="0%" stop-color="#fad8e8"/><stop offset="100%" stop-color="#d878a0"/></radialGradient>
    <radialGradient id="pg3" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffe8f4"/><stop offset="100%" stop-color="#f0a8c8"/></radialGradient>
    <linearGradient id="pstem" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#3a7030"/><stop offset="100%" stop-color="#58a048"/></linearGradient>
  </defs>
  <!-- stem -->
  <path d="M100 158 Q97 170 94 185" stroke="url(#pstem)" stroke-width="3.8" fill="none" stroke-linecap="round"/>
  <!-- leaves -->
  <path d="M98 168 Q76 160 66 146 Q72 142 84 149 Q90 158 98 168Z" fill="#3a7830"/>
  <path d="M98 168 Q80 162 74 152" stroke="#2e6020" stroke-width=".8" fill="none"/>
  <path d="M100 175 Q120 166 128 153 Q122 149 112 155 Q108 163 100 175Z" fill="#2e6828"/>
  <!-- outer petals -->
  ${[0,36,72,108,144,180,216,252,288,324].map((a,i)=>`<path d="M100 150 Q${100-35} ${100+30} ${100-35} ${100-25} Q${100-20} ${100-50} 100 ${100-55} Q${100+20} ${100-50} ${100+35} ${100-25} Q${100+35} ${100+30} 100 150Z" fill="url(#pg1)" opacity="${.65+.05*(i%3)}" transform="rotate(${a} 100 100)"/>`).join('')}
  <!-- middle petals -->
  ${[0,45,90,135,180,225,270,315].map((a,i)=>`<path d="M100 142 Q${100-25} ${100+18} ${100-26} ${100-18} Q${100-14} ${100-40} 100 ${100-44} Q${100+14} ${100-40} ${100+26} ${100-18} Q${100+25} ${100+18} 100 142Z" fill="url(#pg2)" opacity="${.8+.05*(i%2)}" transform="rotate(${a} 100 100)"/>`).join('')}
  <!-- inner ruffled petals -->
  ${[0,60,120,180,240,300].map((a,i)=>`<path d="M100 128 Q${100-16} ${100+10} ${100-16} ${100-12} Q${100-8} ${100-28} 100 ${100-30} Q${100+8} ${100-28} ${100+16} ${100-12} Q${100+16} ${100+10} 100 128Z" fill="url(#pg3)" opacity="${.9+.05*(i%2)}" transform="rotate(${a} 100 100)"/>`).join('')}
  <!-- centre boss -->
  <circle cx="100" cy="100" r="14" fill="#fef0f8"/>
  <!-- stamens -->
  ${[...Array(12)].map((_,i)=>{const a=(i/12)*360;const r=10;const x=100+r*Math.sin(a*Math.PI/180), y=100-r*Math.cos(a*Math.PI/180);return `<line x1="100" y1="100" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#e8b040" stroke-width="1.2"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="#f0c050"/>`;}).join('')}
  <circle cx="100" cy="100" r="5" fill="#f8e8b0"/>
</svg>`;
},

passionflower(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="pfg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f0f8ff"/><stop offset="100%" stop-color="#c0d8f8"/></radialGradient>
    <radialGradient id="pfcor" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#8848c0"/><stop offset="50%" stop-color="#6030a0"/><stop offset="100%" stop-color="#401878"/></radialGradient>
  </defs>
  <!-- vine/stem -->
  <path d="M35 185 Q50 165 65 145 Q80 125 90 110" stroke="#4a8038" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M165 185 Q148 165 135 148 Q120 130 110 115" stroke="#3a7030" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- tendrils -->
  <path d="M70 148 Q80 138 90 142 Q88 150 80 152" stroke="#5a9848" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <path d="M130 155 Q120 145 115 148 Q116 156 124 158" stroke="#4a8838" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- leaves -->
  <path d="M65 148 Q48 138 42 124 Q46 120 56 126 Q60 136 65 148Z" fill="#3a7830"/>
  <path d="M135 152 Q152 142 158 128 Q154 124 144 130 Q140 140 135 152Z" fill="#2e6828"/>
  <!-- sepals (behind) -->
  ${[0,72,144,216,288].map((a,i)=>`<path d="M100 100 Q${100-8} ${100-55} 100 ${100-62} Q${100+8} ${100-55} 100 100Z" fill="#c8e0a8" opacity=".7" transform="rotate(${a} 100 100)"/>`).join('')}
  <!-- 5 main petals -->
  ${[0,72,144,216,288].map((a,i)=>`<path d="M100 100 Q${100-12} ${100-45} 100 ${100-55} Q${100+12} ${100-45} 100 100Z" fill="url(#pfg)" stroke="#b0c8e8" stroke-width=".5" transform="rotate(${a} 100 100)"/>`).join('')}
  <!-- corona filaments - multiple rings -->
  ${[...Array(30)].map((_,i)=>{
    const a=(i/30)*360; const r1=22, r2=36;
    const x1=100+r1*Math.sin(a*Math.PI/180), y1=100-r1*Math.cos(a*Math.PI/180);
    const x2=100+r2*Math.sin(a*Math.PI/180), y2=100-r2*Math.cos(a*Math.PI/180);
    const col = i<15 ? `rgb(${100+i*5},${40+i*3},${180-i*4})` : `rgb(${255-i*3},${200-i*3},${80+i*4})`;
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${col}" stroke-width="1.8" opacity=".9"/>`;
  }).join('')}
  <!-- androgynophore column -->
  <circle cx="100" cy="100" r="18" fill="url(#pfcor)" opacity=".2"/>
  <circle cx="100" cy="100" r="12" fill="#e0f0ff"/>
  <!-- 5 stamens radiating up -->
  ${[0,72,144,216,288].map((a,i)=>{
    const x=100+16*Math.sin(a*Math.PI/180), y=100-16*Math.cos(a*Math.PI/180);
    return `<line x1="100" y1="100" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#a0c840" stroke-width="1.8"/><ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="3.5" ry="2" fill="#c8e048" transform="rotate(${a} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
  }).join('')}
  <!-- 3 stigmas -->
  ${[0,120,240].map((a,i)=>{
    const x=100+8*Math.sin(a*Math.PI/180), y=100-8*Math.cos(a*Math.PI/180);
    return `<path d="M100 100 Q${x.toFixed(1)} ${y.toFixed(1)} ${(x+3*Math.sin(a*Math.PI/180)).toFixed(1)} ${(y-6*Math.cos(a*Math.PI/180)).toFixed(1)}" stroke="#9870c0" stroke-width="2" fill="none"/><circle cx="${(x+3*Math.sin(a*Math.PI/180)).toFixed(1)}" cy="${(y-6*Math.cos(a*Math.PI/180)).toFixed(1)}" r="4" fill="#c090e0"/>`;
  }).join('')}
  <circle cx="100" cy="100" r="5" fill="#f0e8f8"/>
</svg>`;
},

echinacea(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="ecg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#c86050"/><stop offset="50%" stop-color="#9a3030"/><stop offset="100%" stop-color="#6a1818"/></radialGradient>
  </defs>
  <!-- stem - robust, hairy -->
  <path d="M102 158 Q100 172 98 188" stroke="#5a8840" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  <!-- stem hairs -->
  ${[...Array(8)].map((_,i)=>{const y=165+i*3; return `<line x1="${99+i%2}" y1="${y}" x2="${94+i%3-1}" y2="${y-4}" stroke="#4a7830" stroke-width=".8" opacity=".6"/>`;}).join('')}
  <!-- leaves - rough, ovate -->
  <path d="M100 168 Q78 158 68 142 Q72 138 84 146 Q91 155 100 168Z" fill="#4a8838"/>
  <path d="M100 168 Q79 162 73 152" stroke="#3a6828" stroke-width="1" fill="none"/>
  <path d="M100 175 Q122 164 130 148 Q126 144 116 152 Q109 163 100 175Z" fill="#3a7830"/>
  <!-- drooping ray petals (characteristic of coneflower) -->
  ${[...Array(14)].map((_,i)=>{
    const a=(i/14)*360;
    const droop = (Math.sin((a-90)*Math.PI/180)+1)*8;
    return `<path d="M100 100 Q${100+38*Math.sin(a*Math.PI/180)*0.5} ${100-38*Math.cos(a*Math.PI/180)*0.5+droop+5} ${100+52*Math.sin(a*Math.PI/180)} ${100-38*Math.cos(a*Math.PI/180)+droop+10} Q${100+38*Math.sin(a*Math.PI/180)*1.1} ${100-38*Math.cos(a*Math.PI/180)+droop+12} 100 100Z" fill="#d06858" opacity="${.8+.1*(i%2)}" transform="rotate(${0} 100 100)"/>`;
  }).join('')}
  <!-- cone - spiny, domed -->
  <ellipse cx="100" cy="95" rx="22" ry="20" fill="url(#ecg)"/>
  <!-- spine tips on cone -->
  ${[...Array(24)].map((_,i)=>{
    const a=(i/24)*360; const r=18;
    const x=100+r*Math.sin(a*Math.PI/180)*0.75, y=95-r*Math.cos(a*Math.PI/180)*0.6;
    return `<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${(x+3*Math.sin(a*Math.PI/180)).toFixed(1)}" y2="${(y-4*Math.cos(a*Math.PI/180)).toFixed(1)}" stroke="#f0c090" stroke-width="1.2" opacity=".75"/>`;
  }).join('')}
  <!-- cone texture rings -->
  <ellipse cx="100" cy="92" rx="14" ry="12" fill="none" stroke="#8a2820" stroke-width=".8" opacity=".5"/>
  <ellipse cx="100" cy="88" rx="8" ry="7" fill="none" stroke="#6a1810" stroke-width=".8" opacity=".5"/>
  <circle cx="100" cy="86" r="4" fill="#5a1008"/>
</svg>`;
},

marigold(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="mg1" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#f5c020"/><stop offset="60%" stop-color="#e08010"/><stop offset="100%" stop-color="#b05008"/></radialGradient>
    <radialGradient id="mg2" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f8d040"/><stop offset="100%" stop-color="#d09018"/></radialGradient>
    <linearGradient id="mgstem" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#4a8840"/><stop offset="100%" stop-color="#68a858"/></linearGradient>
  </defs>
  <!-- stem -->
  <path d="M100 158 Q103 170 101 186" stroke="url(#mgstem)" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <!-- feathery leaves (pinnate) -->
  <path d="M101 170 Q84 162 76 150 Q80 147 90 152 Q95 160 101 170Z" fill="#3a8038"/>
  <path d="M99 170 Q84 164 78 155" stroke="#2e6828" stroke-width=".8" fill="none"/>
  <path d="M101 176 Q116 167 122 156 Q118 153 110 158 Q106 166 101 176Z" fill="#2e7030"/>
  <!-- outer petals - multiple rows -->
  ${[0,20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340].map((a,i)=>`<path d="M100 148 Q${100-28+i%3} ${100+25} ${100-24} ${100-28} Q${100-10} ${100-45} 100 ${100-48} Q${100+10} ${100-45} ${100+24} ${100-28} Q${100+28-i%3} ${100+25} 100 148Z" fill="url(#mg1)" opacity="${.7+.1*(i%3)}" transform="rotate(${a} 100 100)"/>`).join('')}
  <!-- middle petals -->
  ${[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i)=>`<path d="M100 138 Q${100-18} ${100+14} ${100-18} ${100-16} Q${100-8} ${100-34} 100 ${100-36} Q${100+8} ${100-34} ${100+18} ${100-16} Q${100+18} ${100+14} 100 138Z" fill="url(#mg2)" opacity="${.85+.05*(i%2)}" transform="rotate(${a} 100 100)"/>`).join('')}
  <!-- inner petals tight -->
  ${[0,45,90,135,180,225,270,315].map((a,i)=>`<path d="M100 120 Q${100-10} ${100+8} ${100-10} ${100-10} Q${100-4} ${100-22} 100 ${100-24} Q${100+4} ${100-22} ${100+10} ${100-10} Q${100+10} ${100+8} 100 120Z" fill="#f0c828" opacity=".9" transform="rotate(${a} 100 100)"/>`).join('')}
  <circle cx="100" cy="100" r="10" fill="#a06010"/>
  <circle cx="100" cy="100" r="6" fill="#c07818"/>
</svg>`;
},

jasmine(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="jg" cx="50%" cy="30%" r="70%"><stop offset="0%" stop-color="#fffef5"/><stop offset="60%" stop-color="#f5f0d8"/><stop offset="100%" stop-color="#e0d8a0"/></radialGradient>
  </defs>
  <!-- twining stem -->
  <path d="M30 185 Q40 160 55 138 Q70 115 85 100 Q100 85 115 72 Q130 60 150 50" stroke="#4a7838" stroke-width="2.8" fill="none" stroke-linecap="round"/>
  <path d="M50 185 Q58 165 70 148 Q82 130 96 115" stroke="#3a6828" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- oval leaves -->
  ${[[60,140,-20],[85,105,-10],[110,80,15],[135,62,25],[70,165,-15]].map(([x,y,r])=>`<ellipse cx="${x}" cy="${y}" rx="14" ry="9" fill="#3a7030" transform="rotate(${r} ${x} ${y})" opacity=".9"/><path d="M${x-12*Math.cos(r*Math.PI/180)} ${y+12*Math.sin(r*Math.PI/180)} L${x+12*Math.cos(r*Math.PI/180)} ${y-12*Math.sin(r*Math.PI/180)}" stroke="#2e5820" stroke-width=".7" fill="none" opacity=".6"/>`).join('')}
  <!-- flower clusters -->
  ${[[90,108],[118,75],[148,52],[62,145]].map(([cx,cy],fi)=>[
    [0,0],[14,-8],[8,12],[-12,6]
  ].slice(0,fi===0?4:3).map(([dx,dy])=>{
    const fx=cx+dx, fy=cy+dy;
    return `<g>
      ${[0,72,144,216,288].map((a,i)=>`<path d="M${fx} ${fy} Q${fx-7} ${fy-20} ${fx} ${fy-26} Q${fx+7} ${fy-20} ${fx} ${fy}Z" fill="url(#jg)" stroke="#e8e0a8" stroke-width=".4" opacity="${.9+.05*(i%2)}" transform="rotate(${a} ${fx} ${fy})"/>`).join('')}
      <circle cx="${fx}" cy="${fy}" r="4" fill="#f8f5e0"/>
      ${[...Array(5)].map((_,k)=>{const a=k/5*360;return `<line x1="${fx}" y1="${fy}" x2="${(fx+5*Math.sin(a*Math.PI/180)).toFixed(1)}" y2="${(fy-5*Math.cos(a*Math.PI/180)).toFixed(1)}" stroke="#d8d070" stroke-width="1"/><circle cx="${(fx+6*Math.sin(a*Math.PI/180)).toFixed(1)}" cy="${(fy-6*Math.cos(a*Math.PI/180)).toFixed(1)}" r="1.5" fill="#e8e080"/>`;}).join('')}
    </g>`;
  }).join('')).join('')}
  <!-- buds -->
  <path d="M145 58 Q142 50 145 46 Q148 50 148 56Z" fill="#e8e8a8"/>
  <path d="M152 52 Q149 44 152 40 Q155 44 155 50Z" fill="#e0e098"/>
</svg>`;
},

calendula(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="calg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#f59020"/><stop offset="60%" stop-color="#d86010"/><stop offset="100%" stop-color="#a03808"/></radialGradient>
    <radialGradient id="calcen" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#e07010"/><stop offset="100%" stop-color="#803008"/></radialGradient>
  </defs>
  <path d="M100 158 Q97 172 95 186" stroke="#5a8840" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <!-- sticky leaves -->
  <path d="M98 168 Q78 160 70 146 Q76 142 88 149 Q93 158 98 168Z" fill="#4a8038"/>
  <path d="M100 175 Q120 165 126 152 Q122 148 113 154 Q108 163 100 175Z" fill="#3a7030"/>
  <!-- outer petals - deep orange with notched tips -->
  ${[...Array(20)].map((_,i)=>{
    const a=(i/20)*360;
    return `<path d="M100 100 Q${100-10} ${100-52} ${100-4} ${100-60} Q100 ${100-64} ${100+4} ${100-60} Q${100+10} ${100-52} 100 100Z" fill="#d05808" opacity="${.7+.08*(i%3)}" transform="rotate(${a} 100 100)"/>`;
  }).join('')}
  <!-- mid petals -->
  ${[...Array(16)].map((_,i)=>{
    const a=(i/16)*360+11;
    return `<path d="M100 100 Q${100-8} ${100-44} 100 ${100-52} Q${100+8} ${100-44} 100 100Z" fill="#e87010" opacity="${.8+.08*(i%2)}" transform="rotate(${a} 100 100)"/>`;
  }).join('')}
  <!-- inner petals -->
  ${[...Array(12)].map((_,i)=>{
    const a=(i/12)*360;
    return `<path d="M100 100 Q${100-6} ${100-34} 100 ${100-40} Q${100+6} ${100-34} 100 100Z" fill="#f59020" opacity=".9" transform="rotate(${a} 100 100)"/>`;
  }).join('')}
  <!-- disc -->
  <circle cx="100" cy="100" r="18" fill="url(#calcen)"/>
  ${[...Array(20)].map((_,i)=>{const a=(i/20)*360;const r=12;const x=100+r*Math.sin(a*Math.PI/180),y=100-r*Math.cos(a*Math.PI/180);return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.8" fill="#a04008" opacity=".8"/>`;}).join('')}
  <circle cx="100" cy="100" r="6" fill="#d06010"/>
</svg>`;
},

bluebell(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bbg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6878d8"/><stop offset="50%" stop-color="#4858c0"/><stop offset="100%" stop-color="#283898"/></linearGradient>
  </defs>
  <!-- main stem arching -->
  <path d="M100 185 Q100 160 104 135 Q108 115 115 95 Q122 78 128 60" stroke="#4a8838" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- strap leaves -->
  <path d="M98 178 Q72 172 60 155 Q66 150 78 158 Q87 168 98 178Z" fill="#3a7830"/>
  <path d="M99 185 Q76 180 66 168 Q72 164 82 170 Q90 178 99 185Z" fill="#3a7030" opacity=".8"/>
  <!-- nodding bells - 5 flowers -->
  ${[[122,75],[118,90],[114,106],[109,120],[105,133]].map(([sx,sy],i)=>{
    const tilt = 20+i*5;
    return `<g transform="translate(${sx},${sy}) rotate(${tilt})">
      <!-- pedicel -->
      <path d="M0 0 Q3 8 0 15" stroke="#5a9040" stroke-width="1.8" fill="none"/>
      <!-- bell -->
      <path d="M0 15 Q-10 18 -12 28 Q-12 40 0 42 Q12 40 12 28 Q10 18 0 15Z" fill="url(#bbg)" opacity="${.92-i*.04}"/>
      <!-- lobes at bell mouth -->
      <path d="M-12 38 Q-14 44 -10 46 Q-6 48 0 48 Q6 48 10 46 Q14 44 12 38" stroke="#5868d0" stroke-width="1.2" fill="none"/>
      <!-- vein lines -->
      <path d="M0 18 Q0 30 0 40" stroke="#8898e8" stroke-width=".8" fill="none" opacity=".5"/>
      <path d="M-5 20 Q-7 30 -8 38" stroke="#8898e8" stroke-width=".6" fill="none" opacity=".4"/>
      <path d="M5 20 Q7 30 8 38" stroke="#8898e8" stroke-width=".6" fill="none" opacity=".4"/>
      <!-- stamen tips visible -->
      <line x1="-3" y1="40" x2="-3" y2="46" stroke="#f0f0a0" stroke-width="1"/>
      <line x1="0" y1="40" x2="0" y2="47" stroke="#f0f0a0" stroke-width="1"/>
      <line x1="3" y1="40" x2="3" y2="46" stroke="#f0f0a0" stroke-width="1"/>
    </g>`;
  }).join('')}
</svg>`;
},

waterlily(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="wlg" cx="50%" cy="70%" r="70%"><stop offset="0%" stop-color="#f8f5ff"/><stop offset="50%" stop-color="#d8c8f8"/><stop offset="100%" stop-color="#a890d8"/></radialGradient>
    <radialGradient id="wlpad" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#3a8840"/><stop offset="100%" stop-color="#1a5828"/></radialGradient>
    <radialGradient id="wlwater" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#1a4060"/><stop offset="100%" stop-color="#0a1828"/></radialGradient>
  </defs>
  <!-- water surface -->
  <ellipse cx="100" cy="165" rx="78" ry="16" fill="url(#wlwater)" opacity=".8"/>
  <!-- water ripples -->
  <ellipse cx="100" cy="165" rx="60" ry="10" fill="none" stroke="#2a5878" stroke-width="1" opacity=".5"/>
  <ellipse cx="100" cy="165" rx="40" ry="7" fill="none" stroke="#2a5878" stroke-width=".8" opacity=".4"/>
  <!-- lily pad -->
  <path d="M100 165 Q60 148 48 155 Q40 162 48 170 Q60 178 100 172 Q140 178 152 170 Q160 162 152 155 Q140 148 100 165Z" fill="url(#wlpad)"/>
  <!-- pad notch -->
  <path d="M100 165 L100 147" stroke="#2a6830" stroke-width="2" fill="none"/>
  <!-- pad veins -->
  ${[...Array(8)].map((_,i)=>{const a=-(i/8)*180-10; return `<path d="M100 162 Q${100+35*Math.sin(a*Math.PI/180)} ${162-15*Math.cos(a*Math.PI/180)} ${100+55*Math.sin(a*Math.PI/180)} ${162-8*Math.cos(a*Math.PI/180)}" stroke="#1a5020" stroke-width=".8" fill="none" opacity=".6"/>`;}).join('')}
  <!-- outer petals -->
  ${[...Array(14)].map((_,i)=>{
    const a=(i/14)*360;
    return `<path d="M100 148 Q${100-18} ${148-45} 100 ${148-58} Q${100+18} ${148-45} 100 148Z" fill="#c8b8e8" opacity="${.6+.1*(i%3)}" transform="rotate(${a} 100 148)"/>`;
  }).join('')}
  <!-- mid petals -->
  ${[...Array(10)].map((_,i)=>{
    const a=(i/10)*360+18;
    return `<path d="M100 148 Q${100-12} ${148-36} 100 ${148-46} Q${100+12} ${148-36} 100 148Z" fill="url(#wlg)" opacity="${.8+.08*(i%2)}" transform="rotate(${a} 100 148)"/>`;
  }).join('')}
  <!-- inner petals -->
  ${[...Array(6)].map((_,i)=>{
    const a=(i/6)*360;
    return `<path d="M100 148 Q${100-7} ${148-22} 100 ${148-28} Q${100+7} ${148-22} 100 148Z" fill="#f0e8ff" opacity=".95" transform="rotate(${a} 100 148)"/>`;
  }).join('')}
  <!-- stamens -->
  <circle cx="100" cy="148" r="12" fill="#f8e850" opacity=".9"/>
  ${[...Array(14)].map((_,i)=>{const a=(i/14)*360;const r=9;const x=100+r*Math.sin(a*Math.PI/180),y=148-r*Math.cos(a*Math.PI/180);return `<line x1="100" y1="148" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#d0b020" stroke-width="1.2"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="#f0d040"/>`;}).join('')}
  <circle cx="100" cy="148" r="5" fill="#fff080"/>
  <!-- reflection -->
  <ellipse cx="100" cy="168" rx="20" ry="4" fill="#d0c8f0" opacity=".2"/>
</svg>`;
},

snowdrop(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sdg" cx="50%" cy="20%" r="80%"><stop offset="0%" stop-color="#ffffff"/><stop offset="80%" stop-color="#f0f5f0"/><stop offset="100%" stop-color="#d8e8d8"/></radialGradient>
  </defs>
  <!-- strap leaves -->
  <path d="M95 185 Q80 155 76 130 Q74 115 78 105" stroke="#5a8848" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M105 185 Q120 155 124 130 Q126 115 122 105" stroke="#4a7838" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  <!-- glaucous sheen on leaves -->
  <path d="M96 183 Q82 158 79 132" stroke="#a0c898" stroke-width="1" fill="none" opacity=".5"/>
  <path d="M104 183 Q118 158 121 132" stroke="#90b888" stroke-width="1" fill="none" opacity=".45"/>
  <!-- 3 flowers on arching pedicels -->
  ${[[100,108,0],[75,120,-18],[125,125,18]].map(([fx,fy,tilt],fi)=>`<g>
    <!-- pedicel with spathe -->
    <path d="M${100} ${170} Q${fx-5} ${145} ${fx} ${fy+30}" stroke="#5a8848" stroke-width="2.2" fill="none"/>
    <path d="M${fx-4} ${fy+22} Q${fx-10} ${fy+18} ${fx-8} ${fy+12}" fill="#c8d8b8" stroke="#a0b898" stroke-width=".5"/>
    <g transform="rotate(${tilt} ${fx} ${fy})">
      <!-- outer 3 sepals (white) -->
      ${[0,120,240].map((a,i)=>`<path d="M${fx} ${fy} Q${fx-8} ${fy+20} ${fx} ${fy+32} Q${fx+8} ${fy+20} ${fx} ${fy}Z" fill="url(#sdg)" stroke="#d0dcd0" stroke-width=".5" transform="rotate(${a} ${fx} ${fy})"/>`).join('')}
      <!-- inner 3 petals (white with green mark) -->
      ${[60,180,300].map((a,i)=>`<path d="M${fx} ${fy+4} Q${fx-5} ${fy+16} ${fx} ${fy+22} Q${fx+5} ${fy+16} ${fx} ${fy+4}Z" fill="white" stroke="#b0c8b0" stroke-width=".4" transform="rotate(${a} ${fx} ${fy})"/>
      <path d="M${fx} ${fy+4} Q${fx-3} ${fy+14} ${fx} ${fy+18} Q${fx+3} ${fy+14} ${fx} ${fy+4}Z" fill="#90d890" opacity=".5" transform="rotate(${a} ${fx} ${fy})"/>`).join('')}
      <!-- green ovary -->
      <circle cx="${fx}" cy="${fy-3}" r="4" fill="#6aaa58"/>
      <!-- stamens -->
      ${[0,60,120,180,240,300].map((a,i)=>{const x=fx+5*Math.sin(a*Math.PI/180),y=fy+8-5*Math.cos(a*Math.PI/180);return `<line x1="${fx}" y1="${fy+6}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#d8e8b0" stroke-width=".9"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.5" fill="#f0f0c0"/>`;}).join('')}
    </g>
  </g>`).join('')}
</svg>`;
},

hellebore(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="heg" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#b8d0e8"/><stop offset="60%" stop-color="#8098c0"/><stop offset="100%" stop-color="#485880"/></radialGradient>
    <radialGradient id="heg2" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#c8e0f0"/><stop offset="100%" stop-color="#7898c0"/></radialGradient>
  </defs>
  <!-- petioles/stems -->
  <path d="M100 185 Q100 165 98 145 Q96 130 92 118" stroke="#3a6828" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- palmate leaves (evergreen, leathery) -->
  <path d="M88 145 Q65 130 55 112 Q62 108 72 116 Q80 128 88 145Z" fill="#2a5820"/>
  <path d="M88 145 Q68 138 62 124" stroke="#1e4818" stroke-width=".9" fill="none"/>
  <!-- flower - nodding, facing down -->
  <g transform="translate(95,112) rotate(20)">
    <!-- 5 sepals - persistent, petaloid -->
    ${[0,72,144,216,288].map((a,i)=>`<path d="M0 0 Q${-15} ${-35} 0 ${-48} Q${15} ${-35} 0 0Z" fill="${i%2===0?'url(#heg)':'url(#heg2)'}" opacity="${.88+.08*(i%2)}" stroke="#6080a8" stroke-width=".5" transform="rotate(${a})"/>`).join('')}
    <!-- nectary petals (small, tubular) -->
    ${[0,72,144,216,288].map((a,i)=>`<path d="M0 0 Q${-4} ${-12} 0 ${-16} Q${4} ${-12} 0 0Z" fill="#e0f0a0" opacity=".9" transform="rotate(${a+36})"/>`).join('')}
    <!-- stamens cluster -->
    ${[...Array(20)].map((_,i)=>{const a=(i/20)*360;const r=10;const x=r*Math.sin(a*Math.PI/180),y=-r*Math.cos(a*Math.PI/180);return `<line x1="0" y1="0" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#f8f0a0" stroke-width="1"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.8" fill="#f8e848"/>`;}).join('')}
    <!-- carpels -->
    ${[0,72,144,216,288].map((a,i)=>{const x=5*Math.sin(a*Math.PI/180),y=-5*Math.cos(a*Math.PI/180);return `<path d="M0 0 Q${x*0.5} ${y*0.5} ${x} ${y}" stroke="#90b068" stroke-width="2" fill="none"/>`;}).join('')}
    <circle cx="0" cy="0" r="5" fill="#a0c070"/>
  </g>
  <!-- veining on sepals -->
  <path d="M90 90 Q92 78 95 68" stroke="#90b0d0" stroke-width=".7" fill="none" opacity=".5"/>
</svg>`;
},

iris(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="irg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9870e0"/><stop offset="50%" stop-color="#6840b8"/><stop offset="100%" stop-color="#401880"/></linearGradient>
    <linearGradient id="irg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b898f0"/><stop offset="100%" stop-color="#7858c8"/></linearGradient>
    <linearGradient id="irstem" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#4a8840"/><stop offset="100%" stop-color="#68a858"/></linearGradient>
  </defs>
  <!-- stem - stiff, round -->
  <path d="M100 185 L100 128" stroke="url(#irstem)" stroke-width="5" fill="none" stroke-linecap="round"/>
  <!-- sword-like leaves -->
  <path d="M95 185 Q78 165 72 138 Q76 134 82 140 Q88 160 95 185Z" fill="#4a9040"/>
  <path d="M105 185 Q122 162 126 136 Q122 132 118 138 Q114 160 105 185Z" fill="#3a8030"/>
  <!-- falls (lower petals, drooping) -->
  <path d="M100 128 Q72 128 58 112 Q50 96 58 82 Q68 70 82 76 Q94 82 100 96 Q106 82 118 76 Q132 70 142 82 Q150 96 142 112 Q128 128 100 128Z" fill="url(#irg1)" opacity=".3"/>
  <!-- 3 falls -->
  <path d="M100 125 Q78 122 65 108 Q56 94 65 82 Q74 72 84 78 Q94 84 100 100 Q100 112 100 125Z" fill="url(#irg1)" opacity=".9"/>
  <path d="M100 125 Q122 122 135 108 Q144 94 135 82 Q126 72 116 78 Q106 84 100 100 Q100 112 100 125Z" fill="url(#irg1)" opacity=".85"/>
  <!-- beard on falls -->
  <path d="M82 96 Q86 98 92 98" stroke="#f0e060" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M108 96 Q114 98 118 96" stroke="#f0e060" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <!-- standards (upright petals) -->
  <path d="M100 100 Q88 85 84 68 Q84 52 92 46 Q100 42 108 46 Q116 52 116 68 Q112 85 100 100Z" fill="url(#irg2)" opacity=".9"/>
  <!-- style arms -->
  <path d="M92 96 Q88 88 90 78 Q94 72 100 70 Q106 72 110 78 Q112 88 108 96Z" fill="#c0a0f0" opacity=".7"/>
  <!-- stigmatic lip -->
  <path d="M90 80 Q95 76 100 75 Q105 76 110 80" stroke="#f0c0f0" stroke-width="1.5" fill="none"/>
</svg>`;
},

poppyField(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="ppg" cx="30%" cy="30%" r="70%"><stop offset="0%" stop-color="#ff5030"/><stop offset="60%" stop-color="#e02010"/><stop offset="100%" stop-color="#980808"/></radialGradient>
  </defs>
  <!-- stems with droop -->
  <path d="M80 185 Q82 165 85 148 Q88 132 94 115" stroke="#4a8040" stroke-width="2.8" fill="none" stroke-linecap="round"/>
  <path d="M120 185 Q118 165 115 148 Q112 132 106 115" stroke="#3a7030" stroke-width="2.8" fill="none" stroke-linecap="round"/>
  <path d="M100 185 Q100 168 100 152" stroke="#4a8838" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- hairy stems -->
  ${[160,168,175,182].map(y=>`<line x1="82" y1="${y}" x2="78" y2="${y-4}" stroke="#3a7030" stroke-width=".8" opacity=".6"/>`).join('')}
  ${[158,165,173,180].map(y=>`<line x1="117" y1="${y}" x2="121" y2="${y-4}" stroke="#3a6828" stroke-width=".8" opacity=".6"/>`).join('')}
  <!-- leaves - pinnate, glaucous -->
  <path d="M88 148 Q72 140 65 128 Q70 124 80 131 Q84 139 88 148Z" fill="#5a9048" opacity=".85"/>
  <path d="M112 152 Q128 143 134 130 Q130 126 120 133 Q116 142 112 152Z" fill="#4a8038" opacity=".85"/>
  <!-- flower 1 (left) -->
  ${[0,90,180,270].map((a,i)=>`<path d="M88 112 Q${88-22} ${112-25} ${88-18} ${112-42} Q${88-4} ${112-52} 88 ${112-55} Q${88+4} ${112-52} ${88+18} ${112-42} Q${88+22} ${112-25} 88 112Z" fill="url(#ppg)" opacity="${.88+.07*(i%2)}" transform="rotate(${a} 88 112)"/>`).join('')}
  <!-- black cross on flower 1 -->
  <circle cx="88" cy="112" r="12" fill="#1a0808"/>
  ${[...Array(10)].map((_,i)=>{const a=(i/10)*360;const r=8;const x=88+r*Math.sin(a*Math.PI/180),y=112-r*Math.cos(a*Math.PI/180);return `<line x1="88" y1="112" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#f8f0a0" stroke-width="1"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="#f8f080"/>`;}).join('')}
  <circle cx="88" cy="112" r="6" fill="#080008"/>
  <!-- flower 2 (right) -->
  ${[0,90,180,270].map((a,i)=>`<path d="M112 112 Q${112-22} ${112-25} ${112-18} ${112-42} Q${112-4} ${112-52} 112 ${112-55} Q${112+4} ${112-52} ${112+18} ${112-42} Q${112+22} ${112-25} 112 112Z" fill="#e83020" opacity="${.85+.06*(i%2)}" transform="rotate(${a} 112 112)"/>`).join('')}
  <circle cx="112" cy="112" r="12" fill="#180808"/>
  ${[...Array(10)].map((_,i)=>{const a=(i/10)*360;const r=8;const x=112+r*Math.sin(a*Math.PI/180),y=112-r*Math.cos(a*Math.PI/180);return `<line x1="112" y1="112" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#f8f080" stroke-width="1"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="#f0e070"/>`;}).join('')}
  <circle cx="112" cy="112" r="6" fill="#080008"/>
  <!-- bud on centre stem -->
  <path d="M100 152 Q97 142 98 134 Q100 128 102 134 Q103 142 100 152Z" fill="#5a9048"/>
  <path d="M98 136 Q94 130 96 126 Q98 122 100 124 Q102 122 104 126 Q106 130 102 136Z" fill="#e83020" opacity=".7"/>
</svg>`;
},

wisteria(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="wg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#d0b8f0"/><stop offset="100%" stop-color="#9070c8"/></radialGradient>
  </defs>
  <!-- woody stem/branch -->
  <path d="M20 40 Q50 50 80 55 Q110 60 140 55 Q170 50 185 45" stroke="#7a5830" stroke-width="6" fill="none" stroke-linecap="round"/>
  <path d="M20 40 Q22 42 20 44" stroke="#6a4820" stroke-width="1.5" fill="none" opacity=".5"/>
  <!-- compound leaves -->
  ${[[70,55],[110,58],[150,53]].map(([lx,ly])=>`<g>
    ${[...Array(7)].map((_,i)=>{const x=lx-15+i*5,y=ly+8+Math.abs(i-3)*3;return `<ellipse cx="${x}" cy="${y}" rx="5" ry="8" fill="#3a7030" opacity=".85" transform="rotate(-10 ${x} ${y})"/>`;}).join('')}
  </g>`).join('')}
  <!-- hanging racemes -->
  ${[[68,62],[100,65],[135,60],[165,50]].map(([rx,ry],ri)=>{
    const len = 80+ri*8;
    return `<g>
      <path d="M${rx} ${ry} Q${rx+5} ${ry+len*0.5} ${rx+2} ${ry+len}" stroke="#5a9048" stroke-width="1.5" fill="none"/>
      ${[...Array(12)].map((_,i)=>{
        const t=i/11; const py=ry+t*len;
        const px=rx+5*Math.sin(t*Math.PI*2)*0.3;
        const spread=i%2===0?-8:8;
        return `<g transform="translate(${px+spread},${py})">
          <path d="M0 0 Q${-6} ${-5} ${-5} ${-12} Q0 ${-16} 0 ${-16} Q0 ${-16} 5 ${-12} Q6 ${-5} 0 0Z" fill="url(#wg)" opacity="${.7+.2*(i%3===0?1:0)}"/>
          <path d="M0 0 Q${-3} ${-3} ${-2} ${-6} Q0 ${-8} 0 ${-8} Q0 ${-8} 2 ${-6} Q3 ${-3} 0 0Z" fill="#e0c8f8" opacity=".85"/>
          <circle cx="0" cy="-8" r="2" fill="#f0e8ff" opacity=".7"/>
        </g>`;
      }).join('')}
    </g>`;
  }).join('')}
</svg>`;
},

cactusFlower(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cfcact" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#4a8848"/><stop offset="50%" stop-color="#6aaa60"/><stop offset="100%" stop-color="#3a7838"/></linearGradient>
    <radialGradient id="cfflower" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#f8e040"/><stop offset="60%" stop-color="#f0a010"/><stop offset="100%" stop-color="#c06008"/></radialGradient>
  </defs>
  <!-- pot -->
  <path d="M72 185 Q72 192 100 192 Q128 192 128 185 L122 168 Q120 163 100 163 Q80 163 78 168Z" fill="#8a5030"/>
  <ellipse cx="100" cy="163" rx="22" ry="5" fill="#6a3820"/>
  <ellipse cx="100" cy="163" rx="20" ry="4" fill="#2a1808"/>
  <!-- main column -->
  <rect x="84" y="80" width="32" height="85" rx="16" fill="url(#cfcact)"/>
  <!-- ribs -->
  ${[...Array(8)].map((_,i)=>{const x=84+i*4.5;return `<path d="M${x} 80 Q${x+1} 120 ${x} 163" stroke="#2a6020" stroke-width=".8" fill="none" opacity=".4"/>`;}).join('')}
  <!-- spines -->
  ${[...Array(6)].map((_,fi)=>{
    const y=90+fi*12;
    return [86,92,100,108,114].map(x=>`<line x1="${x}" y1="${y}" x2="${x-5+(x-100)*0.3}" y2="${y-7}" stroke="#f0e090" stroke-width="1" opacity=".8"/>`).join('');
  }).join('')}
  <!-- arm left -->
  <path d="M84 120 Q68 118 62 108 Q58 98 62 90 Q68 80 80 82" stroke="url(#cfcact)" stroke-width="22" fill="none" stroke-linecap="round"/>
  <!-- arm right -->
  <path d="M116 115 Q132 113 138 103 Q142 93 138 85 Q132 75 120 77" stroke="url(#cfcact)" stroke-width="20" fill="none" stroke-linecap="round"/>
  <!-- arm spines -->
  ${[[68,105],[62,95],[72,85]].map(([x,y])=>`<line x1="${x}" y1="${y}" x2="${x-5}" y2="${y-6}" stroke="#f0e090" stroke-width="1" opacity=".75"/>`).join('')}
  ${[[132,100],[138,90],[128,82]].map(([x,y])=>`<line x1="${x}" y1="${y}" x2="${x+5}" y2="${y-6}" stroke="#f0e090" stroke-width="1" opacity=".75"/>`).join('')}
  <!-- flower on top -->
  ${[...Array(14)].map((_,i)=>{const a=(i/14)*360;return `<path d="M100 80 Q${100-10} ${80-32} 100 ${80-42} Q${100+10} ${80-32} 100 80Z" fill="url(#cfflower)" opacity="${.8+.1*(i%2)}" transform="rotate(${a} 100 80)"/>`;}).join('')}
  <circle cx="100" cy="80" r="14" fill="#f8e048"/>
  ${[...Array(12)].map((_,i)=>{const a=(i/12)*360;const r=10;const x=100+r*Math.sin(a*Math.PI/180),y=80-r*Math.cos(a*Math.PI/180);return `<line x1="100" y1="80" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#d8a010" stroke-width="1.2"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="#f0c030"/>`;}).join('')}
  <circle cx="100" cy="80" r="5" fill="#ffe080"/>
</svg>`;
},

magnolia(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="magnig" cx="50%" cy="30%" r="70%"><stop offset="0%" stop-color="#fff8f5"/><stop offset="50%" stop-color="#f8e0d8"/><stop offset="100%" stop-color="#e8b8a8"/></radialGradient>
    <radialGradient id="magnig2" cx="60%" cy="40%" r="60%"><stop offset="0%" stop-color="#f5e8e0"/><stop offset="100%" stop-color="#d89080"/></radialGradient>
  </defs>
  <!-- branch -->
  <path d="M25 185 Q55 165 80 140 Q102 118 118 100" stroke="#6a4020" stroke-width="5.5" fill="none" stroke-linecap="round"/>
  <path d="M118 100 Q135 85 152 70" stroke="#6a4020" stroke-width="4" fill="none" stroke-linecap="round"/>
  <!-- buds/branches -->
  <path d="M95 130 Q105 118 116 108" stroke="#7a5030" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- large flower at top -->
  <!-- outer tepals -->
  ${[-30,-15,0,15,30].map((a,i)=>`<path d="M118 100 Q${118-35} ${100-30+a} ${118-25} ${100-65} Q${118-5} ${100-75} 118 ${100-78} Q${118+5} ${100-75} ${118+25} ${100-65} Q${118+35} ${100-30+a} 118 100Z" fill="url(#magnig)" stroke="#e0c0b0" stroke-width=".5" opacity="${.78+.05*i}" transform="rotate(${a*2} 118 100)"/>`).join('')}
  <!-- inner tepals -->
  ${[-15,0,15].map((a)=>`<path d="M118 100 Q${118-20} ${100-28} ${118-14} ${100-58} Q${118-4} ${100-66} 118 ${100-68} Q${118+4} ${100-66} ${118+14} ${100-58} Q${118+20} ${100-28} 118 100Z" fill="url(#magnig2)" opacity=".9" transform="rotate(${a*3} 118 100)"/>`).join('')}
  <!-- centre cone -->
  <ellipse cx="118" cy="96" rx="12" ry="14" fill="#f0d8c0"/>
  <!-- stamens -->
  ${[...Array(16)].map((_,i)=>{const a=(i/16)*360;const r=8;const x=118+r*Math.sin(a*Math.PI/180)*0.7,y=96-r*Math.cos(a*Math.PI/180)*0.7;return `<line x1="118" y1="96" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#c07030" stroke-width="1.2"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.2" fill="#e09040"/>`;}).join('')}
  <circle cx="118" cy="96" r="5" fill="#d0a060"/>
  <!-- second flower mid branch -->
  ${[0,60,120,180,240,300].map((a,i)=>`<path d="M96 130 Q${96-18} ${130-22} ${96-12} ${130-48} Q${96-3} ${130-56} 96 ${130-58} Q${96+3} ${130-56} ${96+12} ${130-48} Q${96+18} ${130-22} 96 130Z" fill="#faf0ea" opacity="${.75+.08*(i%2)}" transform="rotate(${a} 96 130)"/>`).join('')}
  <ellipse cx="96" cy="126" rx="8" ry="9" fill="#f0d8c0"/>
  ${[...Array(10)].map((_,i)=>{const a=(i/10)*360;const r=5;const x=96+r*Math.sin(a*Math.PI/180)*0.6,y=126-r*Math.cos(a*Math.PI/180)*0.6;return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.5" fill="#d09040"/>`;}).join('')}
  <!-- leaf bud scales at branch nodes -->
  <path d="M60 162 Q55 156 58 150 Q62 146 66 150 Q68 156 64 162Z" fill="#4a3020" opacity=".6"/>
  <path d="M80 145 Q76 140 78 135 Q82 131 85 135 Q87 140 84 145Z" fill="#4a3020" opacity=".5"/>
</svg>`;
},


/* ── 15 MORE SPECIES ── */

dahlia(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="dhlg1" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#e85080"/><stop offset="60%" stop-color="#b82858"/><stop offset="100%" stop-color="#801038"/></radialGradient>
    <radialGradient id="dhlg2" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f07098"/><stop offset="100%" stop-color="#c04070"/></radialGradient>
    <linearGradient id="dhlstem" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#3a7030"/><stop offset="100%" stop-color="#58a048"/></linearGradient>
  </defs>
  <path d="M100 160 Q97 172 95 186" stroke="url(#dhlstem)" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M98 170 Q78 162 68 148 Q74 144 86 151 Q92 160 98 170Z" fill="#3a7030"/>
  <path d="M100 176 Q120 167 128 154 Q124 150 114 156 Q108 165 100 176Z" fill="#2e6828"/>
  <!-- 5 rings of petals from outer to inner -->
  ${[...Array(20)].map((_,i)=>{const a=(i/20)*360;return `<path d="M100 100 Q${100-12} ${100+52} ${100-10} ${100+65} Q100 ${100+72} ${100+10} ${100+65} Q${100+12} ${100+52} 100 100Z" fill="#a82048" opacity="${.6+.05*(i%4)}" transform="rotate(${a} 100 100)"/>`}).join('')}
  ${[...Array(16)].map((_,i)=>{const a=(i/16)*360+11;return `<path d="M100 100 Q${100-10} ${100+40} ${100-8} ${100+52} Q100 ${100+58} ${100+8} ${100+52} Q${100+10} ${100+40} 100 100Z" fill="url(#dhlg1)" opacity="${.78+.05*(i%3)}" transform="rotate(${a} 100 100)"/>`}).join('')}
  ${[...Array(12)].map((_,i)=>{const a=(i/12)*360;return `<path d="M100 100 Q${100-8} ${100+28} ${100-6} ${100+38} Q100 ${100+43} ${100+6} ${100+38} Q${100+8} ${100+28} 100 100Z" fill="url(#dhlg2)" opacity=".85" transform="rotate(${a} 100 100)"/>`}).join('')}
  ${[...Array(8)].map((_,i)=>{const a=(i/8)*360+22;return `<path d="M100 100 Q${100-5} ${100+16} ${100-4} ${100+22} Q100 ${100+26} ${100+4} ${100+22} Q${100+5} ${100+16} 100 100Z" fill="#f090b0" opacity=".92" transform="rotate(${a} 100 100)"/>`}).join('')}
  ${[...Array(6)].map((_,i)=>{const a=(i/6)*360;return `<path d="M100 100 Q${100-3} ${100+8} ${100-2} ${100+12} Q100 ${100+14} ${100+2} ${100+12} Q${100+3} ${100+8} 100 100Z" fill="#ffd0e0" opacity=".95" transform="rotate(${a} 100 100)"/>`}).join('')}
  <circle cx="100" cy="100" r="8" fill="#fff0f8"/>
  ${[...Array(8)].map((_,i)=>{const a=(i/8)*360;const r=5;const x=100+r*Math.sin(a*Math.PI/180),y=100-r*Math.cos(a*Math.PI/180);return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.8" fill="#f0d0a0"/>`;}).join('')}
</svg>`},

hyacinth(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="hyg" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#d0c0f8"/><stop offset="60%" stop-color="#9070d8"/><stop offset="100%" stop-color="#5040a0"/></radialGradient>
    <linearGradient id="hystem" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#78b868"/><stop offset="100%" stop-color="#3a7030"/></linearGradient>
  </defs>
  <!-- bulb base -->
  <ellipse cx="100" cy="182" rx="20" ry="12" fill="#c8a870"/>
  <ellipse cx="100" cy="182" rx="18" ry="9" fill="#d8b880"/>
  <path d="M84 180 Q100 175 116 180" stroke="#b89060" stroke-width="1" fill="none"/>
  <!-- strap leaves -->
  <path d="M92 178 Q72 165 64 148 Q70 144 80 152 Q86 162 92 178Z" fill="#4a8840"/>
  <path d="M92 178 Q75 170 70 158" stroke="#3a7030" stroke-width=".8" fill="none"/>
  <path d="M108 178 Q128 164 135 148 Q130 144 120 152 Q115 163 108 178Z" fill="#3a7838"/>
  <!-- main spike stem -->
  <path d="M100 178 L100 100" stroke="url(#hystem)" stroke-width="6" fill="none" stroke-linecap="round"/>
  <!-- flower clusters all around spike, 5 rows -->
  ${[100,115,128,140,152].map((baseY,row)=>{
    const count = [10,9,8,7,5][row];
    return [...Array(count)].map((_,i)=>{
      const a=(i/count)*360;
      const r=18-row*1.5;
      const px=100+r*Math.sin(a*Math.PI/180), py=baseY-r*Math.cos(a*Math.PI/180)*0.35;
      return `<g>
        <path d="M${100} ${baseY} Q${px-3} ${(baseY+py)/2} ${px} ${py}" stroke="#7858c0" stroke-width="1.5" fill="none"/>
        <g transform="translate(${px},${py})">
          ${[0,72,144,216,288].map(aa=>`<path d="M0 0 Q${-4} ${-8} 0 ${-12} Q${4} ${-8} 0 0Z" fill="url(#hyg)" transform="rotate(${aa})"/>`).join('')}
          <circle cx="0" cy="0" r="2.5" fill="#f0e8ff"/>
        </g>
      </g>`;
    }).join('');
  }).join('')}
</svg>`},

anemone(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="ang" cx="40%" cy="40%" r="70%"><stop offset="0%" stop-color="#e05878"/><stop offset="70%" stop-color="#b82848"/><stop offset="100%" stop-color="#801030"/></radialGradient>
    <radialGradient id="ancen" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#282868"/><stop offset="100%" stop-color="#101040"/></radialGradient>
  </defs>
  <!-- slim stem -->
  <path d="M102 158 Q100 170 98 186" stroke="#5a9040" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- finely-cut involucre leaves (just below flower) -->
  <path d="M85 130 Q72 125 68 115 Q74 113 82 118 Q84 124 85 130Z" fill="#5a8838"/>
  <path d="M115 128 Q128 122 132 112 Q126 110 118 116 Q116 122 115 128Z" fill="#4a7830"/>
  <path d="M100 128 Q100 115 102 108 Q104 112 103 120 Q102 124 100 128Z" fill="#4a8838" opacity=".7"/>
  <!-- 6 broad petals with silky sheen -->
  ${[0,60,120,180,240,300].map((a,i)=>`
    <path d="M100 128 Q${100-32} ${128-20} ${100-30} ${128-54} Q${100-8} ${128-70} 100 ${128-74} Q${100+8} ${128-70} ${100+30} ${128-54} Q${100+32} ${128-20} 100 128Z"
      fill="url(#ang)" opacity="${.82+.06*(i%2)}" stroke="#c84060" stroke-width=".3"
      transform="rotate(${a} 100 128)"/>
    <path d="M100 128 Q${100-16} ${128-18} ${100-14} ${128-46} Q${100-4} ${128-58} 100 ${128-60} Q${100+4} ${128-58} ${100+14} ${128-46} Q${100+16} ${128-18} 100 128Z"
      fill="#f07090" opacity=".25" transform="rotate(${a} 100 128)"/>`).join('')}
  <!-- dark centre disc -->
  <circle cx="100" cy="128" r="20" fill="url(#ancen)"/>
  <circle cx="100" cy="128" r="16" fill="#1a1858"/>
  <!-- ring of white stamens -->
  ${[...Array(22)].map((_,i)=>{const a=(i/22)*360;const r=14;const x=100+r*Math.sin(a*Math.PI/180),y=128-r*Math.cos(a*Math.PI/180);return `<line x1="100" y1="128" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#d8e0f8" stroke-width="1.2"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.2" fill="#e8f0ff"/>`;}).join('')}
  <!-- blue-black carpels in centre -->
  <circle cx="100" cy="128" r="7" fill="#283880"/>
  <circle cx="100" cy="128" r="4" fill="#101858"/>
</svg>`},

foxglove(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fxg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e090d0"/><stop offset="50%" stop-color="#c060b0"/><stop offset="100%" stop-color="#903080"/></linearGradient>
    <linearGradient id="fxstem" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#4a8840"/><stop offset="100%" stop-color="#6aaa58"/></linearGradient>
  </defs>
  <!-- large basal leaves -->
  <path d="M95 185 Q68 172 56 154 Q62 149 74 157 Q84 168 95 185Z" fill="#3a7830"/>
  <path d="M95 185 Q70 176 64 163" stroke="#2e6020" stroke-width="1" fill="none"/>
  <path d="M105 185 Q132 172 143 154 Q138 149 126 157 Q117 168 105 185Z" fill="#2e6828"/>
  <!-- robust hairy stem -->
  <path d="M100 185 Q101 158 103 130 Q106 105 110 82 Q114 62 118 45" stroke="url(#fxstem)" stroke-width="5.5" fill="none" stroke-linecap="round"/>
  <!-- stem hairs -->
  ${[...Array(10)].map((_,i)=>{const y=160-i*12;return `<line x1="101" y1="${y}" x2="96" y2="${y-5}" stroke="#5a9040" stroke-width=".9" opacity=".5"/><line x1="102" y1="${y+4}" x2="107" y2="${y-2}" stroke="#4a8030" stroke-width=".9" opacity=".4"/>`;}).join('')}
  <!-- drooping tubular bells on one side, staggered -->
  ${[[108,165,0],[111,148,5],[113,132,8],[115,116,10],[117,100,10],[118,86,9],[118,73,7],[117,62,4]].map(([sx,sy,tilt],fi)=>`
    <g transform="translate(${sx},${sy}) rotate(${tilt})">
      <!-- pedicel -->
      <path d="M0 0 Q8 5 12 14" stroke="#5a9040" stroke-width="2" fill="none"/>
      <!-- tube -->
      <path d="M12 14 Q8 18 8 30 Q8 44 15 52 Q22 58 28 54 Q34 50 34 36 Q34 22 28 16 Q22 12 12 14Z"
        fill="url(#fxg)" opacity="${.92-fi*.04}"/>
      <!-- mouth opening -->
      <path d="M8 30 Q6 36 8 42 Q12 50 20 52" stroke="#f0b0e0" stroke-width="1" fill="none"/>
      <!-- inner spots -->
      <circle cx="18" cy="35" r="3.5" fill="#6a2060" opacity=".6"/>
      <circle cx="24" cy="42" r="2.5" fill="#5a1858" opacity=".5"/>
      <circle cx="14" cy="42" r="2" fill="#6a2060" opacity=".45"/>
      <!-- white ring at mouth -->
      <ellipse cx="18" cy="31" rx="8" ry="5" fill="white" opacity=".25"/>
    </g>`).join('')}
  <!-- bud at tip -->
  <path d="M117 55 Q118 48 118 42 Q118 36 116 32 Q118 30 120 32 Q122 36 122 44 Q122 50 120 56Z" fill="#d080c0"/>
  <path d="M115 44 Q112 40 114 36 Q118 32 116 32" fill="#b060a0" opacity=".7"/>
</svg>`},

sundrops(s=200){
/* Oenothera — evening primrose */
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="epg" cx="50%" cy="30%" r="70%"><stop offset="0%" stop-color="#fff870"/><stop offset="60%" stop-color="#f0d020"/><stop offset="100%" stop-color="#c09000"/></radialGradient>
  </defs>
  <path d="M98 185 Q99 168 100 150 Q102 132 104 115" stroke="#5a9040" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M98 170 Q80 162 72 148 Q78 144 90 151 Q94 161 98 170Z" fill="#4a8838"/>
  <path d="M100 178 Q120 170 128 156 Q124 152 114 158 Q108 167 100 178Z" fill="#3a7830"/>
  <!-- alternate leaves on stem -->
  ${[[103,148,-20],[105,132,18],[104,116,-15]].map(([lx,ly,lr])=>`<path d="M${lx} ${ly} Q${lx+20} ${ly-8} ${lx+28} ${ly-20} Q${lx+24} ${ly-28} ${lx+14} ${ly-24} Q${lx+4} ${ly-18} ${lx} ${ly}Z" fill="#4a8030" transform="rotate(${lr} ${lx} ${ly})" opacity=".85"/>`).join('')}
  <!-- 4 broad heart-shaped petals -->
  ${[0,90,180,270].map((a,i)=>`
    <path d="M104 112 Q${104-28} ${112-18} ${104-24} ${112-48} Q${104-8} ${112-62} 104 ${112-66} Q${104+8} ${112-62} ${104+24} ${112-48} Q${104+28} ${112-18} 104 112Z"
      fill="url(#epg)" opacity="${.88+.06*(i%2)}" stroke="#e0c000" stroke-width=".4" transform="rotate(${a} 104 112)"/>
    <!-- notch at petal tip -->
    <path d="M104 ${112-66} Q101 ${112-62} 104 ${112-60} Q107 ${112-62} 104 ${112-66}Z" fill="#f8f040" opacity=".5" transform="rotate(${a} 104 112)"/>`).join('')}
  <!-- cross-shaped stigma + stamens -->
  <circle cx="104" cy="112" r="10" fill="#f8f040"/>
  <line x1="100" y1="112" x2="108" y2="112" stroke="#806000" stroke-width="2.5"/>
  <line x1="104" y1="108" x2="104" y2="116" stroke="#806000" stroke-width="2.5"/>
  ${[...Array(8)].map((_,i)=>{const a=(i/8)*360;const r=7;const x=104+r*Math.sin(a*Math.PI/180),y=112-r*Math.cos(a*Math.PI/180);return `<line x1="104" y1="112" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#a08000" stroke-width="1.2"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.2" fill="#e0b010"/>`;}).join('')}
  <circle cx="104" cy="112" r="4" fill="#fff080"/>
</svg>`},

gentian(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gtg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3858e0"/><stop offset="50%" stop-color="#1838c0"/><stop offset="100%" stop-color="#081890"/></linearGradient>
    <radialGradient id="gtinner" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#8898f8"/><stop offset="100%" stop-color="#3858e0"/></radialGradient>
  </defs>
  <!-- compact mat plant -->
  <path d="M100 185 Q100 175 100 165" stroke="#3a7030" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <!-- leaves in rosette -->
  ${[[-30,0],[-18,-10],[0,-14],[18,-10],[30,0],[-24,8],[24,8]].map(([dx,dy])=>`<ellipse cx="${100+dx}" cy="${170+dy}" rx="${8+Math.abs(dx)*0.1}" ry="12" fill="#3a7830" transform="rotate(${dx*2} ${100+dx} ${170+dy})" opacity=".9"/>`).join('')}
  <!-- pair of stem leaves below flower -->
  <path d="M94 158 Q80 154 76 146 Q82 143 90 148 Q92 153 94 158Z" fill="#4a8838"/>
  <path d="M106 158 Q120 153 124 145 Q118 142 110 147 Q108 153 106 158Z" fill="#3a7830"/>
  <!-- trumpet bell - 5 fused petals -->
  <path d="M100 165 Q78 162 72 142 Q70 125 80 112 Q90 102 100 100 Q110 102 120 112 Q130 125 128 142 Q122 162 100 165Z" fill="url(#gtg)"/>
  <!-- petal ribs/striping -->
  ${[...Array(5)].map((_,i)=>{const a=-40+i*20; return `<path d="M100 162 Q${100+a*0.5} 138 ${100+a*0.7} 112" stroke="#6070f0" stroke-width="1" fill="none" opacity=".5"/>`;}).join('')}
  <!-- spots / markings at base of tube -->
  ${[...Array(6)].map((_,i)=>{const x=88+i*4.5, y=148;return `<circle cx="${x}" cy="${y}" r="2.5" fill="#0830b0" opacity=".5"/>`;}).join('')}
  <!-- 5 petal tips opening at mouth -->
  ${[0,72,144,216,288].map((a,i)=>`<path d="M100 102 Q${100-8} ${102-18} 100 ${102-24} Q${100+8} ${102-18} 100 102Z" fill="url(#gtinner)" opacity=".9" transform="rotate(${a} 100 102)"/>`).join('')}
  <!-- stamens  -->
  ${[...Array(5)].map((_,i)=>{const a=(i/5)*360;const r=8;const x=100+r*Math.sin(a*Math.PI/180),y=130-r*Math.cos(a*Math.PI/180)*0.5;return `<line x1="100" y1="135" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#c0d0ff" stroke-width="1.2"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="#e0e8ff"/>`;}).join('')}
  <circle cx="100" cy="135" r="4" fill="#90a8f8"/>
</svg>`},

cornflower(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="cfbg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#5878e8"/><stop offset="60%" stop-color="#3050c8"/><stop offset="100%" stop-color="#182080"/></radialGradient>
  </defs>
  <path d="M100 162 Q103 174 101 186" stroke="#5a9040" stroke-width="3.2" fill="none" stroke-linecap="round"/>
  <!-- thin linear leaves -->
  <path d="M100 170 Q82 163 75 150 Q80 147 90 153 Q95 161 100 170Z" fill="#4a8838"/>
  <path d="M102 176 Q120 168 126 155 Q122 152 113 158 Q108 167 102 176Z" fill="#3a7830"/>
  <!-- phyllaries (involucre) -->
  <ellipse cx="100" cy="138" rx="16" ry="12" fill="#4a6828"/>
  ${[...Array(14)].map((_,i)=>{const a=(i/14)*360;const r=15;const x=100+r*Math.sin(a*Math.PI/180),y=138-r*Math.cos(a*Math.PI/180)*0.7;return `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="3" ry="5" fill="#5a7838" transform="rotate(${a} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;}).join('')}
  <!-- outer ray florets — fringed, spreading -->
  ${[...Array(14)].map((_,i)=>{const a=(i/14)*360;
    return `<path d="M100 138 Q${100-10} ${138-32} ${100-8} ${138-52} Q100 ${138-58} ${100+8} ${138-52} Q${100+10} ${138-32} 100 138Z"
      fill="url(#cfbg)" opacity="${.85+.08*(i%2)}"
      transform="rotate(${a} 100 138)"/>
    <!-- fringe cuts -->
    <path d="M${100-3} ${138-50} L${100} ${138-58} L${100+3} ${138-50}" stroke="#8898f0" stroke-width=".8" fill="none" opacity=".6" transform="rotate(${a} 100 138)"/>`;
  }).join('')}
  <!-- disc florets - dense purple-black centre -->
  <circle cx="100" cy="138" r="16" fill="#1a1868"/>
  ${[...Array(24)].map((_,i)=>{const a=(i/24)*360;const r=10;const x=100+r*Math.sin(a*Math.PI/180),y=138-r*Math.cos(a*Math.PI/180)*0.85;return `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="2" ry="3" fill="#4060e0" opacity=".8" transform="rotate(${a} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;}).join('')}
  <circle cx="100" cy="138" r="6" fill="#282880"/>
</svg>`},

elderflower(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="efg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fffef0"/><stop offset="100%" stop-color="#f8f0c8"/></radialGradient>
  </defs>
  <!-- compound leaf stems -->
  <path d="M50 185 Q70 165 88 140 Q100 122 112 108" stroke="#4a7838" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <!-- pinnate leaves -->
  ${[[70,162,-30],[88,142,-20],[106,122,-10]].map(([lx,ly,lr])=>[[-18,0],[-9,-10],[0,-14],[9,-10],[18,0]].map(([dx,dy])=>`<ellipse cx="${lx+dx}" cy="${ly+dy}" rx="9" ry="13" fill="#3a7030" transform="rotate(${lr+dx*1.5} ${lx+dx} ${ly+dy})" opacity=".88"/>`).join('')).join('')}
  <!-- flat-topped corymb (head of tiny flowers) -->
  <!-- main umbel branches -->
  ${[[112,108],[130,90],[148,78],[118,80],[100,82]].map(([bx,by],bi)=>{
    const miniCount = bi===0?12:8;
    return `<path d="M112 108 Q${(112+bx)/2} ${(108+by)/2} ${bx} ${by}" stroke="#5a8840" stroke-width="1.8" fill="none"/>
    ${[...Array(miniCount)].map((_,i)=>{
      const a=(i/miniCount)*360; const mr=bi===0?16:10;
      const fx=bx+mr*Math.sin(a*Math.PI/180)*0.9, fy=by-mr*Math.cos(a*Math.PI/180)*0.4;
      return `<g transform="translate(${fx.toFixed(1)},${fy.toFixed(1)})">
        <path d="M${bx} ${by} Q${(bx+fx)/2} ${(by+fy)/2+3} ${fx.toFixed(1)} ${fy.toFixed(1)}" stroke="#6aaa50" stroke-width="1" fill="none" transform="translate(${-fx.toFixed(1)},${-fy.toFixed(1)})"/>
        ${[0,72,144,216,288].map(aa=>`<path d="M0 0 Q${-2.5} ${-6} 0 ${-9} Q${2.5} ${-6} 0 0Z" fill="url(#efg)" transform="rotate(${aa})"/>`).join('')}
        <circle cx="0" cy="0" r="1.8" fill="#f8f8e0"/>
        ${[0,72,144,216,288].map(aa=>{const ex=5*Math.sin(aa*Math.PI/180),ey=-5*Math.cos(aa*Math.PI/180);return `<line x1="0" y1="0" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" stroke="#d8d070" stroke-width=".8"/><circle cx="${ex.toFixed(1)}" cy="${ey.toFixed(1)}" r="1.2" fill="#f0e868"/>`;}).join('')}
      </g>`;
    }).join('')}`;
  }).join('')}
</svg>`},

protea(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="ptg" cx="50%" cy="60%" r="70%"><stop offset="0%" stop-color="#f0c8c0"/><stop offset="60%" stop-color="#d89090"/><stop offset="100%" stop-color="#a85060"/></radialGradient>
    <radialGradient id="ptcen" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f8f0e8"/><stop offset="100%" stop-color="#d0b8a0"/></radialGradient>
    <linearGradient id="ptstem" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#4a6830"/><stop offset="100%" stop-color="#688448"/></linearGradient>
  </defs>
  <path d="M100 170 Q98 178 96 186" stroke="url(#ptstem)" stroke-width="5" fill="none" stroke-linecap="round"/>
  <!-- tough leathery leaves -->
  <path d="M96 178 Q74 168 62 152 Q68 147 80 155 Q88 165 96 178Z" fill="#4a6830"/>
  <path d="M96 178 Q76 172 70 162" stroke="#3a5820" stroke-width="1" fill="none"/>
  <path d="M104 182 Q124 170 132 155 Q128 150 118 158 Q112 168 104 182Z" fill="#3a5828"/>
  <!-- huge involucral bracts - rigid, pointed, concave -->
  ${[0,36,72,108,144,180,216,252,288,324].map((a,i)=>`
    <path d="M100 145 Q${100-22+i%3} ${145+35} ${100-20} ${145+15} Q${100-8} ${145-22} 100 ${145-30} Q${100+8} ${145-22} ${100+20} ${145+15} Q${100+22-i%3} ${145+35} 100 145Z"
      fill="url(#ptg)" opacity="${.65+.06*(i%4)}" stroke="#c07878" stroke-width=".4"
      transform="rotate(${a} 100 145)"/>
    <!-- bract tip -->
    <path d="M100 ${145-30} Q99 ${145-36} 100 ${145-38} Q101 ${145-36} 100 ${145-30}Z" fill="#f0a080" opacity=".8" transform="rotate(${a} 100 145)"/>`).join('')}
  <!-- inner bracts smaller -->
  ${[0,45,90,135,180,225,270,315].map((a,i)=>`
    <path d="M100 145 Q${100-12} ${145+18} ${100-10} ${145+5} Q${100-4} ${145-16} 100 ${145-20} Q${100+4} ${145-16} ${100+10} ${145+5} Q${100+12} ${145+18} 100 145Z"
      fill="#e8b8a8" opacity=".8" transform="rotate(${a} 100 145)"/>`).join('')}
  <!-- fuzzy centre with mass of styles -->
  <circle cx="100" cy="145" r="28" fill="url(#ptcen)"/>
  <circle cx="100" cy="145" r="22" fill="#f0e8e0"/>
  <!-- style tips -->
  ${[...Array(32)].map((_,i)=>{const a=(i/32)*360;const r=16+Math.sin(i)*3;const x=100+r*Math.sin(a*Math.PI/180)*0.7,y=145-r*Math.cos(a*Math.PI/180)*0.7;return `<path d="M100 145 Q${x.toFixed(1)} ${y.toFixed(1)} ${(x+2*Math.sin(a*Math.PI/180)).toFixed(1)} ${(y-5*Math.cos(a*Math.PI/180)*0.5).toFixed(1)}" stroke="#c09080" stroke-width="1.3" fill="none"/><circle cx="${(x+2*Math.sin(a*Math.PI/180)).toFixed(1)}" cy="${(y-5*Math.cos(a*Math.PI/180)*0.5).toFixed(1)}" r="2" fill="#e8c0a8"/>`;}).join('')}
  <circle cx="100" cy="145" r="8" fill="#f8f0e8"/>
</svg>`},

lilac(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="llg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#e0c8f8"/><stop offset="100%" stop-color="#b090d8"/></radialGradient>
  </defs>
  <!-- woody stem -->
  <path d="M100 185 Q100 168 100 150 Q100 132 102 115" stroke="#7a5838" stroke-width="5" fill="none" stroke-linecap="round"/>
  <!-- heart-shaped leaves -->
  <path d="M96 168 Q72 158 62 140 Q68 135 80 143 Q88 154 96 168Z" fill="#3a7030"/>
  <path d="M104 172 Q128 160 136 143 Q130 138 120 146 Q113 157 104 172Z" fill="#2e6828"/>
  <path d="M99 158 Q76 148 68 132 Q74 127 86 135 Q92 146 99 158Z" fill="#3a7030" opacity=".8"/>
  <!-- large conical panicle -->
  <!-- branch structure -->
  <path d="M102 115 Q95 100 88 85 Q82 72 80 60" stroke="#8a6848" stroke-width="2.5" fill="none"/>
  <path d="M102 115 Q108 100 114 86 Q120 72 122 60" stroke="#7a5838" stroke-width="2" fill="none"/>
  <path d="M102 115 Q102 98 102 82 Q102 68 102 55" stroke="#8a6848" stroke-width="2.2" fill="none"/>
  <!-- tiny 4-petalled florets scattered densely -->
  ${[...Array(60)].map((_,i)=>{
    const seed=i*2654435761;
    const t=(seed%100)/100; const s2=((seed>>8)%100)/100;
    // distribute along panicle shape
    const h=t*130+40; const maxW=20+Math.sin(t*Math.PI)*28;
    const xoff=(s2-0.5)*maxW*2;
    const fx=102+xoff, fy=h;
    if(fy>120||fy<40) return '';
    return `<g transform="translate(${fx.toFixed(1)},${fy.toFixed(1)})">
      ${[0,90,180,270].map(a=>`<path d="M0 0 Q${-3} ${-5} 0 ${-8} Q${3} ${-5} 0 0Z" fill="url(#llg)" transform="rotate(${a})"/>`).join('')}
      <circle cx="0" cy="0" r="1.8" fill="#f0e8ff"/>
    </g>`;
  }).join('')}
</svg>`},

moonflower(s=200){
/* Ipomoea alba - night-blooming large white trumpet */
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="mfg" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#ffffff"/><stop offset="60%" stop-color="#f0f5ff"/><stop offset="100%" stop-color="#d8e8f8"/></radialGradient>
    <radialGradient id="mfcen" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f8f5e0"/><stop offset="100%" stop-color="#e8d8a0"/></radialGradient>
  </defs>
  <!-- twining vine stems -->
  <path d="M25 185 Q40 165 58 142 Q76 118 90 100 Q108 80 125 62" stroke="#3a7030" stroke-width="2.8" fill="none" stroke-linecap="round"/>
  <path d="M42 185 Q56 168 70 150" stroke="#2e6028" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <!-- heart-shaped leaves -->
  ${[[55,145,-25],[82,118,-15],[108,92,5],[130,68,20]].map(([lx,ly,lr])=>`
    <path d="M${lx} ${ly} Q${lx-18} ${ly-8} ${lx-14} ${ly-24} Q${lx-4} ${ly-34} ${lx} ${ly-34} Q${lx+4} ${ly-34} ${lx+14} ${ly-24} Q${lx+18} ${ly-8} ${lx} ${ly}Z"
      fill="#3a7030" transform="rotate(${lr} ${lx} ${ly})" opacity=".85"/>
    <path d="M${lx} ${ly} Q${lx} ${ly-18} ${lx} ${ly-34}" stroke="#2e5820" stroke-width=".7" fill="none" transform="rotate(${lr} ${lx} ${ly})"/>`).join('')}
  <!-- large 5-pointed star-shaped trumpet -->
  <!-- pleated tube -->
  ${[0,72,144,216,288].map((a,i)=>`
    <path d="M125 62 Q${125-30} ${62+20} ${125-28} ${62-20} Q${125-10} ${62-50} 125 ${62-60} Q${125+10} ${62-50} ${125+28} ${62-20} Q${125+30} ${62+20} 125 62Z"
      fill="url(#mfg)" stroke="#e0ecff" stroke-width=".5" opacity="${.85+.08*(i%2)}"
      transform="rotate(${a} 125 62)"/>
    <!-- pleat crease -->
    <path d="M125 62 L125 ${62-60}" stroke="#c8d8f0" stroke-width=".7" fill="none" opacity=".3" transform="rotate(${a} 125 62)"/>`).join('')}
  <!-- centre details -->
  <circle cx="125" cy="62" r="16" fill="url(#mfcen)"/>
  <!-- star-shaped stigma -->
  ${[0,72,144,216,288].map((a,i)=>{const r=10;const x=125+r*Math.sin(a*Math.PI/180)*0.5,y=62-r*Math.cos(a*Math.PI/180)*0.5;return `<line x1="125" y1="62" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#d8c870" stroke-width="2"/>`;}).join('')}
  ${[...Array(5)].map((_,i)=>{const a=(i/5)*360;const r=12;const x=125+r*Math.sin(a*Math.PI/180),y=62-r*Math.cos(a*Math.PI/180);return `<line x1="125" y1="62" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#b0b850" stroke-width="1.2"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.5" fill="#d8d060"/>`;}).join('')}
  <circle cx="125" cy="62" r="5" fill="#f8f080"/>
  <!-- bud on second vine -->
  <path d="M68 152 Q65 142 66 132 Q68 126 70 132 Q72 140 70 150Z" fill="#5a9040"/>
  <path d="M66 135 Q64 128 66 124 Q70 120 72 124 Q70 130 68 136Z" fill="#d0e8c0"/>
</svg>`},

strelitzia(s=200){
/* Bird of Paradise */
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="stg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f09020"/><stop offset="100%" stop-color="#d05808"/></linearGradient>
    <linearGradient id="stg2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#3048b8"/><stop offset="100%" stop-color="#1828a0"/></linearGradient>
    <linearGradient id="ststem" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#3a6830"/><stop offset="100%" stop-color="#588848"/></linearGradient>
  </defs>
  <!-- long sturdy stem -->
  <path d="M88 185 Q90 162 94 138 Q98 115 105 95" stroke="url(#ststem)" stroke-width="5.5" fill="none" stroke-linecap="round"/>
  <!-- large paddle leaves -->
  <path d="M82 178 Q48 160 30 135 Q38 128 55 138 Q68 152 82 178Z" fill="#2e6828"/>
  <path d="M82 178 Q50 165 40 148" stroke="#1e5018" stroke-width="1" fill="none"/>
  <path d="M94 170 Q130 150 148 126 Q140 120 126 132 Q114 148 94 170Z" fill="#246020" opacity=".9"/>
  <!-- spathe (boat-shaped bract) -->
  <path d="M105 95 Q115 90 138 88 Q155 90 162 98 Q158 110 148 115 Q135 118 118 112 Q105 106 105 95Z"
    fill="#3a6830" stroke="#2a5020" stroke-width="1"/>
  <!-- orange sepals (3) emerging from spathe -->
  <path d="M118 95 Q125 78 132 62 Q135 52 130 45 Q126 40 122 46 Q118 54 118 70 Q118 82 118 95Z"
    fill="url(#stg1)"/>
  <path d="M126 93 Q136 76 144 60 Q148 50 143 43 Q139 38 135 44 Q131 52 130 68 Q128 80 126 93Z"
    fill="#e88010" opacity=".9"/>
  <path d="M110 97 Q114 80 116 62 Q116 52 111 47 Q107 43 105 50 Q104 58 106 72 Q108 84 110 97Z"
    fill="#f0a030" opacity=".85"/>
  <!-- blue arrow-shaped petals (2) -->
  <path d="M122 90 Q128 75 138 60 Q132 55 124 60 Q116 70 114 85 Q115 90 122 90Z"
    fill="url(#stg2)"/>
  <path d="M122 90 Q116 76 110 62 Q117 57 124 62 Q130 72 130 86 Q128 90 122 90Z"
    fill="#2840c0" opacity=".9"/>
  <!-- white at base of petals -->
  <path d="M122 90 Q120 84 120 78 Q122 74 124 78 Q124 84 122 90Z" fill="#f0f8ff" opacity=".6"/>
</svg>`},

allium(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="allig" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#d0a8e8"/><stop offset="100%" stop-color="#9060c0"/></radialGradient>
  </defs>
  <!-- tall sturdy stem -->
  <path d="M100 185 L100 102" stroke="#5a9848" stroke-width="5.5" fill="none" stroke-linecap="round"/>
  <!-- glaucous strap leaves -->
  <path d="M96 178 Q70 165 56 142 Q63 137 76 147 Q86 161 96 178Z" fill="#4a8848"/>
  <path d="M104 182 Q128 168 140 145 Q134 140 122 150 Q114 165 104 182Z" fill="#3a7838"/>
  <!-- globose head - ~80 tiny star florets -->
  <circle cx="100" cy="78" r="36" fill="none"/>
  ${[...Array(80)].map((_,i)=>{
    const seed=i*1234567+i*i;
    const phi = Math.acos(1 - 2*(i+0.5)/80);
    const theta = Math.PI * (1+Math.sqrt(5)) * i;
    const r=30;
    const x=100+r*Math.sin(phi)*Math.cos(theta), y=78+r*Math.cos(phi)*0.7;
    if(y>115) return '';
    const visible = y<78; // front hemisphere
    return `<g transform="translate(${x.toFixed(1)},${y.toFixed(1)})">
      ${[0,60,120,180,240,300].map(a=>`<path d="M0 0 Q${-2} ${-5} 0 ${-8} Q${2} ${-5} 0 0Z" fill="${visible?'#c890e0':'#9060b0'}" opacity="${visible?.9:.55}" transform="rotate(${a})"/>`).join('')}
      <circle cx="0" cy="0" r="${visible?1.8:1.2}" fill="${visible?'#f0e0ff':'#c0a0d8'}" opacity="${visible?.95:.6}"/>
    </g>`;
  }).join('')}
  <!-- stem joining sphere -->
  <circle cx="100" cy="78" r="6" fill="#4a8840"/>
</svg>`},

pinkpearlginger(s=200){
/* Hedychium - Ginger Lily */
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glg" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#fff0f8"/><stop offset="60%" stop-color="#f8c8e0"/><stop offset="100%" stop-color="#e898c0"/></radialGradient>
    <linearGradient id="glstem" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#4a8040"/><stop offset="100%" stop-color="#6aaa58"/></linearGradient>
  </defs>
  <!-- robust pseudostem -->
  <path d="M100 185 L100 110" stroke="url(#glstem)" stroke-width="8" fill="none" stroke-linecap="round"/>
  <!-- lanceolate leaves sheathing stem -->
  <path d="M96 178 Q58 162 44 136 Q52 130 68 142 Q82 158 96 178Z" fill="#3a8030"/>
  <path d="M96 178 Q62 166 54 150" stroke="#2a6020" stroke-width="1.2" fill="none"/>
  <path d="M104 172 Q142 155 154 130 Q147 124 132 136 Q118 152 104 172Z" fill="#2e7028" opacity=".9"/>
  <!-- dense spike of flowers -->
  <!-- bracts overlapping -->
  ${[[100,135,0],[90,122,-8],[110,120,8],[96,108,-5],[104,106,5],[98,92,-3],[102,90,3]].map(([bx,by,tilt],bi)=>`
    <path d="M${bx} ${by} Q${bx-12} ${by-5} ${bx-10} ${by-16} Q${bx-2} ${by-22} ${bx} ${by-22} Q${bx+2} ${by-22} ${bx+10} ${by-16} Q${bx+12} ${by-5} ${bx} ${by}Z"
      fill="#c06890" opacity="${.7+.05*bi}" transform="rotate(${tilt} ${bx} ${by})"/>
    <!-- emerging flower from bract -->
    <g transform="translate(${bx+12} ${by-12}) rotate(${25+tilt})">
      <!-- labellum (large lip) -->
      <path d="M0 0 Q-12 -8 -10 -22 Q-2 -30 0 -30 Q2 -30 10 -22 Q12 -8 0 0Z" fill="url(#glg)" opacity=".95"/>
      <!-- 2 lateral petals -->
      <path d="M0 -5 Q-16 -12 -18 -22 Q-10 -28 -6 -22 Q-4 -14 0 -5Z" fill="#f8d8ec" opacity=".85"/>
      <path d="M0 -5 Q16 -12 18 -22 Q10 -28 6 -22 Q4 -14 0 -5Z" fill="#f8d8ec" opacity=".85"/>
      <!-- stamen -->
      <line x1="0" y1="-2" x2="0" y2="-25" stroke="#f89898" stroke-width="1.8"/>
      <circle cx="0" cy="-25" r="3" fill="#f8d0e0"/>
      <circle cx="0" cy="-25" r="1.5" fill="#ffb8d0"/>
    </g>`).join('')}
</svg>`},

bluebonnet(s=200){
/* Lupinus texensis - Texas Bluebonnet */
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bbog" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#9098f8"/><stop offset="60%" stop-color="#5060d8"/><stop offset="100%" stop-color="#2030a8"/></radialGradient>
  </defs>
  <!-- hairy stem -->
  <path d="M100 185 Q100 170 100 155 Q100 138 100 122" stroke="#5a9040" stroke-width="4" fill="none" stroke-linecap="round"/>
  <!-- stem hairs -->
  ${[...Array(8)].map((_,i)=>{const y=170-i*6;return `<line x1="100" y1="${y}" x2="${95+i%3}" y2="${y-4}" stroke="#4a8030" stroke-width=".8" opacity=".5"/>`;}).join('')}
  <!-- palmate leaves (5 leaflets radiating) -->
  ${[[96,178],[97,163]].map(([lx,ly])=>[0,72,144,216,288].map((a,i)=>`<path d="M${lx} ${ly} Q${lx+8*Math.sin(a*Math.PI/180)-2} ${ly-18*Math.cos(a*Math.PI/180)} ${lx+12*Math.sin(a*Math.PI/180)} ${ly-28*Math.cos(a*Math.PI/180)} Q${lx+6*Math.sin(a*Math.PI/180)+2} ${ly-22*Math.cos(a*Math.PI/180)} ${lx} ${ly}Z" fill="${i%2===0?'#4a8838':'#3a7030'}" opacity=".88"/>`).join('')).join('')}
  <!-- raceme of pea flowers -->
  ${[[100,122,0],[92,108,-10],[108,106,10],[96,92,-8],[104,90,8],[100,76,0],[98,62,-5]].map(([fx,fy,tilt],fi)=>`
    <g transform="translate(${fx},${fy}) rotate(${tilt})">
      <!-- keel -->
      <path d="M0 0 Q-12 -5 -12 -16 Q-4 -22 0 -20 Q4 -22 12 -16 Q12 -5 0 0Z"
        fill="url(#bbog)" opacity="${.9-fi*.02}"/>
      <!-- wings -->
      <path d="M-8 -10 Q-18 -14 -20 -22 Q-14 -26 -10 -20 Q-8 -16 -8 -10Z" fill="#7080e8" opacity=".85"/>
      <path d="M8 -10 Q18 -14 20 -22 Q14 -26 10 -20 Q8 -16 8 -10Z" fill="#7080e8" opacity=".85"/>
      <!-- banner (standard) -->
      <path d="M0 -2 Q-10 -10 -8 -22 Q-2 -28 0 -26 Q2 -28 8 -22 Q10 -10 0 -2Z"
        fill="#8898f8" opacity=".9"/>
      <!-- white spot on banner -->
      <circle cx="0" cy="-16" r="4" fill="white" opacity=".7"/>
      <circle cx="0" cy="-16" r="2.5" fill="#f0e8ff" opacity=".9"/>
    </g>`).join('')}
</svg>`},

ranunculus(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="rngPetal" cx="50%" cy="40%" r="65%"><stop offset="0%" stop-color="#ffb188"/><stop offset="55%" stop-color="#ff7a4e"/><stop offset="100%" stop-color="#d94b22"/></radialGradient>
    <radialGradient id="rngCore" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#7d1a10"/><stop offset="100%" stop-color="#421008"/></radialGradient>
  </defs>
  <path d="M100 186 Q97 162 98 138" stroke="#4d8d3d" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M96 166 Q77 158 69 145 Q84 147 96 166Z" fill="#5ea048"/>
  <path d="M102 156 Q124 147 133 132 Q118 135 102 156Z" fill="#4a8738"/>
  ${[0,30,60,90,120,150,180,210,240,270,300,330].map(a=>`
    <ellipse cx="100" cy="92" rx="24" ry="58" fill="url(#rngPetal)" transform="rotate(${a} 100 92)" opacity=".94"/>`).join('')}
  ${[15,60,105,150,195,240,285,330].map(a=>`
    <ellipse cx="100" cy="92" rx="18" ry="42" fill="#ff9a70" transform="rotate(${a} 100 92)" opacity=".95"/>`).join('')}
  ${[0,45,90,135,180,225,270,315].map(a=>`
    <ellipse cx="100" cy="92" rx="12" ry="26" fill="#ffbf97" transform="rotate(${a} 100 92)" opacity=".92"/>`).join('')}
  <circle cx="100" cy="92" r="18" fill="url(#rngCore)"/>
  <circle cx="100" cy="92" r="9" fill="#f6d45c"/>
</svg>`;},

nasturtium(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="nasPetal" cx="50%" cy="30%" r="80%"><stop offset="0%" stop-color="#ffd067"/><stop offset="65%" stop-color="#ff9340"/><stop offset="100%" stop-color="#d9571e"/></radialGradient>
  </defs>
  <path d="M102 184 Q100 156 104 126" stroke="#5c9842" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M98 153 Q72 146 60 126 Q77 128 98 153Z" fill="#6fb057"/>
  <path d="M106 142 Q136 136 150 117 Q130 118 106 142Z" fill="#4f8b3d"/>
  <circle cx="66" cy="132" r="22" fill="#5d9d44"/>
  <circle cx="66" cy="132" r="4" fill="#84c66e"/>
  <circle cx="138" cy="118" r="18" fill="#5b983f"/>
  <circle cx="138" cy="118" r="3.5" fill="#84c66e"/>
  ${[-72,-20,28,80,132].map(a=>`
    <ellipse cx="100" cy="86" rx="24" ry="42" fill="url(#nasPetal)" transform="rotate(${a} 100 86)" opacity=".96"/>`).join('')}
  <circle cx="100" cy="86" r="11" fill="#b71d14"/>
  <path d="M101 90 Q120 100 134 128" stroke="#d94b22" stroke-width="2.4" fill="none" stroke-linecap="round"/>
</svg>`;},

bleedingheart(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bhHeart" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ffb0ca"/><stop offset="100%" stop-color="#d85f8d"/></linearGradient>
  </defs>
  <path d="M40 64 Q92 34 148 70" stroke="#7db06c" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M82 180 Q86 156 90 128" stroke="#6a9b54" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M88 154 Q67 149 55 134 Q72 136 88 154Z" fill="#72ab59"/>
  ${[[70,86],[94,76],[118,82],[138,98]].map(([x,y],i)=>`
    <g transform="translate(${x} ${y}) rotate(${i%2===0?-8:8})">
      <path d="M0 0 C-9 -14 -24 -16 -28 -4 C-31 8 -18 18 0 33 C18 18 31 8 28 -4 C24 -16 9 -14 0 0Z" fill="url(#bhHeart)"/>
      <path d="M0 33 L0 48" stroke="#f3f1e5" stroke-width="3" stroke-linecap="round"/>
    </g>`).join('')}
</svg>`;},

edelweiss(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="edPetal" cx="50%" cy="50%" r="75%"><stop offset="0%" stop-color="#fdfdfd"/><stop offset="100%" stop-color="#cad2d9"/></radialGradient>
  </defs>
  <path d="M100 186 Q98 160 100 132" stroke="#5a9540" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M97 165 Q77 158 66 142 Q81 145 97 165Z" fill="#6eac57"/>
  <path d="M103 152 Q126 147 138 131 Q121 133 103 152Z" fill="#5f9947"/>
  ${[0,45,90,135,180,225,270,315].map(a=>`
    <ellipse cx="100" cy="92" rx="16" ry="42" fill="url(#edPetal)" transform="rotate(${a} 100 92)" opacity=".96"/>`).join('')}
  ${[22,67,112,157,202,247,292,337].map(a=>`
    <ellipse cx="100" cy="92" rx="11" ry="28" fill="#f6f8fa" transform="rotate(${a} 100 92)" opacity=".92"/>`).join('')}
  <circle cx="100" cy="92" r="15" fill="#f2d25d"/>
  ${[0,60,120,180,240,300].map(a=>`
    <circle cx="${100+Math.cos(a*Math.PI/180)*10}" cy="${92+Math.sin(a*Math.PI/180)*10}" r="2.5" fill="#8b6a18"/>`).join('')}
</svg>`;},

plumeria(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="plPetal" cx="50%" cy="52%" r="70%"><stop offset="0%" stop-color="#ffe377"/><stop offset="35%" stop-color="#fff3ce"/><stop offset="100%" stop-color="#f5f6f1"/></radialGradient>
  </defs>
  <path d="M100 186 Q99 160 102 130" stroke="#5c8f48" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M98 156 Q76 149 64 133 Q80 136 98 156Z" fill="#5f9547"/>
  <path d="M104 145 Q128 139 140 123 Q123 125 104 145Z" fill="#4f803a"/>
  ${[-90,-18,54,126,198].map(a=>`
    <ellipse cx="100" cy="90" rx="24" ry="52" fill="url(#plPetal)" transform="rotate(${a} 100 90)" opacity=".98"/>`).join('')}
  <circle cx="100" cy="90" r="12" fill="#ffd35a"/>
</svg>`;},

waterhyacinth(s=200){
return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="whPetal" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d9c8ff"/><stop offset="100%" stop-color="#7b69d8"/></linearGradient>
  </defs>
  <ellipse cx="100" cy="168" rx="54" ry="16" fill="#3d8c76" opacity=".88"/>
  <path d="M100 172 Q100 146 100 118" stroke="#63a44c" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M96 154 Q74 150 60 136 Q78 136 96 154Z" fill="#6fb257"/>
  <path d="M104 144 Q129 141 144 127 Q125 128 104 144Z" fill="#5a9846"/>
  ${[0,60,120,180,240,300].map(a=>`
    <ellipse cx="100" cy="94" rx="17" ry="34" fill="url(#whPetal)" transform="rotate(${a} 100 94)" opacity=".96"/>`).join('')}
  <ellipse cx="100" cy="94" rx="11" ry="22" fill="#f0ebff" opacity=".92"/>
  <circle cx="100" cy="78" r="5" fill="#f6df53"/>
  <path d="M100 70 Q108 64 117 66" stroke="#5d4ab2" stroke-width="2" fill="none" stroke-linecap="round"/>
</svg>`;},
};
SVGS['rosagallica'] = (s=200) => {
  return `<svg width="${s}" height="${s}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="rg_gal1" cx="50%" cy="40%" r="65%"><stop offset="0%" stop-color="#e84070"/><stop offset="100%" stop-color="#a01030"/></radialGradient>
    <radialGradient id="rg_gal2" cx="55%" cy="45%" r="60%"><stop offset="0%" stop-color="#f56088"/><stop offset="100%" stop-color="#b82048"/></radialGradient>
    <linearGradient id="rg_gal_stem" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#2a5828"/><stop offset="100%" stop-color="#3a8030"/></linearGradient>
  </defs>
  <!-- stem with prickles -->
  <path d="M100 155 Q98 172 92 190" stroke="url(#rg_gal_stem)" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M98 165 L94 163" stroke="#2a5828" stroke-width="1"/>
  <path d="M99 175 L103 173" stroke="#2a5828" stroke-width="1"/>
  <!-- foliage -->
  <path d="M96 168 Q75 155 68 140 Q84 145 96 168Z" fill="#3a7030" opacity=".9"/>
  <path d="M104 172 Q125 158 132 142 Q115 148 104 172Z" fill="#2e6828" opacity=".85"/>
  <!-- dense petals of the gallica rose -->
  ${[0,45,90,135,180,225,270,315].map(a => `
    <path d="M100 135 Q70 125 65 100 Q65 75 100 70 Q135 75 135 100 Q130 125 100 135Z"
      fill="url(#rg_gal2)" opacity=".6" transform="rotate(${a} 100 100) scale(0.9)"/>`).join('')}
  ${[22,67,112,157,202,247,292,337].map(a => `
    <path d="M100 125 Q80 118 75 100 Q75 85 100 80 Q125 85 125 100 Q120 118 100 125Z"
      fill="url(#rg_gal1)" opacity=".8" transform="rotate(${a} 100 100) scale(0.8)"/>`).join('')}
  <!-- centremost petals -->
  <path d="M100 115 Q88 110 88 100 Q88 90 100 88 Q112 90 112 100 Q112 110 100 115Z" fill="#d03060"/>
  <path d="M100 108 Q94 105 94 100 Q94 96 100 95 Q106 96 106 100 Q106 105 100 108Z" fill="#e85080"/>
  <!-- bright yellow stamens typical of gallica -->
  ${[...Array(12)].map((_,i)=>{
    const a=(i/12)*360; const r=10;
    const x=100+r*Math.sin(a*Math.PI/180), y=100-r*Math.cos(a*Math.PI/180);
    return `<circle cx="${x}" cy="${y}" r="2" fill="#f5d020"/><line x1="100" y1="100" x2="${x}" y2="${y}" stroke="#d4a010" stroke-width="0.8"/>`;
  }).join('')}
  <circle cx="100" cy="100" r="4" fill="#f0c030"/>
  <text x="10" y="195" font-size="7" fill="var(--text3)" opacity="0.5">Rosa gallica — Ultra-realistic mode</text>
</svg>`;
};
