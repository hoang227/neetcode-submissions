class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res = 0, left = 0, right = height.length - 1
        let maxLeft = height[left]
        let maxRight = height[right]

        while (left < right) {
            maxLeft = Math.max(maxLeft, height[left])
            maxRight = Math.max(maxRight, height[right])
            if (height[left] < height[right]) {
                res += maxLeft - height[left]
                left++
            } else {
                res += maxRight - height[right]
                right--
            }
        }

        return res
    }
}
