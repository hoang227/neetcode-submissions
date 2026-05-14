class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        if (pattern.length !== s.split(' ').length) return false

        const map_p = new Map()
        const map_w = new Map()
        const words = s.split(' ')

        let ptr = 0

        while (ptr < pattern.length && ptr < words.length) {
            if (map_p.has(pattern[ptr]) || map_w.has(words[ptr])) {
                if (map_p.get(pattern[ptr]) !== words[ptr]) return false
                if (map_w.get(words[ptr]) !== pattern[ptr]) return false
            } else {
                map_p.set(pattern[ptr], words[ptr])
                map_w.set(words[ptr], pattern[ptr])
            }
            ptr++
        }


        return true
    }
}
