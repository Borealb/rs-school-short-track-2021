/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arrDomains = [];
  const resultObj = {};

  domains.forEach((str) => arrDomains.push(str.split('.')));

  arrDomains.forEach((arr) => {
    let objPropStr = '';
    for (let i = arr.length - 1; i >= 0; i--) {
      objPropStr += `.${arr[i]}`;
      if (!resultObj[objPropStr]) {
        resultObj[objPropStr] = 1;
      } else {
        resultObj[objPropStr]++;
      }
    }
  });
  return resultObj;
}

module.exports = getDNSStats;
