class Solution {
    /**
     * @param {string} s
     * @param {number[][]} shift
     * @return {string}
     */

    stringShift(s, shift) {
        const fin = [0,0]
        for (let n of shift) {
            if (fin[0] === n[0]) {
                fin[1] += n[1]
            } else {
                if (fin[1] >= n[1]) {
                    fin[1] -= n[1]
                } else {
                    fin[0] = n[0]
                    fin[1] = Math.abs(fin[1] - n[1])
                }
            }
        }

        let amt = fin[1]%s.length

        if (fin[0] === 0) {
            return s.slice(amt) + s.slice(0, amt)
        } else {
            return s.slice(-amt) + s.slice(0, -amt)
        }
    }
}
