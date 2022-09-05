//problem1
function radianToDegree(radian){
        
      if(typeof radian !=='number'){
        return 'please enter a number';
      }
      let degree=radian*57.2958;
      return parseFloat(degree.toFixed(2));

}
const degreeResut=radianToDegree(199);
console.log(degreeResut) ;
