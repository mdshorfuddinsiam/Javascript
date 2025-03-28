// var z = 0.5;
// var z = 20.8679;
var z = '20.8679';

var x = 15;
// var y = 25;
var y = '25';
// var y = parseInt('25');
var data = 'dfdfdfdfdfdf';

// console.log(x);
// console.log(y);
console.log(typeof x);
y = parseInt(y);
console.log(typeof y);
console.log(x + y);

data = parseInt(data);
// console.log(typeof data);
console.log(data);
console.log(x + data);

console.log(typeof z);
// z = parseInt(z);
z = parseFloat(z);
console.log(z); 
console.log(0.1 + 0.2); 
console.log(0.2 + 0.2); 

var first = 10.4548;
var second = 50.3443;
var total = first + second;
// console.log(total.toFixed(2));
var total = total.toFixed(3);
var total = parseFloat(total);
console.log(total);

const num1 = 50;
const num2 = -50;
console.log(num1 / 0);
console.log(num2 / 0);