class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let i = s.length-1,
        l = 0

        while(s.charAt(i)===' '){
            i--
        }
        while(i>=0 && s.charAt(i)!==" "){
            l++
            i--
        } return l
    }
}
