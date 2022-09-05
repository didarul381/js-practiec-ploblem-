function maxIndex(n){
      let largest=n[0];
    for(let i=0; i<n.length; i++){
      const index=i;
      const element=n[index];
      if(element<largest){
        largest=element;
      }
    }
    return largest;
}

const heights=[167,190,120,3000];
const tallest=maxIndex(heights);
console.log(tallest);