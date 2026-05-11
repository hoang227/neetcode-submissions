class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        if (arr.length < k) return ""
        const distinct = new Set()
        const seen = new Set()

        arr.forEach(s => {
            if (!seen.has(s)) distinct.add(s)
            else distinct.delete(s)
            seen.add(s)
        })

        if (k > [...distinct].length) return ""

        return [...distinct][k - 1]
    }
}
