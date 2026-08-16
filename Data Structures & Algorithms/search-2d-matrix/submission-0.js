class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
  for(let nums of matrix){
    for(let j of nums){
  let left = 0, right = nums.length -1 
  while(left<=right){
    let mid = Math.floor((left+right)/2)
    //this is not rotated so there is only one sorted half
    if(nums[mid]===target) return true 
    if(target<nums[mid]){
      right = mid-1
    }
    else{
      left = mid+1 
    }
  } 
  }
} return false 
    }
}
