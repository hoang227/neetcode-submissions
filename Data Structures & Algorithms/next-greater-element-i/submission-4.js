class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const order = new Map()
        const res = Array(nums1.length).fill(-1)

        nums1.forEach((n, i) => order.set(n, i))

        const stack = []

        for (let i = 0; i < nums2.length; i++) {
            if (stack.length === 0 && order.has(nums2[i])) {
                stack.push(nums2[i])
                continue
            }

            while (stack.length && nums2[i] > stack.at(-1)) {
                let top = stack.pop()
                res[order.get(top)] = nums2[i]
            }

            if (order.has(nums2[i])) stack.push(nums2[i])
        }


        return res
    }
}
