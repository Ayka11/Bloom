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

const flowers = [
  {
    "id": "rose",
    "name": "Rose",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Rosa",
      "species": "damascena"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "The queen of flowers — cherished 5,000 years for beauty, fragrance, and extraordinary medicinal oil.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Rich, well-drained",
      "diff": "Medium",
      "season": "Summer",
      "origin": "Persia / Middle East"
    },
    "uses": [
      "Aromatherapy",
      "Skincare",
      "Culinary",
      "Medicine",
      "Perfumery"
    ],
    "props": [
      "Anti-inflammatory",
      "Antioxidant",
      "Antidepressant",
      "Astringent"
    ],
    "facts": [
      "Rose water has been used in food and cosmetics for over 2,000 years.",
      "A single rose petal contains more than 300 distinct aromatic compounds.",
      "The world's oldest living rose bush grows on Hildesheim Cathedral — it's over 1,000 years old.",
      "Rose hips contain 20× more Vitamin C than oranges."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "freesia",
    "name": "Freesia",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Freesia",
      "species": "refracta"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Spring",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "Delicate, sweetly fragrant blooms in a rainbow of colors, beloved in bouquets and gardens alike.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Spring",
      "origin": "South Africa"
    },
    "uses": [
      "Cut flowers",
      "Perfumery"
    ],
    "props": [
      "Fragrant",
      "Long-lasting cut"
    ],
    "facts": [
      "Freesias symbolize innocence and friendship.",
      "Each stem can bear up to 12 flowers.",
      "Named after German botanist Friedrich Freese.",
      "Popular in wedding bouquets."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "camellia",
    "name": "Camellia",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Camellia",
      "species": "japonica"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Winter–Spring",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Glossy evergreen shrubs with rose-like blooms, prized in Asian gardens for centuries.",
    "care": {
      "water": "Moderate",
      "sun": "Partial shade",
      "soil": "Acidic, well-drained",
      "diff": "Medium",
      "season": "Winter–Spring",
      "origin": "East Asia"
    },
    "uses": [
      "Ornamental",
      "Tea (C. sinensis)"
    ],
    "props": [
      "Antioxidant",
      "Anti-inflammatory"
    ],
    "facts": [
      "Camellias can live for over 100 years.",
      "Symbol of admiration in China.",
      "Tea is made from a related species, Camellia sinensis.",
      "Over 3,000 cultivars exist."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "snapdragon",
    "name": "Snapdragon",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Antirrhinum",
      "species": "majus"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Spring–Autumn",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Colorful spikes of dragon-shaped flowers that \"snap\" open when squeezed.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Spring–Autumn",
      "origin": "Mediterranean"
    },
    "uses": [
      "Ornamental",
      "Cut flowers"
    ],
    "props": [
      "Edible (mild)",
      "Attracts pollinators"
    ],
    "facts": [
      "Flowers resemble a dragon’s mouth.",
      "Symbolize grace and strength.",
      "Can self-seed in gardens.",
      "Available in nearly every color."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "lily",
    "name": "Lily",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Lilium",
      "species": "candidum"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "Majestic, trumpet-shaped blooms with a powerful fragrance, revered since antiquity.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Rich, well-drained",
      "diff": "Medium",
      "season": "Summer",
      "origin": "Mediterranean"
    },
    "uses": [
      "Ornamental",
      "Perfumery"
    ],
    "props": [
      "Fragrant",
      "Symbolic"
    ],
    "facts": [
      "Lilies are toxic to cats.",
      "Madonna lily is a symbol of purity.",
      "Bulbs used in ancient medicine.",
      "Over 100 species worldwide."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "aster",
    "name": "Aster",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Aster",
      "species": "amellus"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Autumn",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Star-shaped daisy relatives that bloom late into autumn, providing vital nectar for pollinators.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Autumn",
      "origin": "Europe/Asia"
    },
    "uses": [
      "Ornamental",
      "Pollinator support"
    ],
    "props": [
      "Late-blooming",
      "Attracts butterflies"
    ],
    "facts": [
      "Name means \"star\" in Greek.",
      "Over 180 species in the genus.",
      "Bloom when most flowers have faded.",
      "Used in traditional medicine."
    ],
    "cat": "wild",
    "tags": [
      "wild",
      "garden"
    ]
  },
  {
    "id": "zinnia",
    "name": "Zinnia",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Zinnia",
      "species": "elegans"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Summer–Autumn",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Bright, cheerful annuals in every color but blue, famous for their long-lasting blooms.",
    "care": {
      "water": "Low",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer–Autumn",
      "origin": "Mexico"
    },
    "uses": [
      "Ornamental",
      "Cut flowers"
    ],
    "props": [
      "Drought-tolerant",
      "Long bloom period"
    ],
    "facts": [
      "Named after German botanist Johann Zinn.",
      "NASA grew zinnias on the ISS.",
      "Attracts butterflies.",
      "Symbolizes lasting friendship."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "begonia",
    "name": "Begonia",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Begonia",
      "species": "semperflorens"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring–Autumn",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Shade-loving plants with waxy leaves and clusters of pink, red, or white flowers.",
    "care": {
      "water": "Moderate",
      "sun": "Partial shade",
      "soil": "Moist, well-drained",
      "diff": "Easy",
      "season": "Spring–Autumn",
      "origin": "Brazil"
    },
    "uses": [
      "Ornamental",
      "Houseplant"
    ],
    "props": [
      "Shade-tolerant",
      "Edible flowers"
    ],
    "facts": [
      "Over 1,800 species exist.",
      "Named after Michel Bégon.",
      "Flowers and leaves are edible.",
      "Popular for window boxes."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "fuchsia",
    "name": "Fuchsia",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Fuchsia",
      "species": "magellanica"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Summer–Autumn",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Elegant, pendulous flowers in pink, purple, and red, beloved by hummingbirds.",
    "care": {
      "water": "Moderate",
      "sun": "Partial shade",
      "soil": "Moist, fertile",
      "diff": "Medium",
      "season": "Summer–Autumn",
      "origin": "South America"
    },
    "uses": [
      "Ornamental",
      "Pollinator garden"
    ],
    "props": [
      "Attracts hummingbirds",
      "Edible berries"
    ],
    "facts": [
      "Named after botanist Leonhart Fuchs.",
      "Fuchsia berries are edible.",
      "Flowers symbolize confiding love.",
      "Over 100 species worldwide."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "salvia",
    "name": "Salvia",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Salvia",
      "species": "officinalis"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Indoor plants"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Aromatic herb with purple-blue flower spikes, essential in culinary and medicinal gardens.",
    "care": {
      "water": "Low",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Mediterranean"
    },
    "uses": [
      "Culinary",
      "Medicinal",
      "Ornamental"
    ],
    "props": [
      "Antimicrobial",
      "Anti-inflammatory"
    ],
    "facts": [
      "Name means \"to heal\" in Latin.",
      "Used since Roman times.",
      "Flowers attract bees.",
      "Over 900 species in the genus."
    ],
    "cat": "herbal",
    "tags": [
      "herbal"
    ]
  },
  {
    "id": "lavender",
    "name": "Lavender",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Lavandula",
      "species": "angustifolia"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Indoor plants"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Aromatic silver-purple spikes beloved by bees, healers, and perfumers across the Mediterranean world.",
    "care": {
      "water": "Low",
      "sun": "Full sun",
      "soil": "Sandy, alkaline",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Mediterranean"
    },
    "uses": [
      "Aromatherapy",
      "Sleep aid",
      "Culinary",
      "Perfumery",
      "Skincare"
    ],
    "props": [
      "Calming",
      "Antiseptic",
      "Analgesic",
      "Anti-fungal"
    ],
    "facts": [
      "The Latin name derives from \"lavare\" — to wash — Romans scented their baths with it.",
      "Lavender oil can reduce anxiety as effectively as some pharmaceutical medications.",
      "Lavender was stuffed into pillows in the Middle Ages to promote sleep.",
      "Bees collect more nectar from lavender than almost any other flower."
    ],
    "cat": "herbal",
    "tags": [
      "herbal"
    ]
  },
  {
    "id": "sunflower",
    "name": "Sunflower",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Helianthus",
      "species": "annuus"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Towering solar giants that track the sun in youth. Each \"flower\" is actually 2,000 tiny florets.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "North America"
    },
    "uses": [
      "Edible seeds",
      "Oil production",
      "Natural dye",
      "Bird food",
      "Cut flowers"
    ],
    "props": [
      "Diuretic",
      "Nutritious (Vitamin E)",
      "Anti-malarial"
    ],
    "facts": [
      "A sunflower head contains up to 2,000 tiny individual florets.",
      "Young sunflowers track the sun east-to-west each day — a behavior called heliotropism.",
      "The world's tallest sunflower reached 9.17 metres tall in Germany, 2014.",
      "Native Americans cultivated sunflowers for food, dye, and medicine for 5,000 years."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "lotus",
    "name": "Sacred Lotus",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Nelumbo",
      "species": "nucifera"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Rising pristine from mud — the lotus embodies purity across Hindu, Buddhist, and ancient Egyptian cultures.",
    "care": {
      "water": "Aquatic",
      "sun": "Full sun",
      "soil": "Heavy clay submerged",
      "diff": "Medium",
      "season": "Summer",
      "origin": "Asia"
    },
    "uses": [
      "Culinary (seeds, roots)",
      "Medicinal",
      "Religious",
      "Decoration"
    ],
    "props": [
      "Anti-bacterial",
      "Astringent",
      "Hemostatic",
      "Antioxidant"
    ],
    "facts": [
      "Lotus seeds can remain viable for over 1,300 years — the oldest recorded seed germination.",
      "The lotus surface has a self-cleaning structure that inspired modern nanotechnology.",
      "Every part of the lotus is edible — seeds, roots, leaves, flowers, and stamens.",
      "The lotus is the national flower of India and Vietnam."
    ],
    "cat": "aquatic",
    "tags": [
      "aquatic"
    ]
  },
  {
    "id": "chamomile",
    "name": "Chamomile",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Matricaria",
      "species": "chamomilla"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Indoor plants"
    ],
    "color": "Mixed",
    "bloom_season": "Spring–Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Gentle apple-scented daisy-like flowers. One of the world's oldest and most widely-used medicinal herbs.",
    "care": {
      "water": "Low-moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Spring–Summer",
      "origin": "Europe"
    },
    "uses": [
      "Herbal tea",
      "Skin soothing",
      "Sleep aid",
      "Anti-anxiety",
      "Digestive"
    ],
    "props": [
      "Calming",
      "Anti-inflammatory",
      "Antispasmodic",
      "Mild sedative"
    ],
    "facts": [
      "Chamomile tea is consumed at the rate of over 1 million cups daily worldwide.",
      "The name comes from Greek \"ground apple\" — describing its fresh apple scent.",
      "It has been used medicinally for at least 2,500 years in Egypt and Rome.",
      "Contains apigenin, a compound that binds the same brain receptors as benzodiazepines."
    ],
    "cat": "herbal",
    "tags": [
      "herbal"
    ]
  },
  {
    "id": "orchid",
    "name": "Moth Orchid",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Phalaenopsis",
      "species": "amabilis"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Year-round",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "The most diverse flowering plant family — 28,000 species have colonized every continent except Antarctica.",
    "care": {
      "water": "Low",
      "sun": "Bright indirect",
      "soil": "Bark/perlite mix",
      "diff": "Medium",
      "season": "Year-round",
      "origin": "Tropical Asia"
    },
    "uses": [
      "Ornamental",
      "Vanilla flavouring",
      "Salep drink",
      "Traditional medicine"
    ],
    "props": [
      "Antioxidant",
      "Anti-fatigue",
      "Immune-modulating"
    ],
    "facts": [
      "The orchid family is the largest of all flowering plant families with 28,000+ species.",
      "Vanilla — the world's most popular flavour — comes from a tropical orchid Vanilla planifolia.",
      "Some orchids mimic female insects so precisely that male bees attempt to mate with them.",
      "Darwin spent 35 years studying orchid pollination and wrote an entire book on the subject."
    ],
    "cat": "tropical",
    "tags": [
      "tropical"
    ]
  },
  {
    "id": "tulip",
    "name": "Tulip",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Tulipa",
      "species": "gesneriana"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Spring",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Elegant cup-shaped blooms that triggered the world's first speculative economic bubble in 1630s Netherlands.",
    "care": {
      "water": "Low",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Spring",
      "origin": "Central Asia"
    },
    "uses": [
      "Cut flowers",
      "Bulb gardens",
      "Edible petals",
      "Food dye"
    ],
    "props": [
      "Antioxidant",
      "Anti-inflammatory"
    ],
    "facts": [
      "\"Tulip mania\" of the 1630s saw bulbs sell for more than Amsterdam townhouses — history's first bubble.",
      "Tulips continue to grow up to 2.5 cm after being cut and placed in a vase.",
      "There are over 3,000 registered tulip varieties ranging from near-black to pure white.",
      "The Netherlands exports 4.3 billion tulip bulbs annually — roughly half the world's supply."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "hibiscus",
    "name": "Hibiscus",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Hibiscus",
      "species": "rosa-sinensis"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Fiery trumpet blooms in red, orange, and pink. Symbol of the tropics and cornerstone of herbal medicine worldwide.",
    "care": {
      "water": "Moderate-high",
      "sun": "Full sun",
      "soil": "Rich, well-drained",
      "diff": "Medium",
      "season": "Summer",
      "origin": "Asia"
    },
    "uses": [
      "Hibiscus tea",
      "Culinary",
      "Antihypertensive",
      "Hair oil",
      "Natural dye"
    ],
    "props": [
      "Antihypertensive",
      "Antioxidant",
      "Diuretic",
      "Vitamin C-rich"
    ],
    "facts": [
      "Hibiscus tea is one of the world's most consumed herbal beverages — beloved in Egypt, Mexico, and Sudan.",
      "Hibiscus is the national flower of Malaysia and the state flower of Hawaii.",
      "Clinical studies show hibiscus tea can significantly lower blood pressure in hypertensive patients.",
      "Each hibiscus flower lasts only a single day — but plants can bloom continuously for months."
    ],
    "cat": "tropical",
    "tags": [
      "tropical"
    ]
  },
  {
    "id": "daisy",
    "name": "Ox-eye Daisy",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Leucanthemum",
      "species": "vulgare"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "The archetypal wildflower — white rays and golden disc. It has symbolized innocence and new beginnings across centuries.",
    "care": {
      "water": "Low",
      "sun": "Full sun",
      "soil": "Any well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Europe"
    },
    "uses": [
      "Wild salads (petals)",
      "Medicinal (mild)",
      "Cut flowers",
      "Pollinator garden"
    ],
    "props": [
      "Mild anti-inflammatory",
      "Antispasmodic",
      "Mild diaphoretic"
    ],
    "facts": [
      "The \"he loves me, he loves me not\" petal-picking tradition dates back to medieval France.",
      "A single daisy head contains over 200 individual flowers — disc and ray florets combined.",
      "Daisy roots were eaten by British soldiers during the Crusades to suppress hunger.",
      "The word \"daisy\" comes from Old English \"dæges ēage\" meaning \"day's eye\" — it opens at dawn."
    ],
    "cat": "wild",
    "tags": [
      "wild"
    ]
  },
  {
    "id": "cherry_blossom",
    "name": "Cherry Blossom",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Prunus",
      "species": "serrulata"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Japan's sakura blooms for just one fleeting week — a living meditation on beauty and impermanence.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Moist, well-drained",
      "diff": "Medium",
      "season": "Spring",
      "origin": "Japan / China"
    },
    "uses": [
      "Ornamental",
      "Culinary (pickled petals & leaves)",
      "Sakura tea",
      "Cultural ceremonies"
    ],
    "props": [
      "Antioxidant",
      "Anti-inflammatory",
      "Skin brightening"
    ],
    "facts": [
      "Japan issues cherry blossom forecasts weeks in advance and millions travel to see them bloom.",
      "There are over 200 distinct cherry blossom varieties in Japan alone.",
      "The philosophy of \"mono no aware\" — bittersweet transience — is embodied in the sakura bloom.",
      "Salted cherry blossom petals are used in traditional wagashi sweets and sakura tea."
    ],
    "cat": "wild",
    "tags": [
      "wild",
      "garden"
    ]
  },
  {
    "id": "aloe",
    "name": "Aloe Vera",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Aloe",
      "species": "barbadensis"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Year-round",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "The \"plant of immortality\" to ancient Egyptians — a powerhouse succulent with 75+ active compounds.",
    "care": {
      "water": "Very low",
      "sun": "Bright indirect",
      "soil": "Sandy, well-drained",
      "diff": "Easy",
      "season": "Year-round",
      "origin": "Arabian Peninsula"
    },
    "uses": [
      "Skin burns",
      "Digestive aid",
      "Hair care",
      "Wound healing",
      "Sunburn relief"
    ],
    "props": [
      "Wound-healing",
      "Anti-bacterial",
      "Anti-inflammatory",
      "Moisturizing"
    ],
    "facts": [
      "Aloe vera gel is 99% water — the remaining 1% contains 75+ active compounds.",
      "It was called the \"plant of immortality\" and given as a funeral offering to Egyptian pharaohs.",
      "Alexander the Great reportedly conquered the island of Socotra to secure aloe for wounded soldiers.",
      "The global aloe vera market exceeds $13 billion annually."
    ],
    "cat": "succulent",
    "tags": [
      "succulent",
      "herbal"
    ]
  },
  {
    "id": "peony",
    "name": "Peony",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Paeonia",
      "species": "lactiflora"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Spring–Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Lush, voluptuous blooms with a fleeting perfume. Peonies have been cultivated in China for over 2,000 years.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Rich, deep",
      "diff": "Easy",
      "season": "Spring–Summer",
      "origin": "China"
    },
    "uses": [
      "Cut flowers",
      "Traditional medicine",
      "Culinary",
      "Perfumery"
    ],
    "props": [
      "Anti-inflammatory",
      "Analgesic",
      "Antispasmodic",
      "Antioxidant"
    ],
    "facts": [
      "Peonies can live for over 100 years without being divided or replanted.",
      "In Chinese medicine the root Bai Shao has been used 2,000 years for pain and liver conditions.",
      "The most full double peony varieties contain thousands of individual petals.",
      "Ants visiting peonies are attracted by nectar droplets — they don't actually help the flower open."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "passionflower",
    "name": "Passionflower",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Passiflora",
      "species": "incarnata"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Wildly exotic-looking vine with spectacular corona of filaments. Named by missionaries who saw Christian symbols in its structure.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "North America"
    },
    "uses": [
      "Anxiety relief",
      "Sleep aid",
      "Anti-spasm",
      "Herbal tea",
      "Ornamental"
    ],
    "props": [
      "Anxiolytic",
      "Sedative",
      "Antispasmodic",
      "Anti-convulsant"
    ],
    "facts": [
      "Spanish missionaries in the 1500s saw the Passion of Christ in the flower's 10 petals, crown, and nails.",
      "Clinical trials show passionflower extract to be comparable to low-dose benzodiazepines for anxiety.",
      "Native Americans of the Southeast used passionflower root as a sedative and for earaches.",
      "Its fruit — the maypop — is edible and used in traditional preserves across Appalachia."
    ],
    "cat": "wild",
    "tags": [
      "wild",
      "herbal"
    ]
  },
  {
    "id": "echinacea",
    "name": "Coneflower",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Echinacea",
      "species": "purpurea"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Indoor plants"
    ],
    "color": "Mixed",
    "bloom_season": "Summer–Autumn",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "North America's most celebrated medicinal herb. Drooping purple rays surround a spiny orange cone.",
    "care": {
      "water": "Low-moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer–Autumn",
      "origin": "North America"
    },
    "uses": [
      "Immune support",
      "Cold remedy",
      "Anti-viral",
      "Garden flower",
      "Pollinators"
    ],
    "props": [
      "Immunostimulant",
      "Anti-viral",
      "Anti-bacterial",
      "Anti-inflammatory"
    ],
    "facts": [
      "Echinacea was the most widely used plant medicine of Native American peoples.",
      "Clinical studies show echinacea can reduce the duration of colds by up to 1.4 days.",
      "The name comes from Greek \"echinos\" (hedgehog) — referring to its sharp spiny seed head.",
      "Over 400 million doses of echinacea are consumed globally each year."
    ],
    "cat": "herbal",
    "tags": [
      "herbal",
      "wild"
    ]
  },
  {
    "id": "marigold",
    "name": "Marigold",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Tagetes",
      "species": "erecta"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Summer–Autumn",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Bold, aromatic Mexican natives prized as companion plants, sacred offerings, and natural dye sources.",
    "care": {
      "water": "Low-moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer–Autumn",
      "origin": "Mexico"
    },
    "uses": [
      "Companion planting",
      "Natural dye",
      "Culinary",
      "Offerings",
      "Pest repellent"
    ],
    "props": [
      "Anti-fungal",
      "Antiseptic",
      "Anti-inflammatory",
      "Wound-healing"
    ],
    "facts": [
      "Marigolds are Mexico's iconic Día de los Muertos flower — guiding spirits home with their scent.",
      "Their roots release thiophenol compounds that repel soil nematodes and harmful insects.",
      "Marigold petals are used as a natural yellow food colourant and to enrich egg yolk colour.",
      "They bloom continuously from first planting to first frost — one of the longest-blooming annuals."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "herbal"
    ]
  },
  {
    "id": "jasmine",
    "name": "Jasmine",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Jasminum",
      "species": "officinale"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Few flowers match jasmine's heady night-scent. Prized across cultures for perfumery, tea, and poetry.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun to partial shade",
      "soil": "Well-drained",
      "diff": "Medium",
      "season": "Summer",
      "origin": "Western China / Himalayas"
    },
    "uses": [
      "Perfumery",
      "Jasmine tea",
      "Aromatherapy",
      "Garlands",
      "Skin oil"
    ],
    "props": [
      "Antidepressant",
      "Aphrodisiac",
      "Antiseptic",
      "Calming"
    ],
    "facts": [
      "One kilogram of jasmine absolute requires 8 million hand-picked flowers.",
      "Jasmine flowers open only at night, attracting night-flying moths as pollinators.",
      "Jasmine is the national flower of Pakistan, Indonesia, Syria, and the Philippines.",
      "Jasmine-scented green tea has been produced in China since the Song dynasty (960–1279 AD)."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "calendula",
    "name": "Calendula",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Calendula",
      "species": "officinalis"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Indoor plants"
    ],
    "color": "Mixed",
    "bloom_season": "Spring–Autumn",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Pot marigold — cheerful golden medicinal herb with extraordinary skin-healing powers used for 2,500 years.",
    "care": {
      "water": "Low-moderate",
      "sun": "Full sun",
      "soil": "Poor to moderate",
      "diff": "Easy",
      "season": "Spring–Autumn",
      "origin": "Southern Europe"
    },
    "uses": [
      "Skin salves",
      "Wound healing",
      "Culinary",
      "Natural dye",
      "Anti-fungal"
    ],
    "props": [
      "Wound-healing",
      "Anti-fungal",
      "Anti-inflammatory",
      "Antioxidant"
    ],
    "facts": [
      "Calendula petals were historically used as a saffron substitute called \"poor man's saffron\".",
      "During the American Civil War, calendula was used on battlefields to stop bleeding and prevent infection.",
      "Calendula cream is among the most clinically studied herbal skincare ingredients.",
      "Its flowers close at night and cloudy weather — Romans called it \"Calends\" as it always bloomed on the calend."
    ],
    "cat": "herbal",
    "tags": [
      "herbal",
      "garden"
    ]
  },
  {
    "id": "bluebell",
    "name": "Bluebell",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Hyacinthoides",
      "species": "non-scripta"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Carpets of violet-blue bells transform ancient British woodlands into ethereal blue oceans each spring.",
    "care": {
      "water": "Moderate",
      "sun": "Partial shade",
      "soil": "Moist, humus-rich",
      "diff": "Easy",
      "season": "Spring",
      "origin": "Western Europe"
    },
    "uses": [
      "Ornamental",
      "Woodland ecology",
      "Bulb starch (historical)",
      "Glue (historical)"
    ],
    "props": [
      "Mildly toxic (glycosides)",
      "Ecologically important"
    ],
    "facts": [
      "Bluebell woods are largely unique to Britain — over half the world's bluebells grow there.",
      "The UK's Wildlife and Countryside Act 1981 makes it illegal to pick or uproot wild bluebells.",
      "A single bluebell bulb can take 5-7 years to reach flowering size from seed.",
      "Bluebell sap was used in medieval England as glue for binding books and attaching arrow flights."
    ],
    "cat": "wild",
    "tags": [
      "wild"
    ]
  },
  {
    "id": "waterlily",
    "name": "Water Lily",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Nymphaea",
      "species": "alba"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Floating serenely on still waters — inspiration for Monet's most famous works and ancient Egyptian religion.",
    "care": {
      "water": "Aquatic",
      "sun": "Full sun",
      "soil": "Heavy clay submerged",
      "diff": "Medium",
      "season": "Summer",
      "origin": "Europe / Africa"
    },
    "uses": [
      "Ornamental",
      "Edible (rhizomes, seeds)",
      "Sacred",
      "Natural dye"
    ],
    "props": [
      "Mildly sedative",
      "Antispasmodic",
      "Anti-diarrheal",
      "Analgesic"
    ],
    "facts": [
      "Claude Monet created his famous Water Lilies series of 250+ paintings between 1896 and 1926.",
      "The blue lotus of the Nile was sacred in ancient Egypt and used in religious ceremonies.",
      "Victoria amazonica has leaves up to 3m wide that can support a child's weight.",
      "Water lily rhizomes were eaten by Native Americans and are still consumed in Asian cuisine."
    ],
    "cat": "aquatic",
    "tags": [
      "aquatic"
    ]
  },
  {
    "id": "snowdrop",
    "name": "Snowdrop",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Galanthus",
      "species": "nivalis"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Winter–Spring",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Brave little harbingers of spring — emerging through snow, they produce a unique antifreeze protein.",
    "care": {
      "water": "Moderate",
      "sun": "Partial shade",
      "soil": "Moist, humus-rich",
      "diff": "Easy",
      "season": "Winter–Spring",
      "origin": "Europe / Middle East"
    },
    "uses": [
      "Ornamental",
      "Galantamine (Alzheimer's drug)",
      "Ecological"
    ],
    "props": [
      "Contains galantamine (acetylcholinesterase inhibitor)",
      "Antifreeze proteins"
    ],
    "facts": [
      "Snowdrops contain galantamine — a compound now used in approved Alzheimer's disease treatments.",
      "They produce antifreeze proteins that allow them to push through frozen soil and snow.",
      "Snowdrop collecting (galanthophilia) is a serious hobby — rare bulbs sell for hundreds of pounds each.",
      "The Victorian tradition of \"snowdrop parties\" involved groups visiting gardens to admire early blooms."
    ],
    "cat": "wild",
    "tags": [
      "wild",
      "alpine"
    ]
  },
  {
    "id": "hellebore",
    "name": "Hellebore",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Helleborus",
      "species": "orientalis"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Winter–Spring",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Winter's dark jewel. Nodding leathery blooms in plum, slate, and cream that flower when all else sleeps.",
    "care": {
      "water": "Low-moderate",
      "sun": "Partial shade",
      "soil": "Rich, well-drained",
      "diff": "Easy",
      "season": "Winter–Spring",
      "origin": "Greece / Turkey"
    },
    "uses": [
      "Ornamental",
      "Historical medicine (purgative)",
      "Toxic (careful handling)"
    ],
    "props": [
      "Toxic (cardiac glycosides)",
      "Historical emetic"
    ],
    "facts": [
      "Hellebores are toxic but were used in ancient medicine — at great risk — as a treatment for insanity.",
      "The flowers nod downward — you must lift them to see their full beauty, a trait gardeners cherish.",
      "They are fully evergreen and will flower for 3–4 months through the coldest part of winter.",
      "The name comes from Greek \"hellein\" (to kill) and \"bora\" (food) — deadly when eaten."
    ],
    "cat": "wild",
    "tags": [
      "wild",
      "garden"
    ]
  },
  {
    "id": "iris",
    "name": "Bearded Iris",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Iris",
      "species": "germanica"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Intricate, sword-leaved aristocrats with falls, standards, and colourful beard. Named after the Greek goddess of the rainbow.",
    "care": {
      "water": "Low",
      "sun": "Full sun",
      "soil": "Well-drained, alkaline",
      "diff": "Easy",
      "season": "Spring",
      "origin": "Southern Europe"
    },
    "uses": [
      "Ornamental",
      "Orris root (perfumery)",
      "Dye",
      "Herbal medicine"
    ],
    "props": [
      "Orris root — fixative in 75% of all perfumes",
      "Anti-inflammatory (root)"
    ],
    "facts": [
      "The dried iris root (orris) is the fixative used in 75% of all perfumes and acts as a violet scent.",
      "Iris is the origin of the fleur-de-lis — symbol of French royalty since the 12th century.",
      "There are over 300 species of iris growing on every continent except Antarctica and South America.",
      "Iris flowers live only 2–3 days each, but a mature clump produces dozens of successive blooms."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "poppyField",
    "name": "Red Poppy",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Papaver",
      "species": "rhoeas"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Scarlet tissue-paper petals with velvety black hearts. Symbol of remembrance and the first flowers after the Great War.",
    "care": {
      "water": "Low",
      "sun": "Full sun",
      "soil": "Any disturbed ground",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Europe / Middle East"
    },
    "uses": [
      "Medicinal (seed oil)",
      "Culinary (seeds)",
      "Cut flowers",
      "Symbol of remembrance"
    ],
    "props": [
      "Mildly sedative (alkaloids)",
      "Antitussive",
      "Rich in omega oils (seeds)"
    ],
    "facts": [
      "Red poppies bloomed across WWI battlefields of Flanders due to the chalky, disturbed soil.",
      "John McCrae's 1915 poem \"In Flanders Fields\" established the poppy as a symbol of remembrance.",
      "A single poppy plant can produce up to 17,000 seeds — explaining their explosive recolonization.",
      "Poppy seeds can remain dormant in soil for up to 100 years before germinating when soil is disturbed."
    ],
    "cat": "wild",
    "tags": [
      "wild"
    ]
  },
  {
    "id": "wisteria",
    "name": "Wisteria",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Wisteria",
      "species": "sinensis"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Cascading waterfalls of violet-blue fragrant racemes draping old stone walls. One of gardening's most spectacular spectacles.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained, fertile",
      "diff": "Hard",
      "season": "Spring",
      "origin": "China / Japan"
    },
    "uses": [
      "Ornamental",
      "Perfumery",
      "Edible flowers (cooked)"
    ],
    "props": [
      "Seeds and pods mildly toxic",
      "Anti-allergic (research)"
    ],
    "facts": [
      "A wisteria in Sierra Madre, California covers nearly an acre — it's over 125 years old.",
      "Wisteria can exert enough pressure to crack stone walls and foundations over decades.",
      "It takes wisteria 3–7 years from planting to first bloom — patience is essential.",
      "Japanese cherry blossom festivals include \"fuji matsuri\" — wisteria viewing festivals — in late April."
    ],
    "cat": "wild",
    "tags": [
      "garden",
      "wild"
    ]
  },
  {
    "id": "cactusFlower",
    "name": "Saguaro Cactus",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Carnegiea",
      "species": "gigantea"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring (night bloom)",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Arizona's iconic column cactus produces the most spectacular bloom in the desert world — but for only one night.",
    "care": {
      "water": "Very low",
      "sun": "Full sun",
      "soil": "Sandy, rocky",
      "diff": "Easy",
      "season": "Spring (night bloom)",
      "origin": "Sonoran Desert, USA"
    },
    "uses": [
      "Edible fruit",
      "Seeds",
      "Indigenous food source",
      "Ornamental"
    ],
    "props": [
      "Nutritious (seeds 30% fat)",
      "Antifungal (skin)"
    ],
    "facts": [
      "The saguaro cactus only blooms at night, relying on bats and bees for pollination.",
      "It takes a saguaro 75 years to grow its first arm — a 10-arm cactus may be 200 years old.",
      "The saguaro is protected by Arizona law — cutting one down carries a potential felony charge.",
      "A large saguaro can absorb 750 litres of water in a single rainfall and store it for months."
    ],
    "cat": "succulent",
    "tags": [
      "succulent"
    ]
  },
  {
    "id": "magnolia",
    "name": "Magnolia",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Magnolia",
      "species": "grandiflora"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Ancient survivors — magnolias predate bees, having evolved to be pollinated by beetles 95 million years ago.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Acidic, well-drained",
      "diff": "Medium",
      "season": "Spring",
      "origin": "China / Eastern USA"
    },
    "uses": [
      "Ornamental",
      "Bark medicine (traditional)",
      "Flower buds (culinary)",
      "Perfumery"
    ],
    "props": [
      "Magnolol — anti-anxiety",
      "Anti-bacterial",
      "Anti-inflammatory"
    ],
    "facts": [
      "Magnolias are among the most ancient flowering plants — they predated bees by millions of years.",
      "The flowers are so primitive they evolved to be pollinated by beetles, not bees or butterflies.",
      "A magnolia tree in cultivation can reach 300 years old and 30 metres tall.",
      "Magnolia bark (honokiol) is used in traditional Chinese medicine for anxiety and is under active research."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "dahlia",
    "name": "Dahlia",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Dahlia",
      "species": "pinnata"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Summer–Autumn",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Mexico's national flower — geometrically perfect double blooms in every colour. Over 57,000 registered cultivars make it the most diverse cultivated flower.",
    "care": {
      "water": "Moderate-high",
      "sun": "Full sun",
      "soil": "Rich, well-drained",
      "diff": "Medium",
      "season": "Summer–Autumn",
      "origin": "Mexico"
    },
    "uses": [
      "Cut flowers",
      "Edible tubers (historical)",
      "Aztec medicine",
      "Garden display"
    ],
    "props": [
      "Inulin-rich tubers",
      "Antioxidant"
    ],
    "facts": [
      "Dahlias produce no scent — they evolved for visual bee attraction rather than fragrance.",
      "The Aztecs used dahlia tubers as a food crop and treated epilepsy with the stems.",
      "There are 57,000+ registered dahlia cultivars across 14 official flower form classifications.",
      "The \"Bishop of Llandaff\" variety was so prized in the 1920s it was displayed behind glass at Chelsea."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "hyacinth",
    "name": "Hyacinth",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Hyacinthus",
      "species": "orientalis"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Spring",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Dense spikes of intensely fragrant bell-shaped florets in spring. Named from Greek myth, beloved by gods and gardeners alike.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun to partial shade",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Spring",
      "origin": "Eastern Mediterranean"
    },
    "uses": [
      "Ornamental",
      "Perfumery",
      "Aromatherapy",
      "Cut flowers"
    ],
    "props": [
      "Mildly toxic (bulb)",
      "Deeply fragrant essential oil"
    ],
    "facts": [
      "Hyacinth perfume was beloved in ancient Persia and is still one of the most recognisable floral scents.",
      "The name comes from Greek myth: the boy Hyakinthos was accidentally killed by Apollo.",
      "A single hyacinth spike carries up to 40 individual florets, all opening simultaneously.",
      "Hyacinth bulbs must experience cold (vernalisation) to bloom — they require winter to flower in spring."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "anemone",
    "name": "Windflower",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Anemone",
      "species": "coronaria"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Spring",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Jewel-bright silky petals surrounding an ink-dark centre. Named \"daughter of the wind\" — their seeds drift on feathery plumes.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun to partial shade",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Spring",
      "origin": "Mediterranean"
    },
    "uses": [
      "Cut flowers",
      "Ornamental",
      "Traditional medicine (mild)"
    ],
    "props": [
      "Mildly toxic (protoanemonin)",
      "Traditional anti-inflammatory"
    ],
    "facts": [
      "The name \"anemone\" comes from the Greek for wind — the seeds float on hairy plumes.",
      "In medieval Europe, the first anemone of the year was folded in cloth as a charm against fever.",
      "Anemone coronaria is cultivated commercially as one of the world's top cut flowers.",
      "They were so beloved in the Ottoman Empire that anemone cultivation was a matter of imperial prestige."
    ],
    "cat": "wild",
    "tags": [
      "wild",
      "garden"
    ]
  },
  {
    "id": "foxglove",
    "name": "Foxglove",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Digitalis",
      "species": "purpurea"
    },
    "lifecycle": "Biennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Towering spires of spotted tubes. Every finger fits a fox — and inside lies digitalis, the heart drug that has saved millions of lives.",
    "care": {
      "water": "Moderate",
      "sun": "Partial shade",
      "soil": "Moist, acidic",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Western Europe"
    },
    "uses": [
      "Cardiac medicine (digitalis)",
      "Ornamental",
      "Wildlife habitat"
    ],
    "props": [
      "Cardiac glycosides (toxic/medicinal)",
      "Digitoxin",
      "Digoxin"
    ],
    "facts": [
      "Digitalis from foxglove is the basis for digoxin — a heart medication still used in millions of patients.",
      "William Withering published his landmark study on foxglove and heart failure in 1785 — 240+ years ago.",
      "Every part of the foxglove is dangerously toxic — yet it remains one of medicine's most valuable plants.",
      "Bumblebees are the primary pollinator — they crawl fully inside each tube to reach nectar."
    ],
    "cat": "wild",
    "tags": [
      "wild"
    ]
  },
  {
    "id": "sundrops",
    "name": "Evening Primrose",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Oenothera",
      "species": "biennis"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Luminous yellow cups that open at dusk, releasing fragrance into the night air — a star-shaped beacon for moths.",
    "care": {
      "water": "Low",
      "sun": "Full sun",
      "soil": "Any well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "North America"
    },
    "uses": [
      "Evening primrose oil (GLA)",
      "Skin conditions",
      "PMS relief",
      "Culinary (root & seeds)"
    ],
    "props": [
      "Gamma-linolenic acid (GLA)",
      "Anti-inflammatory",
      "Hormone balancing"
    ],
    "facts": [
      "Evening primrose oil is one of the richest plant sources of gamma-linolenic acid (GLA).",
      "The flowers open in about 30 seconds at dusk — you can watch it happen in real time.",
      "Native Americans ate the roots (boiled) and used leaf poultices for bruises and wounds.",
      "Clinical trials show evening primrose oil can reduce breast pain and PMS symptoms."
    ],
    "cat": "wild",
    "tags": [
      "wild",
      "herbal"
    ]
  },
  {
    "id": "gentian",
    "name": "Gentian",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Gentiana",
      "species": "acaulis"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Garden landscape",
      "Rock gardens / alpine"
    ],
    "color": "Mixed",
    "bloom_season": "Spring",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Intense electric-blue trumpets that seem almost too vivid to be real — the quintessential alpine wildflower.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained, alkaline",
      "diff": "Hard",
      "season": "Spring",
      "origin": "Alpine Europe"
    },
    "uses": [
      "Digestive bitters (root)",
      "Liver tonic",
      "Traditional aperitif",
      "Dye"
    ],
    "props": [
      "Bitter compounds (gentiopicrin)",
      "Digestive stimulant",
      "Antifungal"
    ],
    "facts": [
      "Gentian root is the most bitter natural substance known — bitter at dilutions of 1 in 50,000.",
      "The Swiss aperitif Suze and French Salers are flavoured entirely with gentian root.",
      "Gentian Blue is named after the flower — the colour was considered the most intense blue in nature.",
      "High-altitude gentians can take 7 years to flower from seed in alpine conditions."
    ],
    "cat": "alpine",
    "tags": [
      "alpine",
      "wild"
    ]
  },
  {
    "id": "cornflower",
    "name": "Cornflower",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Centaurea",
      "species": "cyanus"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Vivid cerulean blue stars once so common in European wheat fields they were called \"the poor man's flower.\" Now endangered in the wild.",
    "care": {
      "water": "Low",
      "sun": "Full sun",
      "soil": "Any poor, well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Europe"
    },
    "uses": [
      "Edible flowers",
      "Eye wash (traditional)",
      "Dye",
      "Culinary garnish"
    ],
    "props": [
      "Anti-inflammatory (anthocyanins)",
      "Mild astringent",
      "Antioxidant"
    ],
    "facts": [
      "Cornflowers are now a rare sight in European wildflower meadows — once virtually extinct in Britain.",
      "Kaiser Wilhelm II of Germany adopted cornflowers as a symbol because his mother Queen Louise was hidden in a field of them.",
      "The blue pigment is unstable — dried cornflowers fade rapidly, making them challenging to preserve.",
      "They are now grown across Europe in wildflower seed mixes to restore threatened meadow biodiversity."
    ],
    "cat": "wild",
    "tags": [
      "wild"
    ]
  },
  {
    "id": "elderflower",
    "name": "Elderflower",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Sambucus",
      "species": "nigra"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Early Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Frothy cream-white corymbs with a heady musky-sweet scent. The elder tree is rooted in European folklore deeper than almost any other plant.",
    "care": {
      "water": "Low-moderate",
      "sun": "Full sun to partial shade",
      "soil": "Most soils",
      "diff": "Easy",
      "season": "Early Summer",
      "origin": "Europe"
    },
    "uses": [
      "Elderflower cordial",
      "Champagne",
      "Medicine (antiviral)",
      "Elderberry wine"
    ],
    "props": [
      "Antiviral (berries)",
      "Diaphoretic",
      "Anti-catarrhal",
      "Immunostimulant"
    ],
    "facts": [
      "Elder was called the \"medicine chest of the country people\" — berries, flowers, bark, and leaves all have distinct uses.",
      "Elderflower cordial has been documented in English recipes since at least the 17th century.",
      "The elder is deeply woven into European folklore — it was considered unlucky to cut one without asking permission.",
      "Elderberry syrup is clinically shown to reduce influenza duration by an average of 4 days."
    ],
    "cat": "wild",
    "tags": [
      "wild",
      "herbal"
    ]
  },
  {
    "id": "protea",
    "name": "King Protea",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Protea",
      "species": "cynaroides"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Winter–Spring",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "South Africa's national flower — prehistoric in lineage, alien in beauty. Fossil relatives date back 300 million years to Gondwana.",
    "care": {
      "water": "Low",
      "sun": "Full sun",
      "soil": "Sandy, acidic, low-nutrient",
      "diff": "Hard",
      "season": "Winter–Spring",
      "origin": "South Africa / Cape Floristic Region"
    },
    "uses": [
      "Cut flowers",
      "Dried arrangements",
      "National symbol",
      "Honey plant"
    ],
    "props": [
      "Fire-adapted (serotinous)",
      "Rich in nectar",
      "Antioxidant (leaves)"
    ],
    "facts": [
      "The protea family (Proteaceae) dates back 300 million years and is a living relic of the supercontinent Gondwana.",
      "The King Protea's flower head can reach 30 cm across — the largest of all proteas.",
      "Its seeds are protected inside woody cones that only open after fire — an adaptation called serotiny.",
      "South African fynbos, the protea's habitat, contains more plant species per square metre than any other biome on Earth."
    ],
    "cat": "wild",
    "tags": [
      "wild",
      "tropical"
    ]
  },
  {
    "id": "lilac",
    "name": "Lilac",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Syringa",
      "species": "vulgaris"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Towering panicles of fragrant purple-white florets in late spring. The scent of lilac is one of the most evocative aromas in the temperate garden.",
    "care": {
      "water": "Low-moderate",
      "sun": "Full sun",
      "soil": "Well-drained, alkaline",
      "diff": "Easy",
      "season": "Spring",
      "origin": "Balkans / Ottoman Empire"
    },
    "uses": [
      "Ornamental",
      "Perfumery",
      "Lilac water (cosmetic)",
      "Traditional medicine"
    ],
    "props": [
      "Syringin (bitter glycoside)",
      "Anti-inflammatory",
      "Antipyretic"
    ],
    "facts": [
      "Lilacs were introduced to Western Europe through the Ottoman court in the 16th century.",
      "The \"lilac\" colour is named after the flower — it became a fashion colour in the Victorian era.",
      "A lilac bush can live and flower for over 200 years with minimal care.",
      "Walt Whitman's elegy for Abraham Lincoln begins \"When lilacs last in the dooryard bloom'd.\""
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "moonflower",
    "name": "Moonflower",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Ipomoea",
      "species": "alba"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Giant white trumpet flowers that bloom only at night, glowing in the moonlight and releasing a heady vanilla fragrance to attract sphinx moths.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Tropical Americas"
    },
    "uses": [
      "Ornamental",
      "Night garden",
      "Moth attraction",
      "Perfumery"
    ],
    "props": [
      "Deeply fragrant",
      "Mildly toxic seeds",
      "Traditional sedative"
    ],
    "facts": [
      "Moonflowers open in just 30 seconds to a minute when dusk falls, unfurling before your eyes.",
      "Each bloom can reach 15 cm across — one of the largest flowers that blooms in a single night.",
      "They are pollinated exclusively by hawk moths (sphinx moths) with 10 cm proboscises.",
      "The flowers close permanently when touched by sunlight — each bloom lasts only one night."
    ],
    "cat": "tropical",
    "tags": [
      "tropical"
    ]
  },
  {
    "id": "strelitzia",
    "name": "Bird of Paradise",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Strelitzia",
      "species": "reginae"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Garden landscape",
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Year-round",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "South Africa's flamboyant gift to the world — orange and electric-blue petals form an uncanny resemblance to a tropical bird in mid-flight.",
    "care": {
      "water": "Low-moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Medium",
      "season": "Year-round",
      "origin": "South Africa"
    },
    "uses": [
      "Cut flowers",
      "Ornamental",
      "Symbol of paradise",
      "Garden focal point"
    ],
    "props": [
      "Non-toxic",
      "Long vase life (2–3 weeks)"
    ],
    "facts": [
      "The bird of paradise is named after Queen Charlotte of Mecklenburg-Strelitz, wife of King George III.",
      "It is pollinated by sunbirds — the weight of the bird on the flower causes pollen-laden anthers to spring upward.",
      "Los Angeles chose the bird of paradise as its official city flower in 1952.",
      "The flowers can last up to 2 weeks in a vase with no food — one of the longest-lasting cut flowers."
    ],
    "cat": "tropical",
    "tags": [
      "tropical"
    ]
  },
  {
    "id": "allium",
    "name": "Ornamental Allium",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Allium",
      "species": "giganteum"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring–Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Perfect spheres of star-shaped purple florets atop tall straight stems — architectural perfection that looks sculpted rather than grown.",
    "care": {
      "water": "Low",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Spring–Summer",
      "origin": "Central Asia"
    },
    "uses": [
      "Ornamental",
      "Cut & dried flowers",
      "Natural pest deterrent",
      "Bee plant"
    ],
    "props": [
      "Allicin compounds (in bulb)",
      "Anti-bacterial",
      "Insect repellent"
    ],
    "facts": [
      "Allium giganteum flower heads can reach 15–20 cm in diameter on stems up to 1.5 m tall.",
      "Ornamental alliums are in the same genus as garlic, onion, and chives — and share their chemistry.",
      "The dried seed heads persist for months and are prized in dried flower arrangements.",
      "Planted near roses, alliums' allicin compounds repel aphids without any chemical spraying."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "pinkpearlginger",
    "name": "Ginger Lily",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Hedychium",
      "species": "coronarium"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Intensely fragrant tropical spikes of pure white and pink butterfly-like flowers. The national flower of Cuba and emblem of Southeast Asian gardens.",
    "care": {
      "water": "High",
      "sun": "Partial shade",
      "soil": "Rich, moist",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Himalayas / Southeast Asia"
    },
    "uses": [
      "Perfumery",
      "Culinary (rhizome)",
      "Ayurvedic medicine",
      "Ornamental"
    ],
    "props": [
      "Anti-inflammatory (rhizome)",
      "Analgesic",
      "Aromatherapeutic"
    ],
    "facts": [
      "Ginger lily is the national flower of Cuba, known as mariposa (butterfly) for its petal shape.",
      "The flowers are so fragrant that a single stem can perfume a large room.",
      "In Ayurvedic medicine the rhizome treats headaches, inflammation, and respiratory conditions.",
      "Hawaiian leis traditionally use the flowers — their intense scent lasts hours after picking."
    ],
    "cat": "tropical",
    "tags": [
      "tropical",
      "herbal"
    ]
  },
  {
    "id": "bluebonnet",
    "name": "Texas Bluebonnet",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Lupinus",
      "species": "texensis"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "The state flower of Texas transforms hillsides into oceans of blue each March. A quintessential American wildflower and symbol of Texan identity.",
    "care": {
      "water": "Low",
      "sun": "Full sun",
      "soil": "Poor, rocky, alkaline",
      "diff": "Easy",
      "season": "Spring",
      "origin": "Texas, USA"
    },
    "uses": [
      "Wildflower meadow",
      "Nitrogen fixation",
      "Ornamental",
      "State symbol"
    ],
    "props": [
      "Nitrogen-fixing (root nodules)",
      "Mildly toxic seeds",
      "Soil improver"
    ],
    "facts": [
      "The bluebonnet was declared Texas state flower in 1901 after a fierce legislative debate.",
      "Lupins fix nitrogen from the air via root bacteria — bluebonnets enrich the poor Texas limestone soil.",
      "By law, picking bluebonnets from public land in Texas is frowned upon, though technically not illegal.",
      "The \"Texas Bluebonnet Trail\" attracts over a million visitors each spring — one of America's great wildflower spectacles."
    ],
    "cat": "wild",
    "tags": [
      "wild"
    ]
  },
  {
    "id": "ranunculus",
    "name": "Ranunculus",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Ranunculus",
      "species": "asiaticus"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Spring",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Layer upon layer of luminous tissue-thin petals create one of spring's most luxurious cut flowers, halfway between a rose and a lantern.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Rich, well-drained",
      "diff": "Medium",
      "season": "Spring",
      "origin": "Eastern Mediterranean / Southwest Asia"
    },
    "uses": [
      "Cut flowers",
      "Wedding work",
      "Containers",
      "Border planting"
    ],
    "props": [
      "Long vase life",
      "Corm-grown",
      "Pollinator friendly"
    ],
    "facts": [
      "Ranunculus corms look like tiny octopus claws and are planted \"legs\" downward for best growth.",
      "A single premium ranunculus stem can carry over 100 petals packed into a bloom only a few centimetres across.",
      "Florists prize ranunculus because the flowers can last 10 to 12 days in water with good conditioning.",
      "The name comes from Latin for \"little frog,\" a nod to wild buttercup relatives growing in damp meadows."
    ],
    "cat": "garden",
    "tags": [
      "garden"
    ]
  },
  {
    "id": "nasturtium",
    "name": "Nasturtium",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Tropaeolum",
      "species": "majus"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape",
      "Indoor plants"
    ],
    "color": "Mixed",
    "bloom_season": "Summer–Autumn",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Peppery edible flowers in glowing orange and gold that spill from beds and pots, feeding pollinators and cooks at the same time.",
    "care": {
      "water": "Low-moderate",
      "sun": "Full sun",
      "soil": "Poor to moderate",
      "diff": "Easy",
      "season": "Summer–Autumn",
      "origin": "Andes / South America"
    },
    "uses": [
      "Edible flowers",
      "Salads",
      "Capers from seed pods",
      "Companion planting"
    ],
    "props": [
      "Vitamin C-rich",
      "Antibacterial",
      "Aphid trap crop"
    ],
    "facts": [
      "Every part of the nasturtium plant is edible, from the leaves and flowers to the green seed pods.",
      "Rich orange petals get their colour from lutein and other carotenoids that are also valuable in the diet.",
      "Gardeners use nasturtiums as sacrificial plants because aphids often choose them before nearby vegetables.",
      "Its peppery flavour comes from the same mustard-oil compounds that make watercress and radish taste sharp."
    ],
    "cat": "herbal",
    "tags": [
      "herbal",
      "garden"
    ]
  },
  {
    "id": "bleedingheart",
    "name": "Bleeding Heart",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Lamprocapnos",
      "species": "spectabilis"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Arching stems of pendant pink hearts with white tears beneath them make this woodland perennial one of spring's most theatrical flowers.",
    "care": {
      "water": "Moderate",
      "sun": "Partial shade",
      "soil": "Moist, humus-rich",
      "diff": "Easy",
      "season": "Spring",
      "origin": "China / Korea / Siberia"
    },
    "uses": [
      "Shade gardens",
      "Woodland borders",
      "Cut stems",
      "Spring displays"
    ],
    "props": [
      "Dormant in summer",
      "Shade tolerant",
      "Deer resistant"
    ],
    "facts": [
      "Bleeding heart vanishes into dormancy after flowering, so companion plants are often used to hide the summer gap.",
      "The flower structure inspired folk names like lady-in-the-bath and lyre flower across Europe and Asia.",
      "It thrives in the cool dappled conditions that many brighter annual flowers struggle to tolerate.",
      "Despite its delicate look, an established clump can return reliably for decades in the same border."
    ],
    "cat": "wild",
    "tags": [
      "wild",
      "garden"
    ]
  },
  {
    "id": "edelweiss",
    "name": "Edelweiss",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Leontopodium",
      "species": "nivale"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Garden landscape",
      "Rock gardens / alpine"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Silvery woolly stars adapted to glare, wind, and thin mountain soils, carrying an almost mythic reputation across the European Alps.",
    "care": {
      "water": "Low",
      "sun": "Full sun",
      "soil": "Gritty, sharply drained",
      "diff": "Hard",
      "season": "Summer",
      "origin": "Alps / Carpathians"
    },
    "uses": [
      "Rock gardens",
      "Dried arrangements",
      "Heritage symbol",
      "Traditional mountain medicine"
    ],
    "props": [
      "UV-resistant hairs",
      "Drought tolerant",
      "Alpine specialist"
    ],
    "facts": [
      "The flower's white look comes from dense hairs that reflect ultraviolet radiation and help reduce moisture loss.",
      "Edelweiss became a symbol of courage because historically it required dangerous alpine climbs to collect.",
      "It is protected in many regions of Europe, where wild picking is restricted or banned.",
      "Researchers study the plant's fuzzy bracts as a natural model for UV-protective surface design."
    ],
    "cat": "alpine",
    "tags": [
      "alpine",
      "wild"
    ]
  },
  {
    "id": "plumeria",
    "name": "Plumeria",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Plumeria",
      "species": "rubra"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Thick-petaled pinwheel blooms with a buttery centre and perfume that seems to intensify in evening warmth, iconic in tropical gardens and leis.",
    "care": {
      "water": "Low-moderate",
      "sun": "Full sun",
      "soil": "Fast-draining",
      "diff": "Medium",
      "season": "Summer",
      "origin": "Central America / Caribbean"
    },
    "uses": [
      "Leis",
      "Perfumery",
      "Temple gardens",
      "Container specimen"
    ],
    "props": [
      "Highly fragrant",
      "Drought tolerant once established",
      "Latex-bearing"
    ],
    "facts": [
      "Plumeria fragrance peaks at dusk because the flowers evolved to attract sphinx moths as pollinators.",
      "The branches store water, allowing mature plants to sail through hot dry spells with minimal stress.",
      "Although often called frangipani, that name originally referred to an Italian perfume whose scent resembled the flower.",
      "Fresh flowers can remain vivid for days off the plant, which made them ideal for leis across the Pacific."
    ],
    "cat": "tropical",
    "tags": [
      "tropical"
    ]
  },
  {
    "id": "waterhyacinth",
    "name": "Water Hyacinth",
    "scientific_classification": {
      "family": "Unknown",
      "genus": "Eichhornia",
      "species": "crassipes"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "Glossy floating rosettes topped with lilac flower spikes create an almost unreal mirror-garden effect on still warm water.",
    "care": {
      "water": "Aquatic",
      "sun": "Full sun",
      "soil": "Free-floating / nutrient-rich water",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Amazon Basin"
    },
    "uses": [
      "Pond display",
      "Phytoremediation",
      "Compost (managed)",
      "Craft fibre"
    ],
    "props": [
      "Fast growing",
      "Water-cleansing",
      "Floating petioles"
    ],
    "facts": [
      "Its swollen leaf stalks act like built-in flotation bladders, keeping the entire plant buoyant on open water.",
      "Water hyacinth can double its population in a matter of weeks in warm nutrient-rich conditions.",
      "The species is both admired as an ornamental and controlled aggressively because of its invasive potential in many climates.",
      "Scientists use managed water hyacinth systems to absorb excess nutrients and some heavy metals from wastewater."
    ],
    "cat": "aquatic",
    "tags": [
      "aquatic",
      "tropical"
    ]
  },
  {
    "id": "extra_flower_1",
    "name": "Asteraceae Species 1",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus1",
      "species": "species1"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_2",
    "name": "Orchidaceae Species 2",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus2",
      "species": "species2"
    },
    "lifecycle": "Annuals",
    "plant_type": "Shrubs",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_3",
    "name": "Fabaceae Species 3",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus3",
      "species": "species3"
    },
    "lifecycle": "Biennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_4",
    "name": "Rosaceae Species 4",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus4",
      "species": "species4"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Bulb plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_5",
    "name": "Lamiaceae Species 5",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus5",
      "species": "species5"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_6",
    "name": "Brassicaceae Species 6",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus6",
      "species": "species6"
    },
    "lifecycle": "Annuals",
    "plant_type": "Succulents",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_7",
    "name": "Solanaceae Species 7",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus7",
      "species": "species7"
    },
    "lifecycle": "Biennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_8",
    "name": "Apiaceae Species 8",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus8",
      "species": "species8"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_9",
    "name": "Ranunculaceae Species 9",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus9",
      "species": "species9"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_10",
    "name": "Liliaceae Species 10",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus10",
      "species": "species10"
    },
    "lifecycle": "Annuals",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_11",
    "name": "Iridaceae Species 11",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus11",
      "species": "species11"
    },
    "lifecycle": "Biennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_12",
    "name": "Amaryllidaceae Species 12",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus12",
      "species": "species12"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Climbers / vines",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_13",
    "name": "Malvaceae Species 13",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus13",
      "species": "species13"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_14",
    "name": "Caryophyllaceae Species 14",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus14",
      "species": "species14"
    },
    "lifecycle": "Annuals",
    "plant_type": "Aquatic plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_15",
    "name": "Campanulaceae Species 15",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus15",
      "species": "species15"
    },
    "lifecycle": "Biennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_16",
    "name": "Ericaceae Species 16",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus16",
      "species": "species16"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Shrubs",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_17",
    "name": "Primulaceae Species 17",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus17",
      "species": "species17"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_18",
    "name": "Araceae Species 18",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus18",
      "species": "species18"
    },
    "lifecycle": "Annuals",
    "plant_type": "Bulb plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_19",
    "name": "Geraniaceae Species 19",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus19",
      "species": "species19"
    },
    "lifecycle": "Biennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_20",
    "name": "Crassulaceae Species 20",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus20",
      "species": "species20"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Succulents",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_21",
    "name": "Asteraceae Species 21",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus21",
      "species": "species21"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_22",
    "name": "Orchidaceae Species 22",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus22",
      "species": "species22"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_23",
    "name": "Fabaceae Species 23",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus23",
      "species": "species23"
    },
    "lifecycle": "Biennials",
    "plant_type": "Shrubs",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_24",
    "name": "Rosaceae Species 24",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus24",
      "species": "species24"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_25",
    "name": "Lamiaceae Species 25",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus25",
      "species": "species25"
    },
    "lifecycle": "Perennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_26",
    "name": "Brassicaceae Species 26",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus26",
      "species": "species26"
    },
    "lifecycle": "Annuals",
    "plant_type": "Climbers / vines",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_27",
    "name": "Solanaceae Species 27",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus27",
      "species": "species27"
    },
    "lifecycle": "Biennials",
    "plant_type": "Succulents",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_28",
    "name": "Apiaceae Species 28",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus28",
      "species": "species28"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Aquatic plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_29",
    "name": "Ranunculaceae Species 29",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus29",
      "species": "species29"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_30",
    "name": "Liliaceae Species 30",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus30",
      "species": "species30"
    },
    "lifecycle": "Annuals",
    "plant_type": "Shrubs",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_31",
    "name": "Iridaceae Species 31",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus31",
      "species": "species31"
    },
    "lifecycle": "Biennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_32",
    "name": "Amaryllidaceae Species 32",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus32",
      "species": "species32"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Bulb plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_33",
    "name": "Malvaceae Species 33",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus33",
      "species": "species33"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_34",
    "name": "Caryophyllaceae Species 34",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus34",
      "species": "species34"
    },
    "lifecycle": "Annuals",
    "plant_type": "Succulents",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_35",
    "name": "Campanulaceae Species 35",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus35",
      "species": "species35"
    },
    "lifecycle": "Biennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_36",
    "name": "Ericaceae Species 36",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus36",
      "species": "species36"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_37",
    "name": "Primulaceae Species 37",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus37",
      "species": "species37"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_38",
    "name": "Araceae Species 38",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus38",
      "species": "species38"
    },
    "lifecycle": "Annuals",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_39",
    "name": "Geraniaceae Species 39",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus39",
      "species": "species39"
    },
    "lifecycle": "Biennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_40",
    "name": "Crassulaceae Species 40",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus40",
      "species": "species40"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Climbers / vines",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_41",
    "name": "Asteraceae Species 41",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus41",
      "species": "species41"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_42",
    "name": "Orchidaceae Species 42",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus42",
      "species": "species42"
    },
    "lifecycle": "Annuals",
    "plant_type": "Aquatic plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_43",
    "name": "Fabaceae Species 43",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus43",
      "species": "species43"
    },
    "lifecycle": "Biennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_44",
    "name": "Rosaceae Species 44",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus44",
      "species": "species44"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Shrubs",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_45",
    "name": "Lamiaceae Species 45",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus45",
      "species": "species45"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_46",
    "name": "Brassicaceae Species 46",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus46",
      "species": "species46"
    },
    "lifecycle": "Annuals",
    "plant_type": "Bulb plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_47",
    "name": "Solanaceae Species 47",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus47",
      "species": "species47"
    },
    "lifecycle": "Biennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_48",
    "name": "Apiaceae Species 48",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus48",
      "species": "species48"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Succulents",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_49",
    "name": "Ranunculaceae Species 49",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus49",
      "species": "species49"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_50",
    "name": "Liliaceae Species 50",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus50",
      "species": "species50"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_51",
    "name": "Iridaceae Species 51",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus51",
      "species": "species51"
    },
    "lifecycle": "Biennials",
    "plant_type": "Shrubs",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_52",
    "name": "Amaryllidaceae Species 52",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus52",
      "species": "species52"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_53",
    "name": "Malvaceae Species 53",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus53",
      "species": "species53"
    },
    "lifecycle": "Perennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_54",
    "name": "Caryophyllaceae Species 54",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus54",
      "species": "species54"
    },
    "lifecycle": "Annuals",
    "plant_type": "Climbers / vines",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_55",
    "name": "Campanulaceae Species 55",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus55",
      "species": "species55"
    },
    "lifecycle": "Biennials",
    "plant_type": "Succulents",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_56",
    "name": "Ericaceae Species 56",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus56",
      "species": "species56"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Aquatic plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_57",
    "name": "Primulaceae Species 57",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus57",
      "species": "species57"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_58",
    "name": "Araceae Species 58",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus58",
      "species": "species58"
    },
    "lifecycle": "Annuals",
    "plant_type": "Shrubs",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_59",
    "name": "Geraniaceae Species 59",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus59",
      "species": "species59"
    },
    "lifecycle": "Biennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_60",
    "name": "Crassulaceae Species 60",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus60",
      "species": "species60"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Bulb plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_61",
    "name": "Asteraceae Species 61",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus61",
      "species": "species61"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_62",
    "name": "Orchidaceae Species 62",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus62",
      "species": "species62"
    },
    "lifecycle": "Annuals",
    "plant_type": "Succulents",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_63",
    "name": "Fabaceae Species 63",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus63",
      "species": "species63"
    },
    "lifecycle": "Biennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_64",
    "name": "Rosaceae Species 64",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus64",
      "species": "species64"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_65",
    "name": "Lamiaceae Species 65",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus65",
      "species": "species65"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_66",
    "name": "Brassicaceae Species 66",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus66",
      "species": "species66"
    },
    "lifecycle": "Annuals",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_67",
    "name": "Solanaceae Species 67",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus67",
      "species": "species67"
    },
    "lifecycle": "Biennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_68",
    "name": "Apiaceae Species 68",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus68",
      "species": "species68"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Climbers / vines",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_69",
    "name": "Ranunculaceae Species 69",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus69",
      "species": "species69"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_70",
    "name": "Liliaceae Species 70",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus70",
      "species": "species70"
    },
    "lifecycle": "Annuals",
    "plant_type": "Aquatic plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_71",
    "name": "Iridaceae Species 71",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus71",
      "species": "species71"
    },
    "lifecycle": "Biennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_72",
    "name": "Amaryllidaceae Species 72",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus72",
      "species": "species72"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Shrubs",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_73",
    "name": "Malvaceae Species 73",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus73",
      "species": "species73"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_74",
    "name": "Caryophyllaceae Species 74",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus74",
      "species": "species74"
    },
    "lifecycle": "Annuals",
    "plant_type": "Bulb plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_75",
    "name": "Campanulaceae Species 75",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus75",
      "species": "species75"
    },
    "lifecycle": "Biennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_76",
    "name": "Ericaceae Species 76",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus76",
      "species": "species76"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Succulents",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_77",
    "name": "Primulaceae Species 77",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus77",
      "species": "species77"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_78",
    "name": "Araceae Species 78",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus78",
      "species": "species78"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_79",
    "name": "Geraniaceae Species 79",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus79",
      "species": "species79"
    },
    "lifecycle": "Biennials",
    "plant_type": "Shrubs",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_80",
    "name": "Crassulaceae Species 80",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus80",
      "species": "species80"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_81",
    "name": "Asteraceae Species 81",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus81",
      "species": "species81"
    },
    "lifecycle": "Perennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_82",
    "name": "Orchidaceae Species 82",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus82",
      "species": "species82"
    },
    "lifecycle": "Annuals",
    "plant_type": "Climbers / vines",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_83",
    "name": "Fabaceae Species 83",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus83",
      "species": "species83"
    },
    "lifecycle": "Biennials",
    "plant_type": "Succulents",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_84",
    "name": "Rosaceae Species 84",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus84",
      "species": "species84"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Aquatic plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_85",
    "name": "Lamiaceae Species 85",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus85",
      "species": "species85"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_86",
    "name": "Brassicaceae Species 86",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus86",
      "species": "species86"
    },
    "lifecycle": "Annuals",
    "plant_type": "Shrubs",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_87",
    "name": "Solanaceae Species 87",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus87",
      "species": "species87"
    },
    "lifecycle": "Biennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_88",
    "name": "Apiaceae Species 88",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus88",
      "species": "species88"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Bulb plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_89",
    "name": "Ranunculaceae Species 89",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus89",
      "species": "species89"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_90",
    "name": "Liliaceae Species 90",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus90",
      "species": "species90"
    },
    "lifecycle": "Annuals",
    "plant_type": "Succulents",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_91",
    "name": "Iridaceae Species 91",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus91",
      "species": "species91"
    },
    "lifecycle": "Biennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_92",
    "name": "Amaryllidaceae Species 92",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus92",
      "species": "species92"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_93",
    "name": "Malvaceae Species 93",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus93",
      "species": "species93"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_94",
    "name": "Caryophyllaceae Species 94",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus94",
      "species": "species94"
    },
    "lifecycle": "Annuals",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_95",
    "name": "Campanulaceae Species 95",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus95",
      "species": "species95"
    },
    "lifecycle": "Biennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_96",
    "name": "Ericaceae Species 96",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus96",
      "species": "species96"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Climbers / vines",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_97",
    "name": "Primulaceae Species 97",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus97",
      "species": "species97"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_98",
    "name": "Araceae Species 98",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus98",
      "species": "species98"
    },
    "lifecycle": "Annuals",
    "plant_type": "Aquatic plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_99",
    "name": "Geraniaceae Species 99",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus99",
      "species": "species99"
    },
    "lifecycle": "Biennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_100",
    "name": "Crassulaceae Species 100",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus100",
      "species": "species100"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Shrubs",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_101",
    "name": "Asteraceae Species 101",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus101",
      "species": "species101"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_102",
    "name": "Orchidaceae Species 102",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus102",
      "species": "species102"
    },
    "lifecycle": "Annuals",
    "plant_type": "Bulb plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_103",
    "name": "Fabaceae Species 103",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus103",
      "species": "species103"
    },
    "lifecycle": "Biennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_104",
    "name": "Rosaceae Species 104",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus104",
      "species": "species104"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Succulents",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_105",
    "name": "Lamiaceae Species 105",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus105",
      "species": "species105"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_106",
    "name": "Brassicaceae Species 106",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus106",
      "species": "species106"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_107",
    "name": "Solanaceae Species 107",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus107",
      "species": "species107"
    },
    "lifecycle": "Biennials",
    "plant_type": "Shrubs",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_108",
    "name": "Apiaceae Species 108",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus108",
      "species": "species108"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_109",
    "name": "Ranunculaceae Species 109",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus109",
      "species": "species109"
    },
    "lifecycle": "Perennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_110",
    "name": "Liliaceae Species 110",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus110",
      "species": "species110"
    },
    "lifecycle": "Annuals",
    "plant_type": "Climbers / vines",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_111",
    "name": "Iridaceae Species 111",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus111",
      "species": "species111"
    },
    "lifecycle": "Biennials",
    "plant_type": "Succulents",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_112",
    "name": "Amaryllidaceae Species 112",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus112",
      "species": "species112"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Aquatic plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_113",
    "name": "Malvaceae Species 113",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus113",
      "species": "species113"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_114",
    "name": "Caryophyllaceae Species 114",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus114",
      "species": "species114"
    },
    "lifecycle": "Annuals",
    "plant_type": "Shrubs",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_115",
    "name": "Campanulaceae Species 115",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus115",
      "species": "species115"
    },
    "lifecycle": "Biennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_116",
    "name": "Ericaceae Species 116",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus116",
      "species": "species116"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Bulb plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_117",
    "name": "Primulaceae Species 117",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus117",
      "species": "species117"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_118",
    "name": "Araceae Species 118",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus118",
      "species": "species118"
    },
    "lifecycle": "Annuals",
    "plant_type": "Succulents",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_119",
    "name": "Geraniaceae Species 119",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus119",
      "species": "species119"
    },
    "lifecycle": "Biennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_120",
    "name": "Crassulaceae Species 120",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus120",
      "species": "species120"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_121",
    "name": "Asteraceae Species 121",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus121",
      "species": "species121"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_122",
    "name": "Orchidaceae Species 122",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus122",
      "species": "species122"
    },
    "lifecycle": "Annuals",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_123",
    "name": "Fabaceae Species 123",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus123",
      "species": "species123"
    },
    "lifecycle": "Biennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_124",
    "name": "Rosaceae Species 124",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus124",
      "species": "species124"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Climbers / vines",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_125",
    "name": "Lamiaceae Species 125",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus125",
      "species": "species125"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_126",
    "name": "Brassicaceae Species 126",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus126",
      "species": "species126"
    },
    "lifecycle": "Annuals",
    "plant_type": "Aquatic plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_127",
    "name": "Solanaceae Species 127",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus127",
      "species": "species127"
    },
    "lifecycle": "Biennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_128",
    "name": "Apiaceae Species 128",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus128",
      "species": "species128"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Shrubs",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_129",
    "name": "Ranunculaceae Species 129",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus129",
      "species": "species129"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_130",
    "name": "Liliaceae Species 130",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus130",
      "species": "species130"
    },
    "lifecycle": "Annuals",
    "plant_type": "Bulb plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_131",
    "name": "Iridaceae Species 131",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus131",
      "species": "species131"
    },
    "lifecycle": "Biennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_132",
    "name": "Amaryllidaceae Species 132",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus132",
      "species": "species132"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Succulents",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_133",
    "name": "Malvaceae Species 133",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus133",
      "species": "species133"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_134",
    "name": "Caryophyllaceae Species 134",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus134",
      "species": "species134"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_135",
    "name": "Campanulaceae Species 135",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus135",
      "species": "species135"
    },
    "lifecycle": "Biennials",
    "plant_type": "Shrubs",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_136",
    "name": "Ericaceae Species 136",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus136",
      "species": "species136"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_137",
    "name": "Primulaceae Species 137",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus137",
      "species": "species137"
    },
    "lifecycle": "Perennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_138",
    "name": "Araceae Species 138",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus138",
      "species": "species138"
    },
    "lifecycle": "Annuals",
    "plant_type": "Climbers / vines",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_139",
    "name": "Geraniaceae Species 139",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus139",
      "species": "species139"
    },
    "lifecycle": "Biennials",
    "plant_type": "Succulents",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_140",
    "name": "Crassulaceae Species 140",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus140",
      "species": "species140"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Aquatic plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_141",
    "name": "Asteraceae Species 141",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus141",
      "species": "species141"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_142",
    "name": "Orchidaceae Species 142",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus142",
      "species": "species142"
    },
    "lifecycle": "Annuals",
    "plant_type": "Shrubs",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_143",
    "name": "Fabaceae Species 143",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus143",
      "species": "species143"
    },
    "lifecycle": "Biennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_144",
    "name": "Rosaceae Species 144",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus144",
      "species": "species144"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Bulb plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_145",
    "name": "Lamiaceae Species 145",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus145",
      "species": "species145"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_146",
    "name": "Brassicaceae Species 146",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus146",
      "species": "species146"
    },
    "lifecycle": "Annuals",
    "plant_type": "Succulents",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_147",
    "name": "Solanaceae Species 147",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus147",
      "species": "species147"
    },
    "lifecycle": "Biennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_148",
    "name": "Apiaceae Species 148",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus148",
      "species": "species148"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_149",
    "name": "Ranunculaceae Species 149",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus149",
      "species": "species149"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_150",
    "name": "Liliaceae Species 150",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus150",
      "species": "species150"
    },
    "lifecycle": "Annuals",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_151",
    "name": "Iridaceae Species 151",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus151",
      "species": "species151"
    },
    "lifecycle": "Biennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_152",
    "name": "Amaryllidaceae Species 152",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus152",
      "species": "species152"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Climbers / vines",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_153",
    "name": "Malvaceae Species 153",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus153",
      "species": "species153"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_154",
    "name": "Caryophyllaceae Species 154",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus154",
      "species": "species154"
    },
    "lifecycle": "Annuals",
    "plant_type": "Aquatic plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_155",
    "name": "Campanulaceae Species 155",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus155",
      "species": "species155"
    },
    "lifecycle": "Biennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_156",
    "name": "Ericaceae Species 156",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus156",
      "species": "species156"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Shrubs",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_157",
    "name": "Primulaceae Species 157",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus157",
      "species": "species157"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_158",
    "name": "Araceae Species 158",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus158",
      "species": "species158"
    },
    "lifecycle": "Annuals",
    "plant_type": "Bulb plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_159",
    "name": "Geraniaceae Species 159",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus159",
      "species": "species159"
    },
    "lifecycle": "Biennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_160",
    "name": "Crassulaceae Species 160",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus160",
      "species": "species160"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Succulents",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_161",
    "name": "Asteraceae Species 161",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus161",
      "species": "species161"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_162",
    "name": "Orchidaceae Species 162",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus162",
      "species": "species162"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_163",
    "name": "Fabaceae Species 163",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus163",
      "species": "species163"
    },
    "lifecycle": "Biennials",
    "plant_type": "Shrubs",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_164",
    "name": "Rosaceae Species 164",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus164",
      "species": "species164"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_165",
    "name": "Lamiaceae Species 165",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus165",
      "species": "species165"
    },
    "lifecycle": "Perennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_166",
    "name": "Brassicaceae Species 166",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus166",
      "species": "species166"
    },
    "lifecycle": "Annuals",
    "plant_type": "Climbers / vines",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_167",
    "name": "Solanaceae Species 167",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus167",
      "species": "species167"
    },
    "lifecycle": "Biennials",
    "plant_type": "Succulents",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_168",
    "name": "Apiaceae Species 168",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus168",
      "species": "species168"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Aquatic plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_169",
    "name": "Ranunculaceae Species 169",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus169",
      "species": "species169"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_170",
    "name": "Liliaceae Species 170",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus170",
      "species": "species170"
    },
    "lifecycle": "Annuals",
    "plant_type": "Shrubs",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_171",
    "name": "Iridaceae Species 171",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus171",
      "species": "species171"
    },
    "lifecycle": "Biennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_172",
    "name": "Amaryllidaceae Species 172",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus172",
      "species": "species172"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Bulb plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_173",
    "name": "Malvaceae Species 173",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus173",
      "species": "species173"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_174",
    "name": "Caryophyllaceae Species 174",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus174",
      "species": "species174"
    },
    "lifecycle": "Annuals",
    "plant_type": "Succulents",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_175",
    "name": "Campanulaceae Species 175",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus175",
      "species": "species175"
    },
    "lifecycle": "Biennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_176",
    "name": "Ericaceae Species 176",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus176",
      "species": "species176"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_177",
    "name": "Primulaceae Species 177",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus177",
      "species": "species177"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_178",
    "name": "Araceae Species 178",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus178",
      "species": "species178"
    },
    "lifecycle": "Annuals",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_179",
    "name": "Geraniaceae Species 179",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus179",
      "species": "species179"
    },
    "lifecycle": "Biennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_180",
    "name": "Crassulaceae Species 180",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus180",
      "species": "species180"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Climbers / vines",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_181",
    "name": "Asteraceae Species 181",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus181",
      "species": "species181"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_182",
    "name": "Orchidaceae Species 182",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus182",
      "species": "species182"
    },
    "lifecycle": "Annuals",
    "plant_type": "Aquatic plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_183",
    "name": "Fabaceae Species 183",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus183",
      "species": "species183"
    },
    "lifecycle": "Biennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_184",
    "name": "Rosaceae Species 184",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus184",
      "species": "species184"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Shrubs",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_185",
    "name": "Lamiaceae Species 185",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus185",
      "species": "species185"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_186",
    "name": "Brassicaceae Species 186",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus186",
      "species": "species186"
    },
    "lifecycle": "Annuals",
    "plant_type": "Bulb plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_187",
    "name": "Solanaceae Species 187",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus187",
      "species": "species187"
    },
    "lifecycle": "Biennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_188",
    "name": "Apiaceae Species 188",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus188",
      "species": "species188"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Succulents",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_189",
    "name": "Ranunculaceae Species 189",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus189",
      "species": "species189"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_190",
    "name": "Liliaceae Species 190",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus190",
      "species": "species190"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_191",
    "name": "Iridaceae Species 191",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus191",
      "species": "species191"
    },
    "lifecycle": "Biennials",
    "plant_type": "Shrubs",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_192",
    "name": "Amaryllidaceae Species 192",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus192",
      "species": "species192"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_193",
    "name": "Malvaceae Species 193",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus193",
      "species": "species193"
    },
    "lifecycle": "Perennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_194",
    "name": "Caryophyllaceae Species 194",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus194",
      "species": "species194"
    },
    "lifecycle": "Annuals",
    "plant_type": "Climbers / vines",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_195",
    "name": "Campanulaceae Species 195",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus195",
      "species": "species195"
    },
    "lifecycle": "Biennials",
    "plant_type": "Succulents",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_196",
    "name": "Ericaceae Species 196",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus196",
      "species": "species196"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Aquatic plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_197",
    "name": "Primulaceae Species 197",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus197",
      "species": "species197"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_198",
    "name": "Araceae Species 198",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus198",
      "species": "species198"
    },
    "lifecycle": "Annuals",
    "plant_type": "Shrubs",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_199",
    "name": "Geraniaceae Species 199",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus199",
      "species": "species199"
    },
    "lifecycle": "Biennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_200",
    "name": "Crassulaceae Species 200",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus200",
      "species": "species200"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Bulb plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_201",
    "name": "Asteraceae Species 201",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus201",
      "species": "species201"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_202",
    "name": "Orchidaceae Species 202",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus202",
      "species": "species202"
    },
    "lifecycle": "Annuals",
    "plant_type": "Succulents",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_203",
    "name": "Fabaceae Species 203",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus203",
      "species": "species203"
    },
    "lifecycle": "Biennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_204",
    "name": "Rosaceae Species 204",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus204",
      "species": "species204"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_205",
    "name": "Lamiaceae Species 205",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus205",
      "species": "species205"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_206",
    "name": "Brassicaceae Species 206",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus206",
      "species": "species206"
    },
    "lifecycle": "Annuals",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_207",
    "name": "Solanaceae Species 207",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus207",
      "species": "species207"
    },
    "lifecycle": "Biennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_208",
    "name": "Apiaceae Species 208",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus208",
      "species": "species208"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Climbers / vines",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_209",
    "name": "Ranunculaceae Species 209",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus209",
      "species": "species209"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_210",
    "name": "Liliaceae Species 210",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus210",
      "species": "species210"
    },
    "lifecycle": "Annuals",
    "plant_type": "Aquatic plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_211",
    "name": "Iridaceae Species 211",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus211",
      "species": "species211"
    },
    "lifecycle": "Biennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_212",
    "name": "Amaryllidaceae Species 212",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus212",
      "species": "species212"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Shrubs",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_213",
    "name": "Malvaceae Species 213",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus213",
      "species": "species213"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_214",
    "name": "Caryophyllaceae Species 214",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus214",
      "species": "species214"
    },
    "lifecycle": "Annuals",
    "plant_type": "Bulb plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_215",
    "name": "Campanulaceae Species 215",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus215",
      "species": "species215"
    },
    "lifecycle": "Biennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_216",
    "name": "Ericaceae Species 216",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus216",
      "species": "species216"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Succulents",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_217",
    "name": "Primulaceae Species 217",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus217",
      "species": "species217"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_218",
    "name": "Araceae Species 218",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus218",
      "species": "species218"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_219",
    "name": "Geraniaceae Species 219",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus219",
      "species": "species219"
    },
    "lifecycle": "Biennials",
    "plant_type": "Shrubs",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_220",
    "name": "Crassulaceae Species 220",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus220",
      "species": "species220"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_221",
    "name": "Asteraceae Species 221",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus221",
      "species": "species221"
    },
    "lifecycle": "Perennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_222",
    "name": "Orchidaceae Species 222",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus222",
      "species": "species222"
    },
    "lifecycle": "Annuals",
    "plant_type": "Climbers / vines",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_223",
    "name": "Fabaceae Species 223",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus223",
      "species": "species223"
    },
    "lifecycle": "Biennials",
    "plant_type": "Succulents",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_224",
    "name": "Rosaceae Species 224",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus224",
      "species": "species224"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Aquatic plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_225",
    "name": "Lamiaceae Species 225",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus225",
      "species": "species225"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_226",
    "name": "Brassicaceae Species 226",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus226",
      "species": "species226"
    },
    "lifecycle": "Annuals",
    "plant_type": "Shrubs",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_227",
    "name": "Solanaceae Species 227",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus227",
      "species": "species227"
    },
    "lifecycle": "Biennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_228",
    "name": "Apiaceae Species 228",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus228",
      "species": "species228"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Bulb plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_229",
    "name": "Ranunculaceae Species 229",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus229",
      "species": "species229"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_230",
    "name": "Liliaceae Species 230",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus230",
      "species": "species230"
    },
    "lifecycle": "Annuals",
    "plant_type": "Succulents",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_231",
    "name": "Iridaceae Species 231",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus231",
      "species": "species231"
    },
    "lifecycle": "Biennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_232",
    "name": "Amaryllidaceae Species 232",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus232",
      "species": "species232"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_233",
    "name": "Malvaceae Species 233",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus233",
      "species": "species233"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_234",
    "name": "Caryophyllaceae Species 234",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus234",
      "species": "species234"
    },
    "lifecycle": "Annuals",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_235",
    "name": "Campanulaceae Species 235",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus235",
      "species": "species235"
    },
    "lifecycle": "Biennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_236",
    "name": "Ericaceae Species 236",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus236",
      "species": "species236"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Climbers / vines",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_237",
    "name": "Primulaceae Species 237",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus237",
      "species": "species237"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_238",
    "name": "Araceae Species 238",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus238",
      "species": "species238"
    },
    "lifecycle": "Annuals",
    "plant_type": "Aquatic plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_239",
    "name": "Geraniaceae Species 239",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus239",
      "species": "species239"
    },
    "lifecycle": "Biennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_240",
    "name": "Crassulaceae Species 240",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus240",
      "species": "species240"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Shrubs",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_241",
    "name": "Asteraceae Species 241",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus241",
      "species": "species241"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_242",
    "name": "Orchidaceae Species 242",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus242",
      "species": "species242"
    },
    "lifecycle": "Annuals",
    "plant_type": "Bulb plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_243",
    "name": "Fabaceae Species 243",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus243",
      "species": "species243"
    },
    "lifecycle": "Biennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_244",
    "name": "Rosaceae Species 244",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus244",
      "species": "species244"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Succulents",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_245",
    "name": "Lamiaceae Species 245",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus245",
      "species": "species245"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_246",
    "name": "Brassicaceae Species 246",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus246",
      "species": "species246"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_247",
    "name": "Solanaceae Species 247",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus247",
      "species": "species247"
    },
    "lifecycle": "Biennials",
    "plant_type": "Shrubs",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_248",
    "name": "Apiaceae Species 248",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus248",
      "species": "species248"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_249",
    "name": "Ranunculaceae Species 249",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus249",
      "species": "species249"
    },
    "lifecycle": "Perennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_250",
    "name": "Liliaceae Species 250",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus250",
      "species": "species250"
    },
    "lifecycle": "Annuals",
    "plant_type": "Climbers / vines",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_251",
    "name": "Iridaceae Species 251",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus251",
      "species": "species251"
    },
    "lifecycle": "Biennials",
    "plant_type": "Succulents",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_252",
    "name": "Amaryllidaceae Species 252",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus252",
      "species": "species252"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Aquatic plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_253",
    "name": "Malvaceae Species 253",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus253",
      "species": "species253"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_254",
    "name": "Caryophyllaceae Species 254",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus254",
      "species": "species254"
    },
    "lifecycle": "Annuals",
    "plant_type": "Shrubs",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_255",
    "name": "Campanulaceae Species 255",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus255",
      "species": "species255"
    },
    "lifecycle": "Biennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_256",
    "name": "Ericaceae Species 256",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus256",
      "species": "species256"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Bulb plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_257",
    "name": "Primulaceae Species 257",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus257",
      "species": "species257"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_258",
    "name": "Araceae Species 258",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus258",
      "species": "species258"
    },
    "lifecycle": "Annuals",
    "plant_type": "Succulents",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_259",
    "name": "Geraniaceae Species 259",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus259",
      "species": "species259"
    },
    "lifecycle": "Biennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_260",
    "name": "Crassulaceae Species 260",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus260",
      "species": "species260"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_261",
    "name": "Asteraceae Species 261",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus261",
      "species": "species261"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_262",
    "name": "Orchidaceae Species 262",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus262",
      "species": "species262"
    },
    "lifecycle": "Annuals",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_263",
    "name": "Fabaceae Species 263",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus263",
      "species": "species263"
    },
    "lifecycle": "Biennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_264",
    "name": "Rosaceae Species 264",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus264",
      "species": "species264"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Climbers / vines",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_265",
    "name": "Lamiaceae Species 265",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus265",
      "species": "species265"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_266",
    "name": "Brassicaceae Species 266",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus266",
      "species": "species266"
    },
    "lifecycle": "Annuals",
    "plant_type": "Aquatic plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_267",
    "name": "Solanaceae Species 267",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus267",
      "species": "species267"
    },
    "lifecycle": "Biennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_268",
    "name": "Apiaceae Species 268",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus268",
      "species": "species268"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Shrubs",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_269",
    "name": "Ranunculaceae Species 269",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus269",
      "species": "species269"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_270",
    "name": "Liliaceae Species 270",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus270",
      "species": "species270"
    },
    "lifecycle": "Annuals",
    "plant_type": "Bulb plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_271",
    "name": "Iridaceae Species 271",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus271",
      "species": "species271"
    },
    "lifecycle": "Biennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_272",
    "name": "Amaryllidaceae Species 272",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus272",
      "species": "species272"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Succulents",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_273",
    "name": "Malvaceae Species 273",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus273",
      "species": "species273"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_274",
    "name": "Caryophyllaceae Species 274",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus274",
      "species": "species274"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_275",
    "name": "Campanulaceae Species 275",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus275",
      "species": "species275"
    },
    "lifecycle": "Biennials",
    "plant_type": "Shrubs",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_276",
    "name": "Ericaceae Species 276",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus276",
      "species": "species276"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_277",
    "name": "Primulaceae Species 277",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus277",
      "species": "species277"
    },
    "lifecycle": "Perennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_278",
    "name": "Araceae Species 278",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus278",
      "species": "species278"
    },
    "lifecycle": "Annuals",
    "plant_type": "Climbers / vines",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_279",
    "name": "Geraniaceae Species 279",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus279",
      "species": "species279"
    },
    "lifecycle": "Biennials",
    "plant_type": "Succulents",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_280",
    "name": "Crassulaceae Species 280",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus280",
      "species": "species280"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Aquatic plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_281",
    "name": "Asteraceae Species 281",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus281",
      "species": "species281"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_282",
    "name": "Orchidaceae Species 282",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus282",
      "species": "species282"
    },
    "lifecycle": "Annuals",
    "plant_type": "Shrubs",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_283",
    "name": "Fabaceae Species 283",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus283",
      "species": "species283"
    },
    "lifecycle": "Biennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_284",
    "name": "Rosaceae Species 284",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus284",
      "species": "species284"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Bulb plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_285",
    "name": "Lamiaceae Species 285",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus285",
      "species": "species285"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_286",
    "name": "Brassicaceae Species 286",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus286",
      "species": "species286"
    },
    "lifecycle": "Annuals",
    "plant_type": "Succulents",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_287",
    "name": "Solanaceae Species 287",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus287",
      "species": "species287"
    },
    "lifecycle": "Biennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_288",
    "name": "Apiaceae Species 288",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus288",
      "species": "species288"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_289",
    "name": "Ranunculaceae Species 289",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus289",
      "species": "species289"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_290",
    "name": "Liliaceae Species 290",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus290",
      "species": "species290"
    },
    "lifecycle": "Annuals",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_291",
    "name": "Iridaceae Species 291",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus291",
      "species": "species291"
    },
    "lifecycle": "Biennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_292",
    "name": "Amaryllidaceae Species 292",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus292",
      "species": "species292"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Climbers / vines",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_293",
    "name": "Malvaceae Species 293",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus293",
      "species": "species293"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_294",
    "name": "Caryophyllaceae Species 294",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus294",
      "species": "species294"
    },
    "lifecycle": "Annuals",
    "plant_type": "Aquatic plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_295",
    "name": "Campanulaceae Species 295",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus295",
      "species": "species295"
    },
    "lifecycle": "Biennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_296",
    "name": "Ericaceae Species 296",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus296",
      "species": "species296"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Shrubs",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_297",
    "name": "Primulaceae Species 297",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus297",
      "species": "species297"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_298",
    "name": "Araceae Species 298",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus298",
      "species": "species298"
    },
    "lifecycle": "Annuals",
    "plant_type": "Bulb plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_299",
    "name": "Geraniaceae Species 299",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus299",
      "species": "species299"
    },
    "lifecycle": "Biennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_300",
    "name": "Crassulaceae Species 300",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus300",
      "species": "species300"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Succulents",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_301",
    "name": "Asteraceae Species 301",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus301",
      "species": "species301"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_302",
    "name": "Orchidaceae Species 302",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus302",
      "species": "species302"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_303",
    "name": "Fabaceae Species 303",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus303",
      "species": "species303"
    },
    "lifecycle": "Biennials",
    "plant_type": "Shrubs",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_304",
    "name": "Rosaceae Species 304",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus304",
      "species": "species304"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_305",
    "name": "Lamiaceae Species 305",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus305",
      "species": "species305"
    },
    "lifecycle": "Perennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_306",
    "name": "Brassicaceae Species 306",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus306",
      "species": "species306"
    },
    "lifecycle": "Annuals",
    "plant_type": "Climbers / vines",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_307",
    "name": "Solanaceae Species 307",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus307",
      "species": "species307"
    },
    "lifecycle": "Biennials",
    "plant_type": "Succulents",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_308",
    "name": "Apiaceae Species 308",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus308",
      "species": "species308"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Aquatic plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_309",
    "name": "Ranunculaceae Species 309",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus309",
      "species": "species309"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_310",
    "name": "Liliaceae Species 310",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus310",
      "species": "species310"
    },
    "lifecycle": "Annuals",
    "plant_type": "Shrubs",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_311",
    "name": "Iridaceae Species 311",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus311",
      "species": "species311"
    },
    "lifecycle": "Biennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_312",
    "name": "Amaryllidaceae Species 312",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus312",
      "species": "species312"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Bulb plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_313",
    "name": "Malvaceae Species 313",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus313",
      "species": "species313"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_314",
    "name": "Caryophyllaceae Species 314",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus314",
      "species": "species314"
    },
    "lifecycle": "Annuals",
    "plant_type": "Succulents",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_315",
    "name": "Campanulaceae Species 315",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus315",
      "species": "species315"
    },
    "lifecycle": "Biennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_316",
    "name": "Ericaceae Species 316",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus316",
      "species": "species316"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_317",
    "name": "Primulaceae Species 317",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus317",
      "species": "species317"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_318",
    "name": "Araceae Species 318",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus318",
      "species": "species318"
    },
    "lifecycle": "Annuals",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_319",
    "name": "Geraniaceae Species 319",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus319",
      "species": "species319"
    },
    "lifecycle": "Biennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_320",
    "name": "Crassulaceae Species 320",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus320",
      "species": "species320"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Climbers / vines",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_321",
    "name": "Asteraceae Species 321",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus321",
      "species": "species321"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_322",
    "name": "Orchidaceae Species 322",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus322",
      "species": "species322"
    },
    "lifecycle": "Annuals",
    "plant_type": "Aquatic plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_323",
    "name": "Fabaceae Species 323",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus323",
      "species": "species323"
    },
    "lifecycle": "Biennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_324",
    "name": "Rosaceae Species 324",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus324",
      "species": "species324"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Shrubs",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_325",
    "name": "Lamiaceae Species 325",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus325",
      "species": "species325"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_326",
    "name": "Brassicaceae Species 326",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus326",
      "species": "species326"
    },
    "lifecycle": "Annuals",
    "plant_type": "Bulb plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_327",
    "name": "Solanaceae Species 327",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus327",
      "species": "species327"
    },
    "lifecycle": "Biennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_328",
    "name": "Apiaceae Species 328",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus328",
      "species": "species328"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Succulents",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_329",
    "name": "Ranunculaceae Species 329",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus329",
      "species": "species329"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_330",
    "name": "Liliaceae Species 330",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus330",
      "species": "species330"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_331",
    "name": "Iridaceae Species 331",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus331",
      "species": "species331"
    },
    "lifecycle": "Biennials",
    "plant_type": "Shrubs",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_332",
    "name": "Amaryllidaceae Species 332",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus332",
      "species": "species332"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_333",
    "name": "Malvaceae Species 333",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus333",
      "species": "species333"
    },
    "lifecycle": "Perennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_334",
    "name": "Caryophyllaceae Species 334",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus334",
      "species": "species334"
    },
    "lifecycle": "Annuals",
    "plant_type": "Climbers / vines",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_335",
    "name": "Campanulaceae Species 335",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus335",
      "species": "species335"
    },
    "lifecycle": "Biennials",
    "plant_type": "Succulents",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_336",
    "name": "Ericaceae Species 336",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus336",
      "species": "species336"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Aquatic plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_337",
    "name": "Primulaceae Species 337",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus337",
      "species": "species337"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_338",
    "name": "Araceae Species 338",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus338",
      "species": "species338"
    },
    "lifecycle": "Annuals",
    "plant_type": "Shrubs",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_339",
    "name": "Geraniaceae Species 339",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus339",
      "species": "species339"
    },
    "lifecycle": "Biennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_340",
    "name": "Crassulaceae Species 340",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus340",
      "species": "species340"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Bulb plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_341",
    "name": "Asteraceae Species 341",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus341",
      "species": "species341"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_342",
    "name": "Orchidaceae Species 342",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus342",
      "species": "species342"
    },
    "lifecycle": "Annuals",
    "plant_type": "Succulents",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_343",
    "name": "Fabaceae Species 343",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus343",
      "species": "species343"
    },
    "lifecycle": "Biennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_344",
    "name": "Rosaceae Species 344",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus344",
      "species": "species344"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_345",
    "name": "Lamiaceae Species 345",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus345",
      "species": "species345"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_346",
    "name": "Brassicaceae Species 346",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus346",
      "species": "species346"
    },
    "lifecycle": "Annuals",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_347",
    "name": "Solanaceae Species 347",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus347",
      "species": "species347"
    },
    "lifecycle": "Biennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_348",
    "name": "Apiaceae Species 348",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus348",
      "species": "species348"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Climbers / vines",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_349",
    "name": "Ranunculaceae Species 349",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus349",
      "species": "species349"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_350",
    "name": "Liliaceae Species 350",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus350",
      "species": "species350"
    },
    "lifecycle": "Annuals",
    "plant_type": "Aquatic plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_351",
    "name": "Iridaceae Species 351",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus351",
      "species": "species351"
    },
    "lifecycle": "Biennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_352",
    "name": "Amaryllidaceae Species 352",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus352",
      "species": "species352"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Shrubs",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_353",
    "name": "Malvaceae Species 353",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus353",
      "species": "species353"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_354",
    "name": "Caryophyllaceae Species 354",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus354",
      "species": "species354"
    },
    "lifecycle": "Annuals",
    "plant_type": "Bulb plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_355",
    "name": "Campanulaceae Species 355",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus355",
      "species": "species355"
    },
    "lifecycle": "Biennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_356",
    "name": "Ericaceae Species 356",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus356",
      "species": "species356"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Succulents",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_357",
    "name": "Primulaceae Species 357",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus357",
      "species": "species357"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_358",
    "name": "Araceae Species 358",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus358",
      "species": "species358"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_359",
    "name": "Geraniaceae Species 359",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus359",
      "species": "species359"
    },
    "lifecycle": "Biennials",
    "plant_type": "Shrubs",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_360",
    "name": "Crassulaceae Species 360",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus360",
      "species": "species360"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_361",
    "name": "Asteraceae Species 361",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus361",
      "species": "species361"
    },
    "lifecycle": "Perennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_362",
    "name": "Orchidaceae Species 362",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus362",
      "species": "species362"
    },
    "lifecycle": "Annuals",
    "plant_type": "Climbers / vines",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_363",
    "name": "Fabaceae Species 363",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus363",
      "species": "species363"
    },
    "lifecycle": "Biennials",
    "plant_type": "Succulents",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_364",
    "name": "Rosaceae Species 364",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus364",
      "species": "species364"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Aquatic plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_365",
    "name": "Lamiaceae Species 365",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus365",
      "species": "species365"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_366",
    "name": "Brassicaceae Species 366",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus366",
      "species": "species366"
    },
    "lifecycle": "Annuals",
    "plant_type": "Shrubs",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_367",
    "name": "Solanaceae Species 367",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus367",
      "species": "species367"
    },
    "lifecycle": "Biennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_368",
    "name": "Apiaceae Species 368",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus368",
      "species": "species368"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Bulb plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_369",
    "name": "Ranunculaceae Species 369",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus369",
      "species": "species369"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_370",
    "name": "Liliaceae Species 370",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus370",
      "species": "species370"
    },
    "lifecycle": "Annuals",
    "plant_type": "Succulents",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_371",
    "name": "Iridaceae Species 371",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus371",
      "species": "species371"
    },
    "lifecycle": "Biennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_372",
    "name": "Amaryllidaceae Species 372",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus372",
      "species": "species372"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_373",
    "name": "Malvaceae Species 373",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus373",
      "species": "species373"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_374",
    "name": "Caryophyllaceae Species 374",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus374",
      "species": "species374"
    },
    "lifecycle": "Annuals",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_375",
    "name": "Campanulaceae Species 375",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus375",
      "species": "species375"
    },
    "lifecycle": "Biennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_376",
    "name": "Ericaceae Species 376",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus376",
      "species": "species376"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Climbers / vines",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_377",
    "name": "Primulaceae Species 377",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus377",
      "species": "species377"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_378",
    "name": "Araceae Species 378",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus378",
      "species": "species378"
    },
    "lifecycle": "Annuals",
    "plant_type": "Aquatic plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_379",
    "name": "Geraniaceae Species 379",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus379",
      "species": "species379"
    },
    "lifecycle": "Biennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_380",
    "name": "Crassulaceae Species 380",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus380",
      "species": "species380"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Shrubs",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_381",
    "name": "Asteraceae Species 381",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus381",
      "species": "species381"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_382",
    "name": "Orchidaceae Species 382",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus382",
      "species": "species382"
    },
    "lifecycle": "Annuals",
    "plant_type": "Bulb plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_383",
    "name": "Fabaceae Species 383",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus383",
      "species": "species383"
    },
    "lifecycle": "Biennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_384",
    "name": "Rosaceae Species 384",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus384",
      "species": "species384"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Succulents",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_385",
    "name": "Lamiaceae Species 385",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus385",
      "species": "species385"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_386",
    "name": "Brassicaceae Species 386",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus386",
      "species": "species386"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_387",
    "name": "Solanaceae Species 387",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus387",
      "species": "species387"
    },
    "lifecycle": "Biennials",
    "plant_type": "Shrubs",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_388",
    "name": "Apiaceae Species 388",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus388",
      "species": "species388"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_389",
    "name": "Ranunculaceae Species 389",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus389",
      "species": "species389"
    },
    "lifecycle": "Perennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_390",
    "name": "Liliaceae Species 390",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus390",
      "species": "species390"
    },
    "lifecycle": "Annuals",
    "plant_type": "Climbers / vines",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_391",
    "name": "Iridaceae Species 391",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus391",
      "species": "species391"
    },
    "lifecycle": "Biennials",
    "plant_type": "Succulents",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_392",
    "name": "Amaryllidaceae Species 392",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus392",
      "species": "species392"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Aquatic plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_393",
    "name": "Malvaceae Species 393",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus393",
      "species": "species393"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_394",
    "name": "Caryophyllaceae Species 394",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus394",
      "species": "species394"
    },
    "lifecycle": "Annuals",
    "plant_type": "Shrubs",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_395",
    "name": "Campanulaceae Species 395",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus395",
      "species": "species395"
    },
    "lifecycle": "Biennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_396",
    "name": "Ericaceae Species 396",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus396",
      "species": "species396"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Bulb plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_397",
    "name": "Primulaceae Species 397",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus397",
      "species": "species397"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_398",
    "name": "Araceae Species 398",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus398",
      "species": "species398"
    },
    "lifecycle": "Annuals",
    "plant_type": "Succulents",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_399",
    "name": "Geraniaceae Species 399",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus399",
      "species": "species399"
    },
    "lifecycle": "Biennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_400",
    "name": "Crassulaceae Species 400",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus400",
      "species": "species400"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_401",
    "name": "Asteraceae Species 401",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus401",
      "species": "species401"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_402",
    "name": "Orchidaceae Species 402",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus402",
      "species": "species402"
    },
    "lifecycle": "Annuals",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_403",
    "name": "Fabaceae Species 403",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus403",
      "species": "species403"
    },
    "lifecycle": "Biennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_404",
    "name": "Rosaceae Species 404",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus404",
      "species": "species404"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Climbers / vines",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_405",
    "name": "Lamiaceae Species 405",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus405",
      "species": "species405"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_406",
    "name": "Brassicaceae Species 406",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus406",
      "species": "species406"
    },
    "lifecycle": "Annuals",
    "plant_type": "Aquatic plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_407",
    "name": "Solanaceae Species 407",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus407",
      "species": "species407"
    },
    "lifecycle": "Biennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_408",
    "name": "Apiaceae Species 408",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus408",
      "species": "species408"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Shrubs",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_409",
    "name": "Ranunculaceae Species 409",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus409",
      "species": "species409"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_410",
    "name": "Liliaceae Species 410",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus410",
      "species": "species410"
    },
    "lifecycle": "Annuals",
    "plant_type": "Bulb plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_411",
    "name": "Iridaceae Species 411",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus411",
      "species": "species411"
    },
    "lifecycle": "Biennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_412",
    "name": "Amaryllidaceae Species 412",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus412",
      "species": "species412"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Succulents",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_413",
    "name": "Malvaceae Species 413",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus413",
      "species": "species413"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_414",
    "name": "Caryophyllaceae Species 414",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus414",
      "species": "species414"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_415",
    "name": "Campanulaceae Species 415",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus415",
      "species": "species415"
    },
    "lifecycle": "Biennials",
    "plant_type": "Shrubs",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_416",
    "name": "Ericaceae Species 416",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus416",
      "species": "species416"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_417",
    "name": "Primulaceae Species 417",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus417",
      "species": "species417"
    },
    "lifecycle": "Perennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_418",
    "name": "Araceae Species 418",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus418",
      "species": "species418"
    },
    "lifecycle": "Annuals",
    "plant_type": "Climbers / vines",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_419",
    "name": "Geraniaceae Species 419",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus419",
      "species": "species419"
    },
    "lifecycle": "Biennials",
    "plant_type": "Succulents",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_420",
    "name": "Crassulaceae Species 420",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus420",
      "species": "species420"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Aquatic plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_421",
    "name": "Asteraceae Species 421",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus421",
      "species": "species421"
    },
    "lifecycle": "Perennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_422",
    "name": "Orchidaceae Species 422",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus422",
      "species": "species422"
    },
    "lifecycle": "Annuals",
    "plant_type": "Shrubs",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_423",
    "name": "Fabaceae Species 423",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus423",
      "species": "species423"
    },
    "lifecycle": "Biennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_424",
    "name": "Rosaceae Species 424",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus424",
      "species": "species424"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Bulb plants",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_425",
    "name": "Lamiaceae Species 425",
    "scientific_classification": {
      "family": "Lamiaceae",
      "genus": "Genus425",
      "species": "species425"
    },
    "lifecycle": "Perennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Lamiaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Lamiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_426",
    "name": "Brassicaceae Species 426",
    "scientific_classification": {
      "family": "Brassicaceae",
      "genus": "Genus426",
      "species": "species426"
    },
    "lifecycle": "Annuals",
    "plant_type": "Succulents",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Brassicaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Brassicaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_427",
    "name": "Solanaceae Species 427",
    "scientific_classification": {
      "family": "Solanaceae",
      "genus": "Genus427",
      "species": "species427"
    },
    "lifecycle": "Biennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Solanaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Solanaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_428",
    "name": "Apiaceae Species 428",
    "scientific_classification": {
      "family": "Apiaceae",
      "genus": "Genus428",
      "species": "species428"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Apiaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Apiaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_429",
    "name": "Ranunculaceae Species 429",
    "scientific_classification": {
      "family": "Ranunculaceae",
      "genus": "Genus429",
      "species": "species429"
    },
    "lifecycle": "Perennials",
    "plant_type": "Shrubs",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Ranunculaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ranunculaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_430",
    "name": "Liliaceae Species 430",
    "scientific_classification": {
      "family": "Liliaceae",
      "genus": "Genus430",
      "species": "species430"
    },
    "lifecycle": "Annuals",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Liliaceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Liliaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_431",
    "name": "Iridaceae Species 431",
    "scientific_classification": {
      "family": "Iridaceae",
      "genus": "Genus431",
      "species": "species431"
    },
    "lifecycle": "Biennials",
    "plant_type": "Bulb plants",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Iridaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Iridaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_432",
    "name": "Amaryllidaceae Species 432",
    "scientific_classification": {
      "family": "Amaryllidaceae",
      "genus": "Genus432",
      "species": "species432"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Climbers / vines",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Amaryllidaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Amaryllidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_433",
    "name": "Malvaceae Species 433",
    "scientific_classification": {
      "family": "Malvaceae",
      "genus": "Genus433",
      "species": "species433"
    },
    "lifecycle": "Perennials",
    "plant_type": "Succulents",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Malvaceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Malvaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_434",
    "name": "Caryophyllaceae Species 434",
    "scientific_classification": {
      "family": "Caryophyllaceae",
      "genus": "Genus434",
      "species": "species434"
    },
    "lifecycle": "Annuals",
    "plant_type": "Aquatic plants",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Caryophyllaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Caryophyllaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_435",
    "name": "Campanulaceae Species 435",
    "scientific_classification": {
      "family": "Campanulaceae",
      "genus": "Genus435",
      "species": "species435"
    },
    "lifecycle": "Biennials",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Campanulaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Campanulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_436",
    "name": "Ericaceae Species 436",
    "scientific_classification": {
      "family": "Ericaceae",
      "genus": "Genus436",
      "species": "species436"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Shrubs",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Ericaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Ericaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  },
  {
    "id": "extra_flower_437",
    "name": "Primulaceae Species 437",
    "scientific_classification": {
      "family": "Primulaceae",
      "genus": "Genus437",
      "species": "species437"
    },
    "lifecycle": "Perennials",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Blue",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Primulaceae family, known for its blue blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Primulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "blue"
    ]
  },
  {
    "id": "extra_flower_438",
    "name": "Araceae Species 438",
    "scientific_classification": {
      "family": "Araceae",
      "genus": "Genus438",
      "species": "species438"
    },
    "lifecycle": "Annuals",
    "plant_type": "Bulb plants",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Parks & public spaces"
    ],
    "color": "Purple",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Araceae family, known for its purple blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Araceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "purple"
    ]
  },
  {
    "id": "extra_flower_439",
    "name": "Geraniaceae Species 439",
    "scientific_classification": {
      "family": "Geraniaceae",
      "genus": "Genus439",
      "species": "species439"
    },
    "lifecycle": "Biennials",
    "plant_type": "Climbers / vines",
    "climate_zone": "Temperate",
    "decorative_use": [
      "Rock gardens / alpine"
    ],
    "color": "Orange",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Geraniaceae family, known for its orange blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Geraniaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "orange"
    ]
  },
  {
    "id": "extra_flower_440",
    "name": "Crassulaceae Species 440",
    "scientific_classification": {
      "family": "Crassulaceae",
      "genus": "Genus440",
      "species": "species440"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Succulents",
    "climate_zone": "Tropical",
    "decorative_use": [
      "Vertical gardens"
    ],
    "color": "Mixed",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Crassulaceae family, known for its mixed blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Crassulaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "mixed"
    ]
  },
  {
    "id": "extra_flower_441",
    "name": "Asteraceae Species 441",
    "scientific_classification": {
      "family": "Asteraceae",
      "genus": "Genus441",
      "species": "species441"
    },
    "lifecycle": "Perennials",
    "plant_type": "Aquatic plants",
    "climate_zone": "Subtropical",
    "decorative_use": [
      "Aquatic decoration"
    ],
    "color": "Red",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Toxic",
    "description": "A beautiful representative of the Asteraceae family, known for its red blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Asteraceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "red"
    ]
  },
  {
    "id": "extra_flower_442",
    "name": "Orchidaceae Species 442",
    "scientific_classification": {
      "family": "Orchidaceae",
      "genus": "Genus442",
      "species": "species442"
    },
    "lifecycle": "Annuals",
    "plant_type": "Herbaceous flowering",
    "climate_zone": "Arid / desert",
    "decorative_use": [
      "Garden landscape"
    ],
    "color": "Pink",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "High",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Orchidaceae family, known for its pink blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Orchidaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "pink"
    ]
  },
  {
    "id": "extra_flower_443",
    "name": "Fabaceae Species 443",
    "scientific_classification": {
      "family": "Fabaceae",
      "genus": "Genus443",
      "species": "species443"
    },
    "lifecycle": "Biennials",
    "plant_type": "Shrubs",
    "climate_zone": "Alpine / cold",
    "decorative_use": [
      "Indoor plants"
    ],
    "color": "White",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Fabaceae family, known for its white blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Fabaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "white"
    ]
  },
  {
    "id": "extra_flower_444",
    "name": "Rosaceae Species 444",
    "scientific_classification": {
      "family": "Rosaceae",
      "genus": "Genus444",
      "species": "species444"
    },
    "lifecycle": "Mixed / flexible",
    "plant_type": "Trees (flowering)",
    "climate_zone": "Wetlands / aquatic",
    "decorative_use": [
      "Cut flowers"
    ],
    "color": "Yellow",
    "bloom_season": "Spring/Summer",
    "fragrance_level": "Medium",
    "toxicity": "Non-toxic",
    "description": "A beautiful representative of the Rosaceae family, known for its yellow blooms.",
    "care": {
      "water": "Moderate",
      "sun": "Full sun",
      "soil": "Well-drained",
      "diff": "Easy",
      "season": "Summer",
      "origin": "Global"
    },
    "uses": [
      "Ornamental"
    ],
    "props": [
      "Decorative"
    ],
    "facts": [
      "This is one of many species in the Rosaceae family."
    ],
    "cat": "garden",
    "tags": [
      "garden",
      "yellow"
    ]
  }
];

const cats = ['all','herbal','garden','wild','tropical','aquatic','succulent','alpine'];

const seasonMeta = [
  {name:'Spring', key:'sp', icon:'🌸'},
  {name:'Summer', key:'su', icon:'☀️'},
  {name:'Autumn', key:'au', icon:'🍂'},
  {name:'Winter', key:'wi', icon:'❄️'}
];

const glossary = [
  {term:'Corolla',def:'The collective term for all petals of a flower — the showy inner whorl that attracts pollinators.'},
  {term:'Calyx',def:'The outermost ring of a flower, made up of sepals that protect the developing bud.'},
  {term:'Sepal',def:'Individual leaf-like structures forming the calyx, usually green, enclosing the bud before it opens.'},
  {term:'Stamen',def:'The male reproductive organ of a flower, consisting of a filament topped by an anther that produces pollen.'},
  {term:'Pistil',def:'The female reproductive organ — comprising the stigma, style, and ovary — that receives pollen.'},
  {term:'Anther',def:'The pollen-producing sac at the tip of the stamen. Its colour, shape, and timing are species-specific.'},
  {term:'Stigma',def:'The sticky tip of the pistil that captures pollen grains, starting the fertilisation process.'},
  {term:'Nectary',def:'Glands that produce nectar — the sugary reward that lures pollinators into the flower.'},
  {term:'Bract',def:'A modified leaf at the base of a flower that may be colourful — what we call "petals" in poinsettias are actually bracts.'},
  {term:'Raceme',def:'A flower cluster where individual flowers grow on short stalks along a central stem, like foxglove or bluebell.'},
  {term:'Corymb',def:'A flat-topped flower cluster where all flowers reach the same height — like elder or yarrow.'},
  {term:'Umbel',def:'An umbrella-shaped flower cluster where all stalks arise from one point — like wild carrot and fennel.'},
  {term:'Panicle',def:'A loose, branched flower cluster — lilac and oat grass produce classic panicles.'},
  {term:'Labellum',def:'The specialised lip petal of an orchid, uniquely shaped to guide pollinators to the reproductive organs.'},
  {term:'Rhizome',def:'A horizontal underground stem that stores nutrients and spreads the plant — iris and ginger grow from rhizomes.'},
  {term:'Tuber',def:'A swollen underground stem or root used for nutrient storage — dahlia and potato tubers are classic examples.'},
  {term:'Corm',def:'A solid swollen stem base acting as a storage organ — crocus, gladiolus, and freesia grow from corms.'},
  {term:'Heliotropism',def:'The ability of young plants (especially sunflowers) to track the sun\'s movement across the sky during the day.'},
  {term:'Vernalisation',def:'The requirement for a cold winter period before flowering — mimicked artificially to force bulbs to bloom.'},
  {term:'Deadheading',def:'Removing spent flower heads to redirect the plant\'s energy from seed production into further blooming.'},
  {term:'Serotiny',def:'A seed-release strategy where cones or pods open only after fire — used by proteas and some pines.'},
  {term:'Pollination Syndrome',def:'The suite of flower characteristics (colour, shape, scent) evolved to attract a specific type of pollinator.'},
  {term:'Anthesis',def:'The period during which a flower is open and fully functional — this can last from hours to weeks.'},
  {term:'Palmate',def:'Leaves or leaflets arranged in a hand-like pattern radiating from a central point, like lupins and horse-chestnut.'},
];
