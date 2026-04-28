/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0)
        let curr = dummy
        let carryOver = 0

        while (l1 || l2 || carryOver) {
            let val1 = l1 ? l1.val : 0
            let val2 = l2 ? l2.val : 0

            const sum = val1 + val2 + carryOver
            carryOver = Math.floor(sum / 10)

            curr.next = new ListNode(sum % 10)
            curr = curr.next

            if (l1) l1 = l1.next
            if (l2) l2 = l2.next
        }

        return dummy.next
    }
}
