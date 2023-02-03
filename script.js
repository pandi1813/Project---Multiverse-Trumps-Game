// *********************** VARIABLES ***********************************

// variables for buttons
let rulesBtn = document.querySelector("#rule-btn");
let startBtn = document.querySelector("#play-btn");
let returnBtn = document.querySelector("#return-btn");

// variables for screen containers
let startScreen = document.querySelector("#start-section");
let gameScreen = document.querySelector("#game-section");
let rulesScreen = document.querySelector("#rules-section");




//************************* EVENT LISTENERS ***************************

// start screen --> game screen
startBtn.addEventListener("click", function () {
    startScreen.classList.add("hide");
    gameScreen.classList.remove("hide");
})


// start screen --> ruses screen
rulesBtn.addEventListener("click", function () {
    startScreen.classList.add("hide");
    rulesScreen.classList.remove("hide");
})

// rules screen --> start screen
returnBtn.addEventListener("click", function () {
    rulesScreen.classList.add("hide");
    startScreen.classList.remove("hide");
})



