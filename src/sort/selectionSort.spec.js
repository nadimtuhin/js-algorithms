const selectionSort = require('./selectionSort');

test('selectionSort should sort an unordered array', () => {
    const collection = [3, 4, 63, 2, 1, 5, 7];
    const expectedResult = [1, 2, 3, 4, 5, 7, 63];
    const result = selectionSort(collection);

    expect(result).toEqual(expectedResult);
});

test('selectionSort should handle empty and one element arrays', () => {
    expect(selectionSort([])).toEqual([]);
    expect(selectionSort([1])).toEqual([1]);
});

test('selectionSort should sort duplicates, negatives and reversed input', () => {
    expect(selectionSort([2, -1, 2, 0, -1])).toEqual([-1, -1, 0, 2, 2]);
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test('selectionSort should not mutate the input', () => {
    const collection = [5, 2, 3, 4, 1];
    selectionSort(collection);

    expect(collection).toEqual([5, 2, 3, 4, 1]);
});
