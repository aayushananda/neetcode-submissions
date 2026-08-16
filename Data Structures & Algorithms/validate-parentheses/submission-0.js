class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
       let l = [];
       for(const c of s.split("")){
        if("("==c || "{" ==c||"["==c){
            l.push(c);
        }else{
            let x=l.pop()

            if(x==undefined) return false
            if(x=="("&&c!=")") return false
             if(x=="["&&c!="]") return false
              if(x=="{"&&c!="}") return false
        }
       } 
       return l.length==0
    }
}
