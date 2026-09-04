class Solution {
    /**
     * @param {string} s 
     * @return {boolean}
     */
    isPalindrome(s) {
        const alphanumeric = (c)=>{
            return (
                (c>='a' && c<='z') ||
                (c>='A' && c<='Z') ||
                (c>='0' && c<='9') 
            ) 
        }

        let l =0, r= s.length-1

        while(l<r){
            while(l<r && !alphanumeric(s[l])){
                l++
            }
              while(r>l && !alphanumeric(s[r])){
                r--
            }

            if(s[l].toLowerCase() !== s[r].toLowerCase()) return false 
            l++
            r--
        }
        return true
    }
}
