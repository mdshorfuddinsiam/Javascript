function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mul(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2;
}

console.log('Addition :', add(20, 10));
console.log('Subtration :', sub(20, 10));
console.log('Multiplication :', mul(20, 10));
console.log('Division :', div(20, 10));
console.log('------------------');

// function calulator(operator, num1, num2){
//     if(operator === 'add'){
//         return num1 + num2;
//     }
//     else if(operator === 'sub'){
//         return num1 - num2;
//     }
//     else if(operator === 'mul'){
//         return num1 * num2;
//     }
//     else if(operator === 'div'){
//         return num1 / num2;
//     }
//     else{
//         return "Only 'add', 'subtract', 'multiply', 'divide' operator is allowed."
//     }
// }

function calulator(operator, a, b){
    if(operator === 'add'){
        const result = add(a, b);
        return result;
    }
    else if(operator === 'sub'){
        const result = sub(a, b);
        return result;
    }
    else if(operator === 'mul'){
        const result = mul(a, b);
        return result;
    }
    else if(operator === 'div'){
        const result = div(a, b);
        return result;
    }
    else{
        return "Only 'add', 'subtract', 'multiply', 'divide' operator is allowed."
    }
}
const output = calulator('mul', 5, 7);
// const output = calulator('mod', 5, 7);
console.log('Result =', output);

