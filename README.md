# js-algorithms

JavaScript implementations of classic sorting algorithms, each with a corresponding Jest test suite. Intended as a learning and reference set, not a production library.

## What it is

The `src/sort/` directory contains implementations of:

| Algorithm | File | Notes |
|---|---|---|
| Bubble sort | `bubbleSort.js` | Complete |
| Insertion sort | `insertionSort.js` | Complete |
| Selection sort | `selectionSort.js` | Complete |
| Merge sort | `mergeSort.js` | Stub, not yet implemented |

Each algorithm:

- Takes an array as input.
- Returns a new sorted array without mutating the original.
- Has a companion `*.spec.js` file with Jest tests.

## Requirements

- Node.js 14+
- Yarn (or npm)

## Installation

```bash
git clone https://github.com/nadimtuhin/js-algorithms.git
cd js-algorithms
yarn install
```

## Usage

Run tests in watch mode (default when not in CI):

```bash
yarn test
```

Run tests once (CI mode):

```bash
CI=true yarn test
```

Run the linter:

```bash
yarn lint
```

ESLint is also wired as a pre-commit hook via Husky. The ESLint configuration is in `.eslintrc`.

## Adding an algorithm

1. Create `src/<category>/<name>.js` that exports a single function.
2. Create `src/<category>/<name>.spec.js` with at least one Jest test.
3. The test runner picks up any `*.spec.js` file automatically.

Example:

```js
// src/sort/quickSort.js
function quickSort(collection) {
  // implementation
}
module.exports = quickSort;
```

```js
// src/sort/quickSort.spec.js
const quickSort = require('./quickSort');

it('sorts an unsorted array', () => {
  expect(quickSort([3, 1, 2])).toEqual([1, 2, 3]);
});

it('does not mutate the input', () => {
  const input = [3, 1, 2];
  quickSort(input);
  expect(input).toEqual([3, 1, 2]);
});
```

## Directory layout

```
js-algorithms/
├── scripts/
│   ├── eslint.sh
│   └── test.js
└── src/
    └── sort/
        ├── bubbleSort.js
        ├── bubbleSort.spec.js
        ├── insertionSort.js
        ├── insertionSort.spec.js
        ├── mergeSort.js
        ├── mergeSort.spec.js
        ├── selectionSort.js
        └── selectionSort.spec.js
```

## CI

GitHub Actions workflow at `.github/workflows/ci.yml` runs on push and pull request to `main`/`master`. It installs dependencies and runs `npm test`.

## Contributing

1. Fork the repository.
2. Create a branch (`git checkout -b feat/my-algorithm`).
3. Add the implementation and tests.
4. Ensure `CI=true yarn test` passes and `yarn lint` reports no errors.
5. Open a pull request.

See `CONTRIBUTING.md` for full guidelines and `CODE_OF_CONDUCT.md` for expected behaviour.

## License

MIT. See `LICENSE`.
