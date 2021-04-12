/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortArr = arr.filter((e) => e !== -1).sort((a, b) => a - b);
  const resultArr = [];

  arr.map((e) => {
    if (e === -1) {
      resultArr.push(e);
    } else {
      resultArr.push(sortArr[0]);
      sortArr.shift();
    } return resultArr;
  });

  return resultArr;
}

module.exports = sortByHeight;
