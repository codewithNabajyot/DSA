import SingleLinkedList, { singlyLinkedList } from "./singlyLinkedList";
describe("Signle Linked List", () => {
  it("It should create a new Linkedlist", () => {
    let sl1 = new SingleLinkedList(10);
    expect(sl1.size).toBe(1);
    expect(sl1.head.data).toBe(10);
  });

  it("It should push node to a linked list", () => {
    let sl1 = new SingleLinkedList(11);
    sl1.push(12);
    expect(sl1.size).toBe(2);
    expect(sl1.head.next.data).toBe(12);
    sl1.push(13);
    expect(sl1.size).toBe(3);
    expect(sl1.head.next.next.data).toBe(13);
  });
  it("It should unshift node to a linked list", () => {
    let sl1 = new SingleLinkedList(11);
    sl1.unshift(12);
    expect(sl1.size).toBe(2);
    expect(sl1.head.data).toBe(12);
    sl1.unshift(13);
    expect(sl1.size).toBe(3);
    expect(sl1.head.data).toBe(13);
  });
  it("It should pop node from a linked list", () => {
    let sl1 = new SingleLinkedList(11);
    sl1.push(12);
    sl1.push(13);
    expect(sl1.pop()).toBe(13);
    expect(sl1.size).toBe(2);
  });

  it("It should insert node to a position in a linked list", () => {
    let sl1 = new SingleLinkedList(11);
    sl1.push(13);
    expect(sl1.head.next.data).toBe(13);
    expect(sl1.size).toBe(2);
    sl1.insert(12, 1);
    expect(sl1.head.next.data).toBe(12);
    expect(sl1.size).toBe(3);
  });

  it("It should get node from a linked list", () => {
    let sl1 = new SingleLinkedList();
    sl1.push(11);
    sl1.push(12);
    sl1.push(13);
    expect(sl1.get(0)).toBe(11);
    expect(sl1.get(1)).toBe(12);
    expect(sl1.get(2)).toBe(13);
    expect(sl1.size).toBe(3);
  });
});
