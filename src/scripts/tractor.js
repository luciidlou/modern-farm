import { addPlant } from "./field.js"

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

const asparagusSeed = createAsparagus()

const potatoSeed = createPotato()

const soybeanSeed = createSoybean()

const sunflowerSeed = createSunflower()

const wheatSeed = createWheat()

const cornSeed = createCorn()

// THIS FUNCTION ADDS PLANTS TO OUR plantsGrowing ARRAY FROM field.js
export const plantSeeds = (yearlyPlanArr) => {
    for (const childArr of yearlyPlanArr) {
        for (const plant of childArr) {
            if (plant === "Asparagus") {
                addPlant(asparagusSeed)
            } else if (plant === "Soybean") {
                addPlant(soybeanSeed)
            } else if (plant === "Potato") {
                addPlant(potatoSeed)
            } else if (plant === "Sunflower") {
                addPlant(sunflowerSeed)
            } else if (plant === "Wheat") {
                addPlant(wheatSeed)
            } else if (plant === "Corn") {
                for (let i = 0; i < cornSeed.length; i++)
                addPlant(cornSeed[i])
            } 
        }
    }
}