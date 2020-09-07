const prompt = require('prompt-sync')();

let str1 = prompt("please enter the first string: ");
let str2 = prompt("please enter the second string: ");

function prefix(word1, word2) {
    let result = "";
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] === word2[i]) {
            result += word2[i];
        }
        else {
            break;
        }
    }
    return result;
}
console.log(prefix(str1, str2));