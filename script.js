// .then(data => console.log(data.images))

// get random hero by id (no. 1 - 731)
    // Math.random 
// get hero name
// hero image
// hero powers

fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/1.json")
.then(response => response.json())
.then(heroData => console.log(heroData))