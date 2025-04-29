let x = 50;
let y = 80;

// if else
if(x > y){
    console.log("X is greater than Y");
}else{
    console.log("Y is greater than X");
}
console.log("---------------");

// function
function getMax(num1, num2){
    if(num1 < num2){
        // console.log(num1 + ' is less than ' + num2);
        return num2;
    }else{
        // console.log(num1 + ' is greater than ' + num2);
        return num1;
    }
}

const max1 = getMax(66, 99);
const max2 = getMax(88, 22);
const ultimageMax = getMax(max1, max2);
console.log('Max1 is : ', max1);
console.log('Max2 is : ', max2);
console.log('Ultimate Max is : ', ultimageMax);

// 3 ta number er moddhe boro

let bangla = 77;
let english = 55;
let math = 81;

function getMaximum(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}

const res = getMaximum(bangla, english, math);
console.log('Higest result is :', res);

// Math function (built in)
const result = Math.max(30,20,55,1,12);
console.log('Result is = ', result);

