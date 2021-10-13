const plantsGrowing = []

export const addPlant = (seedObj) => {
    plantsGrowing.push(seedObj)
}

export const usePlants = () => {
    return plantsGrowing
}