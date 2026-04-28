class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let curr = []
        let sum = 0
        let res = []

        const dfs = (idx) => {
            
            if (sum === target) {
                res.push([...curr])
                return
            }

            if (sum > target || idx === nums.length) return

            sum += nums[idx]
            curr.push(nums[idx])
            dfs(idx)
            sum -= nums[idx]
            curr.pop()

            dfs(idx+1)
        }

        dfs(0)
        return res
    }
}
