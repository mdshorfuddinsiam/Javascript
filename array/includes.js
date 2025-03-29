const ages = [];
const numbers = [40, 34, 89, 300, 12, 9, 75];

console.log(numbers);
console.log(numbers.includes('12'));
console.log(numbers.includes(12));
console.log(numbers.includes(33));

// if(numbers.includes('12')){
if(numbers.includes(12)){
    console.log('Found!!');
}else{
    console.log('Not found!!');
}
