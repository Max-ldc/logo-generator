// GESTION DES COULEURS 

let colorList1 = document.querySelector(".listBG");
let colorList2 = document.querySelector(".listTxt");

let colors = ["#B497D6","#22333B","#A9927D","#5E503F","#A5243D","#75704E","#F17F29","#DCED31","#F44E3F","#30321C","#61E8E1","#ADE25D","bisque","#FFFFFF","#000000"];

colors.forEach(   // Obligé de doubler chaque ligne pour mettre en même temps dans couleur de fond & couleur d'icone + texte. Pas réussi sans ça
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

function changePreviBGColor(x){         // change la couleur du background de la prévisu
    let changeBG = document.querySelector(".preview");
    changeBG.style.backgroundColor=(colors[x]);
}

function changePreviTxtColor(x){        // change la couleur du logo et du texte
    let changeColor = document.querySelector(".preview");
    changeColor.style.color=(colors[x]);
}


// GESTION DES ICONES

let icons = [       // liste d'icones, on prend juste les classes bootstrap pour les insérer dans une balise i
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

icons.forEach((icon,i) =>{         // mise des icones dans le menu
    let list = document.querySelector(".iconList");
    list.innerHTML+=
    `
    <i class="color ${icons[i]}" onclick="changePreviIcon(${i})"></i>
    `
});

let changeIcon = document.querySelector(".preview i"); // on choppe l'icone de la prévisu
function changePreviIcon(x){        // change l'icone
    changeIcon.setAttribute("class",(icons[x]));
}

// CHANGER LE TEXTE

let iconTitleEntry = document.querySelector("#textUnderIcon").value;
let iconTitle = document.querySelector(".textIcon");

function changeTitle(){             // lie le titre avec l'input
    iconTitle.innerHTML=`${iconTitleEntry}`;
}

function changeTitlePreset(texte){  // change valeur de l'input en cas de preset
    iconTitle.innerHTML=`${texte}`;
    iconTitleEntry.value = texte;
}

// RANDOM FUNCTIONS

function changeRandomColorBG(){     // change la couleur du background aléatoirement
    let r = Math.round(Math.random()*colors.length);
    changePreviBGColor(r);
}

function changeRandomColorTxt(){    // change la couleur du logo & du texte aléatoirement
    let r = Math.round(Math.random()*colors.length);
    changePreviTxtColor(r);
}

function changeRandomIcon(){        // change l'icone aléatoirement
    let r = Math.round(Math.random()*icons.length);
    changePreviIcon(r);
}

// OBJECTS PRESETS

class Preset{       // création du constructor d'un objet Preset
    constructor(icon_, bgColor_, color_, text_){
    this.icon=icon_;            // rang de l'icone dans le tableau icons
    this.bgColor=bgColor_;      // rand de la couleur du BG dans le tableau colors
    this.itColor=color_;        // rang de la couleur txt & icone 
    this.text=text_;            // texte
    }
}

// ajout des preset
let Vague = new Preset(9,1,10,"New Wave");
let Bisque = new Preset(0,12,9,"Bisque c'est beau");
let Radioactive = new Preset(11,7,8,"Radioactive");
let Cadeau = new Preset(13,1,6,"Cadeau :)");
let Tornado = new Preset(8,2,4,"Tornado");
let Winter = new Preset(6,10,8,"Winter is coming");
// tableau de tous les preset
let presets = [Vague, Bisque, Radioactive, Cadeau, Tornado, Winter];
// on parcourt le tableau pour créer le carré des preset du menu + le onclick
presets.forEach(
    (preset,i) => {
        let presetBox = document.createElement("div"); // créé la div
        presetBox.className = "color randomIcon";   // place les classes
        presetBox.style.backgroundColor = colors[preset.bgColor]; // met le bg sur le carré du menu
        presetBox.style.color = colors[preset.itColor]; // met la couleur sur le logo sur le carré du menu
        presetBox.innerHTML+=            // met l'icone sur le carré du menu
            `
            <i class="${icons[preset.icon]} fs-3"></i>
            `

        presetBox.onclick = (e) => {       // met le onclick sur chaque carré preset du menu, qui change les 4 données
            changePreviBGColor(preset.bgColor);
            changePreviIcon(preset.icon);
            changePreviTxtColor(preset.itColor);
            changeTitlePreset(preset.text);
        };

        // On ajoute au DOM tout ce qu'on a préparé au dessus : presetBox
        document.querySelector(".presetList").appendChild(presetBox);
        
    }
)