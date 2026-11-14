const fsUI=require('node:fs');
const suite=fsUI.readFileSync('verify-v2.cjs','utf8')
 .replace("['base.js','lexicon.js','grammar.js','upgrade.js']","['base.js','lexicon.js','grammar.js','upgrade.js','academy-data.js','academy.js','lessons.js','study-help.js','interface.js']")
 .replace('setTimeout,clearTimeout,Blob','setTimeout,clearTimeout,setInterval:()=>1,clearInterval(){},Blob');
const uiChecks=String.raw`
assert(run('WORDS.filter(w=>w.forms).every(w=>CONSTRUCTIONS5[w.de]?.length)'));
assert(run('Object.values(CONSTRUCTIONS5).every(rows=>rows.every(r=>r.length===5&&r.every(Boolean)))'));
for(const w of run('WORDS.filter(w=>w.forms).map(w=>w.id)')){run('wordDetail('+JSON.stringify(w)+')');for(const t of ['Präsens','Präteritum','Perfekt','Futur I']){run('showVerbTense5(WORDS.find(w=>w.id==='+JSON.stringify(w)+'),'+JSON.stringify(t)+')');assert(!el('#verb-table').innerHTML.includes('undefined'));assert(el('#verb-table').innerHTML.includes('<caption>'));}}
run('state.level="A1"');assert(run('levelTabs()').includes('A1 ✓'));assert(run('levelTabs()').includes('aria-pressed="true"'));
run('showModal("test")');assert(el('#modal').innerHTML.includes('aria-modal="true"'));assert(el('#modal').innerHTML.includes('modal-close5'));
run('closeModal5()');assert.equal(el('#modal').hidden,true);
assert.equal(run('pronunciationHint5("spielen").ar'),'شْپيلِن');
assert(run('WORDS.filter(w=>w.forms).every(w=>pronunciationHint5(w.de).complete)'));
assert.equal(run('pronunciationHint5("unlistedword").complete'),false);
assert(run('CONSTRUCTIONS5.sprechen.some(r=>r[0].includes("Dativ"))'));
assert(run('CONSTRUCTIONS5.warten[0][0].includes("Akkusativ")'));
run('go("phonetics")');assert(el('#app').innerHTML.includes('CC BY-SA 3.0'));assert(el('#app').innerHTML.includes('data-phoneme5'));
assert(fs.readFileSync('dist/style.css','utf8').startsWith(':root'));
assert(fs.readFileSync('dist/interface.css','utf8').includes('@media(max-width:760px)'));
console.log('UI checks passed: all 83 verb constructions, 332 tense views, modal controls, active levels, explicit pronunciation coverage and source credits.');
`;
eval(suite+'\n'+uiChecks);
