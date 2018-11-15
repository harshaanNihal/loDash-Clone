// Creates an array with all falsey values removed.The values false, null, 0, "", undefined, and NaN are falsey.

// ++++ARGUMENT++++
// array(Array): The array to compact.

export default function compact(array) {
  return array.reduce((acc, v) => {
    if (v) acc.push(v);
    return acc;
  }, [])
}
// without reduce working
// function compact(array) {
//     return array.filter(v => Boolean(v));
// }

// +++RETURN+++
// (Array): Returns the new array of filtered values.

// +++EXAMPLE+++
// compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

// compact([0, 1, false, 2, '', 3, NaN, 4, null, 5, undefined]);
// => [1, 2, 3, 4, 5]

