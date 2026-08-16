class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map()  
  for(let i in nums){
    if(map.has(nums[i])) return true 
    else {
        map.set(nums[i],1)
      }
  }return false 
    }
}
