const shoppindCard=[
    {price:1200},
    {price:1000},
    {price:1500}
];
function totalCost(produtcs){
    let sum=0;
    for(let i=0;i<produtcs.length;i++){
        const produtc=produtcs[i];
        sum=sum+produtc.price;
       // console.log(produtc);
    }
    return sum;
}
const expanse=totalCost(shoppindCard);
console.log(expanse);