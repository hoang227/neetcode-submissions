class FirstUnique {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.seen = new Set()
        this.repeated = new Set()
        this.queue = []
        this.uniqueIndex = 0
        for (let n of nums) {
            this.add(n)
        }
    }

    /**
     * @return {number}
     */
    showFirstUnique() {
        if (this.uniqueIndex === -1) return -1
        return this.queue[this.uniqueIndex]
    }

    /**
     * @param {number} value
     * @return {void}
     */
    add(value) {
        console.log('here')
        if (this.repeated.has(value)) return
        if (this.seen.has(value)) {
            this.repeated.add(value)
            if (value === this.queue[this.uniqueIndex]) {
                this.uniqueIndex++
                while (this.uniqueIndex < this.queue.length) {
                    if (this.repeated.has(this.queue[this.uniqueIndex])) {
                        this.uniqueIndex++
                    } else return
                }
                this.uniqueIndex = -1
                return
            }
        } else {
            this.seen.add(value)
            this.queue.push(value)
            if (this.uniqueIndex === -1) this.uniqueIndex = this.queue.length - 1
        }
    }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
