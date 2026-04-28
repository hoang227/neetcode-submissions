class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let ptr = 0
        let count = 0
        for (let i in nums) {
            if (nums[i] === val) {
                count++
            } else {
                nums[ptr] = nums[i]
                ptr++
            }
        }

        return nums.length - count
    }
}
