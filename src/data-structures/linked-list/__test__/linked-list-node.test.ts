import LinkedListNode from "../linked-list-node";

describe('LinkedListNode', () => {
    it('создает новый элемент с указанным значением', () => {
        const node = new LinkedListNode(123);
        expect(node.value).toBe(123);
        expect(node.next).toBeNull();
    });

    it('преобразует значение элемента в строку без коллбэка', () => {
        const node = new LinkedListNode(123);
        expect(node.toString()).toBe('123');
    });

    it('преобразует значение элемента в строку с использованием коллбэка', () => {
        const node = new LinkedListNode(123);
        expect(node.toString((value) => `Value: ${value}`)).toBe('Value: 123');
    });

    it('устанавливает ссылку на следующий элемент', () => {
        const nextNode = new LinkedListNode(456);
        const node = new LinkedListNode(123, nextNode);
        expect(node.next).toBeDefined();
        expect(node.next!.value).toBe(456);
    });
});
