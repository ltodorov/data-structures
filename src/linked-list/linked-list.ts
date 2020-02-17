import LinkedListNode from "./linked-list-node";
import { Nullable } from "../types";

class LinkedList<T> {
    head: Nullable<LinkedListNode<T>>;
    tail: Nullable<LinkedListNode<T>>;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    *values() {
        let current = this.head;
        while (current !== null) {
            yield current.value;
            current = current.next;
        }
    }

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

    clear() {
        this.head = null;
        this.tail = null;
    }

    get size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

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