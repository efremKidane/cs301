let prompt = require('prompt-sync')();
let  quarts= prompt("please enter volume in quarts:");
let litres= parseFloat(quarts*0.946352946);
console.log( litres);