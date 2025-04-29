// maximum number ta print koro
const digits = [10, 20, 30, 70, 60, 50];

function getMax(numbers){
    // console.log(numbers);
    let max = numbers[0];
    for(var num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}
const result = getMax(digits);
console.log('Max value is', result);

