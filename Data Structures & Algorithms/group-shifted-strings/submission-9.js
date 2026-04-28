class Solution {
    /**
     * @param {string[]} strings
     * @return {string[][]}
     */
    getShift(str) {
        if (str.length === 1) return ""
        
        let res = 0
        let ten = 0

        return Array.from({length: str.length - 1}, (_, i) => {
            let diff = str[i].charCodeAt(0) - str[i+1].charCodeAt(0)
            return (diff + 26) % 26
        }).join(',')
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
