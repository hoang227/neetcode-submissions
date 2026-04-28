class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let ptr = 0
        while (true) {
            for (let str of strs) {
                if (ptr >= str.length || str[ptr] !== strs[0][ptr]) {
                    return strs[0].slice(0,ptr)
                }
            }
            ptr++
        }
    }
}
