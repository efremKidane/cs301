const prompt = require('prompt-sync')();
let fullName = prompt("please enter person's full name :");

function extractGivenName(name) {

    let fullname = name.split(",");
    let givenName = fullname[1];
    return givenName;
}

console.log(extractGivenName(fullName));