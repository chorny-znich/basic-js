const { NotImplementedError } = require('../extensions/index.js');

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
  let result = {};
  
  for (let i = 0; i < domains.length; ++i) {
    let str = domains[i];
    let index = str.length;
    let domainName = '';
    while (true) {
      let nextIndex = str.lastIndexOf('.', index);
      if (nextIndex != - 1) {
        let tempStr = str.slice(nextIndex, index + 1);
        domainName = domainName + tempStr;
        if (domainName in result) result[domainName] += 1;
        else result[domainName] = 1;
        index = nextIndex - 1;
      }
      else {
        let tempStr = str.slice(0, index + 1);
        domainName = domainName + '.' + tempStr;
        if (domainName in result) result[domainName] += 1;
        else result[domainName] = 1;
        break;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
