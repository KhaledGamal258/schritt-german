// Original learning examples. Levels are teaching estimates, not official word-list claims.
const NOUN_ROWS = `der Name|die Namen|اسم|name|A1|تعارف|Mein Name ist Khaled.|Wie ist dein Name?
der Vorname|die Vornamen|الاسم الأول|first name|A1|تعارف|Mein Vorname ist Khaled.|Wie ist dein Vorname?
der Nachname|die Nachnamen|اسم العائلة|surname|A1|تعارف|Mein Nachname ist Gamal.|Wie ist dein Nachname?
das Land|die Länder|بلد|country|A1|تعارف|Ich komme aus Ägypten.|Aus welchem Land kommst du?
die Stadt|die Städte|مدينة|city|A1|تعارف|Kairo ist eine große Stadt.|In welcher Stadt wohnst du?
die Sprache|die Sprachen|لغة|language|A1|تعارف|Ich lerne die deutsche Sprache.|Welche Sprachen sprichst du?
die Adresse|die Adressen|عنوان|address|A1|تعارف|Meine Adresse ist neu.|Wie ist deine Adresse?
die Telefonnummer|die Telefonnummern|رقم الهاتف|phone number|A1|تعارف|Hier ist meine Telefonnummer.|Wie ist deine Telefonnummer?
der Beruf|die Berufe|مهنة|profession job|A1|عمل|Ich bin Ingenieur von Beruf.|Was bist du von Beruf?
der Ingenieur|die Ingenieure|مهندس|engineer|A1|عمل|Ich arbeite als Ingenieur.|Arbeitest du als Ingenieur?
die Ingenieurin|die Ingenieurinnen|مهندسة|female engineer|A1|عمل|Meine Schwester ist Ingenieurin.|Ist deine Schwester Ingenieurin?
die Arbeit|die Arbeiten|عمل|work|A1|عمل|Meine Arbeit beginnt um neun Uhr.|Wann beginnt deine Arbeit?
das Büro|die Büros|مكتب مكان العمل|office|A1|عمل|Ich bin heute im Büro.|Bist du heute im Büro?
der Kollege|die Kollegen|زميل|colleague|A1|عمل|Mein Kollege hilft mir.|Wer hilft dir?
die Kollegin|die Kolleginnen|زميلة|female colleague|A1|عمل|Meine Kollegin kommt aus Berlin.|Woher kommt deine Kollegin?
die Firma|die Firmen|شركة|company|A1|عمل|Die Firma ist in Kairo.|Wo ist deine Firma?
die Familie|die Familien|عائلة|family|A1|عائلة|Meine Familie wohnt in Suez.|Wo wohnt deine Familie?
die Mutter|die Mütter|أم|mother|A1|عائلة|Meine Mutter trinkt Tee.|Was trinkt deine Mutter?
der Vater|die Väter|أب|father|A1|عائلة|Mein Vater liest ein Buch.|Was liest dein Vater?
der Bruder|die Brüder|أخ|brother|A1|عائلة|Mein Bruder spielt Fußball.|Was macht dein Bruder?
die Schwester|die Schwestern|أخت|sister|A1|عائلة|Meine Schwester arbeitet heute.|Arbeitet deine Schwester heute?
das Kind|die Kinder|طفل|child|A1|عائلة|Das Kind spielt im Zimmer.|Wo spielt das Kind?
der Freund|die Freunde|صديق|friend|A1|عائلة|Mein Freund wohnt in Berlin.|Wo wohnt dein Freund?
die Freundin|die Freundinnen|صديقة|friend|A1|عائلة|Meine Freundin lernt Deutsch.|Was lernt deine Freundin?
das Haus|die Häuser|منزل|house|A1|سكن|Unser Haus ist groß.|Ist euer Haus groß?
die Wohnung|die Wohnungen|شقة|apartment flat|A1|سكن|Meine Wohnung hat drei Zimmer.|Wie viele Zimmer hat deine Wohnung?
das Zimmer|die Zimmer|غرفة|room|A1|سكن|Mein Zimmer ist hell.|Wie ist dein Zimmer?
der Tisch|die Tische|طاولة|table|A1|سكن|Der Tisch ist braun.|Welche Farbe hat der Tisch?
der Schreibtisch|die Schreibtische|مكتب أثاث|desk|A1|سكن|Mein Laptop steht auf dem Schreibtisch.|Wo steht dein Laptop?
der Stuhl|die Stühle|كرسي|chair|A1|سكن|Der Stuhl ist bequem.|Ist der Stuhl bequem?
der Schrank|die Schränke|دولاب|wardrobe cupboard|A1|سكن|Der Schrank ist weiß.|Welche Farbe hat der Schrank?
das Bett|die Betten|سرير|bed|A1|سكن|Mein Bett steht am Fenster.|Wo steht dein Bett?
das Fenster|die Fenster|شباك|window|A1|سكن|Das Fenster ist offen.|Ist das Fenster offen?
die Tür|die Türen|باب|door|A1|سكن|Die Tür ist geschlossen.|Ist die Tür geschlossen?
die Küche|die Küchen|مطبخ|kitchen|A1|سكن|Ich koche in der Küche.|Wo kochst du?
das Bad|die Bäder|حمام|bathroom|A1|سكن|Das Bad ist klein.|Wie ist das Bad?
die Lampe|die Lampen|مصباح|lamp|A1|سكن|Die Lampe steht neben dem Bett.|Wo steht die Lampe?
das Sofa|die Sofas|أريكة|sofa|A1|سكن|Das Sofa ist grau.|Welche Farbe hat das Sofa?
der Laptop|die Laptops|حاسوب محمول|laptop|A1|تقنية|Mein Laptop ist schnell.|Ist dein Laptop schnell?
der Computer|die Computer|كمبيوتر|computer|A1|تقنية|Ich arbeite am Computer.|Woran arbeitest du?
das Handy|die Handys|موبايل|mobile phone|A1|تقنية|Mein Handy liegt auf dem Tisch.|Wo liegt dein Handy?
das Buch|die Bücher|كتاب|book|A1|تعلم|Ich lese ein deutsches Buch.|Was liest du?
der Kurs|die Kurse|دورة دراسية|course|A1|تعلم|Mein Kurs beginnt am Montag.|Wann beginnt dein Kurs?
die Frage|die Fragen|سؤال|question|A1|تعلم|Ich habe eine Frage.|Hast du eine Frage?
die Antwort|die Antworten|إجابة|answer|A1|تعلم|Die Antwort ist richtig.|Ist die Antwort richtig?
das Wort|die Wörter|كلمة|word|A1|تعلم|Ich lerne jeden Tag fünf Wörter.|Wie viele Wörter lernst du jeden Tag?
der Satz|die Sätze|جملة|sentence|A1|تعلم|Ich schreibe einen Satz.|Was schreibst du?
die Übung|die Übungen|تمرين|exercise|A1|تعلم|Die Übung ist leicht.|Ist die Übung leicht?
der Fehler|die Fehler|خطأ|mistake error|A1|تعلم|Ich korrigiere meinen Fehler.|Was korrigierst du?
die Prüfung|die Prüfungen|امتحان|exam test|A1|تعلم|Meine Prüfung ist am Montag.|Wann ist deine Prüfung?
das Frühstück|die Frühstücke|إفطار|breakfast|A1|طعام|Zum Frühstück esse ich Brot.|Was isst du zum Frühstück?
das Brot|die Brote|خبز|bread|A1|طعام|Ich kaufe ein Brot.|Was kaufst du?
der Käse|die Käse|جبن|cheese|A1|طعام|Ich esse gern Käse.|Isst du gern Käse?
das Ei|die Eier|بيضة|egg|A1|طعام|Ich esse zwei Eier.|Wie viele Eier isst du?
der Kaffee|die Kaffees|قهوة|coffee|A1|طعام|Ich trinke morgens Kaffee.|Was trinkst du morgens?
der Tee|die Tees|شاي|tea|A1|طعام|Ich trinke Tee ohne Zucker.|Trinkst du Tee mit Zucker?
das Wasser|—|ماء|water|A1|طعام|Ich trinke viel Wasser.|Was trinkst du?
die Milch|—|حليب|milk|A1|طعام|Ich trinke Kaffee mit Milch.|Trinkst du Kaffee mit Milch?
der Apfel|die Äpfel|تفاحة|apple|A1|طعام|Ich esse einen Apfel.|Was isst du?
die Banane|die Bananen|موزة|banana|A1|طعام|Die Banane ist gelb.|Welche Farbe hat die Banane?
das Gemüse|—|خضروات|vegetables|A1|طعام|Ich kaufe frisches Gemüse.|Was kaufst du?
das Obst|—|فاكهة|fruit|A1|طعام|Obst ist gesund.|Isst du gern Obst?
der Reis|—|أرز|rice|A1|طعام|Ich koche Reis.|Was kochst du?
das Fleisch|—|لحم|meat|A1|طعام|Ich esse wenig Fleisch.|Isst du viel Fleisch?
der Fisch|die Fische|سمك|fish|A1|طعام|Heute essen wir Fisch.|Was esst ihr heute?
die Rechnung|die Rechnungen|فاتورة|bill invoice|A1|طعام|Ich bezahle die Rechnung.|Wer bezahlt die Rechnung?
das Restaurant|die Restaurants|مطعم|restaurant|A1|طعام|Wir essen im Restaurant.|Wo esst ihr?
die Zeit|die Zeiten|وقت|time|A1|وقت|Ich habe heute wenig Zeit.|Hast du heute Zeit?
die Uhr|die Uhren|ساعة جهاز|clock watch|A1|وقت|Meine Uhr ist neu.|Ist deine Uhr neu?
die Stunde|die Stunden|ساعة مدة|hour|A1|وقت|Ich lerne eine Stunde.|Wie lange lernst du?
die Minute|die Minuten|دقيقة|minute|A1|وقت|Der Bus kommt in fünf Minuten.|Wann kommt der Bus?
der Tag|die Tage|يوم|day|A1|وقت|Heute ist ein schöner Tag.|Wie ist dein Tag?
die Woche|die Wochen|أسبوع|week|A1|وقت|Eine Woche hat sieben Tage.|Wie viele Tage hat eine Woche?
das Wochenende|die Wochenenden|عطلة نهاية الأسبوع|weekend|A1|وقت|Am Wochenende fahre ich nach Kairo.|Was machst du am Wochenende?
der Monat|die Monate|شهر|month|A1|وقت|Der nächste Monat ist Dezember.|Welcher Monat kommt als Nächstes?
das Jahr|die Jahre|سنة|year|A1|وقت|Ein Jahr hat zwölf Monate.|Wie viele Monate hat ein Jahr?
der Morgen|die Morgen|صباح|morning|A1|وقت|Am Morgen trinke ich Kaffee.|Was machst du am Morgen?
der Abend|die Abende|مساء|evening|A1|وقت|Am Abend lerne ich Deutsch.|Was machst du am Abend?
die Nacht|die Nächte|ليل|night|A1|وقت|In der Nacht schlafe ich.|Was machst du in der Nacht?
das Wetter|—|طقس|weather|A1|طقس|Das Wetter ist heute schön.|Wie ist das Wetter heute?
der Sommer|die Sommer|صيف|summer|A1|طقس|Im Sommer ist es warm.|Wie ist es im Sommer?
der Winter|die Winter|شتاء|winter|A1|طقس|Im Winter ist es kalt.|Wie ist es im Winter?
der Frühling|die Frühlinge|ربيع|spring|A1|طقس|Im Frühling blühen die Blumen.|Was passiert im Frühling?
der Herbst|die Herbste|خريف|autumn fall|A1|طقس|Im Herbst regnet es oft.|Wie ist das Wetter im Herbst?
der Regen|—|مطر|rain|A1|طقس|Nach dem Regen scheint die Sonne.|Was passiert nach dem Regen?
die Sonne|die Sonnen|شمس|sun|A1|طقس|Die Sonne scheint.|Scheint die Sonne?
der Bus|die Busse|أتوبيس|bus|A1|سفر|Ich fahre mit dem Bus.|Womit fährst du?
der Zug|die Züge|قطار|train|A1|سفر|Der Zug fährt um zehn Uhr ab.|Wann fährt der Zug ab?
das Auto|die Autos|سيارة|car|A1|سفر|Mein Auto ist blau.|Welche Farbe hat dein Auto?
der Bahnhof|die Bahnhöfe|محطة قطار|train station|A1|سفر|Der Bahnhof ist in der Nähe.|Wo ist der Bahnhof?
der Flughafen|die Flughäfen|مطار|airport|A1|سفر|Wir fahren zum Flughafen.|Wohin fahrt ihr?
die Fahrkarte|die Fahrkarten|تذكرة مواصلات|ticket|A1|سفر|Ich kaufe eine Fahrkarte nach Berlin.|Was für eine Fahrkarte kaufst du?
die Reise|die Reisen|رحلة|journey trip|A1|سفر|Meine Reise dauert zwei Tage.|Wie lange dauert deine Reise?
das Hotel|die Hotels|فندق|hotel|A1|سفر|Unser Hotel liegt im Zentrum.|Wo liegt euer Hotel?
die Straße|die Straßen|شارع|street road|A1|سفر|Die Straße ist lang.|Wie ist die Straße?
der Termin|die Termine|موعد|appointment|A2|عمل|Ich habe morgen einen Termin.|Wann hast du einen Termin?
die Besprechung|die Besprechungen|اجتماع عمل|meeting|A2|عمل|Die Besprechung beginnt um zehn.|Wann beginnt die Besprechung?
die Bewerbung|die Bewerbungen|طلب توظيف|job application|A2|عمل|Ich schreibe eine Bewerbung.|Was schreibst du?
der Lebenslauf|die Lebensläufe|سيرة ذاتية|CV resume|A2|عمل|Mein Lebenslauf ist aktuell.|Ist dein Lebenslauf aktuell?
die Erfahrung|die Erfahrungen|خبرة تجربة|experience|B1|عمل|Ich habe Erfahrung im IT-Bereich.|Welche Erfahrung hast du?
die Ausbildung|die Ausbildungen|تدريب مهني|vocational training|A2|عمل|Die Ausbildung dauert drei Jahre.|Wie lange dauert die Ausbildung?
das Gehalt|die Gehälter|راتب|salary|B1|عمل|Das Gehalt wird monatlich bezahlt.|Wann wird das Gehalt bezahlt?
der Vertrag|die Verträge|عقد|contract|B1|عمل|Ich lese den Vertrag genau.|Liest du den Vertrag genau?
die Aufgabe|die Aufgaben|مهمة|task assignment|A2|عمل|Ich erledige zuerst diese Aufgabe.|Welche Aufgabe erledigst du zuerst?
das Problem|die Probleme|مشكلة|problem|A2|عمل|Wir lösen das Problem gemeinsam.|Wie löst ihr das Problem?
die Lösung|die Lösungen|حل|solution|B1|عمل|Ich suche eine bessere Lösung.|Was suchst du?
der Vorteil|die Vorteile|ميزة|advantage|B1|نقاش|Ein Vorteil ist die flexible Arbeitszeit.|Was ist ein Vorteil?
der Nachteil|die Nachteile|عيب|disadvantage|B1|نقاش|Ein Nachteil ist der lange Weg.|Was ist ein Nachteil?
die Meinung|die Meinungen|رأي|opinion|B1|نقاش|Meiner Meinung nach ist Lernen wichtig.|Was ist deine Meinung?
der Grund|die Gründe|سبب|reason|B1|نقاش|Der Grund ist einfach.|Was ist der Grund?
das Ziel|die Ziele|هدف|goal target|B1|تعلم|Mein Ziel ist das Niveau B2.|Was ist dein Ziel?
die Gesundheit|—|صحة|health|A2|صحة|Gesundheit ist mir wichtig.|Was ist dir wichtig?
der Arzt|die Ärzte|طبيب|doctor|A1|صحة|Ich gehe morgen zum Arzt.|Wann gehst du zum Arzt?
die Ärztin|die Ärztinnen|طبيبة|doctor|A1|صحة|Die Ärztin hilft mir.|Wer hilft dir?
die Apotheke|die Apotheken|صيدلية|pharmacy|A1|صحة|Die Apotheke ist geöffnet.|Ist die Apotheke geöffnet?
der Kopf|die Köpfe|رأس|head|A1|صحة|Mein Kopf tut weh.|Was tut dir weh?
der Schmerz|die Schmerzen|ألم|pain|A2|صحة|Ich habe Schmerzen im Rücken.|Wo hast du Schmerzen?
die Umwelt|—|بيئة|environment|B1|مجتمع|Wir müssen die Umwelt schützen.|Was müssen wir schützen?
die Gesellschaft|die Gesellschaften|مجتمع|society|B2|مجتمع|Die Gesellschaft verändert sich.|Was verändert sich?
die Entscheidung|die Entscheidungen|قرار|decision|B1|نقاش|Diese Entscheidung ist wichtig.|Ist diese Entscheidung wichtig?
die Voraussetzung|die Voraussetzungen|شرط مسبق|prerequisite|B2|عمل|Gute Sprachkenntnisse sind eine Voraussetzung.|Was ist eine Voraussetzung?
die Verantwortung|die Verantwortungen|مسؤولية|responsibility|B2|عمل|Ich übernehme Verantwortung für das Projekt.|Wofür übernimmst du Verantwortung?
die Möglichkeit|die Möglichkeiten|إمكانية|possibility opportunity|B1|نقاش|Es gibt mehrere Möglichkeiten.|Wie viele Möglichkeiten gibt es?
die Entwicklung|die Entwicklungen|تطور|development|B2|مجتمع|Die technische Entwicklung ist schnell.|Wie ist die technische Entwicklung?
der Zusammenhang|die Zusammenhänge|علاقة ارتباط|connection context|B2|نقاش|Ich verstehe den Zusammenhang.|Verstehst du den Zusammenhang?
die Maßnahme|die Maßnahmen|إجراء|measure action|B2|عمل|Diese Maßnahme verbessert die Sicherheit.|Was verbessert diese Maßnahme?
die Sicherheit|—|أمان|security safety|B1|تقنية|Sicherheit spielt eine wichtige Rolle.|Was spielt eine wichtige Rolle?
der Zugriff|die Zugriffe|وصول تقني|access|B2|تقنية|Der Zugriff auf die Daten ist geschützt.|Ist der Zugriff geschützt?
das Netzwerk|die Netzwerke|شبكة|network|B1|تقنية|Das Netzwerk funktioniert wieder.|Funktioniert das Netzwerk wieder?
das Passwort|die Passwörter|كلمة مرور|password|A2|تقنية|Mein Passwort ist sicher.|Ist dein Passwort sicher?
die Berechtigung|die Berechtigungen|صلاحية|permission authorization|B2|تقنية|Für den Zugriff brauche ich eine Berechtigung.|Was brauchst du für den Zugriff?
der Benutzer|die Benutzer|مستخدم|user|B1|تقنية|Der Benutzer meldet sich an.|Wer meldet sich an?
die Datei|die Dateien|ملف|file|A2|تقنية|Ich speichere die Datei.|Was speicherst du?
die Nachricht|die Nachrichten|رسالة خبر|message news|A2|تقنية|Ich schreibe dir eine Nachricht.|Was schreibst du mir?`;

// infinitive|Arabic|English|level|present (six forms)|past ich|past class s=strong,w=weak|participle|aux|example|question|note
const VERB_ROWS = `sein|يكون|be|A1|bin,bist,ist,sind,seid,sind|war|s|gewesen|sein|Ich bin Ingenieur.|Was bist du von Beruf?|فعل غير منتظم؛ تعلم التصريف كاملًا.
haben|يمتلك لديه|have|A1|habe,hast,hat,haben,habt,haben|hatte|w|gehabt|haben|Ich habe einen Laptop.|Hast du einen Laptop?|المفعول غالبًا Akkusativ.
werden|يصبح|become|A2|werde,wirst,wird,werden,werdet,werden|wurde|w|geworden|sein|Ich werde müde.|Wirst du müde?|geworden عند معنى يصبح؛ في المبني للمجهول يستخدم worden.
heißen|يُدعى|be called|A1|heiße,heißt,heißt,heißen,heißt,heißen|hieß|s|geheißen|haben|Ich heiße Khaled.|Wie heißt du?|مع du لا نضيف s أخرى إلى الجذر المنتهي بـ ß.
wohnen|يسكن|live reside|A1|wohne,wohnst,wohnt,wohnen,wohnt,wohnen|wohnte|w|gewohnt|haben|Ich wohne in Kairo.|Wo wohnst du?|in Kairo للمكان.
kommen|يأتي|come|A1|komme,kommst,kommt,kommen,kommt,kommen|kam|s|gekommen|sein|Ich komme aus Ägypten.|Woher kommst du?|أصل الشخص: aus + Dativ.
gehen|يذهب مشيًا|go walk|A1|gehe,gehst,geht,gehen,geht,gehen|ging|s|gegangen|sein|Ich gehe ins Fitnessstudio.|Wohin gehst du?|ins = in das؛ هنا اتجاه.
fahren|يركب يسافر بمركبة|drive travel|A1|fahre,fährst,fährt,fahren,fahrt,fahren|fuhr|s|gefahren|sein|Ich fahre nach Kairo.|Wohin fährst du?|sein هنا للسفر؛ مع مفعول قيادة سيارة قد يستخدم haben.
sprechen|يتكلم|speak|A1|spreche,sprichst,spricht,sprechen,sprecht,sprechen|sprach|s|gesprochen|haben|Ich spreche Arabisch und Englisch.|Welche Sprachen sprichst du?|e تتحول إلى i مع du وer.
lernen|يتعلم يذاكر|learn study|A1|lerne,lernst,lernt,lernen,lernt,lernen|lernte|w|gelernt|haben|Ich lerne jeden Tag Deutsch.|Was lernst du?|الفعل في المركز الثاني في الخبر.
arbeiten|يعمل|work|A1|arbeite,arbeitest,arbeitet,arbeiten,arbeitet,arbeiten|arbeitete|w|gearbeitet|haben|Ich arbeite im IT-Bereich.|Wo arbeitest du?|نضيف e مع du وer وihr لتسهيل النطق.
machen|يفعل يصنع|do make|A1|mache,machst,macht,machen,macht,machen|machte|w|gemacht|haben|Ich mache meine Hausaufgaben.|Was machst du?|Was machst du? سؤال عام عن النشاط.
spielen|يلعب|play|A1|spiele,spielst,spielt,spielen,spielt,spielen|spielte|w|gespielt|haben|Ich spiele gern Videospiele.|Was spielst du gern?|gern تعبّر عن الاستمتاع بالنشاط.
lesen|يقرأ|read|A1|lese,liest,liest,lesen,lest,lesen|las|s|gelesen|haben|Ich lese ein Buch.|Was liest du?|e تتحول إلى ie مع du وer.
schreiben|يكتب|write|A1|schreibe,schreibst,schreibt,schreiben,schreibt,schreiben|schrieb|s|geschrieben|haben|Ich schreibe eine Nachricht.|Was schreibst du?|رسالة لشخص: jemandem schreiben + Dativ.
essen|يأكل|eat|A1|esse,isst,isst,essen,esst,essen|aß|s|gegessen|haben|Ich esse Brot und Käse.|Was isst du zum Frühstück?|du isst وer isst.
trinken|يشرب|drink|A1|trinke,trinkst,trinkt,trinken,trinkt,trinken|trank|s|getrunken|haben|Ich trinke Kaffee.|Was trinkst du?|المفعول Akkusativ.
frühstücken|يفطر|have breakfast|A1|frühstücke,frühstückst,frühstückt,frühstücken,frühstückt,frühstücken|frühstückte|w|gefrühstückt|haben|Ich frühstücke um halb zehn.|Wann frühstückst du?|um مع الساعة المحددة.
schlafen|ينام|sleep|A1|schlafe,schläfst,schläft,schlafen,schlaft,schlafen|schlief|s|geschlafen|haben|Ich schlafe acht Stunden.|Wie lange schläfst du?|مدة بدون حرف جر: acht Stunden.
aufstehen|ينهض يستيقظ|get up|A1|stehe auf,stehst auf,steht auf,stehen auf,steht auf,stehen auf|stand auf|s|aufgestanden|sein|Ich stehe um neun Uhr auf.|Wann stehst du auf?|فعل منفصل؛ auf في نهاية الجملة الرئيسية.
einkaufen|يتسوق|shop|A1|kaufe ein,kaufst ein,kauft ein,kaufen ein,kauft ein,kaufen ein|kaufte ein|w|eingekauft|haben|Ich kaufe am Samstag ein.|Wann kaufst du ein?|ge بين المقطع المنفصل والجذر.
anrufen|يتصل هاتفيًا|call phone|A1|rufe an,rufst an,ruft an,rufen an,ruft an,rufen an|rief an|s|angerufen|haben|Ich rufe meinen Freund an.|Wen rufst du an?|jemanden anrufen يأخذ Akkusativ.
sehen|يرى|see|A1|sehe,siehst,sieht,sehen,seht,sehen|sah|s|gesehen|haben|Ich sehe einen Film.|Was siehst du?|du siehst وer sieht.
hören|يسمع|hear listen|A1|höre,hörst,hört,hören,hört,hören|hörte|w|gehört|haben|Ich höre Musik.|Was hörst du?|Hören مهارة السماع أيضًا.
verstehen|يفهم|understand|A1|verstehe,verstehst,versteht,verstehen,versteht,verstehen|verstand|s|verstanden|haben|Ich verstehe die Frage.|Verstehst du die Frage?|ver غير منفصل ولا نضيف ge في Partizip II.
kaufen|يشتري|buy|A1|kaufe,kaufst,kauft,kaufen,kauft,kaufen|kaufte|w|gekauft|haben|Ich kaufe einen Apfel.|Was kaufst du?|einen Apfel لأن Apfel مذكر ومفعول Akkusativ.
bezahlen|يدفع ثمن|pay|A1|bezahle,bezahlst,bezahlt,bezahlen,bezahlt,bezahlen|bezahlte|w|bezahlt|haben|Ich bezahle die Rechnung.|Was bezahlst du?|be غير منفصل؛ bezahlt بدون ge.
kosten|يكلّف سعرًا|cost|A1|koste,kostest,kostet,kosten,kostet,kosten|kostete|w|gekostet|haben|Das Brot kostet zwei Euro.|Wie viel kostet das Brot?|غالبًا نستخدم الشيء فاعلًا: Das kostet …
brauchen|يحتاج|need|A1|brauche,brauchst,braucht,brauchen,braucht,brauchen|brauchte|w|gebraucht|haben|Ich brauche mehr Zeit.|Was brauchst du?|brauchen + Akkusativ.
suchen|يبحث عن|look for search|A1|suche,suchst,sucht,suchen,sucht,suchen|suchte|w|gesucht|haben|Ich suche eine Wohnung.|Was suchst du?|suchen + Akkusativ بدون حرف عن.
finden|يجد يرى رأيًا|find|A1|finde,findest,findet,finden,findet,finden|fand|s|gefunden|haben|Ich finde den Kurs interessant.|Wie findest du den Kurs?|finden + مفعول + صفة لإبداء الرأي.
geben|يعطي يوجد|give|A1|gebe,gibst,gibt,geben,gebt,geben|gab|s|gegeben|haben|Ich gebe dem Kind ein Buch.|Wem gibst du ein Buch?|الشخص Dativ والشيء Akkusativ؛ es gibt + Akkusativ.
nehmen|يأخذ|take|A1|nehme,nimmst,nimmt,nehmen,nehmt,nehmen|nahm|s|genommen|haben|Ich nehme den Bus.|Was nimmst du?|nehmen مع وسيلة النقل شائع.
helfen|يساعد|help|A1|helfe,hilfst,hilft,helfen,helft,helfen|half|s|geholfen|haben|Ich helfe meinem Kollegen.|Wem hilfst du?|helfen + Dativ دائمًا في هذا الاستخدام.
bleiben|يبقى|stay remain|A1|bleibe,bleibst,bleibt,bleiben,bleibt,bleiben|blieb|s|geblieben|sein|Ich bleibe heute zu Hause.|Wo bleibst du heute?|Perfekt مع sein رغم عدم وجود حركة.
leben|يعيش|live|A1|lebe,lebst,lebt,leben,lebt,leben|lebte|w|gelebt|haben|Ich lebe in Ägypten.|Wo lebst du?|leben للحياة وwohnen للسكن.
reisen|يسافر|travel|A1|reise,reist,reist,reisen,reist,reisen|reiste|w|gereist|sein|Ich reise gern.|Reist du gern?|Perfekt مع sein في معنى السفر.
besuchen|يزور يحضر|visit attend|A1|besuche,besuchst,besucht,besuchen,besucht,besuchen|besuchte|w|besucht|haben|Ich besuche einen Deutschkurs.|Welchen Kurs besuchst du?|besuchen + Akkusativ؛ بدون ge.
kochen|يطبخ|cook|A1|koche,kochst,kocht,kochen,kocht,kochen|kochte|w|gekocht|haben|Ich koche Reis.|Was kochst du?|فعل منتظم.
mögen|يحب يفضل|like|A1|mag,magst,mag,mögen,mögt,mögen|mochte|w|gemocht|haben|Ich mag den Sommer.|Welche Jahreszeit magst du?|möchte صيغة طلب مهذب مشتقة من mögen.
können|يستطيع|can be able|A1|kann,kannst,kann,können,könnt,können|konnte|w|gekonnt|haben|Ich kann Deutsch sprechen.|Kannst du Deutsch sprechen?|مع فعل ثانٍ في Perfekt يستخدم Ersatzinfinitiv: Ich habe arbeiten können.
müssen|يجب عليه|must have to|A1|muss,musst,muss,müssen,müsst,müssen|musste|w|gemusst|haben|Ich muss heute arbeiten.|Musst du heute arbeiten?|nicht müssen = ليس مضطرًا؛ ليست ممنوعًا.
wollen|يريد|want|A1|will,willst,will,wollen,wollt,wollen|wollte|w|gewollt|haben|Ich will Deutsch lernen.|Was willst du lernen?|المصدر في النهاية.
dürfen|يُسمح له|may be allowed|A1|darf,darfst,darf,dürfen,dürft,dürfen|durfte|w|gedurft|haben|Ich darf hier parken.|Darfst du hier parken?|nicht dürfen = ممنوع.
sollen|ينبغي مطلوب منه|should be supposed|A1|soll,sollst,soll,sollen,sollt,sollen|sollte|w|gesollt|haben|Ich soll den Arzt anrufen.|Wen sollst du anrufen?|تعليمات أو طلب من شخص آخر.
wissen|يعرف معلومة|know a fact|A2|weiß,weißt,weiß,wissen,wisst,wissen|wusste|w|gewusst|haben|Ich weiß die Antwort.|Weißt du die Antwort?|wissen للمعلومة؛ kennen للمعرفة بشخص أو مكان.
kennen|يعرف شخصًا مكانًا|know be familiar|A1|kenne,kennst,kennt,kennen,kennt,kennen|kannte|w|gekannt|haben|Ich kenne diese Stadt.|Kennst du diese Stadt?|kennen + Akkusativ.
denken|يفكر|think|A2|denke,denkst,denkt,denken,denkt,denken|dachte|w|gedacht|haben|Ich denke an meine Familie.|An wen denkst du?|denken an + Akkusativ.
bringen|يحضر شيئًا|bring|A2|bringe,bringst,bringt,bringen,bringt,bringen|brachte|w|gebracht|haben|Ich bringe dir einen Kaffee.|Was bringst du mir?|الشخص Dativ والشيء Akkusativ.
treffen|يقابل|meet|A2|treffe,triffst,trifft,treffen,trefft,treffen|traf|s|getroffen|haben|Ich treffe meinen Freund.|Wen triffst du?|treffen + Akkusativ؛ sich treffen انعكاسي.
beginnen|يبدأ|begin|A2|beginne,beginnst,beginnt,beginnen,beginnt,beginnen|begann|s|begonnen|haben|Der Kurs beginnt um acht Uhr.|Wann beginnt der Kurs?|be غير منفصل.
vergessen|ينسى|forget|A2|vergesse,vergisst,vergisst,vergessen,vergesst,vergessen|vergaß|s|vergessen|haben|Ich vergesse manchmal ein Wort.|Was vergisst du manchmal?|ver غير منفصل.
verlieren|يفقد يخسر|lose|A2|verliere,verlierst,verliert,verlieren,verliert,verlieren|verlor|s|verloren|haben|Ich verliere oft meinen Schlüssel.|Was verlierst du oft?|فعل قوي ولا يأخذ ge.
erklären|يشرح|explain|A2|erkläre,erklärst,erklärt,erklären,erklärt,erklären|erklärte|w|erklärt|haben|Ich erkläre dir die Regel.|Was erklärst du mir?|jemandem etwas erklären: Dativ + Akkusativ.
erzählen|يحكي|tell narrate|A2|erzähle,erzählst,erzählt,erzählen,erzählt,erzählen|erzählte|w|erzählt|haben|Ich erzähle von meiner Reise.|Wovon erzählst du?|erzählen von + Dativ.
empfehlen|يوصي|recommend|B1|empfehle,empfiehlst,empfiehlt,empfehlen,empfehlt,empfehlen|empfahl|s|empfohlen|haben|Ich empfehle dir diesen Kurs.|Welchen Kurs empfiehlst du mir?|jemandem etwas empfehlen: Dativ + Akkusativ.
entscheiden|يقرر|decide|B1|entscheide,entscheidest,entscheidet,entscheiden,entscheidet,entscheiden|entschied|s|entschieden|haben|Ich entscheide das morgen.|Wann entscheidest du das?|sich für etwas entscheiden = يختار شيئًا.
vergleichen|يقارن|compare|B1|vergleiche,vergleichst,vergleicht,vergleichen,vergleicht,vergleichen|verglich|s|verglichen|haben|Ich vergleiche die Angebote.|Was vergleichst du?|etwas mit etwas vergleichen.
erreichen|يصل يحقق|reach achieve|B1|erreiche,erreichst,erreicht,erreichen,erreicht,erreichen|erreichte|w|erreicht|haben|Ich erreiche mein Ziel.|Was erreichst du?|erreichen + Akkusativ بدون حرف جر.
verbessern|يحسن|improve|B1|verbessere,verbesserst,verbessert,verbessern,verbessert,verbessern|verbesserte|w|verbessert|haben|Ich verbessere meine Aussprache.|Was verbesserst du?|المصدر ينتهي بـ ern؛ wir verbessern.
begründen|يبرر يعلل|justify give reasons|B2|begründe,begründest,begründet,begründen,begründet,begründen|begründete|w|begründet|haben|Ich begründe meine Meinung.|Was begründest du?|للرأي في B2: Aussage ثم سبب ثم مثال.
vermeiden|يتجنب|avoid|B2|vermeide,vermeidest,vermeidet,vermeiden,vermeidet,vermeiden|vermied|s|vermieden|haben|Ich vermeide unnötige Fehler.|Was vermeidest du?|vermeiden + Akkusativ.
ermöglichen|يتيح يمكّن|enable make possible|B2|ermögliche,ermöglichst,ermöglicht,ermöglichen,ermöglicht,ermöglichen|ermöglichte|w|ermöglicht|haben|Das Internet ermöglicht flexibles Lernen.|Was ermöglicht das Internet?|jemandem etwas ermöglichen.
berücksichtigen|يراعي يأخذ في الحسبان|consider take into account|B2|berücksichtige,berücksichtigst,berücksichtigt,berücksichtigen,berücksichtigt,berücksichtigen|berücksichtigte|w|berücksichtigt|haben|Ich berücksichtige deine Erfahrung.|Was berücksichtigst du?|be غير منفصل.
speichern|يحفظ تقنيًا|save store|A2|speichere,speicherst,speichert,speichern,speichert,speichern|speicherte|w|gespeichert|haben|Ich speichere die Datei.|Was speicherst du?|wir speichern بدون e إضافية.
prüfen|يفحص يختبر|check examine|B1|prüfe,prüfst,prüft,prüfen,prüft,prüfen|prüfte|w|geprüft|haben|Ich prüfe die Berechtigungen.|Was prüfst du?|مفيد لشغلك في IAM.
funktionieren|يعمل بصورة صحيحة|function work|A2|funktioniere,funktionierst,funktioniert,funktionieren,funktioniert,funktionieren|funktionierte|w|funktioniert|haben|Das Netzwerk funktioniert wieder.|Funktioniert das Netzwerk wieder?|الأفعال المنتهية بـ ieren لا تأخذ ge.
installieren|يثبت برنامجًا|install|A2|installiere,installierst,installiert,installieren,installiert,installieren|installierte|w|installiert|haben|Ich installiere das Programm.|Was installierst du?|installiert بدون ge.
öffnen|يفتح|open|A1|öffne,öffnest,öffnet,öffnen,öffnet,öffnen|öffnete|w|geöffnet|haben|Ich öffne das Fenster.|Was öffnest du?|نضيف e قبل بعض النهايات لتسهيل النطق.
schließen|يغلق|close|A2|schließe,schließt,schließt,schließen,schließt,schließen|schloss|s|geschlossen|haben|Ich schließe die Tür.|Was schließt du?|schloss في الماضي وgeschlossen في Perfekt.
warten|ينتظر|wait|A1|warte,wartest,wartet,warten,wartet,warten|wartete|w|gewartet|haben|Ich warte auf den Bus.|Worauf wartest du?|warten auf + Akkusativ.
antworten|يجيب|answer reply|A1|antworte,antwortest,antwortet,antworten,antwortet,antworten|antwortete|w|geantwortet|haben|Ich antworte meinem Kollegen.|Wem antwortest du?|الشخص Dativ؛ على سؤال: auf + Akkusativ.
fragen|يسأل|ask|A1|frage,fragst,fragt,fragen,fragt,fragen|fragte|w|gefragt|haben|Ich frage meinen Lehrer.|Wen fragst du?|الشخص Akkusativ بعكس antworten.
studieren|يدرس بالجامعة|study at university|A1|studiere,studierst,studiert,studieren,studiert,studieren|studierte|w|studiert|haben|Ich studiere Informatik.|Was studierst du?|studieren للدراسة الجامعية؛ lernen للمذاكرة والتعلم.`;

const OTHER_ROWS = `gut|جيد|good|A1|صفة|Der Kurs ist gut.|Wie ist der Kurs?
schlecht|سيئ|bad|A1|صفة|Das Wetter ist schlecht.|Wie ist das Wetter?
groß|كبير طويل|big tall|A1|صفة|Mein Zimmer ist groß.|Wie ist dein Zimmer?
klein|صغير|small|A1|صفة|Die Küche ist klein.|Wie ist die Küche?
neu|جديد|new|A1|صفة|Mein Laptop ist neu.|Ist dein Laptop neu?
alt|قديم كبير السن|old|A1|صفة|Das Haus ist alt.|Ist das Haus alt?
schön|جميل|beautiful nice|A1|صفة|Der Tisch ist schön.|Wie findest du den Tisch?
hell|مضيء فاتح|bright light|A1|صفة|Mein Zimmer ist hell.|Wie ist dein Zimmer?
dunkel|مظلم غامق|dark|A1|صفة|Der Schrank ist dunkel.|Welche Farbe hat der Schrank?
bequem|مريح|comfortable|A1|صفة|Der Stuhl ist bequem.|Ist der Stuhl bequem?
warm|دافئ|warm|A1|صفة|Heute ist es warm.|Wie ist das Wetter heute?
kalt|بارد|cold|A1|صفة|Im Winter ist es kalt.|Wie ist es im Winter?
heiß|ساخن حار|hot|A1|صفة|Der Kaffee ist heiß.|Ist der Kaffee heiß?
sonnig|مشمس|sunny|A1|صفة|Heute ist es sonnig.|Ist es heute sonnig?
regnerisch|ممطر|rainy|A2|صفة|Das Wetter ist regnerisch.|Wie ist das Wetter?
rot|أحمر|red|A1|لون|Mein Auto ist rot.|Welche Farbe hat dein Auto?
blau|أزرق|blue|A1|لون|Der Stuhl ist blau.|Welche Farbe hat der Stuhl?
grün|أخضر|green|A1|لون|Die Lampe ist grün.|Welche Farbe hat die Lampe?
gelb|أصفر|yellow|A1|لون|Die Banane ist gelb.|Welche Farbe hat die Banane?
weiß|أبيض|white|A1|لون|Der Schrank ist weiß.|Welche Farbe hat der Schrank?
schwarz|أسود|black|A1|لون|Mein Handy ist schwarz.|Welche Farbe hat dein Handy?
braun|بني|brown|A1|لون|Mein Schreibtisch ist braun.|Welche Farbe hat dein Schreibtisch?
grau|رمادي|grey gray|A1|لون|Das Sofa ist grau.|Welche Farbe hat das Sofa?
schnell|سريع|fast|A1|صفة|Mein Computer ist schnell.|Ist dein Computer schnell?
langsam|بطيء|slow|A1|صفة|Der Bus ist langsam.|Ist der Bus langsam?
leicht|سهل خفيف|easy light|A1|صفة|Diese Übung ist leicht.|Wie ist diese Übung?
schwer|صعب ثقيل|difficult heavy|A1|صفة|Die Prüfung ist schwer.|Wie ist die Prüfung?
wichtig|مهم|important|A1|صفة|Deutsch ist für mich wichtig.|Was ist für dich wichtig?
richtig|صحيح|correct right|A1|صفة|Deine Antwort ist richtig.|Ist meine Antwort richtig?
falsch|خطأ غير صحيح|wrong incorrect|A1|صفة|Dieser Satz ist falsch.|Ist dieser Satz richtig?
freundlich|ودود|friendly|A1|صفة|Mein Kollege ist freundlich.|Wie ist dein Kollege?
müde|متعب نعسان|tired|A1|صفة|Ich bin heute müde.|Bist du heute müde?
krank|مريض|ill sick|A1|صفة|Ich bin heute krank.|Bist du krank?
gesund|صحي معافى|healthy|A1|صفة|Gemüse ist gesund.|Ist Gemüse gesund?
teuer|غالي|expensive|A1|صفة|Die Wohnung ist teuer.|Ist die Wohnung teuer?
günstig|مناسب السعر|inexpensive affordable|A1|صفة|Das Hotel ist günstig.|Ist das Hotel günstig?
interessant|مثير للاهتمام|interesting|A1|صفة|Der Kurs ist interessant.|Wie findest du den Kurs?
langweilig|ممل|boring|A1|صفة|Der Film ist langweilig.|Wie findest du den Film?
zufrieden|راضٍ|satisfied|A2|صفة|Ich bin mit dem Kurs zufrieden.|Womit bist du zufrieden?
zuverlässig|يمكن الاعتماد عليه|reliable|B1|صفة|Mein Kollege ist zuverlässig.|Wie ist dein Kollege?
verantwortlich|مسؤول|responsible|B1|صفة|Ich bin für das Netzwerk verantwortlich.|Wofür bist du verantwortlich?
notwendig|ضروري|necessary|B1|صفة|Eine Anmeldung ist notwendig.|Ist eine Anmeldung notwendig?
geeignet|مناسب|suitable|B1|صفة|Dieser Kurs ist für Anfänger geeignet.|Für wen ist der Kurs geeignet?
wesentlich|جوهري|essential substantial|B2|صفة|Das ist ein wesentlicher Vorteil.|Was ist ein wesentlicher Vorteil?
nachhaltig|مستدام|sustainable|B2|صفة|Diese Lösung ist nachhaltig.|Wie ist diese Lösung?
effizient|كفء فعال|efficient|B2|صفة|Diese Methode ist effizient.|Wie ist diese Methode?
heute|اليوم|today|A1|ظرف|Heute lerne ich Deutsch.|Was machst du heute?
gestern|أمس|yesterday|A1|ظرف|Gestern habe ich gearbeitet.|Was hast du gestern gemacht?
morgen|غدًا|tomorrow|A1|ظرف|Morgen fahre ich nach Kairo.|Was machst du morgen?
immer|دائمًا|always|A1|ظرف|Ich trinke morgens immer Kaffee.|Trinkst du morgens immer Kaffee?
oft|غالبًا|often|A1|ظرف|Ich lese oft.|Wie oft liest du?
manchmal|أحيانًا|sometimes|A1|ظرف|Ich spiele manchmal Videospiele.|Wie oft spielst du Videospiele?
selten|نادرًا|rarely|A1|ظرف|Ich esse selten im Restaurant.|Wie oft isst du im Restaurant?
nie|أبدًا|never|A1|ظرف|Ich rauche nie.|Rauchst du?
gern|بسرور أحب فعل شيء|gladly like doing|A1|ظرف|Ich lerne gern Deutsch.|Lernst du gern Deutsch?
zusammen|معًا|together|A1|ظرف|Wir lernen zusammen.|Lernt ihr zusammen?
deshalb|لذلك|therefore|A2|رابط|Ich bin müde. Deshalb schlafe ich.|Warum schläfst du?
trotzdem|رغم ذلك|nevertheless|B1|رابط|Es regnet. Trotzdem gehe ich spazieren.|Gehst du trotz des Regens spazieren?
weil|لأن|because|A1|رابط|Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.|Warum lernst du Deutsch?
obwohl|بالرغم من أن|although|B1|رابط|Ich lerne, obwohl ich müde bin.|Lernst du, obwohl du müde bist?
während|بينما|while|B1|رابط|Ich höre Musik, während ich koche.|Was machst du, während du kochst?
allerdings|ولكن بالفعل حسب السياق|however admittedly|B2|رابط|Der Kurs ist gut, allerdings ist er teuer.|Ist der Kurs teuer?
einerseits|من ناحية|on the one hand|B2|رابط|Einerseits spare ich Zeit, andererseits fehlt mir der Kontakt.|Was sind die Vor- und Nachteile?
außerdem|علاوة على ذلك|moreover besides|A2|رابط|Ich lerne Deutsch. Außerdem lerne ich Englisch.|Was lernst du außerdem?`;

const WORDS=[];
NOUN_ROWS.split('\n').forEach((r,i)=>{const [de,plural,ar,en,level,category,sentence,question]=r.split('|');WORDS.push({id:'n'+i,de,plural,ar,en,level,category,type:'اسم',sentence,question,source:'أمثلة تعليمية أصلية — خطوة'});});
VERB_ROWS.split('\n').forEach((r,i)=>{const [de,ar,en,level,forms,past,pastClass,participle,aux,sentence,question,note]=r.split('|');WORDS.push({id:'v'+i,de,ar,en,level,forms:forms.split(','),past,pastClass,participle,aux,sentence,question,note,type:'فعل',category:'أفعال',source:'أمثلة تعليمية أصلية — خطوة'});});
OTHER_ROWS.split('\n').forEach((r,i)=>{const [de,ar,en,level,type,sentence,question]=r.split('|');WORDS.push({id:'o'+i,de,ar,en,level,type,sentence,question,category:type,source:'أمثلة تعليمية أصلية — خطوة'});});
const PRONOUNS=['ich','du','er / sie / es','wir','ihr','sie / Sie'];
function pastForms(w){const [root,...tail]=w.past.split(' '),suffix=tail.length?' '+tail.join(' '):'';let list;if(w.de==='sein')list=['war','warst','war','waren','wart','waren'];else if(w.de==='tun')list=['tat','tatest','tat','taten','tatet','taten'];else if(w.pastClass==='w')list=[root,root+'st',root,root+'n',root+'t',root+'n'];else{const endsS=/[sßxz]$/.test(root),endsD=/[dt]$/.test(root);list=[root,root+(endsS||endsD?'est':'st'),root,root+'en',root+(endsD?'et':'t'),root+'en'];}return list.map(v=>v+suffix);}
function verbForms(w,tense){if(tense==='Präsens')return w.forms;if(tense==='Präteritum')return pastForms(w);if(tense==='Perfekt')return (w.aux==='sein'?['bin','bist','ist','sind','seid','sind']:['habe','hast','hat','haben','habt','haben']).map(x=>x+' '+w.participle);if(tense==='Futur I')return ['werde','wirst','wird','werden','werdet','werden'].map(x=>x+' '+w.de);return [];}
const PHONETICS=[
['ich-Laut [ç]','ich · nicht · sprechen','طرف اللسان قريب من الأسنان السفلية، وممر هواء بين وسط اللسان والحنك؛ الصوت مهموس. ليس شينًا تمامًا.','Ich spreche nicht schnell.'],
['ach-Laut [x]','Bach · machen · Buch','بعد a وo وu غالبًا يخرج ch من خلف الفم، قريب من خ العربية.','Ich mache das Buch auf.'],
['ü [yː / ʏ]','Tür · fünf · müde','قل إي مع ضم الشفتين، وحافظ على موضع اللسان الأمامي. الطول يختلف حسب الكلمة.','Die Tür ist grün.'],
['ö [øː / œ]','schön · können · hören','موضع اللسان قريب من e مع استدارة الشفتين؛ لا تستبدله بأو.','Wir können Musik hören.'],
['ei / ie','mein / meinen · viel / spielen','ei غالبًا /aɪ/، وie غالبًا إي طويلة /iː/. قارن بدل الاعتماد على كتابة عربية.','Ich spiele viel.'],
['sp / st في بداية المقطع','spielen · sprechen · stehen','غالبًا sp تُنطق شـپ وst شت في بداية المقطع الألماني.','Ich spiele und spreche Deutsch.'],
['z / w / v','Zeit · Wasser · Vater','z غالبًا /ts/، وw /v/، وv قد تكون /f/ مثل Vater أو /v/ مثل Video.','Wie viel Zeit hast du?'],
['نهاية المقطع','Tag · ab · und','b وd وg في نهاية المقطع غالبًا تفقد الجهر: /p t k/. اسمع Tag وقارن Tage.','Guten Tag!'],
['الضغط في الكلمة','AUFstehen · beSUchen','المقطع المنفصل مثل auf غالبًا عليه الضغط؛ البادئات غير المنفصلة مثل be وver غالبًا لا تحمل الضغط.','Ich stehe auf und besuche einen Freund.'],
['السؤال والخبر','Du kommst aus Kairo. / Kommst du aus Kairo?','جرّب هبوط النغمة في الخبر، وصعودها في سؤال نعم/لا، مع الانتباه للسياق.','Kommst du aus Kairo?']
];
