console.log("..............3A..............");
// 3a
// const tvBrand = inventory.map((tv) => {
//     tv = tv.brand
//     return tv
// });
// console.log(tvBrand);
//
// const tvBrands = document.getElementById("allBrands");
// tvBrands.innerHTML = `<h2>${tvBrand}</h2>`;

console.log("..............3B..............");
function getTvCategoryList(tvArray) {
    const tvCategoryList = document.getElementById('allBrands');

    const tvItems = tvArray.map((tvObject) => {
    return `<li> <h3>${tvObject.brand}</h3> </li> `;
    });

    tvCategoryList.innerHTML = `${tvItems.join('')}`;
}
getTvCategoryList(inventory)



