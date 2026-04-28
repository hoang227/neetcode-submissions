class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        for (let i = 0; i < strs.length; i++) {
            const key = this.generateKey(strs[i])
            if (map.has(key)) map.get(key).push(strs[i])
            else map.set(key, [strs[i]])
        }

        return Array.from(map.values())
    }

    generateKey(s) {
        const map = Array(26).fill(0)
        const a = 'a'.charCodeAt(0)

        for (let ch of s) map[ch.charCodeAt(0) - a]++

        return map.toString()
    }
}
