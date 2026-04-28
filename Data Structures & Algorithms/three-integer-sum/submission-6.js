class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = []
        const sorted = nums.sort((a,b) => a-b)
        console.log(sorted)
        for (let i = 0; i < sorted.length; i++) {
            let left = i + 1, right = sorted.length - 1
            if (i > 0 && sorted[i] === sorted[i-1]) continue
            
            while (left < right) {
                const sum = sorted[left] + sorted[right] + sorted[i]
                console.log(i, sum, sorted[left], sorted[right], sorted[i])
                if (sum > 0) right--
                else if (sum < 0) left++
                else {
                    res.push([sorted[left], sorted[right], sorted[i]])
                    right--
                    left++
                    if (sorted[left] === sorted[left-1] && sorted[right] === sorted[right+1]) {
                        right--
                        left++
                    }
                    continue
                }
            }
        }

        return res
    }
}
