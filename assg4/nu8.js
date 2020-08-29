const prompt=require('prompt-sync')();

const ans = 38;
let count=0;
let y=0;
while(y!==ans){
    let g=prompt("guess the number:");
     y=parseInt(g);
    count++;
   
}

console.log("you find on your"+" "+count+" "+"attempt");