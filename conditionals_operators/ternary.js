var age = 26;

// if(age >= 18){
//     console.log('You can vote now!!');
// }else{
//     console.log('You need to wait!!');
// }

// Ternary Operator
age >= 18 ? console.log('You can vote now!!') : console.log('You need to wait!!');

var price = 700;
var isLeader = true;

// if(isLeader){
//     price = price - 100;
//     console.log(price);
// }else{
//     console.log(price);
// }

// Ternary Operator
// isLeader ?  console.log(price = price - 100) : console.log(price);

// Ternary Operator
// price = isLeader === true ? price - 100 : price;
// console.log(price);

// if(isLeader){
//     if(price >= 500){
//         price = price / 2;
//     }else{
//         price = price - 100;
//     }
// }else{
//     price = price;
// }
// console.log(price);

// Ternery Operator
// isLeader ? ((price >= 1000) ? price = price / 2 : price = price - 100) : price;
price = isLeader ? 
            price >= 500 ? 
                    price / 2 : 
                    price - 100 
            : price;
console.log(price);