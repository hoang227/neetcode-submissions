class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        if (t.length !== s.length) return false

        const seen_s = new Map()
        const seen_t = new Map()

        let ptr = 0

        while (ptr < s.length) {
            if (seen_s.has(s[ptr]) || seen_t.has(t[ptr])) {
                if (seen_s.get(s[ptr]) !== t[ptr]) return false
                if (seen_t.get(t[ptr]) !== s[ptr]) return false
            } else {
                seen_s.set(s[ptr], t[ptr])
                seen_t.set(t[ptr], s[ptr])
            }
            ptr++
        }
        return true
    }
}
