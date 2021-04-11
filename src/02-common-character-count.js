/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  for (let i = 0; i < arr1.length; i++) {
    const idx = arr2.indexOf(arr1[i]);
    if (idx >= 0) {
      counter++;
      arr2.splice(idx, 1);
    }
  } return counter;
}

module.exports = getCommonCharacterCount;

/*
  1. Make s1,s2 arrays.
  2. Loop array1 and find index of element for matching
  3. If match found, add +1 to counter and remove found index
*/
