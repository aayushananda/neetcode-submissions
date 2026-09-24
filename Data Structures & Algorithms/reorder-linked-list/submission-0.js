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
    let nodes = [];
    let current = head;
    while (current !== null) {
      nodes.push(current);
      current = current.next;
    }
    let l = 1,
      r = nodes.length - 1;
    //nodes = [0, 1, 2, 3, 4, 5, 6]
    //                  l
    //                  r
    //
    //        [0,6,1,5,2,4,3]
    //                   m
    let maker = nodes[0]
    while (l <= r) {
      maker.next = nodes[r];
      maker = maker.next 
      r--
        if(l<=r){
        maker.next = nodes[l]
        maker = maker.next
        l++
      }
    }
    maker.next = null
  }
}
