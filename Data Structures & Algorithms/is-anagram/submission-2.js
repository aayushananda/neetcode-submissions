class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let map = new Map()
        for(let i of s){
            if(map.has(i)){
                map.set(i,map.get(i)+1)
            }
            else{
                map.set(i,1)
            }
        }
        for(let j of t){
            if(map.has(j)){
                map.set(j,map.get(j)-1)
                if(map.get(j)<0) return false 
            }else{
                return false
            }
        } return true
    }
}
