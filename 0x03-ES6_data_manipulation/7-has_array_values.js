/* eslint-disable */
export default function hasValuesFromArray(set, array) {
  let bool = true;
  array.map((val) => {
    if (!set.has(val)) {
      bool = false;
    }
  });
  return bool;
}
