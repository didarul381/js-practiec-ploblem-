function publicBusFare(people){
    
    const buscapacity=50;
    const microbusCapacity=11;
       
    if(typeof people !=='number'){
        return 'please enter a number';
      }
    
    if(people%buscapacity==0 || people==11){
            return 0
        }else{
           const restbusPassenger= people%buscapacity;//35
           if(restbusPassenger>=11){
          const   restmicroPassenger = restbusPassenger%microbusCapacity;//2
          const cost = (restmicroPassenger)*250;
          return cost;
           } else{
           const publicbusFare= restbusPassenger*250;
           return publicbusFare;
           }
           
          
        }
          
    }
    

const totalPeople=publicBusFare(88);
console.log(totalPeople);