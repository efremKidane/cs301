const prompt = require('prompt-sync')();
let cost = prompt("enter the cost :");
let doPay;
if (cost <= 49999.99) {
    doPay = 5 / 100 * cost;

}
else if (cost <= 99999.99) {
    doPay = 2000 + 10 / 100 * (cost - 50000);
}
else if (cost <= 199999.99) {
    doPay = 7500 + 20 / 100 * (cost - 100000);
}
else {
    doPay = 27500 + 25 / 100 * (cost - 200000);
}
console.log(doPay);