// Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.The order and references of result values are determined by the first array.

// ++++ARGUMENT++++
// array(Array): The array to inspect.
// [values](...Array): The values to exclude.

// without redeeuce and with just 2nd argument as array
export default function difference(arr1, arr2) {
  return arr1.filter(v => !arr2.includes(v));
}
//with Reduce working with second arg as rest Argument
// function difference(arr1, arr2) {
//   return arr1.reduce((acc,v) => {
//     arr2.includes(v) ? null : acc.push(v);
//     return acc;
//   },[])
// }

// +++RETURN+++
// (Array): Returns the new array of filtered values.


// +++EXAMPLE+++
// difference([2, 1], [2, 3]);
// => [1]

// difference([2, 1,3,4], [2, 3]);
// => [1,4]