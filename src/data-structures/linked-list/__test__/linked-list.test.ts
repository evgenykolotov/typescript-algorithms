import LinkedList from '../linked-list';

describe('LinkedList', () => {
    it('Добавляет элементы в список', () => {
        const list = new LinkedList<number>();
        list.append(1).append(2).append(3);

        expect(list.toArray().map(node => node.value)).toEqual([1, 2, 3]);
    });

    it('Удаляет элементы из списка по условию', () => {
        const list = new LinkedList<number>();
        list.append(1).append(2).append(3);

        list.delete(value => value === 2);

        expect(list.toArray().map(node => node.value)).toEqual([1, 3]);
    });

    it('Находит элемент в списке по условию', () => {
        const list = new LinkedList<number>();
        list.append(1).append(2).append(3);

        const foundNode = list.find(value => value === 2);

        expect(foundNode?.value).toBe(2);
    });

    it('Преобразует список в строку', () => {
        const list = new LinkedList<number>();
        list.append(1).append(2).append(3);

        expect(list.toString()).toBe('1,2,3');
    });
});

describe('LinkedList с элементами-объектами', () => {
    const list = new LinkedList<{ id: number, name: string }>();
    list.append({ id: 1, name: 'Alice' })
        .append({ id: 2, name: 'Bob' })
        .append({ id: 3, name: 'Charlie' });

    it('Находит элемент по id', () => {
        const foundNode = list.find(item => item.id === 2);
        expect(foundNode?.value).toEqual({ id: 2, name: 'Bob' });
    });

    it('Находит элемент по name', () => {
        const foundNode = list.find(item => item.name === 'Charlie');
        expect(foundNode?.value).toEqual({ id: 3, name: 'Charlie' });
    });

    it('Возвращает null, если элемент не найден', () => {
        const foundNode = list.find(item => item.name === 'Daniel');
        expect(foundNode).toBeNull();
    });
});
