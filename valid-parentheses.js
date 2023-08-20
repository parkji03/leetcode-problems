/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const arr = s.split("");
  const stack = [];

  const opening = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const closing = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < arr.length; i++) {
    const currentParen = arr[i];
    if (opening[currentParen]) {
      stack.push(currentParen);
      continue;
    }

    if (closing[currentParen]) {
      if (!stack.length) {
        return false;
      }

      if (stack[stack.length - 1] === closing[currentParen]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return !stack.length;
};

console.log(isValid("(])")); // false
console.log(isValid("()")); // true
console.log(isValid("({{{{}}}))")); // false
console.log(isValid("(())[]")); // true
console.log(isValid("{(())[]]")); // false
console.log(isValid(")")); // false
console.log(isValid("[](){}{{}}")); // true
console.log(isValid("()")); // true
