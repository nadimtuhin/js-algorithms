<div align="center">

# js-algorithms

![js-algorithms, classic sorting algorithms in JavaScript with Jest tests](https://raw.githubusercontent.com/nadimtuhin/js-algorithms/master/docs/images/hero.svg)

**Read the algorithm. Run the test.** Small files, one idea each.

`JavaScript` [`MIT`](LICENSE) `Node 14+`

</div>

<br>

A learning and reference set of classic sorting algorithms, each with a Jest test suite. Not a production library.

<br>

![Get started](https://raw.githubusercontent.com/nadimtuhin/js-algorithms/master/docs/images/h-start.svg)

**1. Get the code and install:**

```bash
git clone https://github.com/nadimtuhin/js-algorithms.git
cd js-algorithms
yarn install
```

**2. Run the tests once:**

```bash
CI=true yarn test
```

You'll see 3 suites pass and `mergeSort.spec.js` fail. Merge sort is a stub left for you to write (see [What it is](#what-it-is)).

Plain `yarn test` stays open in watch mode and reruns when you save a file. Open `src/sort/bubbleSort.js` and read it next to `bubbleSort.spec.js`.

<br>

![Add your own](https://raw.githubusercontent.com/nadimtuhin/js-algorithms/master/docs/images/h-add.svg)

**One file, one test file.** The runner picks up any `*.spec.js`. The steps and an example are under [Adding an algorithm](#adding-an-algorithm).

<br>

![For developers](https://raw.githubusercontent.com/nadimtuhin/js-algorithms/master/docs/images/h-dev.svg)

Everything below is reference. You don't need it to get started.

[What it is](#what-it-is) · [Requirements](#requirements) · [Usage](#usage) · [Adding an algorithm](#adding-an-algorithm) · [Layout](#directory-layout) · [CI](#ci) · [Contributing](#contributing)

JavaScript implementations of classic sorting algorithms, each with a corresponding Jest test suite.

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
