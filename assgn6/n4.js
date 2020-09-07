var list = [17, 8, 9, 5, 20];

function multiply(arr, n) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        tempArr[i] = arr[i] * n;

    }
    return tempArr;
}
console.log(multiply(list, 3));