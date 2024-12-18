const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let result = [];
  members.forEach(member => {
    if (typeof(member) === 'string') {
      let tempMember = member.trim();
      result.push(tempMember[0].toUpperCase());
    }
  });
  result.sort();
  return result.join('');
}

module.exports = {
  createDreamTeam
};
