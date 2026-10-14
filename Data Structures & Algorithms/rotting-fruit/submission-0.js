class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rows = grid.length
        let columns = grid[0].length
        let directions = [[0,1],[0,-1],[1,0],[-1,0]]
        let queue = []
        let fresh = 0
        let minCount = 0
        for(let r=0;r<rows;r++){
            for(let c = 0;c<columns;c++){
                if(grid[r][c] === 2){
                    queue.push([r,c])
                }
                else if(grid[r][c]===1) fresh++
            }
        }

        while(queue.length>0){
            let size = queue.length
            let rotted = true

            for(let i=0;i<size;i++){
                let [row,col] = queue.shift()
                for(let [dr,dc] of directions){
                    let [nr,nc] = [row+dr, col+dc]
                    if(nr>=0 && nr<rows && nc>=0 && nc<columns && grid[nr][nc]===1){
                        grid[nr][nc] = 2
                        fresh--
                        queue.push([nr,nc])
                        rotted = false
                    }
                }
            }
            if(!rotted) minCount++
        }

        if(fresh===0) return minCount
        else return -1
    }
}
