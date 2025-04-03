const person = ['siam', 'kalam', 'salam', 'siam', 'malam', 'kalam', 'balam'];
const numbers = [10,20,30,77,10,5,99, 77,5];

function noDuplicate(numbers){
    // console.log(numbers);
    let uniqeData = [];
    for(const num of numbers){
        if(uniqeData.includes(num) === false){
            uniqeData.push(num);
        }
    }
    return uniqeData;
}
// let output = noDuplicate(numbers);
let output = noDuplicate(person);
console.log(output);
