import BinarySearchTreeNode from "./binary-search-tree-node";

describe("Binary Search Tree Node", () => {
    it("should create a new binary search tree node", () => {
        const node = new BinarySearchTreeNode<string>("A");
        expect(node).toEqual({
            value: "A",
            left: null,
            right: null
        });
    });
});