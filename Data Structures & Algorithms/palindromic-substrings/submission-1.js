class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0

        for (let i = 0; i < s.length; i++) {
            let left = i, right = i, count = 0
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                count++
                left--
                right++
            }

            res += count

            left = i, right = i+1, count = 0
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                count++
                left--
                right++
            }

            res += count
        }

        return res
    }
}
