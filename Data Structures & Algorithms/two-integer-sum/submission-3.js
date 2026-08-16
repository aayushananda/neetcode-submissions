class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        for(let [index, value] of nums.entries()){
            let diff = target - value 
            if(map.has(diff)){
                return [map.get(diff), index]
            }map.set(value,index)
        }return [-1,-1]
    }
}
