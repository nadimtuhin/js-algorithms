function bubbleSort(collection) {
    let jj = collection.length;
    let result = collection.slice();

    for (; jj > 1; jj--) {
        for (let ii = 0; ii < jj; ii++) {
            if (result[ii] > result[ii + 1]) {
                let small = result[ii + 1];
                let large = result[ii];

                result[ii] = small;
                result[ii + 1] = large;
            }
        }
    }

    return result;
}

module.exports = bubbleSort;