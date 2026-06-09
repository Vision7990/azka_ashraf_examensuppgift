let senaste =
document.getElementById("senaste");


let bild =
document.getElementById("bild");




// När tangent trycks ner


document.addEventListener("keydown", function(event){


    let bokstav =
    event.key.toLowerCase();

    
    if(event.key.startsWith("F")){
    bokstav = event.key.toLowerCase();
    }


    if(event.key == "Escape"){
    bokstav = "esc";
    }

    // Specialtangenter

    if(event.key == "Tab"){
        bokstav = "tab";
    }


    if(event.key == "CapsLock"){
        bokstav = "capslock";
    }


    if(event.key == "Shift"){
        bokstav = "shift";
    }


    if(event.key == "Enter"){
        bokstav = "enter";
    }


    if(event.key == "Control"){
        bokstav = "control";
    }


    if(event.key == "Alt"){
        bokstav = "alt";
    }


    if(event.key == "ArrowLeft"){
        bokstav = "arrowleft";
    }


    if(event.key == "ArrowRight"){
        bokstav = "arrowright";
    }


    if(event.key == "ArrowUp"){
        bokstav = "arrowup";
    }


    if(event.key == "ArrowDown"){
        bokstav = "arrowdown";
    }


    let knapp =
    document.getElementById(bokstav);


    if(knapp){


        knapp.classList.add("tryckt");


        senaste.innerHTML =
        "Senaste tangent: " + event.key;


    }


    // Space


    if(event.key == " "){


        let space =
        document.getElementById("space");


        space.classList.add("tryckt");


        senaste.innerHTML =
        "Senaste tangent: SPACE";
    }


    // Bild när P trycks


    if(bokstav == "p"){


        bild.src =
        "filer/gaming.jpg";


        bild.style.display =
        "block";


        setTimeout(function(){


            bild.style.display =
            "none";


        }, 2000);
    }


    // Bild när M trycks


    if(bokstav == "m"){


        bild.src =
        "filer/esport.jpg";


        bild.style.display =
        "block";


        setTimeout(function(){


            bild.style.display =
            "none";


        }, 2000);
    }


});




// När tangent släpps


document.addEventListener("keyup", function(event){


    let bokstav =
    event.key.toLowerCase();

    if(event.key.startsWith("F")){
        bokstav = event.key.toLowerCase();
        }
    
    
        if(event.key == "Escape"){
        bokstav = "esc";
        }

    if(event.key == "Tab"){
        bokstav = "tab";
    }


    if(event.key == "CapsLock"){
        bokstav = "capslock";
    }


    if(event.key == "Shift"){
        bokstav = "shift";
    }


    if(event.key == "Enter"){
        bokstav = "enter";
    }


    if(event.key == "Control"){
        bokstav = "control";
    }


    if(event.key == "Alt"){
        bokstav = "alt";
    }


    if(event.key == "ArrowLeft"){
        bokstav = "arrowleft";
    }


    if(event.key == "ArrowRight"){
        bokstav = "arrowright";
    }


    if(event.key == "ArrowUp"){
        bokstav = "arrowup";
    }


    if(event.key == "ArrowDown"){
        bokstav = "arrowdown";
    }


    let knapp =
    document.getElementById(bokstav);


    if(knapp){


        knapp.classList.remove("tryckt");


    }


    if(event.key == " "){


        let space =
        document.getElementById("space");


        space.classList.remove("tryckt");
    }


});
