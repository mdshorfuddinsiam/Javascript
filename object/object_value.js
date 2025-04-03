let person = {
    name: 'siam',
    age: 27,
    profession: 'developer',
    salary: 15000,
    'pro languages': ['html', 'css', 'javascript'],
}

person.name = 'Pushpa';
person.salary = 500000;
person['profession'] = 'Full Stack Developer';
person['pro languages'] = ['javascript', 'php'];

console.log(person);


// // let keyName = person.age = 19;
// let keyName = person.age;
// console.log(keyName);
// // person.keyName = 19;        // test this
// person[keyName] = 19;
// console.log(person);

let keyName = 'age';
console.log(person[keyName]); 
person[keyName] = 19; 
console.log(person);