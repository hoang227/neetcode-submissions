class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const curr = [], res = [], used = new Set

        const dfs = () => {
            if (curr.length === nums.length) {
                res.push([...curr])
                return
            }

            for (let i = 0; i < nums.length; i++) {
                if (used.has(nums[i])) continue

                curr.push(nums[i])
                used.add(nums[i])

                dfs()

                curr.pop()
                used.delete(nums[i])
            }
        }

        dfs()

        return res
    }
}
