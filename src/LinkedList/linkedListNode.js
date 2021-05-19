function Node(value, next, prev = undefined) {
  this.data = value;
  this.next = next;
  // prev is only for Doubly Linedd List
  this.prev = prev;
}

export default Node;
