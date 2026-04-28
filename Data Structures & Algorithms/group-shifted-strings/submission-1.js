class Solution {
    /**
     * @param {string[]} strings
     * @return {string[][]}
     */
    getShift(str) {
        if (str.length === 1) return ""
        
        let res = ""

        for (let i = 0; i < str.length - 1; i++) {
            let diff = str[i].charCodeAt(0) - str[i+1].charCodeAt(0)
            if (diff < 0) res += (diff + 26).toString()
            else res += diff.toString()
        }

        return res
    }

    groupStrings(strings) {
        const map = new Map()

        for (let str of strings) {
            const shift = this.getShift(str)
            if (map.has(shift)) {
                map.get(shift).push(str)
            } else {
                map.set(shift, [str])
            }
        }
            console.log(map)
        return [...map.values()]
    }

}
