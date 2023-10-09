import { linearSearch } from '../linear-search';

describe('Линейный поиск', () => {
    test('Успешный поиск числа в массиве', () => {
        const arr = [2, 4, 7, 1, 9, 3, 6];
        expect(linearSearch(arr, 7)).toBe(2); // 7 находится на позиции с индексом 2
    });

    test('Поиск числа, которого нет в массиве', () => {
        const arr = [2, 4, 7, 1, 9, 3, 6];
        expect(linearSearch(arr, 10)).toBe(-1); // 10 отсутствует в массиве
    });

    test('Поиск числа в пустом массиве', () => {
        const arr: number[] = [];
        expect(linearSearch(arr, 7)).toBe(-1); // массив пуст
    });

    test('Поиск первого вхождения числа в массиве', () => {
        const arr = [2, 4, 7, 1, 7, 3, 6];
        expect(linearSearch(arr, 7)).toBe(2); // первое вхождение 7 на позиции с индексом 2
    });
});
