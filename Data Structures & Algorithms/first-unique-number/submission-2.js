class FirstUnique {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.queue = new Set()
        this.seen = new Set()
        for (let n of nums) {
            this.add(n)
        }
    }

    /**
     * @return {number}
     */
    showFirstUnique() {
        if (this.queue.size === 0) return -1
        return this.queue.values().next().value 
    }

    /**
     * @param {number} value
     * @return {void}
     */
    add(value) {
        if (this.seen.has(value)) {
            this.queue.delete(value)
        } else {
            this.seen.add(value)
            this.queue.add(value)
        }
    }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
