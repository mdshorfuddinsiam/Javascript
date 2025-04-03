// # slice  -> (index = 0) & [slice(2, 5) = index[2] - index[4] obdhi slice krbe]
// # split  -> Convert (string to array)
// # join   -> 

let name = 'siam';
console.log(name);

// slice
let fullName = 'Shorfuddin';
console.log(fullName);
console.log(fullName.slice(4));     // index[4] theke shesh obdhi
console.log(fullName.slice(4, 6));

// split 
let profession = "I am a software developer";
let people = "akib,jarif,narif,farik,tarik";
console.log(profession);
console.log(profession.split());
console.log(profession.split(''));
console.log(profession.split(' '));
console.log(profession.split('a'));
console.log(people.split(','));

// join
let friends = ['siam', 'kiyam', 'liam', 'diam', 'khiyam'];
console.log(friends);
console.log(friends.join(','));
console.log(friends.join('-'));
console.log(friends.join('|'));
console.log(friends.join(' '));
