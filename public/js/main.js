
// // //BOUTONS 

let replay = document.getElementById("btnReplay");
let menuBouton = document.getElementById("btnMenu");
let choixNiveau = document.getElementById("selectLevel");
let ecranBis = document.querySelector(".champ");

replay.addEventListener("click", function(){
    choixNiveau.classList.add('hidden');
    ecranBis.classList.remove('hidden');
})

replay.addEventListener("click", function(){
    choixNiveau.classList.remove('hidden');
    ecranBis.classList.add('hidden');
})


// // let btnMenu = document.getElementById("btnMenu");
// // let btnPrincipal = document.getElementById("btnReplay")

// // // Événement pour le bouton "MENU PRINCIPAL"
// // btnMenu.addEventListener("click", function() {

// // });

// // //CHOIX DU NIVEAU

document.addEventListener('DOMContentLoaded', () => {
    let easyButton = document.getElementById('startEasy');
    let mediumButton = document.getElementById('startMedium');
    let difficultButton = document.getElementById('startDifficult');

    let jeux = {
        easy: document.querySelector('.jeu1'),
        medium: document.querySelector('.jeu2'),
        difficult: document.querySelector('.jeu3')
    };

    let selectLevelContainer = document.getElementById('selectLevel');
    let fieldContainer = document.getElementById('field');

    function showGame(level) {
        selectLevelContainer.style.display = 'none';
        fieldContainer.classList.remove('hidden');
        
        Object.values(jeux).forEach(jeu => {
            jeu.style.display = 'none';
        });

        jeux[level].style.display = 'grid'; 
    }

    easyButton.addEventListener('click', () => {
        showGame('easy');
        resetGameStats();
    });
    mediumButton.addEventListener('click', () => {
        showGame('medium');
        resetGameStats();
    });
    difficultButton.addEventListener('click', () => {
        showGame('difficult');
        resetGameStats();
    });

    function resetGameStats() {
        document.getElementById('coups').textContent = '0';
        document.getElementById('temps').textContent = '0';
        document.getElementById('coupsField').textContent = '0';
        document.getElementById('tempsField').textContent = '0';
    }
});

// // //CHOIX DES CARTES

