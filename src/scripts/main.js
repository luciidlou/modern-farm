import { createPlan } from "./plan.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"


// STORE THE YEARLY PLAN IN A VARIABLE // RETURNS AN ARRAY OF OBJECTS
const yearlyPlan = createPlan()


// PLANTS ALL THE SEEDS BASED ON WHAT WE NEED FROM OUR yealyPlan ARRAY
plantSeeds(yearlyPlan)

// DEFINE A VARIABLE TO HOLD THE ARRAY OF PLANTS NEEDED
const plantsToHarvest = usePlants()
// console.log(plantsToHarvest)

// CALL THE harvestPlants FUNCTION AND STORE THE IT IN A VARIABLE (an array of objects)
const totalPlantsNeeded = harvestPlants(plantsToHarvest)


console.log(totalPlantsNeeded)