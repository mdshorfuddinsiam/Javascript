// var salary = 3000;
// var salary = 4500;
var salary = 2000;
var height = 68;
// var isBcs = true;
var isBcs = false;
var hasCar = true;

// if(salary > 3000){
// if(salary >= 3000 && height >= 68){
// if(salary >= 3000 || height >= 70){
// if(salary >= 3000 || height >= 70 || isBcs){
// if(salary >= 3000 && height >= 70 && isBcs == true){
// if((salary >= 3000 || isBcs) && hasCar){
if((salary >= 3000 && isBcs) || hasCar){
    console.log('You can marry!!');
}else{
    console.log('Not eligible for marry!!')
}