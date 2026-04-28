class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    canPermutePalindrome(s) {
        let seen = new Set()

        for (let c of s) {
            if (seen.has(c)) seen.delete(c)
            else seen.add(c)
        }

        if (s.length % 2 === 1) return seen.size === 1
        else return seen.size === 0
    }
}
