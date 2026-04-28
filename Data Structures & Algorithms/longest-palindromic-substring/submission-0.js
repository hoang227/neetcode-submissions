class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let res = ""
        let maxL = 0

        for (let i = 0; i < s.length; i++) {
            let left = i, right = i, count = 0
            while (s[left] === s[right]) {
                if (left === right) count++
                else count += 2
                left--
                right++
                if (left < 0 || right >= s.length) break
            }

            if (count > maxL) {
                maxL = count
                res = s.slice(left+1, right)
            }
        }

        for (let i = 0; i < s.length; i++) {
            let left = i, right = i+1, count = 0
            while (s[left] === s[right]) {
                count += 2
                left--
                right++
                if (left < 0 || right >= s.length) break
            }

            if (count > maxL) {
                maxL = count
                res = s.slice(left+1, right)
            }
        }

        return res
    }
}
