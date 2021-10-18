export const catalog = (harvestedArray) => {
    let htmlString = ""
    for (const plant of harvestedArray) {
        htmlString += `<section class="plant">${plant.type}</section>`
    }
    return htmlString
}