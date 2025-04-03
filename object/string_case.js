// # case (uppercase, lowercase)
// # trim (whitespace)

let school = "Motijheel Gov't Boys High School";

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());
console.log('--------------');

let subject = "Chemistry";
let book = 'chemistry';

// if(subject === book){     // npt matched
if(subject.toLowerCase() === book.toLowerCase()){
    console.log('Subject and Book are same.');
}else{
    console.log('Both are different.');
}
console.log('-----------------');

let apple = '  brand  ';
let samsung = '  brand';
let oppo = 'brand ';

// if(apple === samsung){
// if(apple.trim() === samsung.trim()){
if(oppo.trim() === samsung.trim()){
    console.log('Both are brand!!');
}else{
    console.log('Not brand!!');
}