import Stack from "./stack";

describe("Stack", () => {
    it("Should push items to top of stack", () => {
        const stack = new Stack<number>(4, 5);
        expect(stack.push(1, 2, 3)).toBe(5);
        expect(stack.items).toEqual([4, 5, 1, 2, 3]);
    });

    it("Should pop item from top of stack", () => {
        const stack = new Stack<number>(1, 2, 3);
        expect(stack.pop()).toBe(3);
        expect(stack.items).toEqual([1, 2]);
    });
});