class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
 let k = 0 
    for(let i in nums){
      if(nums[i]!=0){
        let temp = nums[k]
        nums[k]=nums[i]
        nums[i] = temp
        k++
      }
    }
  }
}

