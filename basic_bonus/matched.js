const numbers=[10,20,30,40,50];

for(let i=0; i < numbers.length; i++){
    console.log(numbers[i]);
}
console.log('-------------');

for(const number of numbers){
    console.log(number);
}
console.log('-------------');

const products = [
    {name:'xaomi phone One Night', price: 20000},
    {name:'samsung s20 Phone', price: 70000}, 
    {name:'mac book air', price: 1200000}, 
    {name:'lenovo yoga laptop 2025', price: 50000}, 
    {name:'Dell inspiron-laptop', price: 60000}, 
    {name:'Samsung phone note 7', price: 27000}, 
    {name:'Nokia old age phone gone', price: 7000}, 
    {name:'Phone One', price: 3000}, 
];

for(const product of products){
    if(product.name.includes('phone')){
        console.log(product);
    }
    // console.log(product);
}
console.log('-------------');

for(const product of products){
    if(product.name.toLowerCase().includes('phone')){
        console.log(product);
    }
    // console.log(product);
}
console.log('-------------');

function matchedProducts(products, search){
    let matched = [];
    for(const item of products){
        // if(item.name.includes(search)){
        if(item.name.toLowerCase().includes(search.toLowerCase())){
            // console.log(item);
            matched.push(item);
        }
    }
    return matched;
}
const output = matchedProducts(products, 'phone');
console.log(output);


