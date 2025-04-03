let a = 5;
let b = 7;
console.log(a, b);

let temp = b;
b = a;
a = temp;
console.log(a, b);

let x = 11;
let y = 99;
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);