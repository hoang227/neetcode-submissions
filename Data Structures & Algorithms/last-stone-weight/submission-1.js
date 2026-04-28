class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        stones.sort((a,b) => b-a)
        
        while (stones.length > 1) {
            const x = stones.shift()
            const y = stones.shift()

            if (x === y) {
                if (stones.length === 0) return 0
                else continue
            }
            else {
                const remaining = Math.abs(x-y)
                let i = stones.length - 1
                while (i >= 0 && stones[i] < remaining) i--
                stones.splice(i + 1, 0, remaining)
            }
            console.log(x, y, stones)
        }

        return stones[0]
    }
}
