class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0
        let count = 0
        let start = 0
        let map = new Map()

        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i])) {
                console.log(start, s[i], count)
                if (start > map.get(s[i])) {
                    map.set(s[i], i)
                    count++
                    longest = Math.max(longest, count)
                    console.log(s[i], count)
                } else {
                    count = i - map.get(s[i])
                    start = map.get(s[i]) + 1
                    map.set(s[i], i)
                }
            } else {
                map.set(s[i], i)
                count++
                longest = Math.max(longest, count)
            }

            
        }

        return longest
    }
}
