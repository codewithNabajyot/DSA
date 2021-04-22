// This is a module which contains the basic module of single linkedlist
import Node from "./linkedListNode";

function SingleLinkedList(head) {
  this.head = head ? new Node(head, null) : null;
  this.size = head ? 1 : 0;
}

// Method to display all data of a Linked List
SingleLinkedList.prototype.print = function () {
  let curr = this.head;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
};

SingleLinkedList.prototype.get = function (position) {
  let curr = this.head,
    i = 0;
  while (i < position) {
    curr = curr.next;
    i++;
  }
  return curr.data;
};

// Method to insert a node at the head position
SingleLinkedList.prototype.unshift = function (data) {
  // If already a node exist
  if (this.head) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.size = this.size + 1;
  } else {
    // If the LL is empty
    this.head = new Node(data, null);
    this.size = 1;
  }
};

SingleLinkedList.prototype.push = function (data) {
  // If LL is not blank
  if (this.head) {
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = new Node(data, null);
    this.size = this.size + 1;
  } else {
    // If LL is blank
    this.head = new Node(data, null);
    this.size = 1;
  }
};

SingleLinkedList.prototype.pop = function () {
  let poppedValue;
  if (this.head) {
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    poppedValue = curr.next.data;
    curr.next = null;
    this.size = this.size - 1;
  }
  return poppedValue;
};

SingleLinkedList.prototype.insert = function (data, position) {
  if (this.head) {
    let curr = this.head,
      i = 0,
      prev;
    while (i < position && curr) {
      prev = curr;
      curr = curr.next;
      i++;
    }
    prev.next = new Node(data, curr);
    this.size = this.size + 1;
  } else {
    // If LL is blank
    this.head = new Node(data, null);
    this.size = 1;
  }
};

SingleLinkedList.prototype.delete = function (position) {
  let i = 0,
    prev,
    curr = this.head;
  while (i < position) {
    prev = curr;
    curr = curr.next;
    i++;
  }
  prev.next = curr.next;
};

export default SingleLinkedList;
