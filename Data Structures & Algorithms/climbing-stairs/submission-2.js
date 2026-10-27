class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let map = new Map()
        const helper = (i,n)=>{
            if(i===n) return 1 
            if(i>n) return 0 
        if(map.has(i)) return map.get(i)
        let a1 = helper(i+1,n)
        let a2 = helper(i+2, n)

        let ans = a1+a2

        map.set(i,ans)
        return ans
        }
        return helper(0,n)
    }
}
