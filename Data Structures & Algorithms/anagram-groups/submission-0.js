class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        const res = []

        for (let i = 0; i < strs.length; i++) {
            const key = strs[i].split('').sort().join('')
            if (map.has(key)) map.get(key).push(strs[i])
            else map.set(key, [strs[i]])
        }

        for (let [key, value] of map) res.push(value)

        return res
    }
}
