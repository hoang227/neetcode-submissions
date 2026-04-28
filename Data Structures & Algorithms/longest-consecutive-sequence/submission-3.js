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
            if (seen.has(n+1)) {
                let j = n
                while (seen.has(j-1)) j--

                let count = 1
                while (seen.has(j+1)) {
                    count++
                    j++
                }
                longest = Math.max(longest, count)
            }
        }
        return longest
    }
}
