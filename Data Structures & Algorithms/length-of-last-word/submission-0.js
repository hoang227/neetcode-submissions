class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        return s.split(' ').filter(w => w.length !== 0).at(-1).length
    }
}
