class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        const buckets = Array.from({length: nums.length},() => [])
        let res = []

        for (let n of nums) map.set(n, 1 + (map.get(n) || 0))

        console.log(map)
        console.log(buckets)
        
        for (let [key, value] of map) buckets[value - 1].unshift(key)

        let count = 0

        console.log(buckets)

        for (let i = buckets.length - 1; i >= 0; i--) {
            console.log("bucket: ", buckets[i])
            console.log("count:", count)
            if (count + buckets[i].length > k) {
                res = res.concat(buckets[i].slice(0, k - count))
                break
            } else {
                res = res.concat(buckets[i])
                count += buckets[i].length
            }
            console.log("res:", res)
        }

        return res
    }
}
