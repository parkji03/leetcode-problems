/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (let str of strs) {
    const key = sortString(str);
    const mapValue = map.get(key);

    if (mapValue) {
      mapValue.push(str);
      map.set(key, mapValue);
      continue;
    }

    map.set(key, [str]);
  }
  return Array.from(map.values());
};

function sortString(str) {
  return str.split("").sort().join("");
}
