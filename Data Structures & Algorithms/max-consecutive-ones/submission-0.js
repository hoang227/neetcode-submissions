class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0
        let curr = 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) curr++
            else {
                maxCount = Math.max(maxCount, curr)
                curr = 0
            }
        }

        return Math.max(maxCount, curr)
    }
}
