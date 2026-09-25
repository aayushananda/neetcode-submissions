// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
       if(!head) return head
    let seen = new Map()
    let current = head
    while(current){
        let copy = new Node(current.val, null , null)
        seen.set(current, copy)
        current = current.next
    }
    current = head 
    while(current){
        seen.set(null, null)
        let copy = seen.get(current)
        copy.next = seen.get(current.next)
        copy.random = seen.get(current.random)
        current = current.next
    }
    return seen.get(head)
    }
}
