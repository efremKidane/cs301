const prompt = require('prompt-sync')();
let status = prompt("enter persons status:");
let numBooKept = prompt("enter number of book kept");

numBooKept = parseInt(numBooKept);
if (status === "student") {
    if (numBooKept === 0) {
        console.log("6 weeks");
    }
    else if (numBooKept <= 3) {
        console.log("4 weeks")
    }
    else {
        console.log("2 weeks");
    }
}
else if (status === "faculty") {
    if (numBooKept === 0) {
        console.log("16 weeks");
    }
    else if (numBooKept <= 3) {
        console.log("12 weeks")
    }
    else {
        console.log("8 weeks");
    }
}
else {
    if (numBooKept === 0) {
        console.log("4 weeks");
    }
    else if (numBooKept <= 3) {
        console.log("3 weeks")
    }
    else {
        console.log("2 weeks");
    }
}