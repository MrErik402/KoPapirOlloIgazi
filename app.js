let gepPont = 0;
let jatekosPont = 0;

function KivalasztasKO(){
    let jatekosValasztas = "Kő";
    let gepValasztas = RandomGEPIValasztas();
    const kep = document.getElementById("ko");
    kep.style.border = "5px solid red";
    let nyertes = Nyertes(jatekosValasztas, gepValasztas);
    if(nyertes == "GépNyert"){
        gepPont++;
        GepPontIras(gepPont);
    }
    else if(nyertes == "JátékosNyert"){
        jatekosPont++;
        JatekosPontIras(jatekosPont);
    }
    Visszaallitas(kep);
}
function KivalasztasOLLO(){
    let jatekosValasztas = "Olló";
    let gepValasztas = RandomGEPIValasztas();
    const kep = document.getElementById("ollo");
    kep.style.border = "5px solid red";
    let nyertes = Nyertes(jatekosValasztas, gepValasztas);
    if(nyertes == "GépNyert"){
        gepPont++;
        GepPontIras(gepPont);
        
    }
    else if(nyertes == "JátékosNyert"){
        jatekosPont++;
        JatekosPontIras(jatekosPont);
    }
    Visszaallitas(kep);
}
function KivalasztasPAPIR(){
    let jatekosValasztas = "Papír";
    let gepValasztas = RandomGEPIValasztas();
    const kep = document.getElementById("papir");
    kep.style.border = "5px solid red";
    let nyertes = Nyertes(jatekosValasztas, gepValasztas);
    if(nyertes == "GépNyert"){
        gepPont++;
        GepPontIras(gepPont);
    }
    else if(nyertes == "JátékosNyert"){
        jatekosPont++;
        JatekosPontIras(jatekosPont);
    }
    setTimeout(10000);
    Visszaallitas(kep);
}
function RandomGEPIValasztas(){
    const lehetoseg = ["Kő","Papír","Olló"];
    const random = Math.floor(Math.random() * lehetoseg.length);
    if(lehetoseg[random] == "Kő"){
        const gkep = document.getElementById("gepKep");
        gkep.src = './img/ko.png'; 
        gkep.alt = "Szöveg"
    }
    else if(lehetoseg[random] == "Papír"){
        const gkep = document.getElementById("gepKep");
        gkep.src = './img/papir.png';
        gkep.alt = "Szöveg"; 
    }
    else{
        const gkep = document.getElementById("gepKep");
        gkep.src = './img/ollo.png';
        gkep.alt = "Szöveg";
    }
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
function GepPontIras(gepPont){
    const irasGepHely = document.getElementById("gPont");
    irasGepHely.innerHTML = (String(gepPont));
    irasGepHely.style.color = "red";
}
function JatekosPontIras(jatekosPont){
    const irasJatekosHely = document.getElementById("jPont");
    irasJatekosHely.innerHTML = (String(jatekosPont));
    irasJatekosHely.style.color = "red";
}