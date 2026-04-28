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
            let found = false
            for (let i = 0; i < s.length; i++) {
                if (s[i].charCodeAt(0) !== t[i].charCodeAt(0)) {
                    if (!found) found = true
                    else return false
                }
            }
            return true
        } else {
            let found = false
            let sIdx = 0
            let tIdx = 0
            while (sIdx < s.length && tIdx < t.length) {
                if (s[sIdx].charCodeAt(0) !== t[tIdx].charCodeAt(0)) {
                    if (!found) found = true
                    else return false
                    if (tIdx+1 < t.length && s[sIdx].charCodeAt(0) === t[tIdx+1].charCodeAt(0)) {
                        tIdx++
                    } else if (sIdx + 1 < s.length && t[tIdx].charCodeAt(0) === s[sIdx+1].charCodeAt(0)) {
                        sIdx++
                    } else return false 
                }
                console.log(s[sIdx], t[tIdx], found)
                sIdx++
                tIdx++
            }
            return found || (sIdx === tIdx)
        }
    }
}
