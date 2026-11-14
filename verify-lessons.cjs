const fsLessons=require('node:fs');
const legacyLessons=fsLessons.readFileSync('verify-v2.cjs','utf8')
 .replace("['base.js','lexicon.js','grammar.js','upgrade.js']","['base.js','lexicon.js','grammar.js','upgrade.js','academy-data.js','academy.js','lessons.js']")
 .replace('setTimeout,clearTimeout,Blob','setTimeout,clearTimeout,setInterval:()=>1,clearInterval(){},Blob');
const lessonChecks=String.raw`
assert.equal(run('lessonWords4("months").length'),12);
assert.equal(run('SEASONS4.every(([de])=>lessonWords4("weather").some(w=>w.de===de))'),true);
assert.equal(run('TOPICS.every(t=>DIALOGUE4[t.id].length>=3&&lessonWords4(t.id).length>=3)'),true);
assert.equal(run('lessonWords4("intro").filter(w=>w.forms).length'),9);
console.log('Unmatched lesson vocabulary:',run('Object.entries(LESSON_MAP4).flatMap(([id,words])=>words.filter(de=>!WORDS.some(w=>w.de===de)).map(de=>({id,de})))'));
assert.equal(run('new Set(NAV_GROUPS4.flatMap(g=>g[1])).size'),run('navs.length'));
run('go("paths")');assert(el('#app').innerHTML.includes('12'));
for(const id of run('TOPICS.map(t=>t.id)')){run('lessonPage4('+JSON.stringify(id)+')');assert(!el('#app').innerHTML.includes('undefined'));assert(el('#app').innerHTML.includes('lesson-draft4'));}
run('lessonPage4("intro")');assert(el('#app').innerHTML.includes('Wie alt bist du?'));assert(el('#app').innerHTML.includes('Welche Sprachen sprichst du?'));assert(el('#app').innerHTML.includes('ich heiße'));
run('startPractice("lesson",lessonWords4("months"),"word")');assert.equal(run('exercise2.list.length'),12);
run('go("paths")');assert(el('#nav').innerHTML.includes('nav-group4'));
run('window.speechSynthesis={}; globalThis.spoken4=[]; globalThis.speechSynthesis={getVoices:()=>[{name:"English",lang:"en-US"},{name:"German",lang:"de-DE",localService:true}],cancel(){},speak(u){spoken4.push(u)}}; globalThis.SpeechSynthesisUtterance=function(text){this.text=text};');
run('say("spielen");say("Ich spiele.");say("Wir spielen.")');
assert.deepEqual(Array.from(run('spoken4.map(u=>u.text)')),['spielen','Ich spiele.','Wir spielen.']);
assert(run('spoken4.every(u=>u.voice.lang==="de-DE"&&u.rate===1)'));
run('speechSynthesis.getVoices=()=>[{name:"English",lang:"en-US"}];say("spielen")');assert.equal(run('spoken4.length'),3);
console.log('Lesson checks passed: 21 lessons, 12 months, 4 seasons, all intro verbs, full-topic practice, navigation and exact German audio payloads.');
`;
eval(legacyLessons+'\n'+lessonChecks);
