const names=['sakib','abul','sakib','dabul','abul'];

function dublicate(names){
    const empty=[];
    for(let i=0;i<names.length;i++){
       
        const name=names[i];
        if(empty.includes(name)==false){
            empty.push(name);
           
        }
        
    }
    return empty;
}

 const uniqName=dublicate(names);
 console.log(uniqName);