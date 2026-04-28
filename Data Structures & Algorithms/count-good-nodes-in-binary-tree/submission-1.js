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
    goodNodes(root) {
        const res = [0]
        this.dfs(root, root.val, res)
        return res[0]
    }

    dfs(root, currMax, res) {
        if (!root) return

        if (root.val >= currMax) res[0]++
        const newMax = Math.max(currMax, root.val)
        
        this.dfs(root.left, newMax, res) 
        this.dfs(root.right, newMax, res) 
    } 


}
