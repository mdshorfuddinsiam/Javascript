/**
 * Objective: write a function to give me the sum of all numbers in an array
 */

function sumOfNumbers(numbers){
    let sum = 0;
    for(let number of numbers){
        sum = sum + number;
    }
    return sum;
}
let numbers = [4,5,6,7];
console.log("Sumation : " + sumOfNumbers(numbers));