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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let curr = root
        
        while (curr) {
            console.log(curr.val, p.val, q.val)
            console.log((curr.val > p.val && curr.val < q.val) || (curr.val < p.val && curr.val > q.val))
            if (curr.val === p.val || curr.val === q.val) return curr.val === p.val ? p : q
            if (curr.val > p.val && curr.val > q.val) curr = curr.left
            if (curr.val < p.val && curr.val < q.val) curr = curr.right
            if ((curr.val > p.val && curr.val < q.val) || (curr.val < p.val && curr.val > q.val)) {
                console.log("here")
                console.log(curr.val)
                return curr
            }
        }
    }
}