function tiketPrice(ticketquan){
    const first100Rate=100;
    const first200Rate=90;
    const resTecket=70;
    if(ticketquan<=100){
        const price=ticketquan*first100Rate;
        return price;
    }
    else if(ticketquan<=200){
        const first100Price=100 * first100Rate;
        const resticketQuantity= ticketquan-100;
        const resttiketprice=resticketQuantity * first200Rate;
        const toalprice=first100Price + resttiketprice;
        return toalprice;

}else{
    const first100Price=100 * first100Rate;
    const sec100Price=100 * first200Rate;
    const resticketQuantity= ticketquan-200;
    const resttiketprice=resticketQuantity*resTecket;
    const toalprices=first100Price+sec100Price+resttiketprice;
    return toalprices;



}
}

const totalCost=tiketPrice(220);
console.log(totalCost);