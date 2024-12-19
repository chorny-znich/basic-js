const { NotImplementedError } = require('../extensions/index.js');

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
  if (str === '') return '';
  let result = '';
  let symbol = str[0];
  let counter = 1;
  for (let i = 1; i < str.length; ++i) {
    if (symbol === str[i]) {
      ++counter;
      console.log('same symbol');
    }
    else {
      result = counter != 1 ? result + counter + symbol : result + symbol;
      symbol = str[i];
      counter = 1;
      console.log('different symbol');
    }
  }  
  result = counter != 1 ? result + counter + symbol : result + symbol;
  return result;
}

module.exports = {
  encodeLine
};
