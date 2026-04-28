class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i]

            if (map.has(nums[i])) {
                const matchIdx = map.get(nums[i])
                if (map.get(complement) !== i) return matchIdx > i ? [i, matchIdx] : [matchIdx, i]
            }

            map.set(complement, i)
        }
    }
}
