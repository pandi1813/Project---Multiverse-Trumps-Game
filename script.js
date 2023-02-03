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