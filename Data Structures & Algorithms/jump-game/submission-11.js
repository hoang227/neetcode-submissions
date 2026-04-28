class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const end = nums.length - 1
        let curr = 0

        while (curr + nums[curr] < end) {
            let max = nums[curr]
            let step = nums[curr]
            for (let i = 1; i <= nums[curr]; i++) {
                if (nums[curr + i] === 0) continue
                console.log(i, nums[curr + i])
                if (nums[curr + i] + i > max) step = i
                max = Math.max(max, nums[curr + i])
            }
            console.log(step)
            if (max === 0) return false
            curr += step
        }

        return true
    }
}
