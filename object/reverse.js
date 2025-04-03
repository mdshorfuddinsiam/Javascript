let profession = "I am a web developer.";

console.log(profession);

// for of
let newProfession = '';
for(const pro of profession){
    newProfession = pro + newProfession;
}
console.log(newProfession);

// for (increment)
let newString = '';
for(let i=0; i < profession.length; i++){
    newString = profession[i] + newString;
}
console.log(newString);

// for (decrement)
let newStr = '';
for(let i = profession.length - 1; i >= 0; i--){
    newStr = newStr + profession[i];
}
console.log(newStr);

// shortcut
const reversed = profession.split('').reverse().join('');
console.log(reversed);