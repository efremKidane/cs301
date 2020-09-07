let list = [12, 4, 8, 15, 17, 5, 20, 11];

function getMiddle(arr) {
    let middle;
    let middleIndex;
    if ((arr.length) % 2 === 0) {
        middleIndex = Math.floor((arr.length) / 2);
        middle = (arr[middleIndex] + arr[middleIndex - 1]) / 2;
    }
    else {
        middleIndex = Math.floor((arr.length) / 2);
        middle = arr[middleIndex];
    }
    return middle;
}
console.log(getMiddle(list));