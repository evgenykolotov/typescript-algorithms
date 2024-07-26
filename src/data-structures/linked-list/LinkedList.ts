import LinkedListNode, { ILinkedListNode } from './LinkedListNode';
import { Iterable } from '../../shared/types/iterator.interface';
import { Disposable } from '../../shared/types/disposable.interface';

/**
 * @template T
 * @interface ILinkedList
 * @extends {Disposable}
 * @extends {Iterable<T>}
 * @property {(value: T) => ILinkedList<T>} append - Добавление элемента в список.
 * @property {(value: T) => ILinkedList<T>} prepend - Добавление элемента в начало списка.
 * @property {(value: T, index: number) => ILinkedList<T>} insert - Добавление элемента в середину списка.
 * @property {(callback: (node: T) => boolean) => ILinkedList<T>} delete - Удаление элемента из списка.
 * @property {() => ILinkedListNode<T> | null} deleteHead - Удаление начального элемента списка.
 * @property {() => ILinkedListNode<T> | null} deleteTail - Удаление конечного элемента списка.
 * @property {(callback: (node: T, index: number) => boolean) => ILinkedListNode<T> | null} find - Поиск элемента в списке.
 * @property {() => Array<T>} toArray - Приведение списка к массиву.
 * @property {(callback?: (value: T) => string) => string} toString - Приведение списка к строке.
 */
export interface ILinkedList<T> extends Disposable, Iterable<T> {
    append: (value: T) => ILinkedList<T>;
    prepend: (value: T) => ILinkedList<T>;
    insert: (value: T, index: number) => ILinkedList<T>;
    delete: (callback: (node: T) => boolean) => ILinkedList<T>;
    deleteHead: () => ILinkedListNode<T> | null;
    deleteTail: () => ILinkedListNode<T> | null;
    find: (callback: (node: T, index: number) => boolean) => ILinkedListNode<T> | null;
    toArray: () => Array<T>;
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
     * Создание связного списка из массива.
     * @param {T[]} array - Массив для создания списка.
     * @returns {ILinkedList<T>} - Связный список.
     */
    public static from<T>(array: T[]): ILinkedList<T> {
        const list: ILinkedList<T> = new LinkedList<T>();
        array.forEach((item: T) => list.append(item));
        return list;
    }

    /**
     * Добавление элемента в конец списка.
     * @param {T} value - Значение для добавления.
     * @returns {ILinkedList<T>} - Обновленный список.
     */
    public append(value: T): ILinkedList<T> {
        const node: ILinkedListNode<T> = new LinkedListNode<T>(value);
        if (!this.head) {
            this.head = this.tail = node;
            return this;
        }
        (this.tail as ILinkedListNode<T>).next = node;
        this.tail = node;
        return this;
    }

    /**
     * Добавление элемента в начало списка.
     * @param {T} value - Значение для добавления.
     * @returns {ILinkedList<T>} - Обновленный список.
     */
    public prepend(value: T): ILinkedList<T> {
        const node: ILinkedListNode<T> = new LinkedListNode<T>(value, this.head);
        this.head = node;
        if (!this.tail) this.tail = node;
        return this;
    }

    /**
     * Добавление элемента в середину списка.
     * @param {T} value - Значение для добавления.
     * @param {number} index - Индекс для добавления.
     * @returns {ILinkedList<T>} - Обновленный список.
     */
    public insert(value: T, index: number): ILinkedList<T> {
        index = index < 0 ? 0 : index;
        if (index === 0) {
            this.prepend(value);
            return this;
        }
        const prevNode: ILinkedListNode<T> | null = this.find((_, i) => i === index);
        if (!prevNode) {
            this.append(value);
            return this;
        }
        const node: ILinkedListNode<T> | null = new LinkedListNode<T>(value, prevNode.next);
        prevNode.next = node;
        if (!node.next) this.tail = node;
        return this;
    }

    /**
     * Поиск элемента в списке.
     * @param {(node: T, index: number) => boolean} callback - Функция для определения искомого элемента.
     * @returns {(ILinkedListNode<T> | null)} - Найденный элемент или null.
     */
    public find(callback: (node: T, index: number) => boolean): ILinkedListNode<T> | null {
        let current: ILinkedListNode<T> | null = this.head, index: number = 0;
        while (current) {
            if (callback(current.value, index)) return current;
            current = current.next;
            index++;
        }
        return null;
    }

    /**
     * Удаление элемента из списка.
     * @param {(node: T) => boolean} callback - Функция для определения удаляемого элемента.
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
        if (!this.head) {
            this.tail = null;
        } else {
            let current: ILinkedListNode<T> = this.head;
            while (current.next) {
                current = current.next;
            }
            this.tail = current;
        }
        return this;
    }

    /**
     * Удаление начального элемента списка.
     * @returns {ILinkedListNode<T> | null} - Удалённый элемент.
     */
    public deleteHead(): ILinkedListNode<T> | null {
        if (!this.head) return null;
        const deletedHead: ILinkedListNode<T> = this.head;
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = this.tail = null;
        }
        return deletedHead;
    }

    /**
     * Удаление конечного элемента списка.
     * @returns {ILinkedListNode<T> | null} - Удалённый элемент.
     */
    deleteTail(): ILinkedListNode<T> | null {
        if (!this.head) return null;
        const deletedTail: ILinkedListNode<T> | null = this.tail;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            let current: ILinkedListNode<T> = this.head;
            while (current.next && current.next !== this.tail) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
        return deletedTail;
    }

    /**
     * Приведение списка к массиву.
     * @returns {ILinkedListNode<T>[]} - Массив элементов списка.
     */
    public toArray(): Array<T> {
        const nodes: Array<T> = [];
        let currentNode: ILinkedListNode<T> | null = this.head;
        while (currentNode) {
            nodes.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return nodes;
    }

    /**
     * Приведение списка к строке.
     * @param {(value: T) => string} [callback] - Функция для преобразования значения элемента в строку.
     * @returns {string} - Строковое представление списка.
     */
    public toString(callback?: (value: T) => string): string {
        return this.toArray().map((node: T) => callback ? callback(node) : String(node)).toString();
    }

    /**
     * Возвращает итератор для однонаправленного связного списка.
     *
     * Итератор позволяет обходить элементы списка в порядке их добавления.
     * Это делает список итерируемым, что позволяет использовать его в циклах for...of,
     * а также в методах, принимающих итерируемые объекты, таких как Array.from.
     *
     * @template T
     * @returns {Iterator<T>} Итератор для однонаправленного связного списка.
     */
    public [Symbol.iterator](): Iterator<T> {
        let current: ILinkedListNode<T> | null = this.head;
        return {
            /**
             * Возвращает следующий элемент в списке.
             *
             * Метод next() возвращает объект с двумя свойствами:
             * - value: значение текущего элемента списка.
             * - done: булево значение, указывающее, есть ли еще элементы для обхода (false) или список завершен (true).
             *
             * @template T
             * @returns {IteratorResult<T>} Объект, содержащий следующее значение в списке и признак завершения обхода.
             */
            next(): IteratorResult<T> {
                if (current) {
                    const value: T = current.value;
                    current = current.next;
                    return { value, done: false };
                }
                return { value: undefined, done: true };
            }
        };
    }

    /**
     * Освобождает ресурсы при выходе из блока `using`
     * @returns {void} Этот метод не возвращает значения.
     */
    public [Symbol.dispose](): void {
        this.head = this.tail = null;
    }
}
