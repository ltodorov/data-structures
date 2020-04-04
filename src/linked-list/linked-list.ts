import LinkedListNode from "./linked-list-node";
import { Nullable } from "../types";

/**
 * A Doubly-Linked List implementation in TypeScript.
 * Stores data elements in sequential order and
 * holds pointers to other elements.
 * @class LinkedList
 * @template T
 */
class LinkedList<T> {

    /**
     * Head of the Linked List.
     * @property head
     * @type {?LinkedListNode<T>}
     */
    head: Nullable<LinkedListNode<T>>;

    /**
     * Tail of the Linked List.
     * @property tail
     * @type {?LinkedListNode<T>}
     */
    tail: Nullable<LinkedListNode<T>>;

    /**
     * Creates a new instance of LinkedList.
     */
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Create an iterator that returns each node in the list.
     */
    *values() {
        let current = this.head;
        while (current !== null) {
            yield current.value;
            current = current.next;
        }
    }

    /**
     * Appends data to the end of the list.
     * @param value {T}
     */
    add(value: T) {
        const newNode = new LinkedListNode<T>(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            this.tail && (this.tail.next = newNode);
            newNode.previous = this.tail;
        }
        this.tail = newNode;
    }

    /**
     * Removes a node with the same value from the list.
     * @param value {T}
     */
    remove(value: T) {
        let current = this.head;
        while (current !== null) {
            if (value === current.value) {
                if (current.next === null) {
                    this.tail = current.previous;
                } else {
                    current.next.previous = current.previous;
                }
                if (current.previous === null) {
                    this.head = current.next;
                } else {
                    current.previous.next = current.next;
                }
                return current;
            }
            current = current.next;
        }
    }

    /**
     * Removes all nodes from the list.
     */
    clear() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Returns the number of nodes in the list.
     * @returns {number}
     */
    get size(): number {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    /**
     * Reorganize the list in reverse order.
     */
    reverse() {
        let current = this.head;
        let previous = null;
        let next = null;

        while (current !== null) {
            previous = current.previous;
            next = current.next;
            current.next = previous;
            current.previous = next;
            previous = current;
            current = next;
        }

        this.tail = this.head;
        this.head = previous;
    }
}

export default LinkedList;