class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let ptr = 0
        let curr = null
        while (true) {
            for (let str of strs) {
                console.log(ptr, curr)
                if (ptr >= str.length) return str.slice(0,ptr)
                if (curr === null) curr = str[ptr]
                if (str[ptr] !== curr) return str.slice(0,ptr)
            }
            ptr++
            curr = null
        }
    }
}
