// String variable delclare korar niyom
const country = 'Bangladesh'; 
const division = "Dhaka";
const district = `Shariatpur`;

console.log(country);
console.log(division);
console.log(district);

// object
const thana = new String('Naria');
console.log(thana);
console.log(typeof thana);

// Array & String (variable) er similary
const numbers = [2,5,6,45,54,9];
console.log('Array : ', numbers.length);
console.log('Array : ', numbers[3]);

let fullName = 'Shorfuddin';
console.log('String : ', fullName.length);
console.log('String : ', fullName[4]);

// Array & String (variable) er difference
// Array
numbers[3] = 99
console.log(numbers);

// String is immutable
// Array is mutable

// String
fullName[4] = 'k';
console.log(fullName);


