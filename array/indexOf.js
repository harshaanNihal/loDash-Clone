// Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons.If fromIndex is negative, it's used as the offset from the end of array.

// // ++++ARGUMENT++++
// array(Array): The array to inspect.
//   value(*): The value to search for.
// [fromIndex = 0](number): The index to search from.

function indexOf(array, value, fromIndex = 0) {
  for (let index = fromIndex; index < array.length; index++) {
    if (array[index] == value) {
      return index;
    }
  }
  return -1;
}
// +++RETURN+++
// (number): Returns the index of the matched value, else -1.


// +++EXAMPLE+++
// indexOf([1, 2, 1, 2], 2);
// => 1

// Search from the `fromIndex`.
// indexOf([1, 2, 1, 2], 2, 2);
// => 3

