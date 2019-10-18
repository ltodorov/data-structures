class Stack<T> {
    items: T[];

    constructor(...items: T[]) {
        this.items = [...items];
    }

    push(...items: T[]): number {
        return this.items.push(...items);
    }

    pop(): T | undefined {
        return this.items.pop();
    }
}

export default Stack;