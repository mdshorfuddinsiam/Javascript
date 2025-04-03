// # concat
// # includes

let firstName = 'Shorfuddin';
let lastName = 'Siam';

console.log(firstName + lastName);
console.log(firstName +' '+ lastName);
console.log(firstName.concat(lastName));
console.log(firstName.concat().concat(lastName));
console.log(firstName.concat(' ').concat(lastName));


// includes
const fullName = 'Md. Shorfuddin Siam';

console.log(fullName);
console.log(fullName.includes('s'));
console.log(fullName.includes('S'));
console.log(fullName.includes('u'));
console.log(fullName.includes('x'));