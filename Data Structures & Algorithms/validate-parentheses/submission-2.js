class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const map = {')' : '(', ']' : '[', '}' : '{'}

        for (let b of s) {
            if (b in map) {
                if (stack.pop() !== map[b]) return false
            } else {
                stack.push(b)
            }
        }

        return stack.length === 0
    }
}
