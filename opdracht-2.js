console.log("..............2A..............");
// 2a
let totalSold = 0

for (let i = 0; i < inventory.length; i++){
    totalSold = totalSold + inventory[i].sold;
}

console.log(totalSold);

console.log("..............2B..............");
// 2B
const tvSold = document.getElementById("tvSold");
tvSold.textContent = totalSold

console.log("..............2C..............");
let totalTvPurchase = 0

for (let i = 0; i < inventory.length; i++){
    totalTvPurchase = totalTvPurchase + inventory[i].originalStock;
}

console.log(totalTvPurchase)

console.log("..............2D..............");
const tvPurchase = document.getElementById("tvPurchase");
tvPurchase.textContent = totalTvPurchase

console.log("..............2E..............");
let tvToBeSold = 0

for(let i = 0; i < inventory.length; i++) {
    tvToBeSold = tvToBeSold + inventory[i].originalStock - inventory[i].sold;
}
console.log(tvToBeSold);

const totalTvToBeSold = document.getElementById("tvToBeSold");
totalTvToBeSold.textContent = tvToBeSold
