function add(price1, price2){
    console.log('--------------');
    let total = price1 + price2;
    return total;
}
p1 = 45;
p2 = 30;
let bill = add(p1, p2);

function add2(price1, price2){
    console.log('--------------');
    return price1 + price2;
}
let bill2 = add(40, 20);
console.log(bill, bill2);

// Calculator
function calculator(num1, num2){
    let sum = num1 + num2;
    let sub = num1 - num2;
    let mul = num1 * num2;
    let div = num1 / num2;
    return sum + sub + mul + div;
}
let output = calculator(10, 5);
console.log(output);

// Even
function isEven(number){
    console.log('------------');
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}
let result = isEven(10);
console.log('Even : ', result);
console.log('Even : ', isEven(7));

// Odd
function isOdd(number){
    console.log('------------');
    if(number % 2 === 1){
        return true;
    }else{
        return false;
    }
}
let res = isOdd(44);
console.log('Odd : ', res);
console.log('Odd : ', isOdd(99));
