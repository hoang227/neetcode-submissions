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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) return true

        const stackP = [p]
        const stackQ = [q]

        while (stackP.length > 0) {
            let currP = stackP.pop()
            let currQ = stackQ.pop()

            console.log(currP)
            console.log(currQ)

            if (currP && currQ && currP.val !== currQ.val) return false
            if (!currP || !currQ) {
                if (!currP && !currQ) continue
                else return false
            }

            stackP.push(currP.left || null)
            stackP.push(currP.right || null)
            stackQ.push(currQ.left || null)
            stackQ.push(currQ.right || null)
        }

        return true
    }
}
