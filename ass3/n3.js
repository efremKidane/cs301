const prompt = require('prompt-sync')();
let weather = prompt("enter the weather :");
let shoes;
if (weather === "hot") {
    shoes = "sandals";

} else if (weather === "rain") {
    shoes = "galoshes";

} else if (weather === "snow") {
    shoes = "boots";

}
else {
    shoes = "shoes";
}

console.log("wear" + " " + shoes);

