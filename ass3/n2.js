const prompt=require('prompt-sync')();
let fiNum=prompt("first number:");
let secNum=prompt("second number");
let differ=parseInt(secNum-fiNum);

  differ=Math.abs(differ);

  console.log(differ);
