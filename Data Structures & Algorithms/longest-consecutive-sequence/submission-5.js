class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0
        const seen = new Set()
        let longest = 1

        for (let n of nums) seen.add(n)

        for (let n of seen) {
            if (!seen.has(n-1)) {
                let curr = n, count = 1
                while (seen.has(curr+1)) {
                    count++
                    curr++
                }
                longest = Math.max(longest, count)
            }
        }
        return longest
    }
}
