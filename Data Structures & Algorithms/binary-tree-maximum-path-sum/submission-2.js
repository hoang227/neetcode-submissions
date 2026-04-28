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

    maxPathSum(root) {
        let maxPath = [Number.NEGATIVE_INFINITY]
        this.dfs(root, maxPath)
        return maxPath[0]
    }

    dfs(root, maxPath) {
        if (!root) return 0

        const leftGain = Math.max(this.dfs(root.left, maxPath), 0)
        const rightGain = Math.max(this.dfs(root.right, maxPath), 0)

        maxPath[0] = Math.max(maxPath[0], root.val + leftGain + rightGain)

        console.log(root.val, leftGain, rightGain, maxPath[0])
        return root.val + Math.max(leftGain, rightGain)
    }
}
