class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        for(let [i,num] of nums.entries()){
            const diff = target - num
            if(map.has(diff)){
                return [map.get(diff), i]
            } 
            map.set(num,i)
        }return []
    }
}
