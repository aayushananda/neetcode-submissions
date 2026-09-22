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
     * @return {ListNode}
     */
    //A->B->C

    reverseList(head) {
        if(head === null ) return null 
        let prev = null , current = head

        while(current !== null){ 
            let next = current.next
            current.next = prev
            prev = current 
            current = next
        }
        return prev
    
    }
}
