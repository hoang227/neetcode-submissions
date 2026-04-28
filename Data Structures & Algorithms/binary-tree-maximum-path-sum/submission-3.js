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
    maxPath = Number.NEGATIVE_INFINITY

    /**
     * @param {TreeNode} root
     * @return {number}
     */

    maxPathSum(root) {
        this.dfs(root)
        return this.maxPath
    }

    dfs(root) {
        if (!root) return 0

        const leftGain = Math.max(this.dfs(root.left), 0)
        const rightGain = Math.max(this.dfs(root.right), 0)

        this.maxPath = Math.max(this.maxPath, root.val + leftGain + rightGain)

        console.log(root.val, leftGain, rightGain, this.maxPath)
        return root.val + Math.max(leftGain, rightGain)
    }
}
