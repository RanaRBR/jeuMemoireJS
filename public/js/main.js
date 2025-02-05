//PASSAGE D'UN ECRAN A UN AUTRE

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

//CHOIX DU NIVEAU

let startEasy = document.getElementById('startEasy');
let startMedium = document.getElementById('startMedium');
let jeu1 = document.querySelector('.jeu1');
let jeu2 = document.querySelector('.jeu2');
let jeu3 = document.querySelector('.jeu3');

function startGame(level) {
    document.getElementById('selectLevel').style.display = 'none';
    field.classList.remove('hidden');
    
    jeu1.style.display = 'none';
    jeu2.style.display = 'none';
    jeu3.style.display = 'none';

    if (level === 'easy') {
        jeu1.style.display = 'grid'; 
    } else if (level === 'medium') {
        jeu2.style.display = 'grid'; 
    } else if (level === 'hard') {
        jeu3.style.display = 'grid'; 
    }
}

startEasy.addEventListener('click', function() {
    startGame('easy');
});

startMedium.addEventListener('click', function() {
    startGame('medium');
});

let startDifficult = document.querySelector('.card.active:not(#startEasy):not(#startMedium)');
startDifficult.addEventListener('click', function() {
    startGame('hard');
});

btnReplay.addEventListener('click', function() {
    field.classList.add('hidden');
    document.getElementById('selectLevel').style.display = 'block';
});

//CHOIX DES CARTES

