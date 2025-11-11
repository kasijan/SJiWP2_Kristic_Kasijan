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
console.log(value);}

function newGame(){


}
