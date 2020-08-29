const prompt = require('prompt-sync')();
let num = prompt("enter number:");
if (parseInt(num) % 2 === 0) {
    console.log("number is Even");
}
else {
    console.log("number is odd");
}