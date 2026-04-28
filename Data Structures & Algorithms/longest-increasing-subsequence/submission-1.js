class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const tails = []

        for (let n of nums) {
            let left = 0, right = tails.length

            while (left < right) {
                let mid = Math.floor((left + right) / 2)
                if (tails[mid] < n) left = mid + 1 
                else right = mid
            }

            tails[left] = n
        }

        return tails.length
    }
}
