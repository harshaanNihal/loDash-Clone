// Gets the element at index n of array.If n is negative, the nth element from the end is returned.

// ++++ARGUMENT++++
// array(Array): The array to query.
// [n = 0](number): The index of the element to return.

function nth(array, n = 0) {
  return (n < 0) ? array[array.length - (n + 1)] : array[n];
}
// +++RETURN+++
// (*): Returns the nth element of array.


// +++EXAMPLE+++
// var array = ['a', 'b', 'c', 'd'];

// nth(array, 1);
// => 'b'

// nth(array, -2);
// => 'c';
