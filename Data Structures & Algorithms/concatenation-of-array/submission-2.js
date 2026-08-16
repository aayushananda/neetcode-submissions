class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    
    getConcatenation(nums) {
        let n = nums.length 
        let i  = n 
        let j = 0 
        while(i<2*n && j<n){
            nums[i] = nums[j]
            i++
            j++
        } return nums
    }
}
