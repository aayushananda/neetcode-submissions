class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let map = new Map()
       for(let [i,val] of nums.entries()){
        if(map.has(target-val)){
            return [map.get(target-val),i]
        }
        else{
        map.set(val,i)
        }
       }
      
    }
}
