// Creates an array of elements split into groups the length of size.If array can't be split evenly, the final chunk will be the remaining elements.

// ++++ARGUMENT++++
// array(Array): The array to process.
// [size = 1](number): The length of each chunk


export default function chunk(array, size = 1) {
  let newArr = [];
  array.reduce((acc, v, i, a) => {
    acc.push(v);
    if ((i + 1) % size == 0 || (i + 1) >= a.length) {
      newArr.push(acc);
      acc = [];
    }
    return acc;
  }, [])
  return newArr;
}
// +++RETURN+++
// (Array): Returns the new array of chunks.

// +++EXAMPLE+++
// chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

// chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]