class Solution {
    /**
     * @param {character[][]} picture
     * @return {number}
     */
    findLonelyPixel(picture) {
        const rMap = new Map()
        const cMap = new Map()

        for (let i = 0; i < picture.length; i++) {
            for (let j = 0; j < picture[0].length; j++) {
                if (picture[i][j] === 'B'){
                    rMap.set(i, rMap.has(i) ? rMap.get(i) + 1 : 1)
                    cMap.set(j, cMap.has(j) ? cMap.get(j) + 1 : 1)
                }
            }
        }
        let count = 0
        for (let i = 0; i < picture.length; i++) {
            for (let j = 0; j < picture[0].length; j++) {
                if (rMap.get(i) === 1 && cMap.get(j) === 1 && picture[i][j] === 'B') count++
            }
        }

        return count
    }
}
