class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let ptr = 0

        nums.forEach((_,i) => {
            if (nums[i] !== val) nums[ptr++] = nums[i]
        })

        return ptr
    }
}
