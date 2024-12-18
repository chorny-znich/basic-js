const { NotImplementedError } = require('../extensions/index.js');

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
  let result = 0;
  let strArray1 = s1.split('');
  let strArray2 = s2.split('');
  
  while (strArray1.length != 0) {
    result += Math.min(strArray1.filter(value => value === strArray1[0]).length, 
      strArray2.filter(value => value === strArray1[0]).length);
    strArray1 = strArray1.filter(value => value != strArray1[0]);  
  } 
  return result;
}

module.exports = {
  getCommonCharacterCount
};
