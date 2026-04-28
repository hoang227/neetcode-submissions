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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head
        let fast = head.next

        while (slow && fast) {
            if (slow.val === fast.val) return true
            slow = slow.next
            fast = fast.next
            if (!fast) return false
            else fast = fast.next
        }

        return false
    }
}
