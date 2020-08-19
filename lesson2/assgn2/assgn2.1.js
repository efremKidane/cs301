let prompt = require('prompt-sync')();
let radius= prompt( "please enter the radius:");
let height= prompt(" pleae enter the height:");
let volume=parseFloat(height*Math.PI*radius*radius);
console.log(volume);