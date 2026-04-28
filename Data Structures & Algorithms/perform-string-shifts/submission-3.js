class Solution {
    /**
     * @param {string} s
     * @param {number[][]} shift
     * @return {string}
     */

    stringShift(s, shift) {
        const finalShift = shift[0]
        for (let i = 1; i < shift.length; i++) {
            if (finalShift[0] === shift[i][0]) {
                finalShift[1] += shift[i][1]
            } else {
                if (finalShift[1] >= shift[i][1]) {
                    finalShift[1] -= shift[i][1]
                } else {
                    finalShift[0] = shift[i][0]
                    finalShift[1] = Math.abs(finalShift[1] - shift[i][1])
                }
            }
            console.log(finalShift)
        }

        if (finalShift[0] === 0) {
            return s.slice(finalShift[1]%s.length) + s.slice(0, finalShift[1]%s.length)
        } else {
            return s.slice(-finalShift[1]%s.length) + s.slice(0, -finalShift[1]%s.length)
        }
    }
}
