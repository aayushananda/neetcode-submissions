class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows = grid.length,
            columns = grid[0].length,
            visited = new Set(),
            directions = [
                [0, 1],
                [0, -1],
                [1, 0],
                [-1, 0],
            ],
            key = (r, c) => `${r}, ${c}`,
            count = 0, currCount = 0;

        const dfs = (r, c) => {
            if (
                r < 0 ||
                r >= rows ||
                c < 0 ||
                c >= columns ||
                grid[r][c] !== 1 ||
                visited.has(key(r, c))
            )
                return;
            
            visited.add(key(r, c));
            currCount++;
            for (let [dr, dc] of directions) {
                dfs(r + dr, c + dc);
                
            }

            count = Math.max(currCount, count);
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                if (grid[r][c] === 1 && !visited.has(key(r, c))) {
                     currCount = 0;
                     dfs(r, c);
                    
                }
            }
        }
        return count;
    }
}
