class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let sum = array =>{
            let s = 0
            for(let i=0;i<array.length;i++){
                s+= array[i]
            } return s
        }

        let l = []
        for(const c of operations){
            let val = Number(c)
            if(!Number.isNaN(val)) l.push(val)
            else if(c=='+') l.push(l[l.length-1]+l[l.length-2])
            else if(c=='D') l.push(l[l.length-1]*2)
            else if(c=='C') l.pop()
        } return sum(l)
    }
}
