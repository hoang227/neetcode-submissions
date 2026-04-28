class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const open = new Set(['(', '[', '{'])
        const close = new Set([')', ']', '}'])

        for (let b of s) {
            if (open.has(b)) {
                stack.push(b)
            } else {
                const curr = stack.pop()
                if ((curr === '(' && b === ')')
                || (curr === '[' && b === ']')
                || (curr === '{' && b === '}')) continue
                else return false
            }
        }

        return stack.length === 0
    }
}
