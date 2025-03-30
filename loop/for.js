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

// Even
for(let i=1; i<=20; i++){
    if(i % 2 === 0){
        console.log('Even number : ' + i);
    }
}

// Even
for(let i=1; i<=20; i++){
    // if(i % 2 === 1){
    if(i % 2 !== 0){
        console.log('Odd number : ' + i);
    }
}

// give me the list numbers between 1 to 30 divisible by 5
for(let i=1; i<=30; i++){
    if(i % 5 === 0){
        console.log('Divisible (5) : ' + i);
    }
}

// give me the list numbers between 1 to 30 divisible by 3
for(let i=1; i<=30; i++){
    if(i % 3 === 0){
        console.log('Divisible (3) : ' + i);
    }
}

// give me the list numbers between 1 to 30 divisible by 3 & 5
for(let i=1; i<=30; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log('Divisible (3 & 5) : ' + i);
    }
}

// give me the list numbers between 1 to 30 divisible by 3 || 5
for(let i=1; i<=30; i++){
    if(i%3 === 0 || i%5 === 0){
        console.log('Divisible (3 or 5) : ' + i);
    }
}

// give me the sum of from numbers 1 to 20 that are divisible by 3 
let total = 0;
for(let i=1; i<=20; i++){
    if(i % 3 === 0){
        total += i;
        console.log('Total : ' + total);
    }
}
console.log('Total Sum : ' + total);
