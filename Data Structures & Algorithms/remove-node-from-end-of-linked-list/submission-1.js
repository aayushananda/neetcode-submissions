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
    let nodes = [],
      current = head;
    while (current !== null) {
      nodes.push(current);
      current = current.next;
    }
    //nodes = [1,2,3,4] n=2
    //
    // target node from beginging= nodes.length-n
    // nodes = [1,2,3,4]
    //            r  t
    //
    // let remover = nodes[target - 1] || r = 2->4
    // remover.next = target.next
    // target.next = null
    let target = nodes.length - n,
      remover = target - 1;
      if(target === 0) return head.next
    nodes[remover].next = nodes[target].next;
    nodes[target].next = null;
    return head;
  }
}
