import { Nullable } from "../types";

/**
 * Represents a single node in a Doubly-Linked List.
 * @class LinkedListNode
 * @template T
 */
class LinkedListNode<T> {

    /**
     * The data that this node stores.
     * @property value
     * @type {T}
     */
    value: T;

    /**
     * A pointer to the next node in the Linked List.
     * @property next
     * @type {?LinkedListNode<T>}
     */
    next: Nullable<LinkedListNode<T>>;

    /**
     * A pointer to the previous node in the Linked List.
     * @property previous
     * @type {?LinkedListNode<T>}
     */
    previous: Nullable<LinkedListNode<T>>;

    /**
     * Creates a new instance of LinkedListNode.
     * @param {T} value
     */
    constructor(value: T) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

export default LinkedListNode;