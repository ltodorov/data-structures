import { Nullable } from "../types";

/**
 * Represents a single node in a BinarySearchTree.
 * @class BinarySearchTree
 * @template T
 */
class BinarySearchTreeNode<T> {

    /**
     * The data that this node stores.
     * @property value
     * @type {T}
     */
    value: T;

    /**
     * A pointer to the parent node in the Binary Search Tree.
     * @property parent
     * @type {?BinarySearchTreeNode<T>}
     */
    parent: Nullable<BinarySearchTreeNode<T>>;

    /**
     * A pointer to the left node in the Binary Search Tree.
     * @property left
     * @type {?BinarySearchTreeNode<T>}
     */
    left: Nullable<BinarySearchTreeNode<T>>;

    /**
     * A pointer to the right node in the Binary Search Tree.
     * @property right
     * @type {?BinarySearchTreeNode<T>}
     */
    right: Nullable<BinarySearchTreeNode<T>>;

    /**
     * Creates a new instance of BinarySearchTreeNode.
     * @param {T} value
     */
    constructor(value: T) {
        this.value = value;
        this.parent = null;
        this.right = null;
        this.left = null;
    }
}

export default BinarySearchTreeNode;