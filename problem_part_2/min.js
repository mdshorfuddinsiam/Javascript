let values = [1200, 3400, 100, 2300, 1100];

function getMin(numbers){
    console.log(numbers); 
    let min = values[0];
    for(const num of numbers){
        if(num > min){
            min = num;
        }
    }
    return min;
}

const result = getMin(values);
console.log('Minimum value is: ', result);