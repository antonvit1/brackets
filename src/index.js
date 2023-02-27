module.exports = function check(str, bracketsConfig) {
  let strOfBracketsConfig = bracketsConfig.join("").replace(/,/g, "");
  let arrayStack = [];
  for (let element of str) {
    let index = strOfBracketsConfig.indexOf(element);
    if (index % 2 === 0) {
      if (
        element === strOfBracketsConfig[index + 1] &&
        arrayStack[arrayStack.length - 1] !== index
      ) {
        arrayStack.push(index);
      } else if (
        element === strOfBracketsConfig[index + 1] &&
        arrayStack[arrayStack.length - 1] === index
      ) {
        arrayStack.pop();
      } else {
        arrayStack.push(index);
      }
    } else {
      if (arrayStack.pop() !== index - 1) {
        return false;
      }
    }
  }
  return arrayStack.length === 0;
};
