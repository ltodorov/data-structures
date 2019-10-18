import Queue from "./queue";

describe("Queue", () => {
    it("Should enqueue items to the left", () => {
        const queue = new Queue<number>(4, 5);
        expect(queue.enqueue(1, 2, 3)).toBe(5);
        expect(queue.items).toEqual([1, 2, 3, 4, 5]);
    });

    it("Should dequeue items from the right", () => {
        const queue = new Queue<number>(1, 2, 3);
        expect(queue.dequeue()).toBe(3);
        expect(queue.items).toEqual([1, 2]);
    });
});