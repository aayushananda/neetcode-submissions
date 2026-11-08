class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let dp = new Map()
        const helper=(i)=>{
            if(i===n) return 1
            if(i>n) return 0 
            if(dp.has(i)) return dp.get(i)

            let a1= helper(i+1)
            let a2 = helper(i+2)
            let ans = a1+a2
            dp.set(i,ans)
            return ans
        }
        return helper(0)
    }
}
