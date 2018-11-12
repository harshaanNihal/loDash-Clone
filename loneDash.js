// Creates a slice of array from start up to, but not including, end.

// Note: This method is used instead of Array#slice to ensure dense arrays are returned.

// ++++ARGUMENT++++
// array(Array): The array to slice.
// [start = 0](number): The start position.
// [end = array.length](number): The end position.

function slice(array, start = 0, end = array.length) {
  return array.slice(start, end);
}
// +++RETURN+++
// (Array): Returns the slice of array.


// +++EXAMPLE+++


//========================================================================
// Gets all but the first element of array.

// ++++ARGUMENT++++
// array(Array): The array to query.

function tail(array) {
  var [a, ...b] = [array];
  return b; 
}
// +++RETURN+++
// (Array): Returns the slice of array.

// +++EXAMPLE+++
// tail([1, 2, 3]);
// => [2, 3]


//========================================================================
// ++++ARGUMENT++++

function chunk(array, size = 1) {

}
// +++RETURN+++


// +++EXAMPLE+++


//========================================================================