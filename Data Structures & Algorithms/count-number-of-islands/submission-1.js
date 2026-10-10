class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length , columns = grid[0].length, directions = [[0,1],[0,-1],[1,0], [-1,0]], visited = new Set(), key=(r,c)=>`${r}, ${c}`, islands = 0

        const dfs = (r,c)=>{
            if(r<0 || r>=rows || c<0 || c>=columns) return 
            if(grid[r][c] !== '1' || visited.has(key(r,c))) return 
            visited.add(key(r,c))
            for(let [dr,dc] of directions){
                dfs(r+dr, c+dc)
            }
        }

        for(let r=0;r<rows;r++){
            for(let c=0;c<columns;c++){
                if(grid[r][c] === '1' && !visited.has(key(r,c))){
                    dfs(r,c)
                    islands += 1
            }
            }
        }
        return islands
    }
}
