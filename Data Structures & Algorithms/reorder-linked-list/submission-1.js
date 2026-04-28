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
     * @return {void}
     */
    reorderList(head) {
        // let curr = head
        // let nodes = []
        // while (curr) {
        //     nodes.push(curr.val)
        //     curr = curr.next
        // }

        // let tail = head

        // for (let i = 1; i < nodes.length; i++) {
        //     if (i % 2 === 0) {
        //         tail.next = new ListNode(nodes[Math.floor(i / 2)])
        //         tail = tail.next
        //     } else {
        //         tail.next = new ListNode(nodes[nodes.length - Math.floor(i / 2) - 1])
        //         tail = tail.next
        //     }
        // }

        let count = 0
        let mid = 0
        let currMid = head
        let tail = head
        while (tail) {
            count++
            if (Math.floor(count / 2) > mid) {
                mid++
                currMid = currMid.next
            }
            tail = tail.next
        }

        let prev = null
        let curr = currMid.next
        currMid.next = null

        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }

        let list1 = head
        let list2 = prev

        while (list2) {
            let next1 = list1.next
            let next2 = list2.next

            list1.next = list2
            list2.next = next1

            list1 = next1
            list2 = next2
        }
    }
}
