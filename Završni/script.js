let currentSubject = null;

const data = {

  matematika: {
    naziv: "Matematika",
    boja: "math",
    lekcije: [
      {
        naziv: "Kvadratne jednadžbe",
        opis: "Jednadžbe drugog stupnja oblika ax²+bx+c=0",
        uvod: "Kvadratna jednadžba je jednadžba oblika ax²+bx+c=0 gdje a≠0. Rješenja nalazimo pomoću diskriminante D=b²-4ac.",
        blokovi: [
          {
            naslov: "Što je diskriminanta?",
            tekst: "Diskriminanta D određuje koliko rješenja jednadžba ima.",
            natuknice: [
              "D > 0 → dva različita realna rješenja",
              "D = 0 → jedno dvostruko rješenje",
              "D < 0 → nema realnih rješenja"
            ],
            formula: "D = b² − 4ac",
            primjer: "x²−5x+6=0 → a=1, b=−5, c=6 → D=25−24=1"
          },
          {
            naslov: "Formula za rješenja",
            tekst: "Rješenja računamo kvadratnom formulom koristeći diskriminantu.",
            natuknice: [
              "Izračunaj D = b²−4ac",
              "Uvrstiti u formulu x = (−b ± √D) / 2a",
              "Provjeri: uvrsti rješenja natrag u jednadžbu"
            ],
            formula: "x₁,₂ = (−b ± √D) / 2a",
            primjer: "x²−5x+6=0 → x₁=(5+1)/2=3,  x₂=(5−1)/2=2"
          }
        ],
        sazetak: ["Kvadratna jednadžba: ax²+bx+c=0", "Diskriminanta: D=b²−4ac", "Formula: x=(−b±√D)/2a", "D>0 → 2 rješenja, D=0 → 1, D<0 → nijedno"]
      },
      {
        naziv: "Derivacije",
        opis: "Brzina promjene funkcije u pojedinoj točki",
        uvod: "Derivacija funkcije opisuje brzinu promjene — koliko se brzo mijenja vrijednost funkcije kad se argument malo promijeni. Geometrijski, derivacija je nagib tangente na graf funkcije.",
        blokovi: [
          {
            naslov: "Osnovna pravila deriviranja",
            tekst: "Postoji nekoliko temeljnih pravila koja ubrzavaju deriviranje bez vraćanja na definiciju.",
            natuknice: [
              "Konstanta: (c)' = 0",
              "Potencija: (xⁿ)' = n·xⁿ⁻¹",
              "Zbroj: (f+g)' = f' + g'",
              "Umnožak: (f·g)' = f'·g + f·g'"
            ],
            formula: "(xⁿ)' = n · xⁿ⁻¹",
            primjer: "(x³)' = 3x²,   (x⁵)' = 5x⁴,   (7)' = 0"
          },
          {
            naslov: "Derivacije trigonometrijskih funkcija",
            tekst: "Trigonometrijske funkcije imaju posebne derivacije koje treba zapamtiti.",
            natuknice: [
              "(sin x)' = cos x",
              "(cos x)' = −sin x",
              "(tan x)' = 1/cos²x",
              "Derivacija složene funkcije: (f(g(x)))' = f'(g(x)) · g'(x)"
            ],
            formula: "(sin x)' = cos x",
            primjer: "(sin 2x)' = cos 2x · 2 = 2cos 2x"
          }
        ],
        sazetak: ["Derivacija = nagib tangente na graf", "(xⁿ)' = n·xⁿ⁻¹", "(sin x)' = cos x,  (cos x)' = −sin x", "Pravilo lanca: (f(g(x)))' = f'(g(x))·g'(x)"]
      },
      {
        naziv: "Geometrija — volumeni",
        opis: "Površine i volumeni geometrijskih tijela",
        uvod: "Prostorna geometrija bavi se izračunavanjem površina i volumena trodimenzionalnih tijela. Ovo gradivo je temelj za fiziku, arhitekturu i tehniku.",
        blokovi: [
          {
            naslov: "Kocka i kvadar",
            tekst: "Kocka ima sve stranice jednake, a kvadar ima tri različite dimenzije.",
            natuknice: [
              "Kocka: sve bridove su duljine a",
              "Volumen kocke: V = a³",
              "Površina kocke: P = 6a²",
              "Volumen kvadra: V = a · b · c"
            ],
            formula: "V = a³   (kocka)     V = a·b·c   (kvadar)",
            primjer: "a=3 → V=27,  P=54  |  a=2, b=3, c=4 → V=24"
          },
          {
            naslov: "Valjak i kugla",
            tekst: "Valjak i kugla su zakrivljena tijela s formulama koje uključuju broj π.",
            natuknice: [
              "Valjak: polumjer r, visina h",
              "Volumen valjka: V = πr²h",
              "Površina kugle: P = 4πr²",
              "Volumen kugle: V = (4/3)πr³"
            ],
            formula: "V_valjak = πr²h     V_kugla = (4/3)πr³",
            primjer: "r=3, h=5 → V_valjak=45π≈141.4"
          }
        ],
        sazetak: ["V_kocka = a³,  P_kocka = 6a²", "V_kvadar = a·b·c", "V_valjak = πr²h", "V_kugla = (4/3)πr³,  P_kugla = 4πr²"]
      },
      {
        naziv: "Trigonometrija",
        opis: "Sinusi, kosinusi i tangensi kutova",
        uvod: "Trigonometrija proučava odnose između kutova i stranica trokuta. Temelji se na trima funkcijama: sinus, kosinus i tangens, definiranima za pravokutni trokut.",
        blokovi: [
          {
            naslov: "Definicije — SOH CAH TOA",
            tekst: "U pravokutnom trokutu definiramo tri osnovne trigonometrijske funkcije za kut α.",
            natuknice: [
              "sin α = nasuprotna / hipotenuza",
              "cos α = priležna / hipotenuza",
              "tan α = nasuprotna / priležna = sin α / cos α",
              "Memorijska pomoć: SOH−CAH−TOA"
            ],
            formula: "sin α = a/c     cos α = b/c     tan α = a/b",
            primjer: "Kut 30°: sin30°=0.5,  cos30°≈0.866,  tan30°≈0.577"
          },
          {
            naslov: "Osnovni identiteti",
            tekst: "Trigonometrijski identiteti su jednadžbe koje vrijede za sve vrijednosti kuta.",
            natuknice: [
              "Pitagorin identitet: sin²α + cos²α = 1",
              "Za 45°: sin45° = cos45° = √2/2 ≈ 0.707",
              "Za 90°: sin90° = 1,  cos90° = 0",
              "Poučak sinusa: a/sinα = b/sinβ = c/sinγ"
            ],
            formula: "sin²α + cos²α = 1",
            primjer: "sin²60° + cos²60° = (√3/2)² + (1/2)² = 3/4 + 1/4 = 1 ✓"
          }
        ],
        sazetak: ["sin = nasuprotna/hipotenuza", "cos = priležna/hipotenuza", "tan = sin/cos", "sin²α + cos²α = 1 (Pitagorin identitet)"]
      },
      {
        naziv: "Logaritmi i potencije",
        opis: "Zakoni potenciranja i logaritamske funkcije",
        uvod: "Logaritam je inverzna operacija potenciranju. Ako je aⁿ = x, onda je logₐ(x) = n. Razumijevanje ovih veza ključno je za matematiku i fiziku.",
        blokovi: [
          {
            naslov: "Zakoni potenciranja",
            tekst: "Pri računanju s potencijama istih baza koristimo jednostavna pravila.",
            natuknice: [
              "Množenje: aᵐ · aⁿ = aᵐ⁺ⁿ",
              "Dijeljenje: aᵐ / aⁿ = aᵐ⁻ⁿ",
              "Potencija potencije: (aᵐ)ⁿ = aᵐⁿ",
              "Negativni eksponent: a⁻ⁿ = 1/aⁿ"
            ],
            formula: "aᵐ · aⁿ = aᵐ⁺ⁿ     (aᵐ)ⁿ = aᵐⁿ",
            primjer: "2³ · 2⁴ = 2⁷ = 128     (3²)³ = 3⁶ = 729"
          },
          {
            naslov: "Pravila logaritama",
            tekst: "Logaritmi pretvaraju množenje u zbrajanje i dijeljenje u oduzimanje.",
            natuknice: [
              "log(a·b) = log a + log b",
              "log(a/b) = log a − log b",
              "log(aⁿ) = n · log a",
              "log_a(a) = 1  i  log_a(1) = 0"
            ],
            formula: "log(a·b) = log a + log b     log(aⁿ) = n·log a",
            primjer: "log(100) = log(10²) = 2·log(10) = 2"
          }
        ],
        sazetak: ["aᵐ·aⁿ = aᵐ⁺ⁿ,  (aᵐ)ⁿ = aᵐⁿ", "log(a·b) = log a + log b", "log(aⁿ) = n·log a", "Logaritam je inverzna funkcija od potenciranja"]
      },
      {
        naziv: "Skupovi i logika",
        opis: "Osnove teorije skupova i matematičke logike",
        uvod: "Teorija skupova temelj je cjelokupne matematike. Skup je zbirka objekata koji se nazivaju elementi. Logika nam pomaže u preciznom matematičkom rasuđivanju.",
        blokovi: [
          {
            naslov: "Operacije nad skupovima",
            tekst: "Skupove možemo kombinirati na više načina — uniom, presjekom i razlikom.",
            natuknice: [
              "Unija A∪B: elementi koji su u A ILI u B",
              "Presjek A∩B: elementi koji su u A I u B",
              "Razlika A\\B: elementi u A koji nisu u B",
              "Komplement A': svi elementi koji nisu u A"
            ],
            formula: "A∪B     A∩B     A\\B     A'",
            primjer: "A={1,2,3}, B={2,3,4} → A∪B={1,2,3,4},  A∩B={2,3}"
          },
          {
            naslov: "Logički veznici",
            tekst: "Matematička logika koristi veznike za spajanje iskaza.",
            natuknice: [
              "Konjunkcija (I, ∧): istina samo kad su oba iskaza istinita",
              "Disjunkcija (ILI, ∨): istina kad je barem jedan istinit",
              "Negacija (NE, ¬): mijenja istinitosnu vrijednost",
              "Implikacija (→): ako p, onda q"
            ],
            formula: "p ∧ q     p ∨ q     ¬p     p → q",
            primjer: "p=ISTINA, q=LAŽI → p∧q=LAŽI,  p∨q=ISTINA"
          }
        ],
        sazetak: ["Unija A∪B = elementi u A ili B", "Presjek A∩B = elementi u A i B", "Konjunkcija (∧): oba istinita", "Disjunkcija (∨): barem jedan istinit"]
      }
    ]
  },

  fizika: {
    naziv: "Fizika",
    boja: "phys",
    lekcije: [
      {
        naziv: "Newtonovi zakoni",
        opis: "Tri temeljna zakona klasične mehanike",
        uvod: "Isaac Newton formulirao je tri zakona koji opisuju vezu između sile i gibanja. Ovi zakoni su temelj klasične mehanike i vrijede za svakodnevne brzine.",
        blokovi: [
          {
            naslov: "1. i 2. Newtonov zakon",
            tekst: "Prvi zakon govori o inerciji, a drugi definira vezu između sile, mase i ubrzanja.",
            natuknice: [
              "1. zakon (Inercija): tijelo miruje ili se giba ravnomjerno ako nema rezultantne sile",
              "2. zakon: sila je jednaka umnošku mase i ubrzanja",
              "Veća masa → manje ubrzanje (za istu silu)",
              "Sila i ubrzanje su vektori — imaju smjer"
            ],
            formula: "F = m · a     [N = kg · m/s²]",
            primjer: "m=5 kg, a=3 m/s² → F=15 N"
          },
          {
            naslov: "3. Newtonov zakon",
            tekst: "Zakon akcije i reakcije — sile uvijek dolaze u parovima.",
            natuknice: [
              "Svaka akcija ima jednaku i suprotnu reakciju",
              "Sile djeluju na RAZLIČITA tijela",
              "Jednaki iznos, suprotni smjer",
              "Primjer: raketa gura plin dolje → plin gura raketu gore"
            ],
            formula: "F₁₂ = −F₂₁",
            primjer: "Hodanje: noga gura tlo natrag → tlo gura nogu naprijed"
          }
        ],
        sazetak: ["1. zakon: bez sile nema ubrzanja (inercija)", "2. zakon: F = m·a", "3. zakon: svaka akcija ima reakciju", "F₁₂ = −F₂₁ (jednaki iznos, suprotan smjer)"]
      },
      {
        naziv: "Energija i rad",
        opis: "Kinetička i potencijalna energija, zakon održanja",
        uvod: "Energija je sposobnost tijela da izvrši rad. Pojavljuje se u više oblika — kinetička (energija gibanja) i potencijalna (energija položaja), a njihov ukupni zbroj ostaje konstanta.",
        blokovi: [
          {
            naslov: "Kinetička i potencijalna energija",
            tekst: "Svako gibajuće tijelo ima kinetičku, a svako tijelo na visini potencijalnu energiju.",
            natuknice: [
              "Kinetička energija ovisi o masi i kvadratu brzine",
              "Potencijalna energija ovisi o masi, gravitaciji i visini",
              "g ≈ 9.81 m/s² (gravitacijsko ubrzanje)",
              "Energija se mjeri u džulima [J]"
            ],
            formula: "Ek = ½mv²     Ep = mgh",
            primjer: "m=2 kg, v=3 m/s → Ek=9 J  |  h=5 m → Ep=98.1 J"
          },
          {
            naslov: "Zakon održanja energije",
            tekst: "Ukupna energija sustava ostaje konstantna — energija se samo pretvara iz jednog oblika u drugi.",
            natuknice: [
              "Energija se ne može stvoriti ni uništiti",
              "Kinetička ↔ Potencijalna (npr. klatno)",
              "Rad = promjena kinetičke energije: W = ΔEk",
              "Snaga P = W/t  [W = J/s]"
            ],
            formula: "Ek + Ep = const     W = F · s · cosα",
            primjer: "Klatno: na vrhu Ep max, Ek=0 → na dnu Ek max, Ep=0"
          }
        ],
        sazetak: ["Ek = ½mv² (kinetička energija)", "Ep = mgh (potencijalna energija)", "Zakon održanja: Ek + Ep = const", "Rad W = F·s·cosα,  Snaga P = W/t"]
      },
      {
        naziv: "Brzina i gibanje",
        opis: "Kinematika — opis kretanja tijela",
        uvod: "Kinematika opisuje gibanje tijela bez razmatranja uzroka. Proučavamo put, brzinu i ubrzanje kao temeljne veličine kojima opisujemo svako kretanje.",
        blokovi: [
          {
            naslov: "Ravnomjerno gibanje",
            tekst: "U ravnomjernom gibanju brzina je stalna — tijelo ne ubrzava ni usporava.",
            natuknice: [
              "Brzina v = put / vrijeme = s / t",
              "Put se povećava linearno s vremenom",
              "Ubrzanje je nula: a = 0",
              "Jedinice: m/s ili km/h (1 m/s = 3.6 km/h)"
            ],
            formula: "v = s / t     s = v · t",
            primjer: "s=100 m, t=10 s → v=10 m/s=36 km/h"
          },
          {
            naslov: "Ravnomjerno ubrzano gibanje",
            tekst: "Ubrzanje je konstantno — brzina se jednoliko mijenja s vremenom.",
            natuknice: [
              "Brzina raste linearno: v = v₀ + a·t",
              "Put raste kvadratno: s = v₀t + ½at²",
              "Slobodan pad: poseban slučaj, a = g ≈ 9.81 m/s²",
              "Na s-t grafu: parabola; na v-t grafu: pravac"
            ],
            formula: "v = v₀ + a·t     s = v₀t + ½at²",
            primjer: "v₀=0, a=2 m/s², t=5 s → v=10 m/s, s=25 m"
          }
        ],
        sazetak: ["Brzina: v = s/t", "Ravnomjerno: s = v·t (a=0)", "Ubrzano: v = v₀+at,  s = v₀t+½at²", "Slobodan pad: a = g ≈ 9.81 m/s²"]
      },
      {
        naziv: "Toplina i temperatura",
        opis: "Toplinski procesi i prijenos topline",
        uvod: "Toplina je oblik energije koji se prenosi između tijela različitih temperatura. Razumijevanje toplinskih procesa ključno je za tehniku, meteorologiju i svakodnevni život.",
        blokovi: [
          {
            naslov: "Temperatura i toplina",
            tekst: "Temperatura mjeri prosječnu kinetičku energiju čestica, a toplina je prenesena energija.",
            natuknice: [
              "Kelvinova skala: T(K) = T(°C) + 273.15",
              "Apsolutna nula: −273.15°C = 0 K",
              "Toplina Q se mjeri u džulima [J]",
              "Specifična toplina c: J po kg i stupnju [J/(kg·°C)]"
            ],
            formula: "Q = m · c · ΔT     T[K] = T[°C] + 273.15",
            primjer: "Grijanje 1 kg vode za 10°C: Q=1·4186·10=41860 J"
          },
          {
            naslov: "Načini prijenosa topline",
            tekst: "Toplina se prenosi na tri načina, ovisno o materijalu i uvjetima.",
            natuknice: [
              "Vodljivost (kondukcija): dodirom čestica — npr. metalna žlica u čaju",
              "Strujanje (konvekcija): gibanjem fluida — npr. grijanje prostorije",
              "Zračenje (radijacija): elektromagnetskim valovima — npr. sunce",
              "Tamne površine bolje apsorbiraju i emitiraju toplinu"
            ],
            formula: "Q = m · c · ΔT",
            primjer: "Voda (c=4186 J/kg°C) sporije se grije od metala (c≈500 J/kg°C)"
          }
        ],
        sazetak: ["T(K) = T(°C) + 273.15", "Q = mcΔT (formula za toplinu)", "Vodljivost, strujanje, zračenje — 3 načina prijenosa", "Voda ima visoku specifičnu toplinu c=4186 J/(kg·°C)"]
      },
      {
        naziv: "Elektricitet",
        opis: "Napon, struja, otpor i Ohmov zakon",
        uvod: "Elektricitet proučava električne naboje i pojave vezane uz njih. Osnove su razumijevanje napona (U), struje (I) i otpora (R) te veze između njih.",
        blokovi: [
          {
            naslov: "Ohmov zakon",
            tekst: "Ohmov zakon opisuje temeljnu vezu između napona, struje i otpora u strujnom krugu.",
            natuknice: [
              "Napon U [V] — razlika potencijala (električni tlak)",
              "Struja I [A] — naboji koji prolaze presjekom u sekundi",
              "Otpor R [Ω] — otpor koji materijal pruža protoku struje",
              "Veći otpor → manja struja (za isti napon)"
            ],
            formula: "U = I · R     I = U/R     R = U/I",
            primjer: "U=12 V, R=4 Ω → I=3 A"
          },
          {
            naslov: "Serijski i paralelni spoj",
            tekst: "Otpornici se mogu spojiti na dva osnovna načina, svaki s drugačijim ukupnim otporom.",
            natuknice: [
              "Serijski spoj: isti I kroz sve, naponi se zbrajaju",
              "Serijski ukupni otpor: R = R₁ + R₂ + R₃",
              "Paralelni spoj: isti U na svima, struje se zbrajaju",
              "Paralelni ukupni otpor: 1/R = 1/R₁ + 1/R₂"
            ],
            formula: "Serijski: R=R₁+R₂     Paralelni: 1/R=1/R₁+1/R₂",
            primjer: "R₁=4Ω, R₂=4Ω serijski → R=8Ω | paralelno → R=2Ω"
          }
        ],
        sazetak: ["Ohmov zakon: U = I·R", "Napon [V], Struja [A], Otpor [Ω]", "Serijski: R = R₁+R₂ (struja ista)", "Paralelni: 1/R = 1/R₁+1/R₂ (napon isti)"]
      },
      {
        naziv: "Valovi i zvuk",
        opis: "Mehanički valovi, frekvencija i brzina zvuka",
        uvod: "Val je poremećaj koji se širi prostorom prenoseći energiju bez prenošenja materije. Zvuk je mehanički val koji se širi kroz zrak, vodu i čvrste tvari.",
        blokovi: [
          {
            naslov: "Svojstva valova",
            tekst: "Svaki val opisujemo s nekoliko osnovnih veličina.",
            natuknice: [
              "Valna duljina λ [m] — razmak između dva susjedna vala",
              "Frekvencija f [Hz] — broj titraja u sekundi",
              "Period T [s] — trajanje jednog titraja, T = 1/f",
              "Amplituda A — maksimalni otklon od ravnotežnog položaja"
            ],
            formula: "v = f · λ     T = 1/f     [m/s = Hz · m]",
            primjer: "f=440 Hz (ton A), v=340 m/s → λ=340/440≈0.77 m"
          },
          {
            naslov: "Zvuk i ultrazvuk",
            tekst: "Zvuk je longitudinalni mehanički val — čestice titraju u smjeru širenja vala.",
            natuknice: [
              "Brzina zvuka u zraku: v ≈ 340 m/s (na 20°C)",
              "Brzina zvuka u vodi: v ≈ 1500 m/s",
              "Čovjek čuje frekvencije 20 Hz do 20 000 Hz",
              "Ultrazvuk: f > 20 000 Hz (koristi se u medicini)"
            ],
            formula: "v_zvuk ≈ 340 m/s (zrak)     v = f · λ",
            primjer: "Grom na 1 km: t = 1000/340 ≈ 2.94 s kašnjenja zvuka"
          }
        ],
        sazetak: ["Val: v = f·λ", "Period T = 1/f", "Zvuk u zraku: v ≈ 340 m/s", "Čujno područje: 20 Hz – 20 000 Hz"]
      }
    ]
  }
};

// ===== PRIKAZ SEKCIJA =====
function show(id) {
  document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== BREADCRUMB =====
function updateBreadcrumb() {
  const bc = document.getElementById("breadcrumb");
  if (!currentSubject) { bc.innerHTML = ""; return; }
  const sub = data[currentSubject];
  const isPhys = sub.boja === "phys";
  bc.innerHTML = `
    <span class="crumb" onclick="goHome()">Početna</span>
    <span class="crumb-sep">›</span>
    <span class="crumb-active ${isPhys ? "phys" : ""}">${sub.naziv}</span>
  `;
}

// ===== NAVIGACIJA =====
function goHome() {
  currentSubject = null;
  document.getElementById("breadcrumb").innerHTML = "";
  show("home");
}

function goBack() {
  renderLessons(currentSubject);
  show("lessons");
}

function selectSubject(sub) {
  currentSubject = sub;
  updateBreadcrumb();
  renderLessons(sub);
  show("lessons");
}

// ===== LISTA LEKCIJA =====
function renderLessons(sub) {
  const d = data[sub];
  const isMath = d.boja === "math";

  const badge = document.getElementById("subjectBadge");
  badge.textContent = d.naziv.toUpperCase();
  badge.className = "badge " + (isMath ? "badge-math" : "badge-phys");

  document.getElementById("subjectTitle").textContent = "Odaberi lekciju";

  const list = document.getElementById("lessonList");
  list.innerHTML = "";

  d.lekcije.forEach((lek, i) => {
    const div = document.createElement("div");
    div.className = "lesson-item " + (isMath ? "math-item" : "phys-item");
    div.innerHTML = `
      <div class="lesson-num">${String(i + 1).padStart(2, "0")}</div>
      <div class="lesson-info">
        <div class="lesson-name">${lek.naziv}</div>
        <div class="lesson-desc">${lek.opis}</div>
      </div>
      <div class="lesson-go">→</div>
    `;
    div.onclick = () => openLesson(i);
    list.appendChild(div);
  });
}

// ===== GRADIVO LEKCIJE =====
function openLesson(i) {
  const sub = data[currentSubject];
  const lek = sub.lekcije[i];
  const isMath = sub.boja === "math";
  const blockClass = isMath ? "math-block" : "phys-block";

  const badge = document.getElementById("lessonBadge");
  badge.textContent = sub.naziv.toUpperCase();
  badge.className = "badge " + (isMath ? "badge-math" : "badge-phys");

  document.getElementById("lessonTitle").textContent = lek.naziv;
  document.getElementById("lessonIntro").textContent = lek.uvod;

  const content = document.getElementById("lessonContent");
  content.innerHTML = "";

  lek.blokovi.forEach(b => {
    const div = document.createElement("div");
    div.className = "block " + blockClass;

    const natuknice = b.natuknice
      .map(n => `<li>${n}</li>`)
      .join("");

    div.innerHTML = `
      <div class="block-header">
        <div class="block-bar"></div>
        <h3>${b.naslov}</h3>
      </div>
      <div class="block-body">
        <p>${b.tekst}</p>
        <ul class="natuknice">${natuknice}</ul>
        <div class="formula">
          <div class="formula-label">Formula</div>
          ${b.formula}
        </div>
        <div class="example"><strong>Primjer:</strong> ${b.primjer}</div>
        <div class="tip">💡 Ponovi ovu formulu i riješite nekoliko primjera!</div>
      </div>
    `;
    content.appendChild(div);
  });

  // Sažetak
  const summaryBox = document.getElementById("summaryBox");
  summaryBox.className = "summary-box" + (isMath ? "" : " phys");
  summaryBox.classList.remove("hidden");
  document.getElementById("summary").innerHTML =
    lek.sazetak.map(s => `<li>${s}</li>`).join("");

  show("lessonView");
}

show("home");