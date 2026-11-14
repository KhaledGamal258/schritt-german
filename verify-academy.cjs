const fsAcademy=require('node:fs');
const legacy=fsAcademy.readFileSync('verify-v2.cjs','utf8')
 .replace("['base.js','lexicon.js','grammar.js','upgrade.js']","['base.js','lexicon.js','grammar.js','upgrade.js','academy-data.js','academy.js']")
 .replace('setTimeout,clearTimeout,Blob','setTimeout,clearTimeout,setInterval:()=>1,clearInterval(){},Blob');
const checks=String.raw`
assert.equal(run('Object.keys(SKILL_BANK).length'),4);
assert.equal(run('Object.values(SKILL_BANK).reduce((n,b)=>n+b.read.questions.length+b.listen.questions.length,0)'),40);
assert(run('Object.values(SKILL_BANK).every(b=>[b.read,b.listen].every(t=>t.text.length>80&&t.questions.every(q=>q[1].length===3&&q[2]>=0&&q[2]<3&&q[3])))'));
assert.equal(run('EXAM_PROFILES.B2.minutes.Schreiben'),75);
assert.equal(run('EXAM_PROFILES.B1.minutes.Lesen'),65);
assert.equal(run('EXAM_PROFILES.A1.minutes.Hören'),20);
assert.equal(run('clockString(65)'),'1:05');
assert.equal(run('wordCount("  Ich lerne Deutsch.  ")'),3);
assert.equal(run('historyStreak(["2026-11-12","2026-11-13","2026-11-14"],"2026-11-14")'),3);
assert.equal(run('historyStreak(["2026-11-11","2026-11-13"],"2026-11-14")'),1);
for(const level of ['A1','A2','B1','B2']){
 run('topic=null;quiz=null');run('state.level="'+level+'"');
 for(const route of ['studyPlan','examCenter','dialogues'])run('go("'+route+'")');
 run('startCompact("'+level+'")');
 assert.equal(run('academy.active.level'),level);
 assert.equal(run('new Set(academy.active.orderRead).size'),5);
 run('SKILL_BANK[academy.active.level].read.questions.forEach((q,i)=>academy.active.answers.read[i]=q[2])');
 assert.equal(run('scorePart(academy.active,"read")'),5);
 run('advanceCompact()');assert.equal(run('stageName()'),'listen');
 run('SKILL_BANK[academy.active.level].listen.questions.forEach((q,i)=>academy.active.answers.listen[i]=q[2])');
 run('advanceCompact()');assert.equal(run('stageName()'),'writing');
 run('academy.active.writing="Mein eigener Text.";saveAcademy();advanceCompact()');
 assert.equal(run('stageName()'),'speaking');
 run('academy.active.speaking="Mein eigener Vortrag.";advanceCompact()');
 assert.equal(run('academy.active'),null);
 assert.equal(run('academy.compact.at(-1).read'),5);
 assert.equal(run('academy.compact.at(-1).listen'),5);
 assert.equal(run('academy.compact.at(-1).writing'),'Mein eigener Text.');
}
run('startCompact("A1");academy.active.deadline=Date.now()-1000');
assert.equal(run('activeRemaining()'),0);run('advanceCompact(true)');
assert.equal(run('academy.active.expired[0]'),'read');
assert.equal(run('scorePart(academy.active,"listen")'),0);
const restored=run('validateAcademy(JSON.parse(JSON.stringify(academy)))');
assert.equal(restored.active,null);assert.equal(restored.compact.length,4);
assert.throws(()=>run('validateAcademy({version:1,plan:{},daily:[],official:[],compact:[]})'));
run('academy.official.push({id:"test",level:"A1",name:"Unique model",scores:{Lesen:80,Hören:70,Schreiben:null,Sprechen:null},evaluator:"self",time:Date.now()})');
assert(run('readinessText("A1").includes("لم تُقيّم")'));
run('academy.official[0].scores.Schreiben=70;academy.official[0].scores.Sprechen=65');
assert(run('readinessText("A1").includes("ذاتيًا")'));
run('academy.official[0].evaluator="teacher"');assert(run('readinessText("A1").includes("مدرّس")'));
run('go("progress")');assert.equal(typeof el('#restore-all2').onclick,'function');
console.log('Academy checks passed: four-stage timer flow, 40 answers, original/official separation, incomplete scores, backup validation and legacy compatibility.');
`;
eval(legacy+'\n'+checks);
