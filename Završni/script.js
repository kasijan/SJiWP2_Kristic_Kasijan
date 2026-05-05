let currentSubject=null;

const data={

matematika:{
naziv:"Matematika",
lekcije:[

{
naziv:"Kvadratne jednadžbe",
uvod:"Jednadžbe oblika ax²+bx+c=0",
blokovi:[
{
naslov:"Formula",
tekst:"Koristi diskriminantu",
formula:"x = (-b ± √D) / 2a",
primjer:"x²-5x+6=0 → x=2,3"
}
],
sazetak:["Diskriminanta","2 rješenja"]
},

{
naziv:"Derivacije",
uvod:"Promjena funkcije",
blokovi:[
{
naslov:"Osnovno",
tekst:"Derivacija je nagib",
formula:"(x²)'=2x",
primjer:"(x³)'=3x²"
}
],
sazetak:["Brzina promjene"]
},

{
naziv:"Geometrija",
uvod:"Površine i volumeni",
blokovi:[
{
naslov:"Kocka",
tekst:"Sve stranice jednake",
formula:"V=a³",
primjer:"a=3 → V=27"
}
],
sazetak:["Volumen"]
}

]
},

fizika:{
naziv:"Fizika",
lekcije:[

{
naziv:"Newtonovi zakoni",
uvod:"Sile i gibanje",
blokovi:[
{
naslov:"Drugi zakon",
tekst:"Sila ovisi o masi i ubrzanju",
formula:"F=m·a",
primjer:"m=2, a=3 → F=6N"
}
],
sazetak:["F=ma"]
},

{
naziv:"Energija",
uvod:"Rad i energija",
blokovi:[
{
naslov:"Kinetička",
tekst:"Gibanje",
formula:"Ek=1/2mv²",
primjer:"m=2 v=3 → Ek=9J"
}
],
sazetak:["Energija"]
},

{
naziv:"Brzina",
uvod:"Kretanje tijela",
blokovi:[
{
naslov:"Formula",
tekst:"Put kroz vrijeme",
formula:"v=s/t",
primjer:"s=100 t=10 → v=10"
}
],
sazetak:["Brzina"]
}

]
}

};

function show(id){
document.querySelectorAll("section").forEach(s=>s.classList.add("hidden"));
document.getElementById(id).classList.remove("hidden");
}

function goHome(){
show("home");
}

function goBack(){
show("lessons");
renderLessons(currentSubject);
}

function selectSubject(sub){
currentSubject=sub;
renderLessons(sub);
show("lessons");
}

function renderLessons(sub){
document.getElementById("subjectTitle").textContent=data[sub].naziv;

const list=document.getElementById("lessonList");
list.innerHTML="";

data[sub].lekcije.forEach((l,i)=>{
const div=document.createElement("div");
div.className="lesson-item";
div.innerHTML=l.naziv;
div.onclick=()=>openLesson(i);
list.appendChild(div);
});
}

function openLesson(i){
const lek=data[currentSubject].lekcije[i];

document.getElementById("lessonTitle").textContent=lek.naziv;
document.getElementById("lessonIntro").textContent=lek.uvod;

const content=document.getElementById("lessonContent");
content.innerHTML="";

lek.blokovi.forEach(b=>{
const div=document.createElement("div");
div.className="block";

div.innerHTML=`
<h3>${b.naslov}</h3>
<p>${b.tekst}</p>
<div class="formula">${b.formula}</div>
<div class="example">Primjer: ${b.primjer}</div>
<div class="tip">💡 Vježbaj!</div>
`;

content.appendChild(div);
});

document.getElementById("summary").innerHTML=
lek.sazetak.map(s=>"<li>"+s+"</li>").join("");

show("lessonView");
}

show("home");