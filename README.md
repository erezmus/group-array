# Group number elements

## Summary

This package groups the element of an array into sub arrays of a fixed size.

The code should run on Node v10+ without any dependencies.


## Example use

In the terminal, run:

```sh
node -e "console.log(require('./index.js').groupArrayElements([1, 2, 3, 4, 5], 2));"
```

The output should be:

```sh
[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
```

## Tests

```
node test.js
```

## Further notes

The package does some sanity checks on the input, throwing errors if the array argument is not an array
or the size argument is not is below 1.

For other cases, like the array being empty or the the size being greater than the length of the array, then
the function is more forgiving in order to provide some kind of graceful degradation.
