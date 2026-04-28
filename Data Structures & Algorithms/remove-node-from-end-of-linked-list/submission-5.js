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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        if (!head.next && n === 1) return head.next

        let tail = head
        for (let i = 0; i < n; i++) {
            tail = tail.next
        }

        let node = head
        let prev = null
        while (tail) {
            tail = tail.next
            prev = node
            node = node.next
        }

        console.log(prev)
        console.log(node)

        if (!prev) return node.next

        prev.next = node.next

        return head
    }
}
