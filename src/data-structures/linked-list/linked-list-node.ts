/**
 * @template T
 * @interface
 * @property {T} value - Полезная нагрузка.
 * @property {(ILinkedListNode<T>|null)} next - Указатель на следующий элемент.
 * @property {(callback?: (value: T) => string) => string} toString - Метод приведения элемента к строке.
 */
export interface ILinkedListNode<T> {
    value: T;
    next: ILinkedListNode<T> | null;
    toString: (callback?: (value: T) => string) => string;
}

/**
 * Элемент односвязного списка.
 * @template T
 * @class
 * @implements {ILinkedListNode<T>}
 */
export default class LinkedListNode<T> implements ILinkedListNode<T> {
    /** @type {T} */
    public value: T;

    /** @type {(ILinkedListNode<T>|null)} */
    public next: ILinkedListNode<T> | null;

    /**
     * Создает экземпляр элемента односвязного списка.
     * @param {T} value - Полезная нагрузка.
     * @param {(ILinkedListNode<T>|null)} [next=null] - Указатель на следующий элемент.
     */
    constructor(value: T, next: ILinkedListNode<T> | null = null) {
        this.value = value;
        this.next = next;
    }

    /**
     * Преобразует элемент списка в строку.
     * @param {(value: T) => string} [callback] - Функция преобразования полезной нагрузки в строку.
     * @returns {string}
     */
    public toString(callback?: (value: T) => string): string {
        return callback ? callback(this.value) : `${this.value}`;
    }
}
