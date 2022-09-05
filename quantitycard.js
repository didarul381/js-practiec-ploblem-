const shoppindCard=[
    {price:1200,quan:2},
    {price:1000,quan:3},
    {price:1500,quan:4}
];
function totalCost(produtcs){
    let sum=0;
    for(let i=0;i<produtcs.length;i++){
        const produtc=produtcs[i];
        const total=produtc.price * produtc.quan;
        sum=sum+total;
       // console.log(produtc);
    }
    return sum;
}
const expanse=totalCost(shoppindCard);
console.log(expanse);