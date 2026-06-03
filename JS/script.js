let senaste =
document.getElementById("senaste");

let bild =
document.getElementById("bild");


// När tangent trycks ner

document.addEventListener("keydown", function(event){

    let bokstav =
    event.key.toLowerCase();

    let knapp =
    document.getElementById(bokstav);

    if(knapp){

        knapp.classList.add("tryckt");

        senaste.innerHTML =
        "Senaste tangent: " + bokstav.toUpperCase();

    }

    // Extrafunktion

    if(bokstav == "p"){

        bild.src =
        "filer/gaming.jpg";

        bild.style.display =
        "block";

    }

    if(bokstav == "m"){

        bild.src =
        "filer/esport.jpg";

        bild.style.display =
        "block";

    }

});


// När tangent släpps

document.addEventListener("keyup", function(event){

    let bokstav =
    event.key.toLowerCase();

    let knapp =
    document.getElementById(bokstav);

    if(knapp){

        knapp.classList.remove("tryckt");

    }

});
