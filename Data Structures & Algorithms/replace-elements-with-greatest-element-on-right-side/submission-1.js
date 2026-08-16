class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let n = arr.length
        const result = new Array(n)
        let rightMax = -1
        for(let i = n-1;i>=0;i--){
            result[i]=rightMax
            rightMax = Math.max(rightMax,arr[i])
        }  return result
    }
}
