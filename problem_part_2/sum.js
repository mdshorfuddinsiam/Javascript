const products = [
    { name:'Headphone', price:400 },
    { name:'Charger', price:700 },
    { name:'Protector', price:100 },
    { name:'Back Cover', price:200 },
];

function getTotal(products){
    // console.log(products);
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}

let totalCost = getTotal(products);
console.log('Total cost : ', totalCost);