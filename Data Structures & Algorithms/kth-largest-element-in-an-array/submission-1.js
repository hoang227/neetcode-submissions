class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const minPQ = new MinPriorityQueue()

        for (let n of nums) {
            minPQ.push(n)
            if (minPQ.size() > k) minPQ.pop()
        }

        return minPQ.pop()
    }
}
