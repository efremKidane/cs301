const prompt=require('prompt-sync')();

function farhToCels(n) {
    let output;
  return  output=(n-32)*5/9;
    
}
let n=parseFloat(prompt("enter the temprature in fahrnait:"));
console.log(farhToCels(n));