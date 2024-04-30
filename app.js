function KivalasztasKO(){
    let jatekosValasztas = "Kő";
    let gepValasztas = RandomGEPIValasztas();
    const kep = document.getElementById("ko");
    kep.style.border = "5px solid red";
    let nyertes = Nyertes(jatekosValasztas, gepValasztas);
    if(nyertes == "GépNyert"){
        
    }
    Visszaallitas(kep);
}
function KivalasztasOLLO(){
    let jatekosValasztas = "Olló";
    let gepValasztas = RandomGEPIValasztas();
    const kep = document.getElementById("ollo");
    kep.style.border = "5px solid red";
    let nyertes = Nyertes(jatekosValasztas, gepValasztas);

    Visszaallitas(kep);
}
function KivalasztasPAPIR(){
    let jatekosValasztas = "Papír";
    let gepValasztas = RandomGEPIValasztas();
    const kep = document.getElementById("papir");
    kep.style.border = "5px solid red";
    let nyertes = Nyertes(jatekosValasztas, gepValasztas);

    Visszaallitas(kep);
}
function RandomGEPIValasztas(){
    const lehetoseg = ["Kő","Papír","Olló"];
    const random = Math.floor(Math.random() * lehetoseg.length);
    return lehetoseg[random];
}
function Visszaallitas(kep){
    kep.style.border = "0px solid red";
}

function Nyertes(jatekosValasztas, gepValasztas){
    if(gepValasztas == "Papír" && jatekosValasztas == "Kő")
    {
        return "GépNyert"
    }
    else if(gepValasztas == "Olló" && jatekosValasztas == "Kő")
    {
        return "JátékosNyert"
    }
    else if(gepValasztas == "Kő" && jatekosValasztas == "Kő")
    {
        return "Döntetlen"
    }
    else if(gepValasztas == "Papír" && jatekosValasztas == "Papír")
    {
        return "Döntetlen"
    }
    else if(gepValasztas == "Olló" && jatekosValasztas == "Papír")
    {
        return "GépNyert"
    }
    else if(gepValasztas == "Kő" && jatekosValasztas == "Papír")
    {
        return "JátékosNyert"
    }
    else if(gepValasztas == "Papír" && jatekosValasztas == "Olló")
    {
        return "JátékosNyert"
    }
    else if(gepValasztas == "Olló" && jatekosValasztas == "Olló")
    {
        return "Döntetlen"
    }
    else if(gepValasztas == "Kő" && jatekosValasztas == "Olló")
    {
        return "GépNyert"
    }
} 
