class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let ptr = 0
        nums.forEach(n => {
            if (n !== val) nums[ptr++] = n
        })
        return ptr
    }
}
