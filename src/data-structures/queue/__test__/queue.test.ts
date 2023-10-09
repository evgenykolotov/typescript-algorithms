import { Queue } from '../queue';

describe('Очередь на основе двух стеков', () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    test('Метод enqueue', () => {
        queue.enqueue(1);
        expect(queue.toString()).toEqual('1');
    });

    test('Метод dequeue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.dequeue()).toEqual(1);
        expect(queue.toString()).toEqual('2,3');
    });

    test('Метод dequeue для пустой очереди', () => {
        expect(queue.dequeue()).toBeUndefined();
    });

    test('Метод toString', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.toString()).toEqual('1,2,3');
        expect(queue.toString((value) => `number: ${value}`)).toEqual('number: 1,number: 2,number: 3');
    });

    test('Комбинированное использование методов', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toEqual(1);
        queue.enqueue(3);
        expect(queue.dequeue()).toEqual(2);
        expect(queue.toString()).toEqual('3');
    });
});
