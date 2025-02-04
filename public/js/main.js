let startGameContenair = document.querySelector(".startGame");
let startGameCards = document.querySelectorAll(".startGame .card");
let startGame = document.querySelector(".startGame button");
let playground = document.querySelector(".playGround");

let levels=2, 
    column=3, 
    row=4, 
    matched=0, 
    cardOne, 
    cardTwo,
    IsPreventClick = true;

    startGameCards.forEach(element =>{
        element.addEventListener("click", (e) =>{
            startGameCards.forEach(el =>{
                el.classList.remove
            })

            e.target.parentElement.classList.add("active");
            levels = e.target.parentElement.getAttribute("level");
            column = e.target.parentElement.getAttribute("column");
            row = e.target.parentElement.getAttribute("row");
        })
    })


    startGame.addEventListener("click", (e) =>{
        startGameContenair.style.display = "none";
        playground.style.display ="grid";

        createCards();

    })

    function createCards(){
        let cardArr =[
            "maison",
            "bombe",
            "cadeau",
            "personne",
            "avion",
        ]
        shuffleCards([...cardArr,...cardArr])
    }

    function shuffleCards(cards){

    }

    