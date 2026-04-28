class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let forward = [1]
        let backward = [1]
        let currF = 1, currB = 1
        let res = []

        for (let i = 0; i < nums.length - 1; i++) {
            let j = nums.length - i - 1
            currF *= nums[i]
            currB *= nums[j]
            forward.push(currF)
            backward.unshift(currB)
        }

        for (let i = 0; i < nums.length; i ++) res.push(forward[i] * backward[i])
        
        return res
    }
}
