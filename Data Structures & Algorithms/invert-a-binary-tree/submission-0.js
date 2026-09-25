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
        function invert(node){
        if(!node) return null
        let current = node 
        let newLeft = invert(current.right)
        let newRight = invert(current.left)
        current.left = newLeft
        current.right = newRight
        return current
        }
        return invert(root)
    }
}
