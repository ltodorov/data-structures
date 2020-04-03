/**
 * Stack implementation in TypeScript
 * @class Stack
 * @template T
 */
class Stack<T> {
    /**
     * Holds items in the Stack
     * @property {T[]} items
     */
    items: T[];

    /**
     * Creates a new instance of Stack
     * @param {T[]} items
     */
    constructor(...items: T[]) {
        this.items = [...items];
    }

    /**
     * Adds items to the top of the stack array
     * @param {T[]} items
     * @returns {number} Lenght of the stack array
     */
    push(...items: T[]): number {
        return this.items.push(...items);
    }

    /**
     * Removes the last item from the stack array
     * @returns {T|undefined} Removed item
     */
    pop(): T | undefined {
        return this.items.pop();
    }
}

export default Stack;