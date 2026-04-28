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
     * @return {boolean}
     */
    isValidBST(root) {
        const res = [true]
        this.dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, res)
        return res[0]
    }

    dfs(root, min, max, res) {
        if (!root) return 
        else {
            console.log(root.val, min, max)
            if (root.val >= max || root.val <= min) res[0] = false
            else {
                const newMin = Math.max(min, root.val)
                const newMax = Math.min(max, root.val)
                this.dfs(root.left, min, newMax, res)
                this.dfs(root.right, newMin, max, res)
            }
        }
    }
}
