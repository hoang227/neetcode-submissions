class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const sum = nums.reduce((curr, acc) => acc += curr, 0)
        let forward = 0, back = sum - nums[0], ptr = 0
        
        while(ptr < nums.length) {
            if (forward === back) return ptr
            forward += nums[ptr]
            back -= nums[ptr + 1]
            ptr++
        }

        return -1
    }
}
