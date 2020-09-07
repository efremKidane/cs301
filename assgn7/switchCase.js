const prompt = require('prompt-sync')();
let str = prompt("please enter the string to be switched:");

function switchCase(s) {
    let swichedString = "";
    for (let i = 0; i < s.length; i++) {
        let x;
        if (s[i] === s[i].toUpperCase()) {

            x = s[i].toLowerCase();
            swichedString += x;
        }
        else if (s[i] === s[i].toLowerCase()) {
            x = s[i].toUpperCase();

            swichedString += x;

        }

    }
    return swichedString;
}

console.log(switchCase(str));