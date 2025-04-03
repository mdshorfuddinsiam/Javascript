const computer = {
    brand : 'Asus',
    price : 40000,
    hdd : '512 gb',
    processor : 'intel',
    monitor : 'hp'
}

console.log(computer);

// key (object)
// let keys = Object.keys('computer');      // error (but test)
let keys = Object.keys(computer);
console.log(keys);

// value (object)
let values = Object.values(computer);
console.log(values);