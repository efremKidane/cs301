var list = [17, 8, 9, 5, 20];

function rotateLeft(arr) {
    let temp = [];

    temp[arr.length - 1] = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        temp[i] = arr[i + 1];
    }
    return temp;
}
console.log(rotateLeft(list));