class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = Array(nums.length).fill(1)
        
        let currF = 1
        for (let i = 0; i < nums.length; i++) {
            res[i] *= currF
            currF *= nums[i]
        }

        console.log(res)

        let currB = 1
        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] *= currB
            currB *= nums[i]
        }

        console.log(res)
        
        return res
    }
}
