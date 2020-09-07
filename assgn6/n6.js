var list = [17, 8, 9, 5, 20];

function rotateRight(arr) {
    let temp = [];
    temp[0] = arr[arr.length - 1];
    for (let i = 1; i < arr.length; i++) {
        temp[i] = arr[i - 1];
    }

    return temp;
}

console.log(rotateRight(list));