class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for (let str of strs) res += str.length.toString() + "#" + str
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let counting = false
        let res = []
        let curr = ""
        let i = 0
        let count = -1
        console.log(str)
        while (i < str.length) {
            if (!counting && this.isNumeric(str[i])) {
                if (str[i] === "0") {
                    res.push("")
                    i += 2
                    continue
                }
                let collect = str[i]

                while (this.isNumeric(str[i+1])) {
                    collect += str[i+1]
                    i++
                }
                count = parseFloat(collect)
                i += 2
                counting = true
            }
            curr += str[i]
            count -= 1
            i++

            if (count === 0) {
                counting = false
                res.push(curr)
                curr = ""
                count = -1
            }

            console.log("curr:",curr)
            console.log("res:",res)
            console.log("______________")
        }

        return res
    }

    isNumeric(str) {
        return !isNaN(str) && !isNaN(parseFloat(str))
    }
}
