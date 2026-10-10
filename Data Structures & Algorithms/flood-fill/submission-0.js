class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
      let rows = image.length, columns=image[0].length , directions = [[0,1], [0,-1], [1,0], [-1,0]], valid = image[sr][sc], visited = new Set(), key = (r,c)=> `${r}, ${c}`
     // if(valid === color) return image
    const dfs =(r,c)=>{
        if(r<0 || r>=rows || c<0 || c>=columns) return 
        if(image[r][c] !== valid ) return 
        if(visited.has(key(r,c)) ) return 
        image[r][c] = color
        visited.add(key(r,c))
        for(let [dr,dc] of directions){
            dfs(r+dr, c+dc)
        }
    }
      dfs(sr,sc)
      return image
    }
}
