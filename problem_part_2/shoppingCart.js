const products = [
    { name:'Headphone', price:400, quantity:2 },
    { name:'Charger', price:700, quantity:1 },
    { name:'Protector', price:100, quantity:3 },
    { name:'Back Cover', price:200, quantity:2 },
];

function cartTotal(products){
    let total = 0;
    for(const product of products){
        const thisProductPrice = product.price * product.quantity;
        total = total + thisProductPrice;
    }
    return total;
}

let totalCost = cartTotal(products);
console.log('Total cost :', totalCost);