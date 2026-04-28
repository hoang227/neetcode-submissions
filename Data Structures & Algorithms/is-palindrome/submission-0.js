class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        let left = 0, right = clean.length - 1

        while (left < right) {
            if (clean[left] !== clean[right]) return false
            left++
            right--
        }

        return true
    }
}
