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
     * @return {number}
     */
    maxDepth(root) {
        function helper(node){
            if(!node) return 0
            let current = node
            let left = helper(current.left)
            let right = helper(current.right)
           
            return Math.max(left, right) + 1
        }
        return helper(root)
    }
}
