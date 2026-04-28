class MovingAverage {
    /**
     * @param {number} size
     */
    constructor(size) {
        this.size = size
        this.left = 0
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
        if (this.window.length - this.left <= this.size) {
            return this.sum / (this.window.length - this.left)
        } else {
            this.sum -= this.window[this.left]
            this.left++
            return this.sum / this.size
        }
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size);
 * var param_1 = obj.next(val);
 */
