class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isInvalid(n) {
        return n === 2 || n === 3 || n === 4 || n === 5 || n === 7
    }

    getFlipNumber(n) {
        switch (n) {
            case 0 || 1 || 8:
                return n
            case 6:
                return 9
            case 9:
                return 6
        }
    }

    confusingNumber(n) {
        let curr = n
        let ten = 0
        let flip = 0
        while (curr > 0) {
            if (this.isInvalid(curr%10)) return false
            flip += this.getFlipNumber(curr%10) * Math.pow(10,ten)
            ten++
            curr = Math.floor(curr / 10)
            console.log(curr, flip)
        }
        return flip !== n
    }
}
