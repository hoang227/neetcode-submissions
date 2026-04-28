/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        
        const cloned = new Map()

        const dfs = (n) => {
            if (!n) return null
            if (cloned.has(n)) return cloned.get(n)
            else {
                const clone = new Node(n.val, [])
                cloned.set(n, clone)
                for (let neighbor of n.neighbors) cloned.get(n).neighbors.push(dfs(neighbor))
                return cloned.get(n)
            }
        }

        return dfs(node)
    }
}
