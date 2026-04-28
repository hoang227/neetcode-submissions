class Solution {
    /**
     * @param {string} keyboard
     * @param {string} word
     * @return {number}
     */
    calculateTime(keyboard, word) {
        let keys = new Map()
        for (let i in keyboard) {
            keys.set(keyboard[i], i)
        }

        let time = 0
        let pos = 0
        for (let i = 0; i < word.length; i++) {
            time += Math.abs(pos - keys.get(word[i]))
            pos = keys.get(word[i])
        }

        return time
    }
}
