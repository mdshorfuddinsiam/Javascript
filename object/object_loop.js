const mobile = {
    brand: 'samsung',
    price: 14300,
    color: 'skyblue',
    camera: '12mp',
    isNew: true,
}

console.log(mobile);

// for of loop (array)
// for in loop (object)
for (const item in mobile){
    console.log(mobile[item]);
}

// keys (object)
const keys = Object.keys(mobile);
console.log('Keys : ', keys);

// key wise value 
for(const key of keys){
    // console.log(key);
    console.log(key +' - '+ mobile[key]);
}

