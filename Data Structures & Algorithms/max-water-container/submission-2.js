class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0, right = heights.length -  1
        let maxA = 0
        
        while (left < right) {
            const area = (right - left) * Math.min(heights[left], heights[right])
            maxA = Math.max(maxA, area)

            if (heights[left] < heights[right]) left++
            else right--
        }

        return maxA
    }
}
