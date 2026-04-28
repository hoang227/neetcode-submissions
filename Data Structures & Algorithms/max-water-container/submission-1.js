class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0, right = heights.length -  1
        let maxA = this.getArea(left, right, heights)
        
        while (left < right) {
            const moveLeft = this.getArea(left+1, right, heights)
            const moveRight = this.getArea(left, right-1, heights)
            if (moveLeft >= maxA) {
                maxA = moveLeft
                left++
            } else if (moveRight >= maxA) {
                maxA = moveRight
                right--
            } else {
                if (heights[left] < heights[right]) left++
                else right--
            }

            console.log("left:", left, heights[left])
            console.log("right:", right, heights[right])
            console.log("base:", right - left)
            console.log("height:", Math.min(heights[left], heights[right]))
            console.log("area:", this.getArea(left, right, heights))
            console.log("max:", maxA)
            console.log("______________")
        }

        return maxA
    }

    getArea(l, r, heights) {
        return (r - l) * Math.min(heights[l], heights[r])
    }
}
