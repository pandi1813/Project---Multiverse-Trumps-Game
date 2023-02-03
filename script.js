let gameResultLose = ["youlose", "looser", "sad", "tryme"]
let gameResultWin = ["winning", "victory", "cheers", "youwin", "cry"]
let gameResultTie = ["look", "really", "oh"]
let gameResult = ""


let score = "tie"
winOrLose()


function winOrLose() {
    if (score == "win") {
        gameResult = gameResultWin[0]
    }
    else if (score == "lose") {
        gameResult = gameResultLose[0]
    }
    else {
        gameResult = gameResultTie[1]
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




