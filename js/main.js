// GESTION DES COULEURS 

let colorList1 = document.querySelector(".listBG");
let colorList2 = document.querySelector(".listTxt");

let colors = ["#B497D6","#22333B","#A9927D","#5E503F","#A5243D","#75704E","#F17F29","#FFFFFF","#000000","#DCED31","#F44E3F","#30321C","#61E8E1","#ADE25D"];

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
    console.log(r);
}

function changeRandomColorTxt(){
    let r = Math.round(Math.random()*colors.length);
    changePreviTxtColor(r);
    console.log(r);
}

function changeRandomIcon(){
    let r = Math.round(Math.random()*icons.length);
    changePreviIcon(r);
    console.log(r);
}