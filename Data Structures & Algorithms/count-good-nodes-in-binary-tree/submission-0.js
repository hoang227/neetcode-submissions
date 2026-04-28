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

        // const stack = [root]
        // let count = 0
        // let currMax = root.val

        // while (stack.length) {
        //     console.log(stack.map(n => n.val))
        //     const node = stack.pop()
        //     if (node.val >= currMax) count++
        //     currMax = Math.max(currMax, node.val)
        //     if (node.left) stack.push(node.left)
        //     if (node.right) stack.push(node.right)
        // }
    }

    dfs(root, currMax, res) {
        if (!root) return

        if (root.val >= currMax) res[0]++

        console.log("root:", root.val)
        console.log("old:", currMax)
        const newMax = Math.max(currMax, root.val)
        console.log("new:", newMax)
        console.log("_____________")

        this.dfs(root.left, newMax, res) 
        this.dfs(root.right, newMax, res) 
    } 


}
