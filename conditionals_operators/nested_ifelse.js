var money = 700;

if(money){
    if(money >= 1000){
        console.log('You will get 15% discount!!');
    }else{
        if(money >= 500){
            console.log('You will get 10% discount!!');
        }else{
            console.log('You will not get any discount!!');
        }
    }
}else{
    console.log('You can not buy anything!!');
}