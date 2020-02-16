import LinkedListNode from "./linked-list-node";

describe("Linked List Node", () => {
    it("should create a new linked list node", () => {
        const node = new LinkedListNode("A");
        expect(node).toEqual({
            value: "A",
            next: null,
            previous: null
        });
    });
});