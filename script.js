// Codes to pull superheroes' data from API
fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
    .then(response => response.json())
    .then(heroData => {
        
        // pull a random superhero's data
        function getRandomHero(heroData) {
        let randomHeroIndex = Math.floor(Math.random() * heroData.length);
        return heroData[randomHeroIndex];
        }
        let randomHero = getRandomHero(heroData);

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

        // put data into card

        // do above again for computer card     

    });