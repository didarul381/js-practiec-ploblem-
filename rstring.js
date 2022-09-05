// function rString(text){
//     let rev='';
//     for(let i=text.length-1;i>=0;i--){
//         const element=text[i];
//         rev=rev + element;
//         console.log( rev,element);
//     }
//     return rev;
// }
// const myString='I am a student';
// const reserved=rString(myString);
//  console.log(reserved)

 function rString(text){
    let rev=[];
    const words=text.split(' ');
    for(let i=words.length-1;i>=0;i--){
        const element=words[i];
       rev.push(element);
        console.log( rev);
    }
    const reasult=rev.join(' ');
    return reasult;
}
const myString='I am a student';
const reserved=rString(myString);
 console.log(reserved)