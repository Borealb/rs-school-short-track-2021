/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let number = 1;
  let resultStr = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      number++;
    } else if (number !== 1) {
      resultStr += number + arr[i];
      number = 1;
    } else {
      resultStr += arr[i];
    }
  }

  return resultStr;
}

module.exports = encodeLine;
