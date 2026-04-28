class MovingAverage {
    /**
     * @param {number} size
     */
    constructor(size) {
        this.size = size
        this.window = []
        this.sum = 0
    }

    /**
     * @param {number} val
     * @return {number}
     */
    next(val) {
        this.window.push(val)
        this.sum += val
        if (this.window.length <= this.size) {
            return this.sum / this.window.length
        } else {
            this.sum -= this.window[0]
            this.window.shift()
            return this.sum / this.size
        }
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size);
 * var param_1 = obj.next(val);
 */
