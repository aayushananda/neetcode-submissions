class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = []
        let cur = 0 
        for(let num of nums){
            cur += num 
            this.prefix.push(cur)
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        const rightSum = this.prefix[right]
        const leftSum = left>0 ? this.prefix[left-1] : 0
        return rightSum - leftSum
    }
}
