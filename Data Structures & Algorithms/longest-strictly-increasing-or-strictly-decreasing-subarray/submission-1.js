class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        let inc = 1, dec = 1, longest = 1

        for (let i = 1; i < nums.length; i++) {
            const curr = nums[i]
            const prev = nums[i - 1]

            if (curr < prev) {
                dec++
                inc = 1
            } else if (curr > prev) {
                inc++
                dec = 1
            } else {
                inc = dec = 1
            }

            longest = Math.max(inc, dec, longest)
        }

        return longest
    }
}
