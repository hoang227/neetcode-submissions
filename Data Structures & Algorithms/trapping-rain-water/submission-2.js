class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const forward = Array(height.length).fill(0)
        const backward = Array(height.length).fill(0)
        let res = 0

        for (let i = 1; i < height.length; i++) {
            if (height[i] > height[i-1]) {
                if (height[i] >= forward[i-1] + height[i-1]) forward[i] = 0
                else forward[i] = forward[i-1] - (height[i] - height[i-1])
            }
            else if (height[i] < height[i-1]) forward[i] = forward[i-1] + height[i-1] - height[i]
            else forward[i] = forward[i-1]
        }

        for (let i = height.length -2 ; i >= 0; i--) {
            if (height[i] > height[i+1]) {
                if (height[i] >= backward[i+1] + height[i+1]) backward[i] = 0
                else backward[i] = backward[i+1] - (height[i] - height[i+1])
            }
            else if (height[i] < height[i+1]) backward[i] = backward[i+1] + height[i+1] - height[i]
            else backward[i] = backward[i+1]
        }

        console.log(forward)
        console.log(backward)

        for (let i = 0; i < forward.length; i++) {
            res += forward[i] > backward[i] ? backward[i] : forward[i]

        }

        return res
    }
}
