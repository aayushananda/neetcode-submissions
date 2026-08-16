class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(!s || !t || s.length<t.length) return ""
        const map = new Map()
        for (let char of t){
            map.set(char, (map.get(char)||0)+1)
        }
        let left = 0, right = 0, matched = 0
        let minLen = Infinity, startIndex = 0
        while(right <s.length){
            let rChar = s[right]
            if(map.has(rChar)){
                map.set(rChar, map.get(rChar)-1)
                if(map.get(rChar)>=0) matched++
            }
            right++

            while (matched === t.length){
                if(right -left <minLen){
                    minLen = right - left
                    startIndex = left    
                }
                let lChar = s[left]
                if(map.has(lChar)){
                    map.set(lChar, map.get(lChar)+1)
                    if(map.get(lChar)>0) matched--
                }
                left++
            }
        }
        return minLen === Infinity ? "" : s.substring(startIndex, startIndex + minLen)
    }
}
