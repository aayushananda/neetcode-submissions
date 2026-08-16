class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        let count = 0
        people.sort((a,b)=> a-b)
        let l =0;
        let r = people.length-1
        while(l<r){
            if(people[l]+people[r]<=limit){
                count++
                l++
                r--
            }else {
                count++
                r--
            }
        }
        if(l===r) count++
        return count
    }
}
