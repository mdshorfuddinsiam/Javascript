const phones = [
    {name:'Samsung', price:21000, camera:'16mp', color:'skyblue'},
    {name:'Xoami', price:16000, camera:'12mp', color:'Black'},
    {name:'Iphone', price:120000, camera:'50mp', color:'White'},
    {name:'Oppo', price:25000, camera:'48mp', color:'White'},
    {name:'One Plus', price:40000, camera:'48mp', color:'Light Gray'}
]

// function getMinPrice(phones){
//     // console.log(phones[0].price);
//     // console.log(phones);
//     let min = phones[0];
//     for(const phone of phones){
//         if(phone.price < min.price){
//             min = phone;
//         }
//     }
//     return min;
// }


// -------- using (for in) loop ---------
function getMinPrice(phones){
    let min = phones[0];
    for(const phone in phones){
        // console.log(phone);
        // console.log(phone.price);
        // console.log(phones[phone].price);
        // console.log(min.price);
        if(phones[phone].price < min.price){
            min = phones[phone];
        }
        // console.log(min.price); 
    }
    return min;
}
// ---------------------------------------

const chipestPhone = getMinPrice(phones);
console.log('Get cheapest phone : ', chipestPhone);