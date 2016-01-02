# recursive-max

Returns the largest number from a multidimensional array or object.

```
npm install recursive-max
```

[![Build Status](https://travis-ci.org/tyxla/recursive-max.svg)](https://travis-ci.org/tyxla/recursive-max)

## About

An easy to use solution for finding the largest number from a multidimensional array or object.

Arrays and objects are traversed recursively, number values are compared, the rest are skipped.

Returns `false` on failure.

## Syntax

``` js
recursiveMax(objOrArray, max)
```

#### objOrArray

Object or array to fetch the maximum number from.

#### max

Optional. Use it to specify a temporary maximum value.

## Usage

Call `recursiveMax()` by passing the array or object you wish to find the largest number from. If you specify `max`, it will be the maximum possible result.

``` js
var input = [0, 11, [4, 15]];
var max = recursiveMax(input);

console.log(max); // 15
```

## License

MIT