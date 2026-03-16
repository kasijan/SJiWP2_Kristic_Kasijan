const data = {
  filmovi: [
    { poster:"./posteri/kralj-lavova.jpg", emoji:"🦁", title:"Kralj lavova", original:"The Lion King", year:1994, rating:"⭐ 8.5", duration:"88 min", director:"R. Allers", genre:"Animacija", tags:["Animacija","Drama","Obiteljski"], desc:"Mladi lav Simba mora suočiti se sa svojom prošlošću i prihvatiti odgovornost za predstojeće kraljevstvo. Klasik koji je obilježio generacije, pun nezaboravnih pjesama i emotivnih trenutaka." },
    { poster:"spider-man.jpg", emoji:"🕷️", title:"Spider-Man", original:"Spider-Man: No Way Home", year:2021, rating:"⭐ 8.3", duration:"148 min", director:"J. Watts", genre:"Akcija", tags:["Akcija","SF","Marvel"], desc:"Peter Parker traži od Doktora Strangedža da poništi otkriće njegovog identiteta. Multiverz se otvara i donosi prijatelje i neprijatelje iz paralelnih dimenzija u epskom spektaklu." },
    { poster:"gospodar-prstenova.jpg", emoji:"🧙", title:"Gospodar prstenova", original:"The Lord of the Rings", year:2001, rating:"⭐ 8.8", duration:"178 min", director:"P. Jackson", genre:"Fantazija", tags:["Fantazija","Avantura","Epski"], desc:"Hobit Frodo Baggins nasljeđuje Jedan Prsten koji posjeduje moć da podjarmi cijeli svijet. Uz vjerne drugove kreće na opasno putovanje da uništi Prsten u vatrama Mordora." },
    { poster:"interstellar.jpg", emoji:"🚀", title:"Interstellar", original:"Interstellar", year:2014, rating:"⭐ 8.6", duration:"169 min", director:"C. Nolan", genre:"Sci-Fi", tags:["Sci-Fi","Drama","Nolan"], desc:"Skupina astronauta putuje kroz crvoliku rupu u potrazi za novim domom za čovječanstvo dok Zemlja umire. Film istražuje ljubav, vrijeme i dimenzije svemira na nezaboravan način." },
    { poster:"vitez-tame.jpg", emoji:"🃏", title:"Vitez tame", original:"The Dark Knight", year:2008, rating:"⭐ 9.0", duration:"152 min", director:"C. Nolan", genre:"Akcija", tags:["Akcija","DC","Triler"], desc:"Batman se suočava s Jokerom, kaotičnim kriminalcem koji želi uvući Gotham City u anarhiju. Heath Ledger daje legendarnu izvedbu u jednom od najboljih superherojskih filmova ikad snimljenih." },
    { poster:"schindlerova-lista.jpg", emoji:"🎭", title:"Schindlerova lista", original:"Schindler's List", year:1993, rating:"⭐ 9.0", duration:"195 min", director:"S. Spielberg", genre:"Drama", tags:["Drama","Povijest","Spielberg"], desc:"Istinita priča o Oskaru Schindleru koji je spasio više od tisuću Židova za vrijeme Holokausta. Jedan od najmoćnijih filmova koji su ikada snimljeni, emotivan i neizbrisan." },
    { poster:"dune.jpg", emoji:"🌌", title:"Dune", original:"Dune: Part One", year:2021, rating:"⭐ 8.0", duration:"155 min", director:"D. Villeneuve", genre:"Sci-Fi", tags:["Sci-Fi","Epski","Villeneuve"], desc:"Paul Atreides, mladi aristokrat, putuje na pustinju Arrakis, jedini izvor dragocjene supstance melange. Vizualno spektakularna adaptacija kultnog romana Franka Herberta." },
    { poster:"bohemian-rhapsody.jpg", emoji:"🎸", title:"Bohemian Rhapsody", original:"Bohemian Rhapsody", year:2018, rating:"⭐ 7.9", duration:"134 min", director:"B. Singer", genre:"Biografski", tags:["Glazba","Biografija","Drama"], desc:"Priča o Freddie Mercuryju i kultnom bendu Queen, od skromnih početaka do nastupa na Live Aid 1985. Rami Malek donosi bravuroznu izvedbu legende rocka." },
    { poster:"terminator-2.jpg", emoji:"🤖", title:"Terminator 2", original:"Terminator 2: Judgment Day", year:1991, rating:"⭐ 8.6", duration:"137 min", director:"J. Cameron", genre:"Akcija", tags:["Akcija","SF","Cameron"], desc:"Terminator T-800 sada štiti mladog Johna Connora od naprednog T-1000. Revolucionaran film koji je postavio standarde za CGI efekte i akcijske scene." },
    { poster:"forrest-gump.jpg", emoji:"🏆", title:"Forrest Gump", original:"Forrest Gump", year:1994, rating:"⭐ 8.8", duration:"142 min", director:"R. Zemeckis", genre:"Drama", tags:["Drama","Komedija","Klasik"], desc:"Jednostavan čovjek s niskim IQ-om slučajno prisustvuje ključnim trenutcima američke povijesti 20. stoljeća. Tom Hanks u ulozi koja mu je donijela Oscara za najboljeg glumca." },
    { poster:"matrix.jpg", emoji:"🎪", title:"Matrix", original:"The Matrix", year:1999, rating:"⭐ 8.7", duration:"136 min", director:"Wachowski", genre:"Sci-Fi", tags:["Sci-Fi","Akcija","Kult"], desc:"Računalni haker Neo otkriva da je stvarnost samo simulacija koju kontroliraju strojevi. Revolucionaran film koji je promijenio akcijski žanr i postavio filozofska pitanja o prirodi stvarnosti." },
    { poster:"titanic.jpg", emoji:"🌊", title:"Titanic", original:"Titanic", year:1997, rating:"⭐ 7.9", duration:"194 min", director:"J. Cameron", genre:"Romansa", tags:["Romansa","Drama","Cameron"], desc:"Ljubavna priča između bogatašice Rose i siromašnog umjetnika Jacka na krmenom brodu koji tone. Epska romansa i katastrofalni spektakl koji je dugo bio najzarađivačiji film ikad." },
    { poster:"oppenheimer.jpg", emoji:"🎨", title:"Oppenheimer", original:"Oppenheimer", year:2023, rating:"⭐ 8.5", duration:"180 min", director:"C. Nolan", genre:"Biografski", tags:["Biografija","Drama","Nolan"], desc:"Život J. Roberta Oppenheimera, fizičara koji je vodio Manhattan Project i stvorio prvu atomsku bombu. Nolan istražuje moralne dileme genijalca koji je promijenio tijek historije." },
    { poster:"zmaj-i-vuk.jpg", emoji:"🐉", title:"Zmaj i vuk", original:"How to Train Your Dragon", year:2010, rating:"⭐ 8.1", duration:"98 min", director:"C. Sanders", genre:"Animacija", tags:["Animacija","Avantura","Obiteljski"], desc:"Mladi Viking Hiccup postaje prijatelj s povrijeđenim zmajem Toothlessom, čime mijenja odnos između vikinga i zmajeva zauvijek. Srdačna i vizualno impresivna animacija." },
    { poster:"pulp-fiction.jpg", emoji:"🔫", title:"Pulp Fiction", original:"Pulp Fiction", year:1994, rating:"⭐ 8.9", duration:"154 min", director:"Q. Tarantino", genre:"Triler", tags:["Triler","Kult","Tarantino"], desc:"Isprepletene priče kriminalaca, boksačeva i mafijašica u Los Angelesu. Tarantinov remek-djelo s nelinearnom narativom, briljantnim dijalozima i nezaboravnim scenama." },
    { poster:"glengarry.jpg", emoji:"🎭", title:"Glengarry Glen Ross", original:"Glengarry Glen Ross", year:1992, rating:"⭐ 7.9", duration:"100 min", director:"J. Foley", genre:"Drama", tags:["Drama","Kriminal","Klasik"], desc:"Skupina bezobzirnih prodavača nekretnina natječe se u očajničkoj borbi za opstanak. Izvrsna izvedba Al Pacina, Jack Lemmon i Aleca Baldwina u intenzivnoj drami." },
    { poster:"parasite.jpg", emoji:"🌿", title:"Parasite", original:"기생충", year:2019, rating:"⭐ 8.5", duration:"132 min", director:"B. Joon-ho", genre:"Triler", tags:["Triler","Drama","Korejski"], desc:"Siromašna korejska obitelj infiltrira se u bogat domaćinstvo na sofisticiran i podmukao način. Dobitnik Palme d'Or i Oscara za najbolji film, remek-djelo društvene satire." },
    { poster:"cinema-paradiso.jpg", emoji:"🎬", title:"Cinema Paradiso", original:"Nuovo Cinema Paradiso", year:1988, rating:"⭐ 8.5", duration:"155 min", director:"G. Tornatore", genre:"Drama", tags:["Drama","Romansa","Talijanski"], desc:"Nostalgična ljubavna priča prema kinematografiji kroz oči dječaka koji raste u sicilijanskom selu. Ennio Morriconeov soundtrack i dirljiva priča o ljubavi prema filmovima." },
    { poster:"moonlight.jpg", emoji:"🌙", title:"Moonlight", original:"Moonlight", year:2016, rating:"⭐ 7.4", duration:"111 min", director:"B. Jenkins", genre:"Drama", tags:["Drama","LGBT","Neovisni"], desc:"Tri poglavlja iz života Chironovog odrastanja na teškim ulicama Miamija. Poetičan i intiman film o identitetu, ljubavi i pronalasku samoga sebe." },
    { poster:"gladijator.jpg", emoji:"⚔️", title:"Gladijator", original:"Gladiator", year:2000, rating:"⭐ 8.5", duration:"155 min", director:"R. Scott", genre:"Akcija", tags:["Akcija","Povjesni","Scott"], desc:"Rimski general Maximus postaje rob gladijator i traži osvetu za ubojstvo obitelji. Russell Crowe u ulozi koja mu je donijela Oscara, spektakularne borbe i epska priča o časti." }
  ],

  serije: [
    { poster:"breaking-bad.jpg", emoji:"🔥", title:"Breaking Bad", original:"Breaking Bad", year:2008, rating:"⭐ 9.5", duration:"5 sez.", director:"V. Gilligan", genre:"Drama", tags:["Drama","Kriminal","AMC"], desc:"Profesor kemije Walter White oboli od raka i odlučuje kuhati metamfetamin s bivšim učenikom. Jedna od najcjenjenijih serija ikad snimljenih, s izvanrednom evolucijom protagonista." },
    { poster:"game-of-thrones.jpg", emoji:"🗡️", title:"Game of Thrones", original:"Game of Thrones", year:2011, rating:"⭐ 9.2", duration:"8 sez.", director:"D. Benioff", genre:"Fantazija", tags:["Fantazija","Drama","HBO"], desc:"Moćne obitelji bore se za kontrolu nad Željeznim prijestoljem dok drevna prijetnja raste na sjeveru. Epska fantasy serija s kompleksnim likovima i nepredvidivim zapletima." },
    { poster:"friends.jpg", emoji:"🍕", title:"Friends", original:"Friends", year:1994, rating:"⭐ 8.9", duration:"10 sez.", director:"D. Crane", genre:"Komedija", tags:["Komedija","Romansa","Klasik"], desc:"Šestero prijatelja u New Yorku prolaze kroz ljubav, karijeru i svakodnevne peripetije. Kultna sitcom serija koja je definirala humor 90-ih i ostala relevantna do danas." },
    { poster:"sherlock.jpg", emoji:"🕵️", title:"Sherlock", original:"Sherlock", year:2010, rating:"⭐ 9.1", duration:"4 sez.", director:"S. Moffat", genre:"Misterij", tags:["Misterij","Triler","BBC"], desc:"Moderan Sherlock Holmes rješava zagonetne zločine uz pomoć doktora Watsona u suvremenom Londonu. Benedict Cumberbatch donosi sjajnu izvedbu legendarnog detektiva." },
    { poster:"chernobyl.jpg", emoji:"💊", title:"Chernobyl", original:"Chernobyl", year:2019, rating:"⭐ 9.4", duration:"1 sez.", director:"J. Renck", genre:"Drama", tags:["Drama","Povijest","HBO"], desc:"Kronika katastrofalnog nuklearnog pada u Černobilu 1986. i heroizma onih koji su riskirali živote da spase Europu. Najbliže ocijenjeni TV sadržaj u povijesti." },
    { poster:"black-mirror.jpg", emoji:"🧠", title:"Black Mirror", original:"Black Mirror", year:2011, rating:"⭐ 8.8", duration:"6 sez.", director:"C. Brooker", genre:"Sci-Fi", tags:["Sci-Fi","Triler","Antologija"], desc:"Antologijska serija koja istražuje mračne strane tehnologije i modernog društva. Svaka epizoda je zasebna priča koja provocira i tjera na razmišljanje o budućnosti čovječanstva." },
    { poster:"better-call-saul.jpg", emoji:"🌵", title:"Better Call Saul", original:"Better Call Saul", year:2015, rating:"⭐ 9.0", duration:"6 sez.", director:"V. Gilligan", genre:"Drama", tags:["Drama","Kriminal","AMC"], desc:"Prequel Breaking Bada prati odvjetnika Jimmyja McGilla i njegovo pretvaranje u Saula Goodmana. Sporostopna ali maestralna drama o moralnom padu i identitetu." },
    { poster:"last-of-us.jpg", emoji:"🏥", title:"The Last of Us", original:"The Last of Us", year:2023, rating:"⭐ 8.8", duration:"2 sez.", director:"C. Mazin", genre:"Akcija", tags:["Akcija","Drama","HBO"], desc:"U post-apokaliptičnom svijetu zaraženom gljivičnom pandemijom, krijumčar Joel štiti imunu djevojku Ellie. Emotivno intenzivna adaptacija kultne videoigre." },
    { poster:"daredevil.jpg", emoji:"🦹", title:"Daredevil", original:"Daredevil", year:2015, rating:"⭐ 8.6", duration:"3 sez.", director:"D. Goddard", genre:"Akcija", tags:["Akcija","Marvel","Netflix"], desc:"Slijepi odvjetnik Matt Murdock bori se za pravdu kao Daredevil na ulicama Hell's Kitchena. Mračna i brutalna superherojska serija s izvrsnom koreografijom borbi." },
    { poster:"dark.jpg", emoji:"🌍", title:"Dark", original:"Dark", year:2017, rating:"⭐ 8.8", duration:"3 sez.", director:"B. Odar", genre:"Sci-Fi", tags:["Sci-Fi","Misterij","Njemački"], desc:"Četiri međusobno isprepletene obitelji u njemačkom gradiću suočavaju se s tajnom putovanja kroz vrijeme. Virtuozno zamršena i vizualno impresivna serija." },
    { poster:"mindhunter.jpg", emoji:"🎯", title:"Mindhunter", original:"Mindhunter", year:2017, rating:"⭐ 8.6", duration:"2 sez.", director:"D. Fincher", genre:"Kriminal", tags:["Kriminal","Drama","Fincher"], desc:"FBI agenti razvijaju kriminalnu psihologiju intervjuiranjem uhićenih serijskih ubojica 70-ih i 80-ih. Fincher donosi hladnu, metodičnu i fascinantnu kriminalnu dramu." },
    { poster:"severance.jpg", emoji:"🧪", title:"Severance", original:"Severance", year:2022, rating:"⭐ 8.7", duration:"2 sez.", director:"B. Stiller", genre:"Sci-Fi", tags:["Sci-Fi","Triler","AppleTV"], desc:"Zaposlenici korporacije Lumon Industries podvrgavaju se postupku koji odvaja sjećanja na poslu od privatnog života. Bizarna i neodoljivo napeta distopijska satira." },
    { poster:"true-detective.jpg", emoji:"🩸", title:"True Detective", original:"True Detective", year:2014, rating:"⭐ 9.0", duration:"4 sez.", director:"N. Pizzolatto", genre:"Kriminal", tags:["Kriminal","Drama","HBO"], desc:"Dva detektiva s međusobno suprotnim pogledima na život istražuju ritualno ubojstvo u Louisiani. Matthew McConaughey i Woody Harrelson u nezaboravnim ulogama." },
    { poster:"peaky-blinders.jpg", emoji:"💰", title:"Peaky Blinders", original:"Peaky Blinders", year:2013, rating:"⭐ 8.8", duration:"6 sez.", director:"S. Knight", genre:"Kriminal", tags:["Kriminal","Drama","BBC"], desc:"Birminghamska kriminalna obitelj Shelby, predvođena karizmatičnim Tommyjem, gradi imperij u poslijeratnoj Britaniji 1920-ih. Stilistički briljantna i dramski intenzivna serija." },
    { poster:"succession.jpg", emoji:"🌺", title:"Succession", original:"Succession", year:2018, rating:"⭐ 8.9", duration:"4 sez.", director:"J. Armstrong", genre:"Drama", tags:["Drama","Komedija","HBO"], desc:"Borba za kontrolu nad medijskim imperijem obitelji Roy kroz intrige, manipulacije i obiteljske disfunkcije na najvišim razinama moći. Briljantni likovi i blistavi dijalozi." },
    { poster:"squid-game.jpg", emoji:"🌊", title:"Squid Game", original:"오징어 게임", year:2021, rating:"⭐ 8.0", duration:"2 sez.", director:"H. Dong-hyuk", genre:"Triler", tags:["Triler","Drama","Korejski"], desc:"Zaduženi Korejci igraju dječje igre za novčanu nagradu — ali gubitnici plaćaju životom. Fenomen koji je postavio rekord najgledanije Netflix serije ikad." },
    { poster:"ozark.jpg", emoji:"🎪", title:"Ozark", original:"Ozark", year:2017, rating:"⭐ 8.5", duration:"4 sez.", director:"B. Bateman", genre:"Kriminal", tags:["Kriminal","Drama","Netflix"], desc:"Financijski savjetnik Marty Byrde mora oprati novac za meksički kartel u idiličnom jezeru Ozark. Tamna i napeta kriminalna drama s izvrsnim Jason Batemanom." },
    { poster:"stranger-things.jpg", emoji:"🎸", title:"Stranger Things", original:"Stranger Things", year:2016, rating:"⭐ 8.7", duration:"4 sez.", director:"Duffer Bros", genre:"Sci-Fi", tags:["Sci-Fi","Horror","Netflix"], desc:"Skupina djece u Hawkinsu, Indiani, otkriva natprirodne sile i vladine tajne. Nostalgična oda 80-ima prepuna napetosti, humora i srca." },
    { poster:"westworld.jpg", emoji:"🏜️", title:"Westworld", original:"Westworld", year:2016, rating:"⭐ 8.6", duration:"4 sez.", director:"J. Nolan", genre:"Sci-Fi", tags:["Sci-Fi","Triler","HBO"], desc:"U futurističkom tematskom parku s androidima, gosti žive fantazije bez posljedica — dok androidi počinju razvijati svijest. Filozofski bogata i vizualno spektakularna." },
    { poster:"the-crown.jpg", emoji:"🌹", title:"The Crown", original:"The Crown", year:2016, rating:"⭐ 8.6", duration:"6 sez.", director:"P. Morgan", genre:"Drama", tags:["Drama","Povijesni","Netflix"], desc:"Dramatizacija vladavine kraljice Elizabete II i britanske kraljevske obitelji od 1940-ih nadalje. Luksuzno producirana i fascinantna kronizacija privatnog i javnog života monarhije." }
  ],

  dokumentarci: [
    { poster:"nas-planet.jpg", emoji:"🌿", title:"Naš planet", original:"Our Planet", year:2019, rating:"⭐ 9.3", duration:"8 ep.", director:"A. Fothergill", genre:"Priroda", tags:["Priroda","Okoliš","Netflix"], desc:"Sir David Attenborough vodi nas kroz najzapanjujuća staništa Zemlje i upozorava na klimatske promjene koje ugrožavaju biodiverzitet. Vizualno nevjerojatni snimci iz cijelog svijeta." },
    { poster:"human-nature.jpg", emoji:"🧬", title:"Izrod: Priča o Crispr", original:"Human Nature", year:2019, rating:"⭐ 7.8", duration:"95 min", director:"A. Bolt", genre:"Znanost", tags:["Znanost","Biotehnologija","Etika"], desc:"Istraživanje revolucionarne CRISPR tehnologije uređivanja gena i etičke dileme koje otvara. Pitamo se: trebamo li mijenjati samu prirodu čovječanstva?" },
    { poster:"amy.jpg", emoji:"🎵", title:"Amy", original:"Amy", year:2015, rating:"⭐ 7.8", duration:"128 min", director:"A. Kapadia", genre:"Glazba", tags:["Glazba","Biografija","Kapadia"], desc:"Intiman portret Amy Winehouse, njezina nevjerojatnog talenta i tragičnog pada u ovisnost. Asiif Kapadia koristi arhivski materijal da stvori potresnu i nužno potrebnu priču." },
    { poster:"the-inheritance.jpg", emoji:"🌡️", title:"Nasljedstvo", original:"The Inheritance", year:2020, rating:"⭐ 7.5", duration:"7 ep.", director:"různí", genre:"Kriminal", tags:["Kriminal","Istiniti zločin","Istraživački"], desc:"Istraživački dokumentarni serijal koji otkriva kompleksne zločine i zamršene obiteljske tajne kroz metikulozno novinarstvo i ekskluzivni pristup sudionicima." },
    { poster:"apollo-11.jpg", emoji:"🚀", title:"Apollo 11", original:"Apollo 11", year:2019, rating:"⭐ 8.2", duration:"93 min", director:"T. Miller", genre:"Povijest", tags:["Povijest","Svemirska istraživanja","NASA"], desc:"Restaurirani arhivski footage prve misije na Mjesec bez naracije ni komentara — samo čista kinematografska rekonstrukcija jednog od najvećih podviga čovječanstva." },
    { poster:"seaspiracy.jpg", emoji:"🌊", title:"Morska zapovijest", original:"Seaspiracy", year:2021, rating:"⭐ 7.1", duration:"89 min", director:"A. Tabrizi", genre:"Okoliš", tags:["Okoliš","Ribarstvo","Netflix"], desc:"Filmmakar istražuje razorni utjecaj industrijskog ribarstva na oceane i morski ekosustav. Provokativni dokumentarac koji je izazvao veliku raspravu o održivosti prehrane." },
    { poster:"icarus.jpg", emoji:"🏋️", title:"Icarus", original:"Icarus", year:2017, rating:"⭐ 7.9", duration:"121 min", director:"B. Fogel", genre:"Sport", tags:["Sport","Doping","Oscar"], desc:"Amaterski biciklist eksperimentira s dopingom i slučajno postaje svjedokom ruskog državnog dopinškog programa. Dobitnik Oscara za najboljeg dokumentarnog filma." },
    { poster:"high-score.jpg", emoji:"🎮", title:"High Score", original:"High Score", year:2020, rating:"⭐ 7.8", duration:"6 ep.", director:"P. Obomsawin", genre:"Tehnologija", tags:["Videoigre","Kultura","Netflix"], desc:"Priča o zlatnom dobu videoigara kroz razgovore s inovatorima koji su stvorili industriju vrijjednu milijardu dolara. Nostalgičan i informativan pregled povijesti gaminga." },
    { poster:"the-mind-explained.jpg", emoji:"🧠", title:"Mozgovna igra", original:"The Mind, Explained", year:2019, rating:"⭐ 7.9", duration:"2 sez.", director:"različiti", genre:"Znanost", tags:["Psihologija","Neuroznanost","Netflix"], desc:"Emma Stone vodi kroz istraživanje memorije, sanjanja, anksioznosti i halucinogena kroz prizmu moderne neuroznanosti. Dostupno, zanimljivo i edukativno." },
    { poster:"making-a-murderer.jpg", emoji:"🗺️", title:"Making a Murderer", original:"Making a Murderer", year:2015, rating:"⭐ 8.6", duration:"2 sez.", director:"L. Ricciardi", genre:"Istiniti zločin", tags:["Istiniti zločin","Pravo","Netflix"], desc:"Desetogodišnje snimanje Stevena Averya i Brendana Dasseyja, optuženima za ubojstvo, i pitanja o nepravdi pravosudnog sustava. Fenomen koji je pokrenuo raspravu o reformi pravosuđa." },
    { poster:"13th.jpg", emoji:"🌍", title:"13th", original:"13th", year:2016, rating:"⭐ 8.2", duration:"100 min", director:"A. DuVernay", genre:"Politički", tags:["Politika","Rasa","DuVernay"], desc:"Ava DuVernay istražuje 13. amandman i sustavni rasizam u američkom kaznenom pravosudnom sustavu. Moćan i uznemirujući pogled na institucionalno ropstvo u modernom obliku." },
    { poster:"chris-farley.jpg", emoji:"🎬", title:"Moj opus", original:"I Am Chris Farley", year:2015, rating:"⭐ 7.8", duration:"98 min", director:"B. Karlin", genre:"Komedija", tags:["Komedija","Biografija","Glazba"], desc:"Portret komičara Chrisa Farleyja kroz sjećanja obitelji i kolega, uključujući Adama Sandlera i Davida Spada. Topao i tužan pogled na briljantni talent koji je nestao prerano." },
    { poster:"kiss-the-ground.jpg", emoji:"🌱", title:"Kiss the Ground", original:"Kiss the Ground", year:2020, rating:"⭐ 7.3", duration:"84 min", director:"J. Tickell", genre:"Okoliš", tags:["Okoliš","Poljoprivreda","Aktivizam"], desc:"Istraživanje regenerativnog uzgoja kao rješenja za klimatske promjene kroz priče farmera koji vraćaju zdravlje tlu. Nada za planetu kroz promjenu načina uzgoja hrane." },
    { poster:"the-great-hack.jpg", emoji:"💻", title:"The Great Hack", original:"The Great Hack", year:2019, rating:"⭐ 7.0", duration:"114 min", director:"K. Amer", genre:"Tehnologija", tags:["Tehnologija","Politika","Netflix"], desc:"Skandal Cambridge Analytice i manipulacija izborima putem podataka s Facebooka. Zastrašujući uvid u to kako se osobni podaci koriste za utjecaj na demokratske procese." },
    { poster:"dynasties.jpg", emoji:"🦁", title:"Dynasties", original:"Dynasties", year:2018, rating:"⭐ 9.0", duration:"5 ep.", director:"različiti", genre:"Priroda", tags:["Priroda","Životinje","BBC"], desc:"Sir David Attenborough prati petero divljih životinjskih obitelji — pingvina, čimpanzi, divljih pasa, lava i tigra — u borbi za preživljavanje. Intimno i dirljivo." },
    { poster:"explained.jpg", emoji:"🔬", title:"Explained", original:"Explained", year:2018, rating:"⭐ 7.8", duration:"4 sez.", director:"različiti", genre:"Edukativni", tags:["Edukacija","Raznovrsni","Vox"], desc:"Vox istražuje teme od rase, kriptovaluta do ljubavi i feminizma u kratkim, informativnim epizodama. Odličan format za one koji žele razumjeti složene teme." },
    { poster:"five-came-back.jpg", emoji:"🎭", title:"Five Came Back", original:"Five Came Back", year:2017, rating:"⭐ 8.2", duration:"3 ep.", director:"L. Goldsmith", genre:"Film", tags:["Film","Rat","Povijest"], desc:"Priča o pet holivudskih redatelja koji su snimali Drugi svjetski rat: Ford, Capra, Huston, Stevens i Wyler. Fascinantan pogled na spoj filma, propagande i traume rata." },
    { poster:"free-solo.jpg", emoji:"🏔️", title:"Free Solo", original:"Free Solo", year:2018, rating:"⭐ 8.2", duration:"100 min", director:"J. Chin", genre:"Sport", tags:["Sport","Avantura","Oscar"], desc:"Alex Honnold pokušava slobodnim penjanjem (bez opreme) popeti se El Capitanom u Yosemiteu. Srce staje dok gledaš ovaj Oscarom nagrađeni dokumentarac o ekstremnoj odvažnosti." },
    { poster:"wild-wild-country.jpg", emoji:"🌀", title:"Wild Wild Country", original:"Wild Wild Country", year:2018, rating:"⭐ 8.2", duration:"6 ep.", director:"M. i C. Duplass", genre:"Kriminal", tags:["Kult","Kriminal","Netflix"], desc:"Nevjerojatna priča o indijskom guruu Bhagwanu Shree Rajneeshu i njegovoj sljedbi koji su preuzeli grad u Oregonu. Bizarre, fascinantno i gotovo nevjerojatno istinito." },
    { poster:"virunga.jpg", emoji:"🦋", title:"Virunga", original:"Virunga", year:2014, rating:"⭐ 8.2", duration:"100 min", director:"O. von Einsiedel", genre:"Priroda", tags:["Priroda","Kongo","Netflix"], desc:"Zapanjujuća priča o parkovima čuvara koji štite gorile u planinskom parku Virunga u Kongo pod prijetnjom naftnih kompanija i naoružanih pobunjenika. Hrabrost u srcu tame." }
  ]
};

const bgColors = [
  "linear-gradient(135deg,#1a1a2e,#16213e)",
  "linear-gradient(135deg,#1e0a0a,#3d1515)",
  "linear-gradient(135deg,#0a1a0a,#153d15)",
  "linear-gradient(135deg,#1a150a,#3d3015)",
  "linear-gradient(135deg,#0a0a1a,#15153d)",
  "linear-gradient(135deg,#1a0a15,#3d1530)",
  "linear-gradient(135deg,#0a1a1a,#15403d)",
];

function buildGrid(category) {
  const grid = document.getElementById(`grid-${category}`);
  data[category].forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'card';

    const posterHTML = item.poster
      ? `<img src="posters/${item.poster}" alt="${item.title}" onerror="this.parentElement.innerHTML='<span class=\\'poster-fallback\\'>${item.emoji}</span>'">`
      : `<span class="poster-fallback">${item.emoji}</span>`;

    card.innerHTML = `
      <div class="card-poster" style="background:${bgColors[i%bgColors.length]}">${posterHTML}</div>
      <div class="card-gradient"></div>
      <div class="card-body">
        <div class="card-title">${item.title}</div>
        <div class="card-meta">
          <span class="card-year">${item.year}</span>
          <span class="card-rating">${item.rating}</span>
        </div>
        <span class="card-genre">${item.genre}</span>
      </div>
    `;
    card.addEventListener('click', () => openModal(item, category));
    grid.appendChild(card);
  });
}

function openModal(item, category) {
  const labels = { filmovi: 'Film', serije: 'Serija', dokumentarci: 'Dokumentarac' };
  const modalTop = document.querySelector('.modal-top');

  // Remove any previous image
  const prevImg = modalTop.querySelector('img');
  if (prevImg) prevImg.remove();

  if (item.poster) {
    const img = document.createElement('img');
    img.src = `posters/${item.poster}`;
    img.alt = item.title;
    img.onerror = () => img.remove();
    modalTop.insertBefore(img, modalTop.querySelector('.modal-top-emoji'));
    document.getElementById('modalEmoji').style.display = 'none';
  } else {
    document.getElementById('modalEmoji').style.display = '';
  }

  document.getElementById('modalEmoji').textContent = item.emoji;
  document.getElementById('modalBadge').textContent = labels[category];
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalSubtitle').textContent = item.original;
  document.getElementById('modalYear').textContent = item.year;
  document.getElementById('modalRating').textContent = item.rating;
  document.getElementById('modalDuration').textContent = item.duration;
  document.getElementById('modalDirector').textContent = item.director;
  document.getElementById('modalDesc').textContent = item.desc;
  const tagsEl = document.getElementById('modalTags');
  tagsEl.innerHTML = item.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalBtn();
}
function closeModalBtn() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalBtn(); });

function showTab(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(name).classList.add('active');
  event.currentTarget.classList.add('active');
}

buildGrid('filmovi');
buildGrid('serije');
buildGrid('dokumentarci');