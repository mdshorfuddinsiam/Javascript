/**
 * ------ Looping Technic -------
 * Note: javascrip er sort() diye shompurno thik vabe sorting kora jay nah... jdi 1-10 array hoy tahole sorting thik moto kaj kore...kintu er beshi hole jeta (number2) er sorting (example) a deya ache sheta dekhlei bujha jay...r (string) value sorting a (capital letter) aage priority pay then (small letter)
 */

let number = [3,1,4,5,2];
let number2 = [34,546,65,1,45,6,645,8,90,11];
var people = ['Rahim', 'Akib', 'Karim', 'anbul', 'Bulbul', 'abul', 'Kuddus',  'aabul', 'Boyati'];
var people2 = ['rahim', 'Akib', 'karim', 'anbul', 'bulbul', 'abul', 'kuddus',  'aabul', 'boyati'];

// console.log(number);
console.log(number.sort());
// console.log(number2);
console.log(number2.sort());
// console.log(people);
console.log(people.sort());
// console.log(people2);
console.log(people2.sort());


// --- I can't understand ---
const numbers = [4,7,12,8,43,6,1];
// const numbers_asc = numbers.sort();  // not working
const numbers_asc = [...numbers].sort(function (a, b){ return a - b });  
const numbers_dsc = [...numbers].sort(function (a, b){ return b - a });
console.log(numbers_asc); 
console.log(numbers_dsc); 