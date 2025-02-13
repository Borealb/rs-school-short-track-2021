/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const num = String(n);
  const arr = [];
  for (let i = 0; i < num.length; i++) {
    arr[i] = Number(num.replace(num[i], ''));
  }

  return Math.max(...arr);
}

module.exports = deleteDigit;
