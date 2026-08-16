class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0]
        let currProfit = 0 
        let maxProfit = 0 
        for(let i of prices){
            minPrice = Math.min(i, minPrice)
            currProfit = i - minPrice 
            maxProfit = Math.max(currProfit, maxProfit)
        }
        return maxProfit
    }
}
