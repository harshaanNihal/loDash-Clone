// Converts all elements in array into a string separated by separator.
// ++++ARGUMENT++++
// array(Array): The array to convert.
// [separator = ','](string): The element separator.

function join(array, str) {
  return array.join(str)
}
// +++RETURN+++
// (string): Returns the joined string.


// +++EXAMPLE+++
// join(['a', 'b', 'c'], '~');
// => 'a~b~c'

