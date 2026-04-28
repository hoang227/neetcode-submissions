class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const curr = [], res = []

        nums.sort()

        const dfs = (idx) => {
            res.push([...curr])
            console.log(idx, nums[idx], curr,res)

            for (let i = idx; i < nums.length; i++) {
                if (i > idx && nums[i] === nums[i-1]) continue
                curr.push(nums[i])
                dfs(i+1)
                curr.pop()
            }
        }

        dfs(0)

        return res
    }
}
