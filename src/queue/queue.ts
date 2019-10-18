class Queue<T> {
    items: T[];

    constructor(...items: T[]) {
        this.items = items;
    }

    enqueue(...items: T[]): number {
        return this.items.unshift(...items);
    }

    dequeue(): T | undefined {
        return this.items.pop();
    }
}

export default Queue;