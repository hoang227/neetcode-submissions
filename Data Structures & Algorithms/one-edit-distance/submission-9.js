class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isOneEditDistance(s, t) {
        if (Math.abs(s.length - t.length) > 1 || s === t) return false
        if (s.length === 0 || t.length === 0) return true

        if (s.length === t.length) {
            return s.split('').filter((c, i) => c !== t[i]).length === 1
        } else {
            if (s.length > t.length) [s, t] = [t, s]

            for (let i = 0; i < s.length; i++) {
                if (s[i] !== t[i]) {
                    return s.slice(i) === t.slice(i+1)
                }
            }

            return true
        }
    }
}
