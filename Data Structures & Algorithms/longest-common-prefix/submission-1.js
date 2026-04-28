class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs[0].length === 0) return ""
        let curr = strs[0][0]
        for (let str of strs) {
            if (str.length === 0) return ""
            if (str[0] !== curr) return ""
        }

        return curr + this.longestCommonPrefix(strs.map(str => str.slice(1)))
    }
}
