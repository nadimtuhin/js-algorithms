const insertionSort = require('./insertionSort');

test('insertionSort should sort an ordered array', () => {
    const collection = [3, 4, 63, 2, 1, 5, 7];
    const expectedResult = [1, 2, 3, 4, 5, 7, 63];
    const result = insertionSort(collection);

    expect(result).toEqual(expectedResult);
});
