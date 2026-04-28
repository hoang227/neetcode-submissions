class Solution {
    /**
     * @param {number[][]} arrays
     * @return {number}
     */
    maxDistance(arrays) {
        let smallest = arrays[0].at(0)
        let largest = arrays[0].at(-1)
        let biggestDiff = 0

        for (let i = 1; i < arrays.length; i++) {
            let currLargest = arrays[i].at(-1)
            let currSmallest = arrays[i].at(0)
            console.log(currLargest, currSmallest)
            biggestDiff = Math.max(biggestDiff, Math.abs(largest - currSmallest), Math.abs(smallest - currLargest))
            largest = Math.max(largest, currLargest)
            smallest = Math.min(smallest, currSmallest)
        }

        return biggestDiff
    }
}
