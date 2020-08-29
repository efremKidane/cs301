let prompt=require('prompt-sync')();
let age=prompt("please enter age:");
let maxheartRate=parseFloat(220-age);
let fastest=maxheartRate*(85/100);
let slowest=maxheartRate*(65/100);
console.log("the fastest rates necessary to strengthen is "+" "+fastest+" "+"and the slowest rates necessary to strengthen "+" "+slowest);