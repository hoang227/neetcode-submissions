class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const current = []
        const res = []

        const dfs = (idx) => {
            res.push([...current])

            for (let i = idx; i < nums.length; i++) {
                current.push(nums[i])
                dfs(i+1)
                current.pop()
            }
        }

        dfs(0)

        return res
    }
}
