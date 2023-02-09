

// *********************** VARIABLES ***********************************

// variables for buttons
let rulesBtn = document.querySelector("#rule-btn");
let startBtn = document.querySelector("#play-btn");
let returnBtn = document.querySelector("#return-btn");

// variables for screen containers
let startScreen = document.querySelector("#start-section");
let gameScreen = document.querySelector("#game-section");
let rulesScreen = document.querySelector("#rules-section");
let gameEnd = document.querySelector("#end-section");

let playerCard = document.querySelector(".playerCon")
let computerCard = document.querySelector(".pcCon")

// variables for scores
let playerScoreEl = document.querySelector("#player-score");
let computerScoreEL = document.querySelector("#computer-score");

//************************* EVENT LISTENERS ***************************

// start screen --> game screen
startBtn.addEventListener("click", function () {
    startScreen.classList.add("hide");
    gameScreen.classList.remove("hide");
    finishBtn.classList.add("hide");
    getStats();

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


//************************* Gif generator ***************************

// Declare arrays to store different game results and messages
let gameResultLose = ["youlose", "looser", "sad", "tryme"];
let gameResultWin = ["winning", "victory", "cheers"];
let gameResultTie = [, "muhaha", "ha", "haha", "goodluck", "really"];
let gameResult = "";




// Function to determine the result of the game based on the score variable
function winOrLose() {
    if (playerScore > computerScore) {
        // Randomly select a message from the gameResultWin array
        const randomWin = Math.floor(Math.random() * gameResultWin.length);
        gameResult = gameResultWin[randomWin];
        text = "Congratulations You Won !";
    } else if (playerScore < computerScore) {
        // Randomly select a message from the gameResultLose array
        const randomLose = Math.floor(Math.random() * gameResultLose.length);
        gameResult = gameResultLose[randomLose];
        text = "Sorry, You Lost !";
    } else {
        // Randomly select a message from the gameResultTie array
        const randomTie = Math.floor(Math.random() * gameResultTie.length);
        gameResult = gameResultTie[randomTie];
        text = "It's a Tie !";
    }

    // Create an h1 element with the result text
    let textEl = document.createElement("h1");
    textEl.textContent = text;
    textEl.classList.add("endText");
    // Append the h1 element to the resultText element in the HTML
    document.querySelector("#resultText").appendChild(textEl);

    // Call the getGif function with the gameResult variable as an argument
    getGif(gameResult);
}

// Function to retrieve a GIF from the gfycat API based on the gifWord argument
function getGif(gifWord) {
    fetch(`https://api.gfycat.com/v1/gfycats/search?search_text=${gifWord}`)
        .then(response => response.json())
        .then(data => {
            // Select the 3rd GIF from the API response
            let selectedGif = data.gfycats[2].max2mbGif;
            // Set the src attribute of the gif element to the selected GIF
            let gifEl = document.querySelector("#gif");
            gifEl.src = selectedGif;
        });
}


//************************* Hero stats for cards ***************************
function getStats() {
    // Codes to pull superheroes' data from API
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
        .then(response => response.json())
        .then(heroData => {

            // get a random superhero's data (for display on the card)
            function getRandomHeroData(heroData) {

                // select a random superhero from the data
                let randomHeroIndex = Math.floor(Math.random() * heroData.length);
                let randomHero = heroData[randomHeroIndex];

                // get superhero name
                let heroName = randomHero.name;

                // get superhero image (available image sizes: xs , sm, md, lg)
                let imageURL = randomHero.images.sm;

                // get superhero power stats
                let intelligenceStat = randomHero.powerstats.intelligence;
                let strengthStat = randomHero.powerstats.strength;
                let speedStat = randomHero.powerstats.speed;
                let durabilityStat = randomHero.powerstats.durability;
                let powerStat = randomHero.powerstats.power;
                let combatStat = randomHero.powerstats.combat;

                return {
                    heroName,
                    imageURL,
                    intelligenceStat,
                    strengthStat,
                    speedStat,
                    durabilityStat,
                    powerStat,
                    combatStat,
                };
            }

            // put superhero attributes into player's card
            let playerHero = getRandomHeroData(heroData);

            // put superhero attributes into computer's card     
            let computerHero = getRandomHeroData(heroData);
            displayCards(playerHero, computerHero)
        });
}

//*************************Card details displayed *************************** */

function displayCards(playerHero, computerHero) {

    document.getElementById('playerImg').src = playerHero.imageURL;
    document.getElementById('playerName').innerHTML = playerHero.heroName;
    document.getElementById('intelligenceValue').innerHTML = playerHero.intelligenceStat;
    document.getElementById('strengthValue').innerHTML = playerHero.strengthStat;
    document.getElementById('speedValue').innerHTML = playerHero.speedStat;
    document.getElementById('durabilityValue').innerHTML = playerHero.durabilityStat;
    document.getElementById('powerValue').innerHTML = playerHero.powerStat;
    document.getElementById('combatValue').innerHTML = playerHero.combatStat;


    document.getElementById('pcImg').src = computerHero.imageURL;
    document.getElementById('pcName').innerHTML = computerHero.heroName;
    document.getElementById('pcIntelligenceValue').innerHTML = computerHero.intelligenceStat;
    document.getElementById('pcStrengthValue').innerHTML = computerHero.strengthStat;
    document.getElementById('pcSpeedValue').innerHTML = computerHero.speedStat;
    document.getElementById('pcDurabilityValue').innerHTML = computerHero.durabilityStat;
    document.getElementById('pcPowerValue').innerHTML = computerHero.powerStat;
    document.getElementById('pcCombatValue').innerHTML = computerHero.combatStat;



}


//variables to store selected values - update them on button click
let playerStat;
let compStat;

// variables to store player's and computer's scores
let playerScore = 0;
let computerScore = 0;

// function to store scores in local storage
function storeScores() {
    localStorage.setItem("playerScore", JSON.stringify(playerScore));
    localStorage.setItem("computerScore", JSON.stringify(computerScore));
}
storeScores();

// function to display current scores on game page
function displayScores() {

    // variables to get scores from local storage
    let currentPlayerScore = JSON.parse(localStorage.getItem("playerScore"));
    let currentComputerScore = JSON.parse(localStorage.getItem("computerScore"));

    playerScoreEl.textContent = (`Player Score: ${currentPlayerScore}`);
    computerScoreEL.textContent = (`Computer Score: ${currentComputerScore}`);
}
displayScores();

// Event listener for power buttons
let i = 0;
let nextRoundBtn = document.querySelector("#nextRound");
let finishBtn = document.querySelector("#finishGame");
let powers = document.querySelector("#playerPowers");
nextRoundBtn.classList.add("hide");
let isScoreDisplayed = false;

playerCard.addEventListener("click", function () {
    if ((event.target.matches("button")  || event.target.matches("p")) && i < 10) {
        computerCard.classList.remove("hide");

        //variables
        let selectedButton = event.target.closest("button");
        let selectedStatClass = selectedButton.classList[1];
        let computerStat = computerCard.querySelector(`.${selectedStatClass}`);

        // display computer card

        // change player and computer stat to the selected values
        playerStat = parseInt(selectedButton.querySelector(".card-text").innerHTML, 10);
        compStat = parseInt(computerStat.querySelector(".card-text").innerHTML, 10);

        // Compares the player's and computer's selected stats
        if (playerStat > compStat) {
            playerScore += 1;
            storeScores();
        } else if (compStat > playerStat) {
            computerScore += 1;
            storeScores();
        }

        // display current scores in the game page
        displayScores();

        nextRoundBtn.classList.remove("hide");
        ++i;
        powers.querySelectorAll("button").forEach(button => {
            button.setAttribute("disabled", "true");
        });
    }

    nextRoundBtn.addEventListener("click", function () {
        getStats();
        computerCard.classList.add("hide");
        nextRoundBtn.classList.add("hide");
        powers.querySelectorAll("button").forEach(button => {
            button.removeAttribute("disabled");
        });
        if (i === 2) {
            finishBtn.classList.remove("hide");
            playerCard.classList.add("hide");
        }
    });

    finishBtn.addEventListener("click", function () {
        if (!isScoreDisplayed) {
        gameEnd.classList.remove("hide");
        gameScreen.classList.add("hide");  
        winOrLose();
        endScore();
        isScoreDisplayed = true;
        }
    });
});

function endScore() {
    let totalScores = document.querySelector("#resultText");
    let scoreEl = document.createElement("h1");
    let score2El = document.createElement("h1");
    scoreEl.textContent = "Your score is: " + playerScore;
    scoreEl.classList.add("player-score");
    score2El.textContent = "Computers score is: " + computerScore;
    score2El.classList.add("computer-score");

    // Append the h1 element to the resultText element in the HTML
    totalScores.appendChild(scoreEl);
    totalScores.appendChild(score2El)

}