const prompt =require('prompt-sync')();
let n=prompt ("enter number :");
n=parseInt(n);
let sum=0;
for(let i=1;i<=n;i=i+2){
     sum+=i;
}
console.log(sum);s