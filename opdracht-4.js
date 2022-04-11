console.log("..............4A..............");
function tvDetails (detailsArray) {

    const tvInfo = document.getElementById('display-tv-info');

    if (!Array.isArray(detailsArray)) {
        detailsArray = [detailsArray];
    }
    const tvInformation = detailsArray.map((information) => {
        return `<h3>${information.brand} ${information.name} - ${information.type}</h3>`;
});

    tvInfo.innerHTML = `${tvInformation.join('')}`;
}

tvDetails(inventory[3]);

console.log("..............4B..............");
function tvPrice (price) {
    const displayPrice = document.getElementById('tv-price');

    const showPrice =  price;
    displayPrice.innerHTML = `<h3>€${showPrice},-</h3>`;

}
tvPrice(355);

console.log("..............4C..............");
function availebleScreenSizes (sizesArray) {
    const tvSizes = document.getElementById('tv-sizes')

    if (!Array.isArray(sizesArray)) {
        sizesArray = [sizesArray];
    }
    const generateTvSizes = sizesArray.map((sizes) => {
        return `${sizes} inch (${Math.round(sizes*2.54)} cm) `;
    })

    tvSizes.innerHTML = `<h3>${generateTvSizes.join('| ')}</h3>`
}
availebleScreenSizes(inventory[3].availableSizes);

// laatste opdracht kom ik niet aan uit helaas..
console.log("..............4D..............");
function generateTvDetails (detailsArray) {
    const tvInfo = document.getElementById('tv-info')

    if (!Array.isArray(detailsArray)) {
        detailsArray = [detailsArray];
    }

    const tvInformation = detailsArray.map((information) => {
        return `<h3>${information.brand} ${information.name} - ${information.type}</h3>`;
    })

    const tvPrice = detailsArray.map((price) => {
        return `<h3>${price.price}</h3>`;
    })

    tvInfo.innerHTML = `<h3>${tvInformation}</h3>
                        <h3>€${tvPrice},-</h3>>`
}
generateTvDetails(inventory[3]);
