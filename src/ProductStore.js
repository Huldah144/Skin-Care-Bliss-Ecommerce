// glow serum: price_1NhkFZBPRLp93kiDAZNnWyJY
// moisturizing: price_1NhkJIBPRLp93kiDq7D0W92h
//cleanser: price_1NhkLPBPRLp93kiDFdTSL9G1
//mask:price_1NhkNiBPRLp93kiDQBOYoAC3
//smoot serum: price_1NhkP7BPRLp93kiDowV6Oybq


const productsArray = [
    {
        id: "price_1NhkFZBPRLp93kiDAZNnWyJY",
        mainImage: "./Images/serum.png",
        title: "Skin Bliss Glow Serum",
        price: "500"
    },   
    {
        id: "price_1NhkJIBPRLp93kiDq7D0W92h",
        mainImage: "./Images/moist.png",
        title: "Skin Bliss Moisturizing Cosmetic",
        price: "700"
    },   
    {
        id: "price_1NhkLPBPRLp93kiDFdTSL9G1",
        mainImage: "./Images/cleanser.png",
        title: "Skin Bliss Clarifying Cleanser",
        price: "300"
    },    
    {
        id: "price_1NhkNiBPRLp93kiDQBOYoAC3",
        mainImage: "./Images/mask.png",
        title: "Skin Bliss Night Mask",
        price: "900"
    },    
    {
        id: "price_1NhkP7BPRLp93kiDowV6Oybq",
        mainImage: "./Images/smooth.png",
        title: "Skin Bliss Smoothing Serum",
        price: "1000"
    }

]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID:" + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };