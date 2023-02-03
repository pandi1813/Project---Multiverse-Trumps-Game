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




