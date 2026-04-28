class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const curr = [], res = [], used = new Set

        const dfs = (idx) => {
            console.log(idx, curr, res)

            curr.push(nums[idx])
            used.add(nums[idx])

            if (curr.length === nums.length) {
                res.push([...curr])
                curr.pop()
                used.delete(nums[idx])
                return
            }

            console.log(idx, curr, res)
            console.log("_____________")
            
            for (let i = 0; i < nums.length; i++) {
                if (used.has(nums[i])) continue
                else dfs(i)
            }

            curr.pop()
            used.delete(nums[idx])
        }

        for (let j in nums) dfs(j)

        return res
    }
}
