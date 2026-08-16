class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sorted = strs.map((strs)=>strs.split('').sort().join(''))
        let map = new Map()

        for(let i in strs){
            if(map.has(sorted[i])){
                map.get(sorted[i]).push(strs[i])
            }
            else{
                map.set(sorted[i],[strs[i]])
            }
        }
        return Array.from(map.values())
    }
}
