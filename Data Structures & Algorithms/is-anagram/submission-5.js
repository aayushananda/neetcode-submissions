class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    
  if (s.length !== t.length) return false;

  let map = new Map();
  for (let i of s) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }

  for (let i of t) {
    if (map.has(i)) {
      map.set(i, map.get(i) - 1);
    } else {
      return false;
    }
  }

  for (let [i, v] of map.entries()) {
    if (v !== 0) {
      return false;
    } 
  }
  return true
    }
}
