const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let baseString = (typeof str === 'string') ? str : String(str);
  const separator = ("separator" in options) ? options.separator : '+'; 
  const additionSeparator = ("additionSeparator" in options) ? options.additionSeparator : '|';
  let result = '';
  
  const repeatTimes = ("repeatTimes" in options) ? options.repeatTimes : 1;
  const additionRepeatTimes = ("additionRepeatTimes" in options) ? options.additionRepeatTimes : 1;

  if ("addition" in options) {
    for (let i = 0; i < additionRepeatTimes; ++i) {
      baseString = (i === 0) ? baseString + options.addition : baseString + additionSeparator + options.addition;
    }
  }

  for (let i = 0; i < repeatTimes; ++i) {
    result = (i === 0) ? baseString : result + separator + baseString;
    }
  
  return result;
}

module.exports = {
  repeater
};
