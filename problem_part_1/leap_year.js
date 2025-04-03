// lear year (normal)
function leapYear(year){
    // console.log(year);
    if(year % 4 === 0){
        return true;
    }else{
        return false;
    }
}
let result = leapYear(2024);
console.log(result);

// leap year (advance)
function leapYear2(year){
    // console.log(year);
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return true;
    }else{
        return false;
    }
}
let year1 = leapYear2(2024);
let year2 = leapYear2(2000);
let year3 = leapYear2(2041);
let year4 = leapYear2(1900);
console.log(year1, year2, year3, year4);