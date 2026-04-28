class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const forward = Array(height.length).fill(0)
        const backward = Array(height.length).fill(0)

        let res = 0
        let left = 0, right = height.length - 1
        let maxLeft = height[left]
        let maxRight = height[right]

        while (left < right) {
            console.log("left:", left, height[left])
            console.log("right:", right, height[right])
            maxLeft = Math.max(maxLeft, height[left])
            maxRight = Math.max(maxRight, height[right])
            if (height[left] < height[right]) {
                res += Math.min(maxLeft, maxRight) - height[left] < 0 ? 0 : Math.min(maxLeft, maxRight) - height[left]
                left++
            } else {
                console.log(maxLeft, maxRight)
                console.log(Math.min(maxLeft, maxRight) - height[right])
                res += Math.min(maxLeft, maxRight) - height[right] < 0 ? 0 : Math.min(maxLeft, maxRight) - height[right]
                right--
            }
            console.log("res:", res)
            console.log("____________")

        }

        return res


        // for (let i = 1; i < height.length; i++) {
        //     if (height[i] > height[i-1]) {
        //         if (height[i] >= forward[i-1] + height[i-1]) forward[i] = 0
        //         else forward[i] = forward[i-1] - (height[i] - height[i-1])
        //     }
        //     else if (height[i] < height[i-1]) forward[i] = forward[i-1] + height[i-1] - height[i]
        //     else forward[i] = forward[i-1]
        // }

        // for (let i = height.length -2 ; i >= 0; i--) {
        //     if (height[i] > height[i+1]) {
        //         if (height[i] >= backward[i+1] + height[i+1]) backward[i] = 0
        //         else backward[i] = backward[i+1] - (height[i] - height[i+1])
        //     }
        //     else if (height[i] < height[i+1]) backward[i] = backward[i+1] + height[i+1] - height[i]
        //     else backward[i] = backward[i+1]
        // }


        // for (let i = 0; i < forward.length; i++) {
        //     res += forward[i] > backward[i] ? backward[i] : forward[i]
        // }

        // return res
    }
}
