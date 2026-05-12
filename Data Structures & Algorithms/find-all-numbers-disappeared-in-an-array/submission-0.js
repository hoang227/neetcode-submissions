class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        for (let n of nums) {
            let i = Math.abs(n) - 1
            nums[i] = -Math.abs(nums[i]) 
        }

        const res = []
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) res.push(i + 1)
        }

        return res
    }
}
