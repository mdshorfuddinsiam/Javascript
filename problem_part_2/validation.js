function add(num1, num2){
    return num1 + num2;
}
const res = add(5, '7');
console.log(res); 
console.log('--------------'); 

function multiplication(num1, num2){
    console.log(typeof(num1));
    console.log(typeof(num2));
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        return 'Please provide a number!!';
    }
    return num1 * num2;
}
// const result = multiplication(5, 7);
// const result = multiplication(5, '7');
const result = multiplication(5, 'seven');
console.log(result);
console.log('-------------');

function fullName(firstName, lastName){
    if(typeof(firstName) !== 'string'){
        console.log('First name should be string!!');
    }
    else if(typeof(lastName) !== 'string'){
        console.log('Last name should be string!!');
    }else{
        return firstName +' '+ lastName;
    }
}
const name = fullName(20, 10);
// const name = fullName('Saimon', 10);
// const name = fullName('Saimon', 'Kabir');
console.log(name);
console.log('----------------');

function checkObject(data){
    // console.log(data);
    if(typeof(data) !== 'object'){
        console.log('Please insert object type data!!');
    }else{
        // return data;
        return data.price;
    }
}
const obj = checkObject({name:'Siam', age:26, gender:'male'});
// const obj = checkObject(10);
console.log(obj);
console.log('--------------------');


function checkArray(arr){
    // console.log(arr);
    // console.log(Array.isArray(arr));
    if(Array.isArray(arr) === false){
        console.log('Please insert an array!!');
    }else{
        return arr;
    }
}
const person = ['Siam', 26, 'male'];
const arr = checkArray(person);
// const arr = checkArray(10);
// const arr = checkArray();
console.log(arr);

