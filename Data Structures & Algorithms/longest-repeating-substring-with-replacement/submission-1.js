class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if (!s.length) return 0

        let count = Array(26).fill(0)
        let A = 'A'.charCodeAt(0)
        let left = 0
        let maxFreq = 1
        let longest = 0

        for (let right = 0; right < s.length; right++) {
            maxFreq = Math.max(maxFreq, ++count[s[right].charCodeAt(0) - A])
            
            let windowSize = right - left + 1
            if (windowSize - maxFreq > k) {
                count[s[left].charCodeAt(0) - A]--
                left++
            }

            longest = Math.max(longest, right - left + 1)
        }

        return longest
    }
}
