class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        const count = Array(5).fill(0)

        text.split('').forEach(c => {
            if (c === 'b') count[0]++
            else if (c === 'a') count[1]++
            else if (c === 'l') count[2]++
            else if (c === 'o') count[3]++
            else if (c === 'n') count[4]++
        })

        count[2] = Math.floor(count[2]/2)
        count[3] = Math.floor(count[3]/2)
        return Math.min(...count)
    }
}
