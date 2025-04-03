/**
 * for given string tell me whether it has even number of characters or not
 */

function evenSizedString(str){
    let length = str.length;
    // console.log(length);
    if(length % 2 === 0){
        console.log('Even string');
        return true;
    }else{
        console.log('Odd string');
        return false;
    }

}
console.log(evenSizedString('Dhaka'));
console.log(evenSizedString('Bogura'));

// Double or Triple
function doubleOrTriple(num, isDouble){
    if(isDouble === true){
        let double = num * 2;
        return double;
    }else{
        let triple = num * 3;
        return triple;
    }
}
console.log(doubleOrTriple(12, true));
console.log(doubleOrTriple(5, false));

// number of elements
function numberOfElements(numbers){
    return numbers.length;
}
let numbers = [4,5,6,7,23,6,75];
console.log('Elements : ', numberOfElements(numbers));

// number of properties
// function numberOfProperties(){

// }