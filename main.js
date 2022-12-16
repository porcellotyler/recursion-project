const mergeSort = array => {
    if (array.length <= 1) return array;

    const middle = Math.floor(array.length / 2);
    const leftSide = mergeSort(array.slice(0, middle));
    const rightSide = mergeSort(array.slice(middle));
    
    return merge(leftSide, rightSide);
};

const merge = (leftArray, rightArray) => {
    let result = [];

    while (leftArray.length > 0 && rightArray.length > 0) {
        if (leftArray[0] <= rightArray[0]) {
            result.push(leftArray.shift());
        } else {
            result.push(rightArray.shift());
        }
    }

    while (leftArray.length) result.push(leftArray.shift());
    while (rightArray.length) result.push(rightArray.shift());

    return result.concat(leftArray, rightArray);
}

console.log(mergeSort([5, 3, 9, 6]));
console.log(mergeSort([7, 2, 4, 27, 0, 94, 63, 1, 79, 121, 25]));
console.log(mergeSort([]));
