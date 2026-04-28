class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const end = nums.length - 1
        let curr = 0

        while (curr < end) {
            if (curr + nums[curr] >= end) return true
            let max = nums[curr + nums[curr]] ? nums[curr] : 0
            let step = nums[curr + nums[curr]] ? nums[curr] : 0
            for (let i = 1; i <= nums[curr]; i++) {
                if (nums[curr + i] >= max) {
                    max = nums[curr + i]
                    step = i
                }
                max = Math.max(max, nums[curr + i])
            }
            if (max === 0) return false
            curr += step
        }

        return true
    }
}
