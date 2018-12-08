// =This method is like _.indexOf except that it iterates over elements of array from right to left.



// ++++ARGUMENT++++
// array(Array): The array to inspect.
//   value(*): The value to search for.
// [fromIndex = array.length - 1](number): The index to search from.

function lastIndexOf(array, value, fromIndex = 1) {
  let newArray = array.slice(fromIndex);
  return newArray.lastIndexOf(value);
}
// +++RETURN+++
// (number): Returns the index of the matched value, else -1.


// +++EXAMPLE+++
// lastIndexOf([1, 2, 1, 2], 2);
// => 3

// Search from the `fromIndex`.
// lastIndexOf([1, 2, 1, 2], 2, 2)
// => 1

