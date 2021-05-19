import BinarySearchTree from "./bst";
describe("Signle Linked List", () => {
  it("It should create a new BST", () => {
    let bst = new BinarySearchTree(10);
    expect(bst.root.value).toBe(10);
  });

  it("It should insert a node in BST", () => {
    let bst = new BinarySearchTree(10);
    expect(bst.root.value).toBe(10);

    bst.insert(5);
    expect(bst.root.left.value).toBe(5);

    bst.insert(12);
    expect(bst.root.right.value).toBe(12);

    bst.insert(11);
    expect(bst.root.right.left.value).toBe(11);
  });
  it("It should find a node in BST", () => {
    let bst = new BinarySearchTree(10);
    expect(bst.root.value).toBe(10);

    bst.insert(5);
    bst.insert(12);
    bst.insert(11);
    expect(bst.find(10)).toBe(true);
    expect(bst.find(12)).toBe(true);
    expect(bst.find(16)).toBe(false);
  });

  it("It should traverse nodes in BST using BFS", () => {
    let bst = new BinarySearchTree(15);
    expect(bst.root.value).toBe(15);

    bst.insert(25);
    bst.insert(10);
    bst.insert(7);
    bst.insert(22);
    bst.insert(17);
    bst.insert(13);
    bst.insert(5);
    bst.insert(9);
    bst.insert(27);
    expect(bst.bfs()).toStrictEqual([15, 10, 25, 7, 13, 22, 27, 5, 9, 17]);
  });

  it("It should traverse nodes in BST using DFS Preorder", () => {
    let bst = new BinarySearchTree(15);
    expect(bst.root.value).toBe(15);

    bst.insert(25);
    bst.insert(10);
    bst.insert(7);
    bst.insert(22);
    bst.insert(17);
    bst.insert(13);
    bst.insert(5);
    bst.insert(9);
    bst.insert(27);
    expect(bst.dfsPreOrder()).toStrictEqual([
      15,
      10,
      7,
      5,
      9,
      13,
      25,
      22,
      17,
      27
    ]);
  });

  it("It should traverse nodes in BST using DFS Inorder", () => {
    let bst = new BinarySearchTree(15);
    expect(bst.root.value).toBe(15);

    bst.insert(25);
    bst.insert(10);
    bst.insert(7);
    bst.insert(22);
    bst.insert(17);
    bst.insert(13);
    bst.insert(5);
    bst.insert(9);
    bst.insert(27);
    expect(bst.dfsInOrder()).toStrictEqual([
      5,
      7,
      9,
      10,
      13,
      15,
      17,
      22,
      25,
      27
    ]);
  });

  it("It should traverse nodes in BST using DFS Post order", () => {
    let bst = new BinarySearchTree(15);
    expect(bst.root.value).toBe(15);

    bst.insert(25);
    bst.insert(10);
    bst.insert(7);
    bst.insert(22);
    bst.insert(17);
    bst.insert(13);
    bst.insert(5);
    bst.insert(9);
    bst.insert(27);
    expect(bst.dfsPostOrder()).toStrictEqual([
      5,
      9,
      7,
      13,
      10,
      17,
      22,
      27,
      25,
      15
    ]);
  });
});
