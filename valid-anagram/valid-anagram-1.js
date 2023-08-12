/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
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
