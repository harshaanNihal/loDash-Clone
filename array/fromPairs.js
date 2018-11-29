// The inverse of _.toPairs; this method returns an object composed from key - value pairs.
// ++++ARGUMENT++++
// pairs(Array): The key - value pairs.

function fromPairs(array) {
  return array.reduce((acc, v) => {
    acc[v[0]] = v[1];
    return acc;
  }, {})
}
// +++RETURN+++
// pairs(Array): The key - value pairs.


// +++EXAMPLE+++
// fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }
