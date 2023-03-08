let compteurCarrousel = 0;

function slideDroite(){
    let sectionBienvenu = document.getElementById("bienvenu");
    let sectionDiscord = document.getElementById("discord");
    let sectionReglement = document.getElementById("reglement");
    if (compteurCarrousel%3===0 || compteurCarrousel%3===-0){
        sectionDiscord.style.visibility = "visible";
        sectionDiscord.style.position = "static";

        sectionBienvenu.style.visibility = "hidden";
        sectionBienvenu.style.position = "absolute";


        compteurCarrousel++;
        console.log(compteurCarrousel%3);
    }else if (compteurCarrousel%3===1|| compteurCarrousel%3===-2){
        sectionReglement.style.visibility = "visible";
        sectionReglement.style.position = "static";

        sectionDiscord.style.visibility = "hidden";
        sectionDiscord.style.position = "absolute";

        compteurCarrousel++;
        console.log(compteurCarrousel%3);

    }else if (compteurCarrousel%3===2|| compteurCarrousel%3===-1){
        sectionBienvenu.style.visibility = "visible";
        sectionBienvenu.style.position = "static";

        sectionReglement.style.visibility = "hidden";
        sectionReglement.style.position = "absolute";

        compteurCarrousel++;
        console.log(compteurCarrousel%3);

    }
}

function slideGauche(){
    let sectionBienvenu = document.getElementById("bienvenu");
    let sectionDiscord = document.getElementById("discord");
    let sectionReglement = document.getElementById("reglement");

    if (compteurCarrousel%3===0 || compteurCarrousel%3===-0){
        sectionReglement.style.visibility = "visible";
        sectionReglement.style.position = "static";

        sectionBienvenu.style.visibility = "hidden";
        sectionBienvenu.style.position = "absolute";


        compteurCarrousel--;
        console.log(compteurCarrousel%3);
    }else if (compteurCarrousel%3===2 || compteurCarrousel%3===-1){
        sectionDiscord.style.visibility = "visible";
        sectionDiscord.style.position = "static";

        sectionReglement.style.visibility = "hidden";
        sectionReglement.style.position = "absolute";

        compteurCarrousel--;
        console.log(compteurCarrousel%3);

    }else if (compteurCarrousel%3===1 || compteurCarrousel%3===-2){
        sectionBienvenu.style.visibility = "visible";
        sectionBienvenu.style.position = "static";

        sectionDiscord.style.visibility = "hidden";
        sectionDiscord.style.position = "absolute";

        compteurCarrousel--;
        console.log(compteurCarrousel%3);

    }
}

