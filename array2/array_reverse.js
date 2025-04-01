let number = [1,2,3,4,5];
let number2 = [34,546,65,1,45,6,645,8,90,11];
var people = ['Rahim', 'Akib', 'Karim', 'Anbul', 'Bulbul', 'Abul', 'Kuddus',  'Aabul', 'Boyati'];

// Reversed Function 
// console.log(number);
// console.log(number.reverse());
// console.log('Reversed : ' + number);

// console.log(people);
// console.log(people.reverse());
// console.log('Reversed : ' + people);

// for of loop
// let num_reversed = [];
// for(let num of number){
//     // console.log(num);
//     num_reversed.unshift(num);
// }
// console.log(num_reversed);

// ----------- amr ai code a problem ase -------------
// // for loop (incremental)
// let reversed = [];
// for(let x=0; x < number.length; x++){
//     reversed = number[x] + reversed;    // ekhane problem 
// }
// console.log(reversed);
// ------------------------------------

let reverse = [];
for(let n=0; n < number.length; n++){
    let num = number[n];
    reverse.unshift(num);
    // reverse.unshift(number[n]);
}
console.log(reverse);

let reversed = [];
for(let y = number.length - 1; y >= 0; y--){
    reversed.push(number[y]);
}
console.log(reversed);

let rev = [];
let i = 0;
while(i < number.length){
    let num = number[i];
    rev.unshift(num);
    // rev.unshift(number[n]);
    i++;
}
console.log(rev);