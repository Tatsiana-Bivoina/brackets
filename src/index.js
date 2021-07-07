module.exports = function check(str, bracketsConfig) {
  let length = str.length;

  if (length % 2 == 1) {
    return false;
  }
  
  for(let j = 0; j < length; j++) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      str = str.replace(bracketsConfig[i].join(''), '');
    }
  }
  if(str.length > 0) return false
  else return true
}
