class ZigzagIterator {
    /**
     * @param {Integer[]} v1
     * @param {Integer[]} v2
     */
    constructor(v1, v2) {
        this.ptr1 = 0
        this.ptr2 = 0
        this.l1 = v1.length
        this.l2 = v2.length
        this.v1 = v1
        this.v2 = v2
        this.isv1 = true
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        console.log("____________")
        console.log(this.ptr1 < this.l1 - 1 || this.ptr2 < this.l2 - 1)
        return this.ptr1 < this.l1 || this.ptr2 < this.l2
    }

    /**
     * @return {integer}
     */
    next() {
        console.log(this.ptr1, this.ptr2)
        if (this.ptr1 === this.l1) {
            this.isv1 = false
        }

        if (this.ptr2 === this.l2) {
            this.isv1 = true
        } 

        if (this.isv1) {
            this.isv1 = !this.isv1
            console.log(this.v1[this.ptr1])
            return this.v1[this.ptr1++]
        } else {
            this.isv1 = !this.isv1
            console.log(this.v2[this.ptr2])
            return this.v2[this.ptr2++]
        }
    }
}

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
