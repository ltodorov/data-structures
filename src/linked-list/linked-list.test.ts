import LinkedList from "./linked-list";
import LinkedListNode from "./linked-list-node";

describe("Linked List", () => {
    let list: LinkedList<number>;

    beforeAll(() => {
        list = new LinkedList();
    });

    it("should contain no values initially", () => {
        expect([...list.values()]).toEqual([]);
    });

    it("should add values to the list", () => {
        list.add(1);
        expect([...list.values()]).toEqual([1]);
        list.add(2);
        expect([...list.values()]).toEqual([1, 2]);
    });

    it("should return size of the list", () => {
        expect(list.size).toBe(2);
    });

    it("should remove value from the list", () => {
        let removed: LinkedListNode<number>;
        removed = list.remove(2);
        expect(removed.value).toBe(2);
        expect([...list.values()]).toEqual([1]);
        expect(list.tail.value).toBe(1);
        removed = list.remove(1);
        expect(removed.value).toBe(1);
        expect([...list.values()]).toEqual([]);
        removed = list.remove(1);
        expect(removed).toBe(undefined);
    });
});