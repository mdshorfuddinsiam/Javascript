function evenNumbers(numbers){
    let even_numbers = [];
    for(let number of numbers){
        if(number % 2 === 0){
            even_numbers.push(number);
        }
    }
    // return even_numbers;
    let sum = 0;
    if(even_numbers.length > 0){
        for(let num of even_numbers){
            sum = sum + num;
        }
        return sum;
    }else{
        return sum;
    }
}
let numbers = [4,5,6,7];
// let numbers = [3,5,7,9];
console.log(evenNumbers(numbers));

