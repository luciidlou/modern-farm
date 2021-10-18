// In this module, define and export a harvestPlants function.
// The harvestPlants function must accept the plants array as input.
// The function will return an array of seed objects.
// Iterate the array of growing plants. On each plant, get the value of the output property.
// Add that many of the plant objects to the array that the function returns. 
// For example, if the current plant is a peanut object with an output of 2...
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


// THIS FUNCTION TAKES AN ARRAY AS AN ARGUMENT AND RETURNS A NEW ARRAY 
export const harvestPlants = (plantsArr) => {
    const plantsToHarvest = []
    for (const plantObj of plantsArr) {
        for (let i = 0; i < plantObj.output; i++) {
            if (plantObj.type === "Asparagus") {
                plantsToHarvest.push(asparagusSeed)
            } else if (plantObj.type === "Soybean") {
                plantsToHarvest.push(soybeanSeed)
            } else if (plantObj.type === "Potato") {
                plantsToHarvest.push(potatoSeed)
            } else if (plantObj.type === "Sunflower") {
                plantsToHarvest.push(sunflowerSeed)
            } else if (plantObj.type === "Wheat") {
                plantsToHarvest.push(wheatSeed)
            }
        } if (plantObj.type === "Corn") {
            plantsToHarvest.push(cornSeed[0])
        }
    }
    return plantsToHarvest
}