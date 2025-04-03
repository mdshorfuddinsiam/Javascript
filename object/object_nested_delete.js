let collage = {
    name : 'vnc',
    class : ['11', '12'],
    events : ['science fair', 'bijoy dibos', '21 Feb'],
    unique : {
        color : 'blue',
        result : {
            gpa : 5,
            merit : 'top',
        }
    }
}

console.log(collage);
console.log(collage.name);
console.log(collage.class);
console.log(collage.events);
console.log(collage.unique);
console.log(collage.unique.color);
console.log(collage.unique.result.merit);

collage.unique.result.merit = 'No. 1';
console.log(collage['unique'].result.merit);
// console.log(collage);
collage['events'] = '16 december';
console.log(collage.events);
collage.unique['color'] = 'Sky Blue';
console.log(collage);

// delete property
delete collage.class;
console.log(collage);
