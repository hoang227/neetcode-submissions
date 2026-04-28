class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map()
        let longest = 0
        let start = 0

        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i]) && map.get(s[i]) >= start) {
                start = map.get(s[i]) + 1
            }
            map.set(s[i], i)
            longest = Math.max(longest, i - start + 1)
        }
        return longest
    }
}
