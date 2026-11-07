const paths = {
  panel: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  crown: '<path d="m3 6 4 4 5-7 5 7 4-4-2 12H5L3 6ZM5 21h14"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
  link: '<path d="m10 13 4-4M8 16l-2 2a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0m2 2 2-2a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0" transform="translate(1 -1)"/>',
  menu: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16"/>',
  trophy: '<path d="M8 3h8v7a4 4 0 0 1-8 0zM8 5H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4M12 14v6m-4 1h8"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
  live: '<path d="M5 6a9 9 0 0 0 0 12M19 6a9 9 0 0 1 0 12M8 9a4.5 4.5 0 0 0 0 6M16 9a4.5 4.5 0 0 1 0 6"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>',
  football: '<circle cx="12" cy="12" r="9"/><path d="m12 8 4 3-1.5 4h-5L8 11zM12 3v5m8 1-4 2m1.5 8-3-4m-8 4 3-4M4 9l4 2"/>',
  tennis: '<circle cx="12" cy="12" r="9"/><path d="M6 5c8 4 8 10 12 14M18 5c-8 4-8 10-12 14"/>',
  basketball: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18M6 5c6 4 6 10 0 14M18 5c-6 4-6 10 0 14"/>',
  hockey: '<path d="m5 3 8 15c.7 1.5 1.3 2 3 2h5v-4h-6L8 3M4 18h5v3H4z"/>',
  esports: '<path d="M7 7h10c2 0 3 2 3.5 4l1 6c.4 3-2 4-4 2l-3-3h-5l-3 3c-2 2-4.4 1-4-2l1-6C4 9 5 7 7 7Z"/><path d="M6 11h5m-2.5-2.5v5M16 11h.01M18 13h.01"/>',
  ticket: '<path d="M4 3h16v6a3 3 0 0 0 0 6v6H4v-6a3 3 0 0 0 0-6zM13 6v2m0 3v2m0 3v2"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z"/>',
  settings: '<path d="m9 3-.5 3-2.3 1.3-2.8-1-2 3.4L3.7 12l-2.3 2.3 2 3.4 2.8-1L8.5 18l.5 3h4l.5-3 2.3-1.3 2.8 1 2-3.4L18.3 12l2.3-2.3-2-3.4-2.8 1L13.5 6 13 3z"/><circle cx="11" cy="12" r="3"/>',
  boost: '<path d="m6 12 6-6 6 6M6 19l6-6 6 6"/>',
  pause: '<path d="M9 5v14M15 5v14"/>',
  play: '<path d="m8 5 11 7-11 7z"/>',
  bolt: '<path d="m13 2-9 12h7l-1 8 10-12h-7z"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  trash: '<path d="M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7m4-7v7"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
  wallet: '<path d="M20 8V5H5a3 3 0 0 0 0 6h16v9H5a3 3 0 0 1-3-3V8m15 6h4v3h-4z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v1"/>',
};
const iconCache=new Map();
const icon = (name, cls = '') => iconCache.get(name+'|'+cls)||iconCache.set(name+'|'+cls, `<svg class="symbol ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.football}</svg>`).get(name+'|'+cls);
const sports = [['All sports','home'],['Football','football'],['Tennis','tennis'],['Basketball','basketball'],['Ice hockey','hockey'],['Esports','esports']];
const leagues = ['Premier League','Champions League','LaLiga','Serie A','Bundesliga'];
const matches = [
  {id:'ars',home:'Arsenal',away:'Brighton',league:leagues[0],sport:'Football',clock:'19:30',day:'Tomorrow',live:false,odds:[1.65,3.85,5.20],boost:{label:'1',market:'Match result',original:1.65,price:2.00},colors:['#b83746','#3978b3'],initials:['ARS','BHA']},
  {id:'liv',home:'Liverpool',away:'Aston Villa',league:leagues[0],sport:'Football',score:[0,0],clock:'24:08',live:true,odds:[1.82,3.40,4.60],colors:['#bd3c45','#8d4464'],initials:['LIV','AVL']},
  {id:'mad',home:'Real Madrid',away:'Dortmund',league:leagues[1],sport:'Football',clock:'21:00',live:false,odds:[1.55,4.20,5.80],colors:['#737c8b','#b99536'],initials:['RMA','BVB']},
  {id:'bar',home:'Barcelona',away:'Sevilla',league:leagues[2],sport:'Football',clock:'20:45',live:false,odds:[1.48,4.50,6.20],colors:['#735184','#ad4854'],initials:['BAR','SEV']},
  {id:'int',home:'Inter',away:'Napoli',league:leagues[3],sport:'Football',clock:'20:45',live:false,odds:[1.95,3.35,3.90],colors:['#3966a4','#3593a8'],initials:['INT','NAP']},
  {id:'bay',home:'Bayern Munich',away:'Leverkusen',league:leagues[4],sport:'Football',clock:'18:30',day:'Tomorrow',live:false,odds:[1.90,3.70,3.85],colors:['#b9424c','#775262'],initials:['BAY','B04']},
  {id:'ten',home:'Alex Cove',away:'Jamie Rivers',league:'Coastal Open',sport:'Tennis',score:[1,0],clock:'Set 2',live:true,odds:[1.72,null,2.12],colors:['#4a8184','#678567'],initials:['AC','JR']},
  {id:'bas',home:'Harbor Hawks',away:'Metro Lions',league:'City League',sport:'Basketball',score:[64,58],clock:'Q3 · 06:42',live:true,odds:[1.45,null,2.80],colors:['#b17a41','#7462a5'],initials:['HH','ML']},
  {id:'cs',home:'Northstar',away:'Ember Five',league:'Summit Series',sport:'Esports',game:'CS2',score:[1,0],clock:'Map 2 · 8:6',live:true,odds:[1.78,null,2.06],colors:['#386d90','#b66d45'],initials:['NS','E5']},
  {id:'dota',home:'Tidal Gaming',away:'Onyx',league:'Winter League',sport:'Esports',game:'Dota 2',score:[0,1],clock:'Map 2 · 24:16',live:true,odds:[2.24,null,1.64],colors:['#258c92','#767189'],initials:['TG','OX']},
  {id:'lol',home:'Rift Wolves',away:'Nova Union',league:'Rift Invitational',sport:'Esports',game:'LoL',clock:'19:30',live:false,odds:[1.91,null,1.89],colors:['#71634e','#446b94'],initials:['RW','NU']},
  {id:'val',home:'Atlas',away:'Pulse',league:'Challenger Circuit',sport:'Esports',game:'Valorant',clock:'21:00',live:false,odds:[1.66,null,2.22],colors:['#797343','#9d5264'],initials:['AT','PL']},
];
const currencies = {USD:{rate:1,symbol:'$'},EUR:{rate:.92,symbol:'€'},GBP:{rate:.79,symbol:'£'},CAD:{rate:1.37,symbol:'C$'},AUD:{rate:1.53,symbol:'A$'},JPY:{rate:151,symbol:'¥'}};

export { icon, sports, leagues, matches, currencies };

const crests = {
  'Arsenal':'arsenal','Brighton':'brighton','Liverpool':'liverpool','Aston Villa':'aston-villa',
  'Real Madrid':'real-madrid','Dortmund':'dortmund','Barcelona':'barcelona','Sevilla':'sevilla',
  'Inter':'inter','Napoli':'napoli','Bayern Munich':'bayern','Leverkusen':'leverkusen',
};
export { crests };

const games = ['CS2','Dota 2','LoL','Valorant'];
const esportLeagues = ['Summit Series','Winter League','Rift Invitational','Challenger Circuit'];
export { games, esportLeagues };
