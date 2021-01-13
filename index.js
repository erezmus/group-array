/**
 * Group an array of numbers.
 *
 * The function returns an array with the contents of the 'arr' input
 * grouped in a sub array of length 'size'.
 *
 * The function will throw an error if 'arr' is not an array.
 * If 'size' is less than 1 or not a number, an error will also be thrown.
 * When length of 'arr' is not exactly divisible by 'size', the last element
 * will contain the remainder.
 *
 * @param array arr
 * @param number size
 */
function groupArrayElements(arr, size) {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid arr argument");
  }

  if (!Number.isInteger(size)) {
    throw new Error("Invalid size argument");
  }

  if (size < 1) {
    throw new Error("Size argument cannot be less than 1");
  }

  if (arr.length === 0) {
    return [];
  }

  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

module.exports = { groupArrayElements };
