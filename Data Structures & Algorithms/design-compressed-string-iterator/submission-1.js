class StringIterator {
    /**
     * @param {string} compressedString
     */
    constructor(compressedString) {
        this.stack = []
        let count = ""
        let char = ""
        for (let i = 0; i < compressedString.length; i++) {
            if (/[a-zA-Z]/.test(compressedString[i])) {
                if (char) {
                    this.stack.unshift([char, parseInt(count)])
                    count = ""
                }
                char = compressedString[i]
            } else {
                count += compressedString[i]
            }
        }
        this.stack.unshift([char, parseInt(count)])
    }

    /**
     * @return {character}
     */
    next() {
        const res = this.stack.at(-1)[0]
        console.log(this.stack.at(-1))
        if (this.stack.at(-1)[1] === 1) this.stack.pop()
        else this.stack[this.stack.length - 1] = [this.stack.at(-1)[0], this.stack.at(-1)[1] - 1]
        console.log(this.stack.at(-1))
        return res
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return this.stack.length !== 0
    }
}

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
