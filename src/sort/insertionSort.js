function insertionSort(collection) {
    const result = collection.slice();
    const total = collection.length;

    for (let indexToSort = 1; indexToSort < total; indexToSort++) {
        for (let ii = indexToSort; ii > 0; ii--) {
            if(result[ii] < result[ii - 1]) {
                const small = result[ii];
                const large = result[ii-1];

                result[ii-1] = small;
                result[ii] = large;
            }
        }
    }

    return result;
}


module.exports = insertionSort;