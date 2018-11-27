// Recursively flattens array.

// ++++ARGUMENT++++
// array(Array): The array to flatten.

function flattenDeep(array) {
  return (Array.isArray(array)) ? (array.reduce((a, b) => a.concat(flattenDeep(b)), [])) : array;
}
// +++RETURN+++
// (Array): Returns the new flattened array.


// +++EXAMPLE+++
// flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
