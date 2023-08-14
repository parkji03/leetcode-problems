/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = [];
  while (!!strs.length) {
    const currentWord = strs[0];
    const anagrams = [currentWord];
    strs.shift();

    for (let i = strs.length - 1; i >= 0; --i) {
      if (isAnagram(currentWord, strs[i])) {
        anagrams.push(strs[i]);
        strs.splice(i, 1);
      }
    }

    result.push(anagrams);
  }

  return result;
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sMappings = {};
  const tMappings = {};

  for (let i = 0; i < s.length; i++) {
    if (!sMappings[s[i]]) {
      sMappings[s[i]] = 1;
    } else {
      sMappings[s[i]]++;
    }

    if (!tMappings[t[i]]) {
      tMappings[t[i]] = 1;
    } else {
      tMappings[t[i]]++;
    }
  }

  for (let key of Object.keys(sMappings)) {
    if (sMappings[key] !== tMappings[key]) {
      return false;
    }
  }

  return true;
};
