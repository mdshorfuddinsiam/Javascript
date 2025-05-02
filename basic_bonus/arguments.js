function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[1]);
    console.log(arguments['3']);
}
// const result = add(10, 20);
const result = add(10, 20, 30, 40, 50);
console.log(result);