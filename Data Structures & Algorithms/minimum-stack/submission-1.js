class MinStack {
    constructor() {
        this.stack = []
        this.min = Number.POSITIVE_INFINITY
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push([val, this.min])
        this.min = Math.min(this.min, val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.min = this.stack.pop()[1]
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1][0]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
