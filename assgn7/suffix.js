const prompt = require('prompt-sync')();
let str1 = prompt("please enter the first word:");
let str2 = prompt("please enter the scond word:");

function suffix(word1, word2) {
    let result = "";
    let j = word2.length - 1;

    for (let i = word1.length - 1; i >= 0; i--) {

        if (word1[i] === word2[j]) {
            result += word2[j]

            j--;
        }
        else {
            break;
        }

    }
    result = result.split("");
    let output = result.reverse();
    output = output.join("");
    return output;
}
console.log(suffix(str1, str2));