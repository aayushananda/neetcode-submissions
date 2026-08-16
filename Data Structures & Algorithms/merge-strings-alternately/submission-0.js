class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let m = word1.length
        let n = word2.length;
        let i = 0;
        let j = 0;
        let str = ''
        while(i<m || j<n){
            if(i<m) str+=(word1[i++])
            if(j<n)str+=(word2[j++])
        }return str
    }
}
