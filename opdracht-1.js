console.log("..............1A..............");
// 1a
const tvType = inventory.map((tv) => {
    tv = tv.type
    return tv
});

console.log(tvType);

console.log("..............1B..............");
// 1b
const soldOut = inventory.filter((stock) => {
    if(stock.originalStock - stock.sold === 0) {
        return stock
    }
});

console.log(soldOut);

console.log("..............1C..............");
// 1c
const ambiLight = inventory.filter((hasAmbiLight) => {
    if(hasAmbiLight.options.ambiLight === true) {
        return hasAmbiLight
    }
});
console.log(ambiLight);

console.log("..............1D..............");
// 1d
const priceSort = inventory.sort((a, b) => {
    return a.price - b.price
});

console.log(priceSort);

// 1d geprobeerd in een functie, maar deze geeft undefined
function sortByPrice (sorting) {
    const priceSort = sorting.sort((a, b) => {
        return a.price - b.price
        return priceSort
    });
}
console.log(sortByPrice(inventory));
