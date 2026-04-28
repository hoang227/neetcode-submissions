class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.arr = []
        for (let n of nums) this.add(n)
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        let i = this.arr.length - 1
        while (i >= 0 && this.arr[i] > val) i--
        this.arr.splice(i + 1, 0, val)

        if (this.arr.length > this.k) this.arr.shift()

        return this.arr[0]
    }
}
