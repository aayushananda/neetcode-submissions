class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        const mergeSort = (arr,s,e)=>{
            if(e-s+1<=1){
                return arr
            }
            let m = Math.floor((s+e)/2)
            mergeSort(arr,s,m)
            mergeSort(arr,m+1,e)
            merge(arr,s,m,e)
            return arr
        }
        const merge = (arr,s,m,e)=>{
            //Create temp arrays for left and right halves
            let left = arr.slice(s,m+1)
            let right = arr.slice(m+1,e+1)

            let i = 0
            let j= 0
            let k = s

            //Marge the temp arrays back into arr[s...e]
            while(i<left.length && j<right.length){
                if(left[i]<=right[j]){
                    arr[k++]=left[i++]
                }
                else{
                    arr[k++]=right[j++]
                }
            }
            //Copy remaining elements
            while(i<left.length){
                arr[k++]=left[i++]
            }
            while(j<right.length){
                arr[k++]=right[j++]
            }
        }
        return mergeSort(nums,0,nums.length-1)
    }
}
