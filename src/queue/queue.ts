/**
 * Queue implementation in TypeScript.
 * @class Queue
 * @template T
 */
class Queue<T> {

    /**
     * Holds items in the Stack.
     * @property {T[]} items
     */
    items: T[];

    /**
     * Creates a new instance of Queue.
     * @param {T[]} items
     */
    constructor(...items: T[]) {
        this.items = items;
    }

    /**
     * Adds items to the end of the queue array.
     * @param {T} items
     * @returns {number} Lenght of the queue array
     */
    enqueue(...items: T[]): number {
        return this.items.unshift(...items);
    }

    /**
     * Removes the first item of the queue array.
     * @returns {T|undefined} Removed item
     */
    dequeue(): T | undefined {
        return this.items.pop();
    }
}

export default Queue;