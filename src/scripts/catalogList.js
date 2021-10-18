export const catalog = (arr) => {
    let htmlString = ""
    for (const plant of arr) {
        htmlString += `<section class="plant">${plant.type}</section>`
    }
    return htmlString
}