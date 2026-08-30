class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
     
  let map = new Map();
  for (let i of nums) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }
  let entries= Array.from(map.entries())
  entries.sort((a, b) => b[1] - a[1]);
  return entries.slice(0,k).map((entry)=>entry[0])
}

}
