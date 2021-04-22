function Node(value, next, prev) {
  this.data = value;
  this.next = next;
  // prev is only for Doubly Linedd List
  this.prev = prev || undefined;
}

export default Node;
