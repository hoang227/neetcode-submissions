class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        let prev = -1, curr = 0, longest = 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                longest = Math.max(longest, curr, i - prev)
                curr = i - prev
                prev = i
            } else {
                curr++
                longest = Math.max(longest, curr)
            }
        }

        return longest
    }
}
