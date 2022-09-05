const fbo=[0,1];
for(let i=2;i<=25;i++){
    fbo[i]=fbo[i-1]+fbo[i-2];
}
console.log(fbo);