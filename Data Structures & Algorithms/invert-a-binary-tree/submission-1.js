/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        const helper = (node)=>{
        let current = node 
        if(!current) return null
        let newLeft = helper(current.right)
         let newRight = helper(current.left)
         current.left = newLeft
         current.right = newRight
         return current
        }
        return helper(root)
    }
}
