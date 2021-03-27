import BinarySearchTree from "./binary-search-tree";
import BinarySearchTreeNode from "./binary-search-tree-node";

describe("Binary Search Tree", () => {
    let tree: BinarySearchTree<number>;

    beforeEach(() => {
        tree = new BinarySearchTree();
    });

    //      - 6 -
    //     /     \
    //    2       7
    //   / \       \
    //  1   4       9
    //     / \     /
    //    3   5   8

    it("should create a binary search tree", () => {
        tree.add(6);
        expect(tree.root.value).toBe(6);
        tree.add(2);
        expect(tree.root.left.value).toBe(2);
        tree.add(7);
        expect(tree.root.right.value).toBe(7);
        tree.add(1);
        expect(tree.root.left.left.value).toBe(1);
        tree.add(4);
        expect(tree.root.left.right.value).toBe(4);
        tree.add(9);
        expect(tree.root.right.right.value).toBe(9);
        tree.add(3);
        expect(tree.root.left.right.left.value).toBe(3);
        tree.add(5);
        expect(tree.root.left.right.right.value).toBe(5);
        tree.add(8);
        expect(tree.root.right.right.left.value).toBe(8);
        expect([...tree.values()]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("should find a value", () => {
        tree.add(6);
        tree.add(2);
        tree.add(1);
        tree.add(4);
        expect(tree.find(2)).toEqual({
            node: tree.root.left,
            parent: tree.root
        });
    });

    it("should delete a value", () => {
        tree.add(6);
        tree.add(2);
        tree.add(1);
        tree.add(4);
        tree.delete(2);
        expect(tree.root.value).toBe(6);
        expect(tree.root.left.value).toBe(1);
        // expect(tree.root.left.right.value).toBe(4);
    });

    // it("should add an item to the root of the tree", () => {
    //     tree.add(5);
    //     expect(tree.root.value).toBe(5);
    // });

    // it("should add an item to the left child, no duplication", () => {
    //     tree.add(3);
    //     tree.add(3);
    //     expect(tree.root.left.value).toBe(3);
    // });

    // it("should add an item to the rigth child", () => {
    //     tree.add(6);
    //     expect(tree.root.right.value).toBe(6);
    // });

    // it("should create a binary search tree", () => {
    //     tree.add(1);
    //     expect(tree.root.left.left.value).toBe(1);
    //     tree.add(6);
    //     expect(tree.root.right.value).toBe(6);
    //     tree.add(2);
    //     expect(tree.root.left.left.right.value).toBe(2);
    //     tree.add(8);
    //     expect(tree.root.right.right.value).toBe(8);
    //     expect([...tree.values()]).toEqual([1, 2, 3, 5, 6, 8]);
    // });

    // describe("delete a node", () => {
    //     beforeEach(() => {
    //         tree.add(5);
    //         tree.add(3);
    //         tree.add(1);
    //         tree.add(4);
    //         tree.add(6);
    //         tree.add(2);
    //         tree.add(8);
    //     });

    //     it("should delete the root node", () => {
    //         tree.delete(5);
    //         expect(tree.root).toBe(1);
    //     });
    // });
});