function totalMarket(shirt, pant, shoe){
    console.log(shirt, pant, shoe);
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 700;

    const shirtTotal = shirtPrice * shirt;
    const pantTotal = pantPrice * pant;
    const shoeTotal = shoePrice * shoe;

    const totalCost = shirtTotal + pantTotal + shoeTotal;
    return totalCost;

}

let cost = totalMarket(1, 1, 1);
console.log('Total marketing cost is', cost +'Tk');