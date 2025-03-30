let i = 0;
for(i; i < 5; i++){
    console.log(i);
}

// Print 1-10
for(let i = 1; i <= 10; i++){
    console.log('print : '+i);
}

// Even 
for(let i = 0; i <= 10; i+=2){
    if(i === 0){
        continue;
    }
    console.log('Even : ' + i);
}

// Odd 
for(let i = 1; i <= 10; i+=2){
    console.log('Odd : ' + i);
}

// Sum 1-10
let sum = 0
for(let i=1; i<=10; i++){
    sum = sum + i;
    console.log('Sumation : ' + sum);
}
console.log('Result (sum) : ' + sum);

// decrement
// for(let i=10; i>=0; i--){
for(let i=20; i>=11; i--){
    console.log('Decrement : '+i);
}