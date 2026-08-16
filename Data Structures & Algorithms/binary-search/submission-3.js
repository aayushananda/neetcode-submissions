class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low =0;
        let high = nums.length;

        while(low<high){
            let midPoint= Math.floor(low+((high-low)/2));
            let v = nums[midPoint];

            if(v==target) return midPoint;
            else if(v<target)low= midPoint+1;
            else high = midPoint;
        } return -1;
    }
}
