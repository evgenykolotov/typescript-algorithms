import LinkedListNode, { ILinkedListNode } from './linked-list-node';

/**
 * @template T
 * @interface
 * @property {(value: T) => ILinkedList<T>} append - Добавление элемента в список.
 * @property {(callback: (node: T) => boolean) => ILinkedList<T>} remove - Удаление элемента из списка.
 * @property {(callback: (node: T) => boolean) => ILinkedListNode<T> | null} search - Поиск элемента в списке.
 * @property {() => ILinkedListNode<T>[]} toArray - Приведение списка к массиву.
 * @property {(callback?: (value: T) => string) => string} toString - Приведение списка к строке.
 */
export interface ILinkedList<T> {
    append: (value: T) => ILinkedList<T>;
    delete: (callback: (node: T) => boolean) => ILinkedList<T>;
    find: (callback: (node: T) => boolean) => ILinkedListNode<T> | null;
    toArray: () => ILinkedListNode<T>[];
    toString: (callback?: (value: T) => string) => string;
}

/**
 * Структура данных "Односвязный список".
 * @template T
 * @class
 * @implements {ILinkedList<T>}
 */
export default class LinkedList<T> implements ILinkedList<T> {
    /** @private @type {(ILinkedListNode<T> | null)} Указатель на начало списка */
    private head: ILinkedListNode<T> | null = null;

    /** @private @type {(ILinkedListNode<T> | null)} Указатель на конец списка */
    private tail: ILinkedListNode<T> | null = null;

    /**
     * Добавление элемента в конец списка.
     * @param {T} value - Значение для добавления.
     * @returns {ILinkedList<T>} - Обновленный список.
     */
    public append(value: T): ILinkedList<T> {
        const node = new LinkedListNode<T>(value);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            (this.tail as ILinkedListNode<T>).next = node;
            this.tail = node;
        }
        return this;
    }

    /**
     * Удаление элемента из списка.
     * @param {(node: T) => boolean} callback - Функция-коллбек для определения удаляемого элемента.
     * @returns {ILinkedList<T>} - Обновленный список.
     */
    public delete(callback: (node: T) => boolean): ILinkedList<T> {
        if (!this.head) return this;
        while (this.head && callback(this.head.value)) {
            this.head = this.head.next;
        }
        let current: ILinkedListNode<T> | null = this.head;
        while (current?.next) {
            if (callback(current.next.value)) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
        // Обновляем указатель на хвостовой элемент после удаления
        if (!this.head) {
            this.tail = null;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            this.tail = current;
        }
        return this;
    }

    /**
     * Поиск элемента в списке.
     * @param {(node: T) => boolean} callback - Функция-коллбек для определения искомого элемента.
     * @returns {(ILinkedListNode<T> | null)} - Найденный элемент или null.
     */
    public find(callback: (node: T) => boolean): ILinkedListNode<T> | null {
        let current: ILinkedListNode<T> | null = this.head;
        while (current) {
            if (callback(current.value)) return current;
            current = current.next;
        }
        return null;
    }

    /**
     * Приведение списка к массиву.
     * @returns {ILinkedListNode<T>[]} - Массив элементов списка.
     */
    public toArray(): ILinkedListNode<T>[] {
        const nodes: ILinkedListNode<T>[] = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }

    /**
     * Приведение списка к строке.
     * @param {(value: T) => string} [callback] - Функция-коллбек для преобразования значения элемента в строку.
     * @returns {string} - Строковое представление списка.
     */
    public toString(callback?: (value: T) => string): string {
        return this.toArray().map(node => node.toString(callback)).toString();
    }
}
