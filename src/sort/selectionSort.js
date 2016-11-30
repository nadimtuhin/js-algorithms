function selectionSort(collection) {
    let jj = collection.length;
    let result = collection.slice();

    for (let ii = 0; ii < jj; ii++) {
        let lowest = ii;

        for (let kk = lowest; kk < jj; kk++) {
            if (result[lowest] > result[kk + 1]) {
                lowest = kk + 1;
            }
        }

        let small = result[lowest];
        let large = result[ii];

        result[ii] = small;
        result[lowest] = large;

    }

    return result;
}

module.exports = selectionSort;