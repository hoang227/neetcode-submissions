class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        const buckets = Array.from({length: nums.length + 1},() => [])
        let res = []

        for (let n of nums) map.set(n, 1 + (map.get(n) || 0))

        for (let [key, value] of map) buckets[value].push(key)

        let count = 0
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (count + buckets[i].length > k) {
                res = res.concat(buckets[i].slice(0, k - count))
                break
            } else {
                res = res.concat(buckets[i])
                count += buckets[i].length
            }
        }

        return res
    }
}
