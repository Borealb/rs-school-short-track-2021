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
  const indexArr = [];
  const resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indexArr.push(i);
    }
  }

  arr.map((e, index) => {
    if (indexArr.indexOf(index) !== -1) {
      resultArr.push(-1);
    } else {
      resultArr.push(sortArr[0]);
      sortArr.shift();
    } return resultArr;
  });

  return resultArr;
}

module.exports = sortByHeight;
