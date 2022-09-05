function isJavaScriptFile(index){

    if(typeof index !=='string'){
        return 'please enter a string';
      }
    if(index.endsWith(".js")){
        return true;
    }else{
        return false;
    }
}


const result =isJavaScriptFile('index.js');
console.log(result);