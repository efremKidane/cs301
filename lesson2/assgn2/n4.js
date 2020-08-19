let prompt=require('prompt-sync')();
let n=prompt("please enter the total number of boxes:");
let boxesInStack=prompt("please enter number of boxes in each stack:");
let numberStack=parseFloat(n/boxesInStack);
console.log(Math.ceil(numberStack));