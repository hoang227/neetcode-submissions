class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let curr = [], res = []

        const dfs = (open, close) => {
            if (curr.length === n * 2) {
                res.push([...curr].join(''))
                return
            }

            if (open < n) {
                curr.push("(")
                dfs(open+1, close)
                curr.pop()
            }

            if (close < open) {
                curr.push(")")
                dfs(open, close+1)
                curr.pop()
            }
        }

        dfs(0,0)

        return res
    }
}
