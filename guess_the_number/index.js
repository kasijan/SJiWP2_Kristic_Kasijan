function rand(){


    return Math.floor(Math.random()*100)+1


}

let randbr=rand();

let pokusaji = 0;
let input=document.getElementById("guess");
let msg=document.getElementById("msg");
let attempt=document.getElementById("attempts");

function updateAttempts(){
    attempt.innerHTML="Pokušaji: "+ pokusaji;
}

updateAttempts();

function checkNumber(event){
event.preventDefault(); //ne osvjezava stranicu
let value = parseInt(input.value); 
/* console.log(value); */
if(isNaN(value) || value<1 || value>100){

    msg.innerHTML = "Unesi broj između 1 i 100";
    msg.style.color = "crimson";
    return;

}
pokusaji++;
updateAttempts();

if(value=== randbr){

    msg.innerHTML="Pogodak, broj je: " + randbr;
    msg.style.color="green";

}
else if(value<randbr){

    msg.innerHTML="Broj je premal";
    msg.style.color="orange";

}
else{

    msg.innerHTML="Broj je prevelik";
    msg.style.color="orange";

}
}

function newGame(){

    randbr = rand();
    pokusaji = 0;
    input.value="";
    msg.innerHTML="Nova igra";
    msg.style.color="black";
    updateAttempts();
    input.focus();

}
