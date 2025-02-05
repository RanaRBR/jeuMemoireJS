
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




