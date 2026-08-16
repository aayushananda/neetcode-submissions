class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        let out = []
        out.push([1])
        if(numRows === 1){
            return out
        }
        else{
            let initial = [0, 1, 0]
            let neew = []
            for(let i = 0;i<numRows-1;i++){
                for(let j = 0;j< initial.length-1;j++){
                    neew[j] = initial[j]+initial[j+1]
                }
                out.push([...neew])
                initial = [0, ...neew, 0]
            }
            return out
        }
    }
}
