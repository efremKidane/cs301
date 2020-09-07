const prompt = require('prompt-sync')();
let number = prompt("please enter number :");

const list2 = ["â€œOn the first day of Christmas, my true love gave to me", "â€œOn the second day of Christmas, my true love gave to me:", "â€œOn the third day of Christmas, my true love gave to me:", "â€œOn the fourth day of Christmas, my true love gave to me:", "â€œOn the fifth day of Christmas, my true love gave to me:", "â€œOn the sixth of Christmas, my true love gave to me:", "â€œOn the seventh day of Christmas, my true love gave to me:", "â€œOn the eighth day of Christmas, my true love gave to me:", "â€œOn the ninth of Christmas, my true love gave to me:", "â€œOn the tenth of Christmas, my true love gave to me:", "â€œOn the eleventh of Christmas, my true love gave to me:", "â€œOn the twelveth of Christmas, my true love gave to me:"]
const list = ["a partridge in a pear tree", "two turtle doves", "three French hens", "four calling bird", "five golden rings", "six geese a layin", "seven swans a swimming", "eight maids a milking", "nine ladies dancing", "ten lords a leaping", "eleven pipers piping", "twelve drummers drumming"]
while(parseInt(number)>12){
    number=prompt("please enter number again :");
}

function chrismasSong(arr, n, arr1) {
    let temp = [];
    let phrase = "";
    let j = 0;
    for (let i = n - 1; i >= 0; i--) {

        temp[j] = arr[i];
        phrase = temp.join(",");
        j++;
    }
    return arr1[n - 1] + phrase;
}
console.log(chrismasSong(list, number, list2));
