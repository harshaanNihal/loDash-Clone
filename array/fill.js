//Fills elements of array with value from start up to, but not including, end.
// // ++++ARGUMENT++++
// array(Array): The array to fill.
// value(*): The value to fill array with.
// [start = 0](number): The start position.
// [end = array.length](number): The end position.

export default function fill(arr, value, start = 0, end = arr.length) {
  arr = arr.reduce((acc, v, i) => {
    if (i >= start && i < end) {
      acc.push(value);
    } else acc.push(v);
    return acc;
  }, [])
  return arr;
}
// +++RETURN+++
// (Array): Returns array.

// +++EXAMPLE+++
// fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
// var array = [1,2,3]
// fill(array, 'a');
// console.log(array);
// => ['a', 'a', 'a']