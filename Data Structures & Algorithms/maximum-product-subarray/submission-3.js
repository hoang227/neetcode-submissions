class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        if (nums.length === 1) return nums[0]

        let currMin = nums[0], currMax = nums[0], max = nums[0]

        console.log(nums[0], currMax, currMin)

        for (let i = 1; i < nums.length; i++) {
            const newMax = Math.max(nums[i], nums[i] * currMax, nums[i] * currMin)
            const newMin = Math.min(nums[i], nums[i] * currMax, nums[i] * currMin)
            currMax = newMax
            currMin = newMin
            max = Math.max(max, newMax)
            console.log(nums[i], currMax, currMin)
        }

        return max
    }
}
