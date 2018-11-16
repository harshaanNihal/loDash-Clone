// Creates a new array concatenating array with any additional arrays and / or values.

// ++++ARGUMENT++++
// array(Array): The array to concatenate.
// [values](...*): The values to concatenate.

export default function concat(arr, ...value) {
  let newArr = [...arr];
  value.forEach(v => {
    if (Array.isArray(v)) {
      v.forEach(element => newArr.push(element));
    }
    else newArr.push(v);
  });
  return newArr;
}
// +++RETURN+++
// (Array): Returns the new concatenated array.


// +++EXAMPLE+++
// var array = [1];
// var other = concat(array, 2, [3], [[4]]);

// console.log(other);
// // => [1, 2, 3, [4]]

// console.log(array);
// => [1]