class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()

        for (let i = 0; i < nums.length; i++) {
            map.set(target - nums[i], i)
        }
        
        console.log(map)

        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                const matchIdx = map.get(nums[i])
                if (map.get(nums[i]) !== i) return matchIdx > i ? [i, matchIdx] : [matchIdx, i]
            }   
        }
    }
}
