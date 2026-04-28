class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        let left = 0, zeros = 0, max = 0
        for (let right = 0; right < nums.length; right++) {
            if (nums[right] === 0) zeros++

            while (zeros > 1) {
                if (nums[left] === 0) zeros--
                left++
            }

            max = Math.max(max, right - left + 1)
        }

        return max
    }
}
