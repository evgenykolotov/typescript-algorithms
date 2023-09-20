import Stack from '../stack';

describe('Тестирование структуры данных «Стек»', () => {
    it('Создание структуры данных «Стек»', () => {
        const stack = new Stack<number>();
        expect(stack).not.toBeNull();
        expect(stack.toString()).toBe('');
        expect(stack.toArray()).toEqual([]);
    });

    it('Добавление данных в «Стек»', () => {
        const stack = new Stack<number>();
        stack.push(1);
        stack.push(2);
        expect(stack).toBeDefined();
        expect(stack.peek()).toBe(2);
        expect(stack.toString()).toBe('2,1');
        expect(stack.toArray()).toEqual([2, 1]);
    });

    it('Получение элемента из «Стека»', () => {
        const stack = new Stack<number>();
        expect(stack.peek()).toBeNull();
        stack.push(1);
        stack.push(2);
        expect(stack.peek()).toBe(2);
        stack.pop()
        expect(stack.peek()).toBe(1);
        expect(stack.peek()).toBe(1);
    });

    it('Удаление элемента из «Стека»', () => {
        const stack = new Stack<number>();
        expect(stack.pop()).toBeNull();
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
        expect(stack.pop()).toBeNull();
    });

    it('Операции push/pop с objects', () => {
        type TStackData = { key: string; value: string; };
        const stringifier = (value: TStackData) => `${value.key}:${value.value}`;
        const stack = new Stack<TStackData>();
        stack.push({ value: 'test1', key: 'key1' });
        stack.push({ value: 'test2', key: 'key2' });
        expect(stack.toString(stringifier)).toBe('key2:test2,key1:test1');
        expect(stack.pop()?.value).toBe('test2');
        expect(stack.pop()?.value).toBe('test1');
    });
});