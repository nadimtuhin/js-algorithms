function bubbleSort(collection) {
    const result = collection.slice();
    let lastUnsortedIndex = collection.length - 1;

    for (; lastUnsortedIndex >= 1; lastUnsortedIndex--) {
        for (let ii = 0; ii <= lastUnsortedIndex; ii++) {
            if (result[ii] > result[ii + 1]) {
                const small = result[ii + 1];
                const large = result[ii];

                result[ii] = small;
                result[ii + 1] = large;
            }
        }
    }

    return result;
}

module.exports = bubbleSort;