// Flattens array a single level deep.

// ++++ARGUMENT++++
// array(Array): The array to flatten.

function flatten(array) {
  return array.reduce((acc, v) => acc.concat(v), []);
}
// +++RETURN+++
// (Array): Returns the new flattened array.


// +++EXAMPLE+++
// flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
