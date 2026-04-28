class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseWords(s) {
        const reverse = (l, r) => {
            while (l < r) {
                [s[l], s[r]] = [s[r], s[l]]
                l++
                r--
            }
        }

        reverse(0, s.length - 1)
        
        let start = 0
        for (let i = 0; i <= s.length; i++) {
            if (s[i] === ' ' || i === s.length) {
                reverse(start, i - 1)
                start = i + 1
            }
        }

    }
}
