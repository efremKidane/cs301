var list = [17, 8, 9, 5, 20];
function countEvens(arr) {
    let c = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            c++;
        }
    }
    return c;
}
console.log(countEvens(list));