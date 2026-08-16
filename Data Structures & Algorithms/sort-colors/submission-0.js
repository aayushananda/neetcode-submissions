class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */ 
     mergeSort(arr,s,e){
        if(e-s+1<=1) return arr
        let m = Math.floor((s+e)/2)
        this.mergeSort(arr,s,m)
        this.mergeSort(arr,m+1,e)
        this.merge(arr,s,m,e)
        return arr
      }
      merge(arr,s,m,e){
        let left = arr.slice(s,m+1)
        let right= arr.slice(m+1,e+1)
        let i = 0 
        let j = 0 
        let k = s 
        while(i<left.length && j<right.length){
          left[i]<=right[j]
          ? arr[k++] = left[i++]
          : arr[k++] = right[j++]
        }
        while(i<left.length)arr[k++] = left[i++]
        while(j<right.length) arr[k++] = right[j++]
      }
    sortColors(nums) {
      return this.mergeSort(nums,0,nums.length-1)
    }
}
