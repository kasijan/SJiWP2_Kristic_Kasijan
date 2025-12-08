function brojZnamenki(){

    let tekst= document.getElementById("text").value;
    let broj = tekst.length;
    /* console.log(broj); */
    document.getElementById("rezultat").innerText = "Broj znamenki je: " + broj;

}

function uVelika(){

    let tekst = document.getElementById("text").value;
    document.getElementById("rezultat").innerText=tekst.toUpperCase();

}

function uMala(){

    let tekst = document.getElementById("text").value;
    document.getElementById("rezultat").innerText = tekst.toLowerCase();

}

function prvoSlovo(){

    let tekst = document.getElementById("text").value;

    if(tekst.lenght === 0){

        document.getElementById("rezultat").innerText = "";
        
        return;

    }

    let rezultat = tekst.charAt(0).toUpperCase() + tekst.slice(1).toLowerCase();
    document.getElementById("rezultat").innerText = rezultat;

}