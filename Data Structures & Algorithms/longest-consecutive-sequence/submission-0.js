class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let longest = 0 
        for(let i of set){
            if(!set.has(i-1)){
                let count = 1 
                while(set.has(i+count)){
                    count++
                } longest = Math.max(longest,count)
            } 
        } 
        return longest
    }
}
