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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return ""

        const queue = [root]
        const res = []

        while (queue.length) {
            const node = queue.shift()
            if (node) {
                res.push(node.val)
                queue.push(node.left)
                queue.push(node.right)
            } else {
                res.push(null)
            }
        }

        while (!res[res.length - 1]) res.pop()

        return res
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (!data.length) return null

        const root = new TreeNode(data.shift())
        const queue = [root]

        while (data.length) {
            const node = queue.shift()
            const left = data.shift()
            const right = data.shift()
            if (left) {
                node.left = new TreeNode(left)
                queue.push(node.left)
            }
            if (right) {
                node.right = new TreeNode(right)
                queue.push(node.right)
            }
        }

        return root
    }
}