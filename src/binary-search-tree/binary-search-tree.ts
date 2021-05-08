import { Nullable } from "../types";
import BinarySearchTreeNode from "./binary-search-tree-node";

/**
 * A binary search tree in TypeScript.
 * Keeps references to two child nodes in a hierarchical structure. The left
 * child must have a value that is smaller than its parent, while the right
 * child must have a greater value.
 * @class BinarySearchTree
 * @template T
 */
class BinarySearchTree<T> {

    /**
     * A pointer to the root node in the tree.
     * @property root
     * @type {?BinarySearchTreeNode}
     */
    root: Nullable<BinarySearchTreeNode<T>>;

    /**
     * Creates a new instance of BinarySearchTree.
     */
    constructor() {
        this.root = null;
    }

    /**
     * Adds a value to the tree.
     * @param {T} value
     */
    add(value: T) {
        const node = new BinarySearchTreeNode<T>(value);

        if (!this.root) {
            this.root = node;
        } else {
            recursiveAdd(this.root, node);
        }
    }

    /**
     * Deletes a value from the tree.
     * @param {T} value
     */
    delete(value: T) {
        let found = this.find(value);

        if (found?.parent) {
            if (found.parent.left === found) {
                found.parent.left = null;
            } else if (found.parent.right === found) {
                found.parent.right = null;
            }
        }

        found = null;
    }

    /**
     * Creates a generator that returns each value in the tree.
     */
    *values(): Generator<T, void, unknown> {
        yield* traverse(this.root);
    }

    find(value: T) {
        let current = this.root;

        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return current;
            }
        }

        return null;
    }
}

/**
 *
 * @param currentNode
 * @param newNode
 */
function recursiveAdd<T>(currentNode: BinarySearchTreeNode<T>, newNode: BinarySearchTreeNode<T>) {
    if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
            currentNode.left = newNode;
        } else {
            currentNode = currentNode.left;
            recursiveAdd(currentNode, newNode);
        }
    } else if (newNode.value > currentNode.value) {
        if (!currentNode.right) {
            currentNode.right = newNode;
        } else {
            currentNode = currentNode.right;
            recursiveAdd(currentNode, newNode);
        }
    }
    newNode.parent = currentNode;
}

/**
 * Yields values in sorted order from lowest value to highest.
 */
function* traverse(node: Nullable<BinarySearchTreeNode<unknown>>): any {
    if (node) {
        if (node.left) {
            yield* traverse(node.left);
        }

        yield node.value;

        if (node.right) {
            yield* traverse(node.right);
        }
    }
}

export default BinarySearchTree;