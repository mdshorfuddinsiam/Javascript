let person = {
    name: 'siam',
    age: 27,
    profession: 'developer',
    salary: 15000,
    'pro languages': ['html', 'css', 'javascript'],
}

// dot notation ---> dot diye property access kora hoy
console.log(person);
console.log(person.profession);
let income = person.salary;
console.log(income);

// bracket notation ---> third bracket diye property access kora hoy
console.log(person['name']);
console.log(person['age']);
console.log('-------------');

// // -------- problem (dot notation) -------
// console.log(person.'pro languages');    // error
// console.log(person.pro languages);    // error
console.log(person['pro languages']);