class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows = grid.length, columns = grid[0].length, visited = new Set(), directions = [[0,1], [0,-1], [1,0], [-1,0]], key = (r,c)=>`${r}, ${c}` , count = 0

        const bfs = (r,c)=>{
            let q = [] 
            visited.add(key(r,c))
            q.push([r,c])
            let currCount = 1

            while(q.length>0){
                let [row,col] = q.shift()
                for(let [dr,dc] of directions){
                    let [nr,nc] = [row+dr, col+dc]
                    if(nr>=0 && nr<rows && nc>=0 && nc<columns &&
                    grid[nr][nc] === 1 && !visited.has(key(nr,nc))
                    ){
                        q.push([nr,nc])
                        visited.add(key(nr,nc))
                        currCount++
                    }
                }
            }
            count = Math.max(currCount, count)
        }

        for(let r = 0;r<rows;r++){
            for(let c = 0;c<columns;c++){
                if(grid[r][c] === 1 && !visited.has(key(r,c))){
                    bfs(r,c)
                }
            }
        }
        return count
    }
}
