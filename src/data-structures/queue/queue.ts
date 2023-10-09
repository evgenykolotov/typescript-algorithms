import Stack from "../stack/stack";

/**
 * Интерфейс структуры данных «Очередь».
 * @template T - тип элементов очереди.
 */
export interface IQueue<T> {
    /**
     * Добавление элемента в очередь.
     * @param {T} value - добавляемое значение.
     */
    enqueue(value: T): void;

    /**
     * Удаление элемента из очереди и его возвращение.
     * @returns {T | undefined} Удаленный элемент или undefined, если очередь пуста.
     */
    dequeue(): T | undefined;

    /**
     * Преобразование очереди в строку.
     * @param {(value: T) => string} [callback] - Функция обратного вызова для преобразования элементов очереди в строки.
     * @returns {string} Строка, представляющая элементы очереди.
     */
    toString(callback?: (value: T) => string): string;
}

/**
 * Структура данных «Очередь» на основе двух стеков.
 * @template T - тип элементов очереди.
 * @implements {IQueue<T>}
 */
export class Queue<T> implements IQueue<T> {
    /** Первый стек для добавления элементов. */
    private stack1: Stack<T> = new Stack<T>();

    /** Второй стек для удаления элементов. */
    private stack2: Stack<T> = new Stack<T>();

    /** Добавление элемента в очередь. */
    public enqueue(value: T): void {
        this.stack1.push(value);
    }

    /** Удаление элемента из очереди и его возвращение. */
    public dequeue(): T | undefined {
        if (this.stack2.peek() === undefined) {
            while (this.stack1.peek() !== undefined) {
                this.stack2.push(this.stack1.pop()!);
            }
        }
        return this.stack2.pop();
    }

    /** Преобразование очереди в строку. */
    public toString(callback?: (value: T) => string): string {
        // Объединяем стеки в правильном порядке, затем преобразуем в массив и в строку
        const queueArray = [...this.stack2.toArray().reverse(), ...this.stack1.toArray()];
        if (callback) {
            return queueArray.map(item => callback(item)).join(',');
        }
        return queueArray.join(',');
    }
}
