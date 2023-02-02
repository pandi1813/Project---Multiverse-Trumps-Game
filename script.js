// .then(data => console.log(data.images))






    
// hero powers
    // let intelligenceStat = heroData.powerstats.intelligence;
    // let strengthStat = heroData.powerstats.strength;
    // let speed = heroData.powerstats.speed;
    // let durability = heroData.powerstats.durability;
    // let power = heroData.powerstats.power;
    // let combat = heroData.powerstats.combat;




// *missing numbers
// let missingNumbers = [9, 16, 19, 21, 22, 27, 33, 46, 47, 50, 51, 54, 55, 59, 64, 65, 67, 74, 77, 85, 86, 89, 90, 91, 94, 101, 108, 113, 116, 117, 122, 123, 124, 125, 128, 129, 131, 132, 133, 134, 138, 143, 153, 155, 159, 161, 163, 164, 166, 168, 173, 175, 179, 182, 183, 184, 187, 189, 190, 192, 193, 197, 199, 205, 223, 229, 243, 244, 250, 255, 262, 264, 272, 276, 279, 281, 282, 283, 290, 291, 292, 293, 295, 301, 302, 304, 316, 317, 318, 319, 324, 326, 328, 329, 331, 349, 359, 362, 363, 366, 368, 377, 378, 385, 399, 411, 417, 420, 434, 446, 447, 453, 464, 465, 466, 468, 473, 482, 486, 494, 500, 501, 507, 511, 512, 513, 515, 519, 525, 534, 544, 552, 553, 554, 560, 593, 596, 597, 603, 606, 614, 616, 617, 621, 622, 624, 626, 629, 662, 663, 669, 673, 674, 675, 682, 683, 684, 691, 694, 695, 698, 700, 704, 710, 712, 715, 721, 725]

fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
.then(response => response.json())
.then(heroData => {
    let randomHeroIndex = Math.floor(Math.random()*heroData.length);
    console.log(heroData);
    let randomHero = heroData[randomHeroIndex];
    console.log(randomHero);

    // get hero name
    let heroName = randomHero.name;

    // hero image (available image sizes: xs , sm, md, lg)
    let imageURL = randomHero.images.sm

    // 
    
})



// let randomHero = heroData