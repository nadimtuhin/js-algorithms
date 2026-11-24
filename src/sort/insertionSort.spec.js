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
