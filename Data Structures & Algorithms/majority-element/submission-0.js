class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let n = nums.length-1
        parseInt(nums.sort())
        return nums[Math.floor(n/2)]
    }
}
