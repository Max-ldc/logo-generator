// GESTION DES COULEURS 

let colorList1 = document.querySelector(".listBG");
let colorList2 = document.querySelector(".listTxt");

let colors = ["#B497D6","#22333B","#A9927D","#5E503F","#A5243D","#75704E","#F17F29","#DCED31","#F44E3F","#30321C","#61E8E1","#ADE25D","bisque","#FFFFFF","#000000"];

colors.forEach(         // Obligé de doubler chaque ligne pour mettre en même temps dans couleur de fond & couleur d'icone + texte. Pas réussi sans ça
    (color,i) => {
        let colorBox1 = document.createElement("div"); // pour la ligne couleur de fond
        let colorBox2 = document.createElement("div"); // pour la ligne couleur logo & texte

        // Set up des div color avec background
        colorBox1.className="color";
        colorBox2.className="color";
        colorBox1.style.backgroundColor=color;
        colorBox2.style.backgroundColor=color;

        // Set up des onclick
        colorBox1.setAttribute("onclick", "changePreviBGColor("+(i)+")");
        colorBox2.setAttribute("onclick", "changePreviTxtColor("+(i)+")"); 

        // Ajout au DOM ligne par ligne
        colorList1.appendChild(colorBox1);
        colorList2.appendChild(colorBox2);

    }
);

function changePreviBGColor(x){
    let changeBG = document.querySelector(".preview");
    changeBG.style.backgroundColor=(colors[x]);
}

function changePreviTxtColor(x){
    let changeColor = document.querySelector(".preview");
    changeColor.style.color=(colors[x]);
}


// GESTION DES ICONES

let icons = [
    "bi bi-balloon-fill",
    "bi bi-dice-6-fill",
    "bi bi-playstation",
    "bi bi-yin-yang",
    "bi bi-puzzle-fill",
    "bi bi-signpost-split",
    "bi bi-snow2",
    "bi bi-stopwatch-fill",
    "bi bi-tornado",
    "bi bi-tsunami",
    "bi bi-safe-fill",
    "bi bi-radioactive",
    "bi bi-buildings-fill",
    "bi bi-box-seam-fill",
];

icons.forEach((icon,i) =>{              // mise des icones dans le menu
    let list = document.querySelector(".iconList");
    list.innerHTML+=            
    `
    <i class="color ${icons[i]}" onclick="changePreviIcon(${i})"></i>
    `
});

let changeIcon = document.querySelector(".preview i");
function changePreviIcon(x){
    changeIcon.setAttribute("class",(icons[x]));
}

// CHANGER LE TEXTE

function changeTitle(){
    let iconTitleEntry = document.querySelector("#textUnderIcon").value;
    let iconTitle = document.querySelector(".textIcon");

    iconTitle.innerHTML=`${iconTitleEntry}`;
}

// RANDOM FUNCTIONS

function changeRandomColorBG(){
    let r = Math.round(Math.random()*colors.length);
    changePreviBGColor(r);
}

function changeRandomColorTxt(){
    let r = Math.round(Math.random()*colors.length);
    changePreviTxtColor(r);
}

function changeRandomIcon(){
    let r = Math.round(Math.random()*icons.length);
    changePreviIcon(r);
}

// OBJECTS PRESETS

class Preset{
    constructor(icon_, bgColor_, color_, text_){
    this.icon=icon_;
    this.bgColor=bgColor_;
    this.itColor=color_;
    this.text=text_;
    }
}

let Vague = new Preset(9,1,10,"New Wave");
let Bisque = new Preset(0,12,9,"Bisque c'est beau");
let Radioactive = new Preset(11,7,8,"Radioactive");
let Cadeau = new Preset(13,1,6,"Cadeau :)");
let Tornado = new Preset(8,2,4,"Tornado");
let Winter = new Preset(6,10,8,"Winter is coming");

let presets = [Vague, Bisque, Radioactive, Cadeau, Tornado, Winter];

presets.forEach(
    (preset,i) => {
        let presetBox = document.createElement("div");
        presetBox.className = "color randomIcon";
        presetBox.style.backgroundColor = colors[preset.bgColor];
        presetBox.style.color = colors[preset.itColor];
        presetBox.innerHTML+=            
            `
            <i class="${icons[preset.icon]} fs-3"></i>
            `
        presetBox.onclick = (e) => {
            changePreviBGColor(preset.bgColor);
            changePreviIcon(preset.icon);
            changePreviTxtColor(preset.itColor);
            changeTitlePreset(preset.text);
        };

        document.querySelector(".presetList").appendChild(presetBox);

        
    }
)

function changeTitlePreset(texte){
    document.querySelector(".textIcon").innerHTML=`${texte}`;
    document.querySelector("#textUnderIcon").value= texte;
}