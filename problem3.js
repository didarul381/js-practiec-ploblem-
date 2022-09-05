function oilPrice(dgel,pettrol,octen){
    const dgelPrice=114;
    const pettrolPrice=130;
    const octenPrice=135;
    
    if(typeof dgel !=='number' || typeof pettrol !=='number' || typeof octen !=='number'){
        return 'please enter number';
      }

    const degelRequired=dgel*dgelPrice;
    const pettrolRequired=pettrol*pettrolPrice;
    const octenRequired=octen*octenPrice;

    totalRequrid=degelRequired + pettrolRequired + octenRequired;
      return totalRequrid;
}

const totalCost =oilPrice(30,20,10);
console.log(totalCost);

