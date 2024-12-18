const { NotImplementedError } = require('../extensions/index.js');

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
  let str = String(n);
  let result = 0;
  for (let i = 0; i < str.length; ++i) {
    if (i === 0) {
      let tempStr = str.slice(1);
      result = Math.max(result, +tempStr);
    }
    if (i > 0 && i < str.length - 1) {
      let tempStr = str.slice(0, i) + str.slice(i + 1);
      result = Math.max(result, +tempStr);
    }
    if (i === str.length - 1) {
      let tempStr = str.slice(0, str.length - 1);
      result = Math.max(result, +tempStr);
    }
  }
  return result;
}

module.exports = {
  deleteDigit
};
