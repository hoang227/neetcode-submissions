class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        const buckets = Array.from({length: nums.length + 1},() => [])


        // count freq
        for (let n of nums) map.set(n, 1 + (map.get(n) || 0))

        // fill buckets
        for (let [key, value] of map) buckets[value].push(key)

        let count = 0

        let res = []
        for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
            if (buckets[i].length) res.push(...buckets[i])
        }

        return res.slice(0, k)
    }
}
