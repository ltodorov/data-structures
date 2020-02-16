import { Nullable } from "../types";

class LinkedListNode<T> {
    value: T;
    next: Nullable<LinkedListNode<T>>;
    previous: Nullable<LinkedListNode<T>>;

    constructor(value: T) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

export default LinkedListNode;