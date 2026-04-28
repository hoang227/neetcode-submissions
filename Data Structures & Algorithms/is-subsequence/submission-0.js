class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        if (s.length > t.length) return false

        let ptr = 0
        for (let i = 0; i < t.length; i++) {
            let char = s[ptr]
            console.log(t[i], ptr)
            if (t[i] === char) ptr++
            if (ptr === s.length) return true
        }

        console.log(ptr)
        return ptr === s.length
    }
}
