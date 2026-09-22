class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        for(let [i,val] of strs.entries()){
            let key = [...val].sort().join('')
            if(map.has(key)){
                map.get(key).push(val)
            }
            else{
                map.set(key, [val])
            }
        }
        return [...map.values()]
    }
}
