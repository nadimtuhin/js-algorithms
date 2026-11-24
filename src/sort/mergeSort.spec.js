const mergeSort = require('./mergeSort');

test('mergeSort should sort an unordered array', () => {
    const collection = [3, 4, 63, 2, 1, 5, 7];
    const expectedResult = [1, 2, 3, 4, 5, 7, 63];
    const result = mergeSort(collection);

    expect(result).toEqual(expectedResult);
});

test('mergeSort should return an empty array for an empty array', () => {
    expect(mergeSort([])).toEqual([]);
});

test('mergeSort should return a one element array unchanged', () => {
    expect(mergeSort([1])).toEqual([1]);
});

test('mergeSort should sort duplicates and negative numbers', () => {
    expect(mergeSort([2, -1, 2, 0, -1])).toEqual([-1, -1, 0, 2, 2]);
});

test('mergeSort should not mutate the input', () => {
    const collection = [5, 2, 3, 4, 1];
    mergeSort(collection);

    expect(collection).toEqual([5, 2, 3, 4, 1]);
});
