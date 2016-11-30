function bubbleSort(collection) {
    let unsorted = collection.length;
    let result = collection.slice();

    for (; unsorted > 1; unsorted--) {
        for (let ii = 0; ii < unsorted; ii++) {
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