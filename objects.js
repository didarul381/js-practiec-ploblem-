const phones=[
    {name:'samsung',camera:'12',storage:'120gb',price:'30000'},
    {name:'samsung1',camera:'12',storage:'120gb',price:'35000'},
    {name:'samsung2',camera:'12',storage:'120gb',price:'40000'},

];
function cheapestPhone(phones){
     let cheapest=phones[0];
    for(let i=0;i<phones.length;i++){
        const phone=phones[i];
        if(phone.price<cheapest.price){
            cheapest=phone;
        }
    }
    return cheapest;
}
const mySelection=cheapestPhone(phones);
console.log(mySelection);