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
        let res = []
        let i = 0

        while (i < str.length) {
            let j = i
            while (str[j] !== "#") j++
            const length = parseInt(str.slice(i, j))
            const word = str.slice(j + 1, j + 1 + length)
            res.push(word)
            i = j + 1 + length
        }

        return res


        // let counting = false
        // let res = []
        // let curr = ""
        // let i = 0
        // let count = -1
        // while (i < str.length) {
        //     if (!counting && this.isNumeric(str[i])) {
        //         if (str[i] === "0") {
        //             res.push("")
        //             i += 2
        //             continue
        //         }
        //         let collect = str[i]

        //         while (this.isNumeric(str[i+1])) {
        //             collect += str[i+1]
        //             i++
        //         }
        //         count = parseFloat(collect)
        //         i += 2
        //         counting = true
        //     }
        //     curr += str[i]
        //     count -= 1
        //     i++

        //     if (count === 0) {
        //         counting = false
        //         res.push(curr)
        //         curr = ""
        //         count = -1
        //     }
        // }

        // return res
    }
}
