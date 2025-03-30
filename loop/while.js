let num = 0;
while(num < 5){
    console.log('Looping - ' + num);
    // num = num + 1;
    // num += 1;
    num++;
}

// print 1 - 10
let number = 1;
// while(number <= 10){
while(number < 11){
    console.log('Number : ' + number);
    number++;
}

// sum 1-10
let num1 = 0;
let sum = 0;
while(num1 <= 10){
    sum = sum + num1;
    console.log(sum);
    num1++;
}
console.log('Sum : ' + sum);

// Odd 
let num2 = 1;
while(num2 <= 20){
    if(num2 % 2 === 1){
        console.log(num2);
    }
    num2++;
}

// Even 
let num3 = 1;
while(num3 <= 20){
    if(num3 % 2 === 0){
        console.log('Even : ' + num3);
    }
    num3++;
}

// decrement
let n = 10;
while(n > 0){
    console.log(n);
    n--;
}
