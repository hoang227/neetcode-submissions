class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {
        const seen = new Set(arr)
        let count = 0

        for (let n of arr) {
            if (seen.has(n + 1)) count++
        }

        return count
    }
}
