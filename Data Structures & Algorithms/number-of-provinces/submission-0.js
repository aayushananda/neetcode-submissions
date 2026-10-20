class Solution {
    /**
     * @param {number[][]} isConnected
     * @return {number}
     */
    findCircleNum(isConnected) {
        let rows = isConnected.length
        let visited = new Set()
        let count = 0

        const dfs = (arr)=>{
            let queue = []
            for(let i = 0;i<arr.length;i++){
                if(arr[i] === 1 && !visited.has(i)){
                    visited.add(i)
                    queue.push(i)
                }
            }
            while(queue.length>0){
                let node = queue.shift()
                dfs(isConnected[node])
            }
        }

        for(let r = 0;r<rows;r++){
            if(visited.has(r)) continue
            visited.add(r)
            count++
            dfs(isConnected[r])
        }
        return count
    }
}
