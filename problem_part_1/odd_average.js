function oddAverage(numbers){
    // console.log(numbers);

    let odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
    }
    // console.log(odds);
    let sum = 0;
    for(const odd of odds){
        sum = sum + odd;
    }
    count = odds.length;
    let avg = sum / count;
    return avg;
}
let numbers = [10,20,33,5,66,44,9];
let output = oddAverage(numbers);
console.log('Odd Average : ', output);