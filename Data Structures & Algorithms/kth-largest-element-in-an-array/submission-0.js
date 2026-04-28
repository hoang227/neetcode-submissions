class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxPQ = new MinPriorityQueue()

        for (let n of nums) {
            maxPQ.push(n)
            console.log(maxPQ.toArray())
            if (maxPQ.size() > k) maxPQ.pop()
            console.log(maxPQ.toArray())
            console.log("______________")
        }

        return maxPQ.pop()
    }
}
