let prompt=require('prompt-sync')();
let distanceMeters= prompt("please enter distance in meters:");
let distanceMile= parseFloat(distanceMeters*0.00062137);
console.log("distanece in miles:"+" "+ distanceMile);