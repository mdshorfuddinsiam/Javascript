/**
 * ------ Looping Technic -------
 * 1. for 
 * 2. while 
 * 3. do while -> kom use krbo
 * 4. for of ---> array loop korar jonno
 * 5. for in ---> object loop korar jonno
 */

var people = ['Rahim', 'Karim', 'Bulbul', 'Kuddus', 'Boyati'];

// for of loop
for(const human of people){
    console.log(human);
}


// for loop 
// for(let i=0; i < 10; i++){
for(let i=0; i < people.length; i++){
    console.log('Name : '+people[i]);
}

// while loop
let i = 0;
// while(i < 10){
while(i < people.length){
    console.log('People - '+people[i]);
    i++;
}

// --------------------------
let numbers = [34,546,65,1,45,6,645,8,90,11];

for(let num of numbers){
    console.log(num);
}

for(let n=0; n < numbers.length; n++){
    console.log('Number '+n+': '+numbers[n]);
}

let n=0;
while(n < numbers.length){
    console.log('Num '+n+': '+numbers[n]);
    n++;
}