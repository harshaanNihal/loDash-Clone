// Creates a slice of array with n elements dropped from the beginning.
// ++++ARGUMENT++++
// array(Array): The array to query.
// [n = 1](number): The number of elements to drop.

// with slice
export default function drop(array, n = 1) {
  return array.slice(n);
}

//without slice with reduce working
// function drop(array, n = 1) {
//  return array.reduce( (acc,value,i)=>{
//     if(i >= n) acc.push(value); 
//     return acc;
//  },[])
// }
// +++RETURN+++
// (Array): Returns the slice of array.


// +++EXAMPLE+++
// drop([1, 2, 3]);
// => [2, 3]

// drop([1, 2, 3], 2);
// => [3]

// drop([1, 2, 3], 5);
// => []

// drop([1, 2, 3], 0);
// => [1, 2, 3]