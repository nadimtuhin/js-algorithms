const selectionSort = require('./selectionSort');

it('selectionSort should sort an ordered array', () => {
    const collection = [3, 4, 63, 2, 1, 5, 7];
    const expectedResult = [1, 2, 3, 4, 5, 7, 63];
    const result = selectionSort(collection);

    expect(result).toEqual(expectedResult);
});
