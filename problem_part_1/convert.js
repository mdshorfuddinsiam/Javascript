// inch to feet (normal)
function inchToFeet(inch){
    // console.log(inch);
    let result = inch / 12;
    return result;
}
const feet = inchToFeet(75);
console.log('Feet : ' + feet);

// inch to feet (advance)
// ----- mine -----
// function inchToFeet2(inch){
//     // console.log(inch);
//     let feetInt = parseInt(inch / 12);
//     let feetFloat = inch % 12;
//     let res = feetInt + ' ft ' + feetFloat + ' inch';
//     return res
// }
// const output = inchToFeet2(75);
// console.log('Feet convert : ' + output);
// ----------------

function inchToFeet2(inch){
    let feetFraction = inch / 12;
    let feetNumber = parseInt(feetFraction);
    let inchReaining = inch % 12;
    let res = feetNumber + ' ft ' + inchReaining + ' inch';
    return res;
}
const output = inchToFeet2(75);
console.log('Feet convert : ' + output);

// mile to kilometer
function mileToKilometer(mile){
    return mile * 1.60934;
}
let km = mileToKilometer(10);
console.log(km);

// kilometer to mile
function kilometerToMile(km){
    return km * 0.621371;
}
let mile = kilometerToMile(10);
console.log(mile);