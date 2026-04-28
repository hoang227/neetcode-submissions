class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1, nums2) {
        let idx = new Map()
        for (let i in nums2) {
            if (idx.has(nums2[i])) continue
            idx.set(nums2[i], i)
        }
        
        return nums1.map(n => idx.get(n))
    }
}
