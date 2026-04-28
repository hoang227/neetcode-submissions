class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    largestUniqueNumber(nums) {
        const seen = new Set()

        for (let n of nums) {
            seen.has(n) ? seen.delete(n) : seen.add(n)
        }

        let largest = -1

        for (let n of [...seen]) {
            largest = Math.max(n, largest)
        }

        return largest
    }
}
