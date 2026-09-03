class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let output = ""
        for(let c of s){
            if(
            (c >= 'a' && c<= 'z')
            || (c>='A' && c<= 'Z')
            || (c>='0' && c<= '9')
            ){
                output += c.toLowerCase() 
            }
        }
        return output.split('').reverse().join('') === output 
    }
}
