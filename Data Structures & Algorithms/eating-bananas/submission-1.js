class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 1 
        let high = Math.max(...piles)
        let res = high
        while(low<=high){
            let mid = Math.floor((low+high)/2)
               let totalTime = 0 
            for(let i of piles){
                totalTime += Math.ceil(i/mid)
            }
            totalTime<=h ? (high = mid-1, res = mid) : low = mid+1
        } return res
    }
}
