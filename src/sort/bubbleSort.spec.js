const bubbleSort = require('./bubbleSort');

test('bubbleSort should sort an unordered array', () => {
    const collection = [3, 4, 63, 2, 1, 5, 7];
    const expectedResult = [1, 2, 3, 4, 5, 7, 63];
    const result = bubbleSort(collection);

    expect(result).toEqual(expectedResult);
});

test('bubbleSort should handle empty and one element arrays', () => {
    expect(bubbleSort([])).toEqual([]);
    expect(bubbleSort([1])).toEqual([1]);
});

test('bubbleSort should sort duplicates, negatives and reversed input', () => {
    expect(bubbleSort([2, -1, 2, 0, -1])).toEqual([-1, -1, 0, 2, 2]);
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test('bubbleSort should not mutate the input', () => {
    const collection = [5, 2, 3, 4, 1];
    bubbleSort(collection);

    expect(collection).toEqual([5, 2, 3, 4, 1]);
});
