class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a,b) => a-b)
        const curr = [], res = []
        let sum = 0

        const dfs = (idx) => {
            console.log(curr, res)
            if (sum === target) {
                res.push([...curr])
                return
            }
            if (sum > target) return

            for (let i = idx; i < candidates.length; i++) {

                // skip duplicates
                if (i > idx && candidates[i] === candidates[i - 1]) continue

                curr.push(candidates[i])
                sum += candidates[i]

                dfs(i+1)

                curr.pop()
                sum -= candidates[i]
            }
        }

        dfs(0)

        return res
    }
}
