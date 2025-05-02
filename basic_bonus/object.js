hero = {
    id : 123,
    name: 'Shakib Khan',
    address: 'fdc',
    isSingle: true,
    movies: [{name:'no 1', year: 2020}, {name:'borbad', year:2025}],
    act:function(){
        console.log('Acting like Shahrukh Khan');
    },
    car: {
        brand:'tesla',
        price: 50000000,
        made:2025,
        manufacturer: {
            name:'tesla',
            ceo:'Elon Mask',
            country:'USA',
        }
    }
}

hero.act();
console.log(hero);