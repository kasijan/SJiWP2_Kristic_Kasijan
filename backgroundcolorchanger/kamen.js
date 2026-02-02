
        function igra(igrac) {
            var izbor = ['kamen', 'skare', 'papir'];
            var racunalo = izbor [Math.floor(Math.random() * 3)];

            let poruka = `Ti: ${igrac} <br> Računalo: ${racunalo} <br><br>`;
            
            if (igrac === racunalo) {
                poruka += "Neriješeno!";
                rezultat.style.color="#FFD41D";
            } else if (
                (igrac === "kamen" && racunalo === "skare") ||
                (igrac === "skare" && racunalo === "papir") ||
                (igrac === "papir" && racunalo === "kamen")
            ) {
                poruka += "Pobjeda!";
                rezultat.style.color="Green";
            } else {
                poruka += "Poraz!";
                rezultat.style.color="#C3110C";
            }

            document.getElementById("rezultat").innerHTML = poruka;
            
        }
