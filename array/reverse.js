// Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.

// Note: This method mutates array and is based on Array#reverse.
// ++++ARGUMENT++++
// array(Array): The array to modify.

function reverse(array) {
  array = array.reverse();
  return array;
}
// +++RETURN+++
// (Array): Returns array.


// +++EXAMPLE+++
// var array = [1, 2, 3];

// _.reverse(array);
// => [3, 2, 1]

// console.log(array);
// => [3, 2, 1]
