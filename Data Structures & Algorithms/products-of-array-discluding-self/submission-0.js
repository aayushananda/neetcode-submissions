class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [] 
        let suffix = []
        for(let i = nums.length-1;i>=0;i--){
            i === nums.length-1 ? suffix[i] = 1 : suffix[i] = nums[i+1] * suffix[i+1]
        } 
        for(let i = 0 ;i<nums.length;i++){
            i===0 ? prefix[i] = 1 : prefix[i] = nums[i-1]*prefix[i-1]
        }
        let output = []
        for(let [i,v] of nums.entries()){
            output[i] = prefix[i]*suffix[i]
        }return output
    }
}
