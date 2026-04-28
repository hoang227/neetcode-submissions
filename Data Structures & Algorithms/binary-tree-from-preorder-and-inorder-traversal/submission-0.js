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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        console.log(preorder, inorder)
        if (inorder.length === 0) return null
        else {
            const map = new Map()
            for (let i = 0; i < inorder.length; i++) {
                map.set(inorder[i], i)
            }
            console.log(preorder)
            const root = preorder.shift()
            const left = inorder.slice(0, map.get(root))
            const right = inorder.slice(map.get(root) + 1, inorder.length)
            const newNode = new TreeNode(root)
            console.log("___________")
            newNode.left = this.buildTree(preorder, left)
            newNode.right = this.buildTree(preorder, right)
            return newNode
        }
    }
}
