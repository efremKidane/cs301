let prompt = require('prompt-sync')();
let beginnigOdometerReading=prompt("please enter the beginnig odometer reading:");
let endOdometerReading=prompt("please enter the end odo meter reading:");
let totalgallonGasoline=prompt("please enter the total gallon gasoline used:");
let milagePerGallon=parseFloat((endOdometerReading-beginnigOdometerReading)/totalgallonGasoline);
console.log(milagePerGallon);
