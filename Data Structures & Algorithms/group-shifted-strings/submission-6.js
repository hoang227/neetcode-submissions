class Solution {
    /**
     * @param {string[]} strings
     * @return {string[][]}
     */
    getShift(str) {
        if (str.length === 1) return ""
        
        let res = 0
        let ten = 0

        for (let i = 0; i < str.length - 1; i++) {
            let diff = str[i].charCodeAt(0) - str[i+1].charCodeAt(0)
            if (diff < 0) diff += 26
            res += ((diff + 100) * Math.pow(10,ten))
            ten += 3
        }
        return res.toString()
    }

    groupStrings(strings) {
        const map = new Map()

        for (let str of strings) {
            const shift = this.getShift(str)
            if (!map.has(shift)) map.set(shift, [])
            map.get(shift).push(str)
        }
        return [...map.values()]
    }

}
