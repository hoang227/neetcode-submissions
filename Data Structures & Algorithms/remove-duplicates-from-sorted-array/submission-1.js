class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if (nums.length === 1) return 1

        let slow = 0
        let fast = 1

        while (fast < nums.length) {
            if (nums[slow] !== nums[fast]) {
                slow++
                nums[slow] = nums[fast]
            }
            fast++
        }

        return slow + 1
    }
}
