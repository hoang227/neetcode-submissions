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
        const map = new Map();
        for (let i = 0; i < inorder.length; i++) map.set(inorder[i], i)

        let preIndex = [0]

        return this.traverse(0, inorder.length - 1, preIndex, preorder, map)
    }

    traverse(left, right, preIndex, preorder, map) {
        if (left > right) return null
        const rootVal = preorder[preIndex[0]++]
        const root = new TreeNode(rootVal)
        root.left = this.traverse(left, map.get(rootVal) - 1, preIndex, preorder, map)
        root.right = this.traverse(map.get(rootVal) + 1, right, preIndex, preorder, map)
        return root
    }
}
