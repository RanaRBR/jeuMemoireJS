
let levelCards = document.querySelectorAll(".startGame .card");
let btnReplay = document.querySelector("#btnReplay");
let home = document.getElementById("selectLevel");
let field = document.getElementById("field");

levelCards.forEach(card => {
    card.addEventListener("click", function() {
        home.classList.add("hidden"); 
        field.classList.remove("hidden");
    });
});

btnReplay.addEventListener("click", function() {
    home.classList.remove("hidden"); 
    field.classList.add("hidden");
});



// Sélection des éléments
const startEasy = document.getElementById('startEasy');
const startMedium = document.getElementById('startMedium');
const jeu1 = document.querySelector('.jeu1');
const jeu2 = document.querySelector('.jeu2');
const jeu3 = document.querySelector('.jeu3');

// Fonction pour démarrer le jeu
function startGame(level) {
    // Masquer le conteneur de sélection de niveau
    document.getElementById('selectLevel').style.display = 'none';
    // Afficher le conteneur de jeu
    field.classList.remove('hidden');
    
    // Masquer tous les jeux
    jeu1.style.display = 'none';
    jeu2.style.display = 'none';
    jeu3.style.display = 'none';

    // Afficher le jeu correspondant au niveau sélectionné
    if (level === 'easy') {
        jeu1.style.display = 'grid'; // Affiche le jeu 1
    } else if (level === 'medium') {
        jeu2.style.display = 'grid'; // Affiche le jeu 2
    } else if (level === 'hard') {
        jeu3.style.display = 'grid'; // Affiche le jeu 3
    }
}

// Événements pour les niveaux
startEasy.addEventListener('click', function() {
    startGame('easy');
});

startMedium.addEventListener('click', function() {
    startGame('medium');
});

// Pour le niveau difficile, il n'y a pas d'ID, donc on utilise une classe
const startDifficult = document.querySelector('.card.active:not(#startEasy):not(#startMedium)');
startDifficult.addEventListener('click', function() {
    startGame('hard');
});

// Optionnel : Événement pour le bouton "NOUVELLE PARTIE"
btnReplay.addEventListener('click', function() {
    // Réinitialiser le jeu ou redémarrer la logique ici
    field.classList.add('hidden');
    document.getElementById('selectLevel').style.display = 'block';
});