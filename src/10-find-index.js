/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let startIndex = 0;
  let endIndex = (array.length) - 1;

  while (startIndex <= endIndex) {
    const pivot = Math.floor((startIndex + endIndex) / 2);

    if (array[pivot] === value) {
      return pivot;
    } if (array[pivot] < value) {
      startIndex = pivot + 1;
    } else {
      endIndex = pivot - 1;
    }
  }
  return false;
}

module.exports = findIndex;
