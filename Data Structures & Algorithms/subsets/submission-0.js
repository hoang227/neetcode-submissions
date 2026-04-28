class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const current = []
        const res = []

        function dfs(idx) {
            console.log(nums[idx], current)
            res.push([...current])
            console.log(res)

            for (let i = idx; i < nums.length; i++) {
                current.push(nums[i])
                //console.log(current)
                dfs(i+1)
                current.pop()
            }
        }

        dfs(0)

        return res
    }
}
