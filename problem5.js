
   let frind1= {name:'abul',frind:'babul'};

    let frind2=  {name:'babul',frind:'abul'};
    

function isBestFriend(obj1,obj2){

    if(typeof frind1 !=='object' || typeof frind2 !=='object'){
        return 'please enter object';
      }
     if(obj1.name==obj2.frind && obj1.frind==obj2.name){
        return true
     }else{
        return false;
     }


 }
const bestFrind=isBestFriend(frind1,frind2);
console.log(bestFrind);