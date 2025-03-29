// var price = 5000;
// var price = 4000;

// if(price >= 5000){
//     // 10% discount
//     var discount = price * 10 / 100;
//     payAmount = price - discount;
//     console.log(payAmount);
// }
// else if(price >= 3500){
//     // 10% discount
//     var discount = price * 5 / 100;
//     payAmount = price - discount;
//     console.log(payAmount);
// }
// else{
//     console.log(payAmount);
// }


// resturant bill
// var age = 22;
var age = 555;
var amount = 7000;

if(age <= 10){
    console.log('Free for children');
}
else if(age >= 60){
    // 50% discount
    var discount = amount * 50 / 100;
    var payAmount = amount - discount;
    console.log('Pay Amount (old): ' + payAmount);
}
else if(age >= 50){
    // 25% discount
    var discount = amount * 25 / 100;
    var payAmount = amount - discount;
    console.log('Pay Amount (semi-old) : ' + payAmount);
}
else{
    console.log('Pay Amount : ' + amount);
}