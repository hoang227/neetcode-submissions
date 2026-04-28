class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    getColumn(square, k) {
        return square.map(s => {
            if (k > s.length) return ""
            else return s[k]
        }).join('')
    }

    validWordSquare(words) {
        if (words.length !== words[0].length) return false
        let k = 0
        while (k < words[0].length) {
            if (words[k] !== this.getColumn(words, k)) return false
            k++
        }
        return true
    }
}
