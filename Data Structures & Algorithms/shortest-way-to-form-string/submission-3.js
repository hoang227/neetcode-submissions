class Solution {
    /**
     * @param {string} source
     * @param {string} target
     * @return {number}
     */
    shortestWay(source, target) {
        let sPtr = 0, tPtr = 0, count = 0

        let found = false
        while (sPtr <= source.length) {
            if (sPtr === source.length || tPtr === target.length) {
                if (found) {
                    sPtr = 0
                    count++
                    found = false
                } else {
                    return -1
                }
            }
            if (tPtr >= target.length) break
            if (target[tPtr] !== source[sPtr]) {
                sPtr++
            } else {
                sPtr++
                tPtr++
                found = true
            }
        }
        return count
    }
}
