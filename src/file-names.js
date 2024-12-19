const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  class File {
    constructor(name, number) {
      this.name = name;
      this.number = number;
    }
  }
  let files = [];

  for (let i = 0; i < names.length; ++i) {
    let index = files.findIndex(item => item.name === names[i]);
    if (index != -1) {
      files[index].number += 1;
      let name = files[index].name + '(' + files[index].number + ')';
      result.push(name);
      files.push(new File(name, 0));
    }
    else {
      files.push(new File(names[i], 0));
      result.push(names[i]);
    } 
  }  
  return result;
}

module.exports = {
  renameFiles
};
