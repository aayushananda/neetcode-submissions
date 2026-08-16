class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map(), l = 0, res = 0;
        for(let r = 0;r<s.length;r++){
            if(map.has(s[r])){
                l = Math.max(map.get(s[r])+1 , l)
            }
            map.set(s[r], r)
            res = Math.max(r-l+1 , res)
        }
        return res 
    }
}
