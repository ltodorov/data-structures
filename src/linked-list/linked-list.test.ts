import LinkedList from "./linked-list";
import LinkedListNode from "./linked-list-node";

describe("Linked List", () => {
    let list: LinkedList<number>;

    beforeEach(() => {
        list = new LinkedList();
    });

    it("should contain no values initially", () => {
        expect([...list.values()]).toEqual([]);
        expect(list.size).toBe(0);
    });

    it("should add values to the list", () => {
        list.add(1);
        expect([...list.values()]).toEqual([1]);
        list.add(2);
        expect([...list.values()]).toEqual([1, 2]);
        expect(list.size).toBe(2);
    });

    it("should reverse the list", () => {
        list.add(1);
        list.add(2);
        list.add(3);
        expect([...list.values()]).toEqual([1, 2, 3]);
        list.reverse();
        expect([...list.values()]).toEqual([3, 2, 1]);
    });

    it("should clear the list", () => {
        list.add(1);
        list.clear();
        expect(list.size).toBe(0);
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
    });

    describe("remove", () => {
        let removed: LinkedListNode<number>;

        beforeEach(() => {
            list.add(1);
            list.add(2);
            list.add(3);
        });

        it("should remove a node with previous and next", () => {
            expect(list.size).toBe(3);
            removed = list.remove(2);
            expect(removed.value).toBe(2);
            expect(list.size).toBe(2);
        });

        it("should remove a head node", () => {
            removed = list.remove(1);
            expect(removed.value).toBe(1);
            expect(list.head.value).toBe(2);
        });

        it("should remove a tail node", () => {
            removed = list.remove(3);
            expect(removed.value).toBe(3);
            expect(list.tail.value).toBe(2);
        });

        it("should remove all nodes", () => {
            list.remove(1);
            list.remove(2);
            list.remove(3);
            expect(list.head).toBe(null);
            expect(list.tail).toBe(null);
        });
    });

    describe("search", () => {
        beforeEach(() => {
            list.add(1);
            list.add(2);
            list.add(3);
        });

        it("should return the found item", () => {
            expect(list.search(2)).toBe(2);
        });

        it("should return null if item is not found", () => {
            expect(list.search(4)).toBe(null);
        });

        it("should return null if no items in the linked list", () => {
            list.clear();
            expect(list.search(1)).toBe(null);
        });
    });
});