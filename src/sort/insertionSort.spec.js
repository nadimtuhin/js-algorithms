const insertionSort = require('./insertionSort');

test('insertionSort should sort an unordered array', () => {
    const collection = [3, 4, 63, 2, 1, 5, 7];
    const expectedResult = [1, 2, 3, 4, 5, 7, 63];
    const result = insertionSort(collection);

    expect(result).toEqual(expectedResult);
});

test('insertionSort should make one comparison per element on sorted input', () => {
    let reads = 0;
    const collection = Array.from({ length: 100 }, (_, value) => ({
        valueOf() {
            reads++;
            return value;
        },
    }));

    insertionSort(collection);

    // each `<` comparison reads valueOf on both sides
    expect(reads).toBe(2 * (collection.length - 1));
});

test('insertionSort should handle empty and one element arrays', () => {
    expect(insertionSort([])).toEqual([]);
    expect(insertionSort([1])).toEqual([1]);
});

test('insertionSort should sort duplicates, negatives and reversed input', () => {
    expect(insertionSort([2, -1, 2, 0, -1])).toEqual([-1, -1, 0, 2, 2]);
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test('insertionSort should not mutate the input', () => {
    const collection = [5, 2, 3, 4, 1];
    insertionSort(collection);

    expect(collection).toEqual([5, 2, 3, 4, 1]);
});
