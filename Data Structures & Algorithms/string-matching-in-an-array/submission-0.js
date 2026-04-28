class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    isSubString(s, t) {
        if (s.length === 0) return false
        if (s.length === t.length) return s === t
        for (let i = 0; i < t.length - s.length + 1; i++) {
            if (s === t.slice(i, i + s.length)) return true
        }
        return false
    }

    stringMatching(words) {
        words = words.sort((a,b) => a.length - b.length)
        const res = []
        for (let i = 0; i < words.length; i++) {
            for (let j = i + 1; j < words.length; j++) {
                if (this.isSubString(words[i], words[j])) {
                    res.push(words[i])
                    break
                }
            }
        }
        return res
    }
}
