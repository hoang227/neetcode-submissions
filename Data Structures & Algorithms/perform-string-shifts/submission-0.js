class Solution {
    /**
     * @param {string} s
     * @param {number[][]} shift
     * @return {string}
     */
    shift(s, dir, amt) {
        if (dir === 0) {
            return s.slice(amt) + s.slice(0, amt)
        } else {
            return s.slice(-amt) + s.slice(0, -amt)
        }
    }

    stringShift(s, shift) {
        for (let n of shift) {
            s = this.shift(s, n[0], n[1])
        }

        return s
    }
}
