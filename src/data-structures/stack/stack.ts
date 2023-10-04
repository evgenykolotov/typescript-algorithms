/**
 * Интерфейс структуры данных «Стек».
 * @template T - тип элементов стека.
 */
export interface IStack<T> {
    /**
     * Добавление элемента в стек.
     * @param {T} value - добавляемое значение.
     */
    push(value: T): void;

    /**
     * Удаление элемента из стека и его возвращение.
     * @returns {T | undefined} Удаленный элемент или undefined, если стек пуст.
     */
    pop(): T | undefined;

    /**
     * Получение верхнего элемента стека без его удаления.
     * @returns {T | undefined} Верхний элемент или undefined, если стек пуст.
     */
    peek(): T | undefined;


    /**
     * Преобразование стека в массив.
     * @returns {T[]} Массив, представляющий элементы стека в порядке их добавления.
     */
    toArray(): T[];

    /**
     * Преобразование стека в строку.
     * @param {(node: T) => string} [callback] - Функция обратного вызова для преобразования элементов стека в строки.
     * @returns {string} Строка, представляющая элементы стека.
     */
    toString(callback?: (node: T) => string): string;
}

/**
 * Структура данных «Стек».
 * @template T - тип элементов стека.
 * @implements {IStack<T>}
 */
export default class Stack<T> implements IStack<T> {
    /** Массив для хранения элементов стека. */
    private readonly list: Array<T> = [];

    /** Добавление элемента в стек. */
    public push(value: T): void {
        this.list.push(value);
    }

    /** Удаление элемента из стека и его возвращение. */
    public pop(): T | undefined {
        return this.list.pop();
    }

    /** Получение верхнего элемента стека без его удаления. */
    public peek(): T | undefined {
        return this.list.at(-1);
    }

    /** Преобразование стека в массив. */
    public toArray(): T[] {
        return this.list.slice();
    }

    /** Преобразование стека в строку. */
    public toString(callback?: (node: T) => string): string {
        if (callback) {
            return this.list.map(node => callback(node)).join(',');
        }
        return this.list.join(',');
    }
}
