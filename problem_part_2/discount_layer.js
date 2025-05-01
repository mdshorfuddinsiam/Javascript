/**
 * first 100: ---> 100
 * 101 to 200: --> 90
 * above 200: ---> 70
 */

function layeredDiscountTotal(qty){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(qty <= 100){
        const total = qty * 100;
        return total;
    }
    else if(qty <= 200){
        const first100Total = first100Price * 100;
        const remainQty = qty - 100;
        const second100Total = second100Price * remainQty;
        const total = first100Total + second100Total;
        return total;
    }
    else{
        const first100Total = first100Price * 100;
        const second100Total = second100Price * 100;
        const remainQty = qty - 200;
        const above200Total = above200Price * remainQty;
        const total = first100Total + second100Total + above200Total;
        return total;
    }
}

let totalPrice = layeredDiscountTotal(250);
console.log('Total price :', totalPrice);