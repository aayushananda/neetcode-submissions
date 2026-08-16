
class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
    let l = 0
    let r = 0 
    let m = word.length
    let n = abbr.length
    while(l<m && r<n){
      if(abbr[r]==='0') return false 
   
    if(isNaN(abbr[r])){
      if(word[l]===abbr[r]){
        l++
        r++
      }
      else {
        return false
      }
    }
    else{
      let sublength= 0 
      while(r<n && !isNaN(abbr[r])){
      sublength = sublength*10 + parseInt(abbr[r])
      r++  
      }l+=sublength 
    }
 }return l===m && r===n
    } 
}

