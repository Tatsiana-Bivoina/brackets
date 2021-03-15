module.exports = function check(str, bracketsConfig) {
  let chars = str.split('');
  let charsConfig = bracketsConfig.toString();
  let stack = [];
  let open = ['{', '(', '[', '1', '2', '3', '4', '5', '6', '7', '8'];
  let close = ['}', ')', ']', '1', '2', '3', '4', '5', '6', '7', '8'];
  let closeIndex;
  let openIndex;

  for (var i = 0; i < chars.length; i++) {
    openIndex = open.indexOf(chars[i]);
    if (openIndex !== -1) {
      stack.push(openIndex);
      continue;
    }
    closeIndex = close.indexOf(chars[i]);
    if (closeIndex !== -1) {
      openIndex = stack.pop();
      if (closeIndex !== openIndex) {
          return false;
      }
    }
    if (stack.length !== 0) {
      return false;
    }
    return true;
  }

  for (let i = 0; i < charsConfig.length; i++) {
    for(let j = 0; i < charsConfig[i].length; i++){
      openIndex = open.indexOf(charsConfig[i][j]);
      if (openIndex !== -1) {
        stack.push(openIndex);
        continue;
      }
      closeIndex = close.indexOf(charsConfig[i][j]);
      if (closeIndex !== -1) {
        openIndex = stack.pop();
        if (closeIndex !== openIndex) {
            return false;
        }
      }
      if (stack.length !== 0) {
        return false;
      }
    }
    return true;
  }
}
