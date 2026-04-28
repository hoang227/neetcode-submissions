class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let ptr = 0, count = 0
        nums.forEach((_,i) => {
            if (nums[i] === val) count++
            else {
                nums[ptr] = nums[i]
                ptr++
            }
        })

        return nums.length - count
    }
}
