function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (right[rightIndex] < left[leftIndex]) {
            result.push(right[rightIndex]);
            rightIndex++;
        } else {
            result.push(left[leftIndex]);
            leftIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

function mergeSort(collection) {
    if (collection.length <= 1) {
        return collection.slice();
    }

    const middle = Math.floor(collection.length / 2);
    const left = mergeSort(collection.slice(0, middle));
    const right = mergeSort(collection.slice(middle));

    return merge(left, right);
}

module.exports = mergeSort;
