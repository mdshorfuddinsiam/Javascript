// Square 
function square(number){
    console.log('------------------');
    console.log('Number : ', number);
    let square = number * number;
    console.log('Square : ', square);
}
square(5);
square(15);

// Addition
function add(x, y){
    console.log('------------------');
    console.log(x, y);
    let sum = x + y;
    console.log('Sum : ', sum);
}
add(10, 5);

// Addition (multiple)
function addAll(a, b, c, d, e){
    console.log('------------------');
    console.log(a, b, c, d, e);
    let sum = a + b + c + d + e;
    console.log('Add : ', sum);
}
// addAll(2, 4, 6, 8);
addAll(2, 4, 6, 8, 10);