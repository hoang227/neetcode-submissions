class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const map = new Map()

        for (let ch of s) {
            map.set(ch, 1 + (map.get(ch) || 0))
        }

        for (let ch of t) {
            if (!map.has(ch)) return false
            map.set(ch, map.get(ch) - 1)
            if (map.get(ch) === 0) map.delete(ch)
        }

        console.log(map)

        return map.size === 0
    }
}
