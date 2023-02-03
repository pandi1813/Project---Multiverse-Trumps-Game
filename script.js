let gameResultLose = ["youlose", "looser", "sad", "tryme"]
let gameResultWin = ["winning", "victory", "cheers", "youwin", "cry"]
let gameResultTie = [,"muhaha","ha", "haha","goodluck", "really"]
let gameResult = ""


let score = "tie"
winOrLose()


function winOrLose() {
    if (score == "win") {
        const randomWin = Math.floor(Math.random() * gameResultWin.length)
        gameResult = gameResultWin[randomWin]
    }
    else if (score == "lose") {
        const randomLose = Math.floor(Math.random() * gameResultLose.length)
        gameResult = gameResultLose[randomWin]
    }
    else {
        const randomTie = Math.floor(Math.random() * gameResultTie.length)
        gameResult = gameResultTie[randomTie]
    }

    getGif(gameResult)
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

// try this   --->  https://api.gfycat.com/v1/reactions/populated?tagName=




