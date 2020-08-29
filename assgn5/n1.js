
const prompt=require('prompt-sync')();
function checkPrime(n){
    let i=2;
    let c=0;
    let output=false;
while (i<n) {
    if(n%i===0){
        c++;
    
    }
    i++;
    
}
if(c===0){
    output=true;
}
return output;
    
}
let n=parseInt(prompt("please enter number :"));
console.log(checkPrime(n));
