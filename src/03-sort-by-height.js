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
function sortByHeight(/* arr */) {
  throw new Error('Not implemented');
}

module.exports = sortByHeight;

/*
  1. Make 2 empty arrrays arr1 and arr2
  2.
сначала нашел индексы элементов которые -1,
потом отсортировал без них далее по индексам в
массив после сортировки -1 вставлял */
