class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.sums = []
        let curr = 0
        for (let n of nums) {
            curr += n
            this.sums.push(curr)
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) { 
        if (left === 0) return this.sums[right]
        return this.sums[right] - this.sums[left - 1]
    }
}
