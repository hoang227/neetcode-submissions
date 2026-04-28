class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let count = n

        if (flowerbed.length === 1) return !(flowerbed[0] === 1 && n === 1)

        if (flowerbed[0] === 0 && flowerbed[1] === 0) count--
        if (flowerbed.at(-1) === 0 && flowerbed.at(-2) === 0) count--

        for (let i = 1; i < flowerbed.length - 1; i++) {
            if (flowerbed[i] === 0) {
                if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
                    count--
                    i++
                }
            }
        }

        console.log(count)

        return count <= 0
    }
}
