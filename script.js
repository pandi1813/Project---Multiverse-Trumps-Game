let gameResultLose = ["youlose", "looser", "sad", "tryme"]
let gameResultWin = ["winning", "victory", "cheers"]
let gameResultTie = [, "muhaha", "ha", "haha", "goodluck", "really"]
let gameResult = ""

let text = "";
let score = "win";
winOrLose();


function winOrLose() {
    if (score === "win") {
        const randomWin = Math.floor(Math.random() * gameResultWin.length);
        gameResult = gameResultWin[randomWin];
        text = "Congratulations You Won !";
    } else if (score === "lose") {
        const randomLose = Math.floor(Math.random() * gameResultLose.length);
        gameResult = gameResultLose[randomLose];
        text = "Sorry, You Lost !";
    } else {
        const randomTie = Math.floor(Math.random() * gameResultTie.length);
        gameResult = gameResultTie[randomTie];
        text = "It's a Tie !";
    }

    let textEl = document.createElement("h1");
    textEl.textContent = text;
    document.querySelector("#resultText").appendChild(textEl);

    getGif(gameResult);
}

function getGif(gifWord) {

    fetch(`https://api.gfycat.com/v1/gfycats/search?search_text=${gifWord}`)
        .then(response => response.json())
        .then(data => {
            let selectedGif = data.gfycats[2].max2mbGif;
            let gifEl = document.querySelector("#gif");
            gifEl.src = selectedGif;
        })
}


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
    });

