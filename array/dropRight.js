// Creates a slice of array with n elements dropped from the end.
// ++++ARGUMENT++++
// array(Array): The array to query.
// [n = 1](number): The number of elements to drop.

// with slice
export default function dropRight(array, n = 1) {
  return (array.slice(0, -n) || [])
}
// +++RETURN+++
// (Array): Returns the slice of array.


// +++EXAMPLE+++
// dropRight([1, 2, 3], 2);
// => [1]

// dropRight([1, 2, 3], 5);
// => []
