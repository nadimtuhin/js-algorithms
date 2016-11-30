function selectionSort(collection) {
    const total = collection.length;
    const result = collection.slice();

    for (let indexToSort = 0; indexToSort < total; indexToSort++) {
        let lowestIndex = indexToSort;

        for (let ii = lowestIndex + 1; ii < total; ii++) {
            if (result[lowestIndex] > result[ii]) {
                lowestIndex = ii;
            }
        }

        const small = result[lowestIndex];
        const large = result[indexToSort];

        result[indexToSort] = small;
        result[lowestIndex] = large;
    }

    return result;
}

module.exports = selectionSort;