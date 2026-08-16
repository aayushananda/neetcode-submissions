class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let l = m+n-1
        while(n-1>=0){
            if(m-1<0){
                nums1[l]=nums2[n-1]
                l--
                n--
            }
            else if(nums1[m-1]<=nums2[n-1]){
                nums1[l]=nums2[n-1]
                l--
                n--
            }
            else if(nums1[m-1]>nums2[n-1]){
                nums1[l]=nums1[m-1]
                l--
                m--
            }
        }
    }
}
