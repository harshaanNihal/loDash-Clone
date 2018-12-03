// Gets all but the last element of array.

// ++++ARGUMENT++++
// array(Array): The array to query.

function initial(array) {
  array.splice(-1, 1);
  return array;
}
// +++RETURN+++
// (Array): Returns the slice of array.

// +++EXAMPLE+++
// initial([1, 2, 3]);
// => [1, 2]

