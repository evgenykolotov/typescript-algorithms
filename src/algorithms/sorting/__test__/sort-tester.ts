import {
    EMPTY_ARRAY,
    SORTED_ARRAY,
    REVERSE_ARRAY,
    TWO_ELEMENTS_ARRAY,
    ONE_ELEMENTS_ARRAY,
    DOUBLE_ELEMENTS_ARRAY,
    NEGATIVE_SORTED_ARRAY,
    REVERSE_NEGATIVE_ARRAY,
    TWO_ELEMENTS_SORTED_ARRAY,
    DOUBLE_ELEMENTS_SORTED_ARRAY
} from './sort-arrays.default';

export default class SortTester {
    public static testSort(sortFn: (array: number[]) => number[]): void {
        it('Тестирование сортироваки пустого массива', () => {
            expect(sortFn.call(null, [...EMPTY_ARRAY])).toBeDefined();
            expect(sortFn.call(null, [...EMPTY_ARRAY])).toEqual(EMPTY_ARRAY);
            expect(sortFn.call(null, [...EMPTY_ARRAY]).length).toBe(0);
        });

        it('Тестирование сортировки массива с одним элементом', () => {
            expect(sortFn.call(null, [...ONE_ELEMENTS_ARRAY])).toBeDefined();
            expect(sortFn.call(null, [...ONE_ELEMENTS_ARRAY]).length).toBe(1);
            expect(sortFn.call(null, [...ONE_ELEMENTS_ARRAY])).toEqual(ONE_ELEMENTS_ARRAY);
        });

        it('Тестирование сортировки массива с двумя элементами', () => {
            expect(sortFn.call(null, TWO_ELEMENTS_ARRAY)).toBeDefined();
            expect(sortFn.call(null, TWO_ELEMENTS_ARRAY).length).toBe(2);
            expect(sortFn.call(null, TWO_ELEMENTS_ARRAY)).toEqual(TWO_ELEMENTS_SORTED_ARRAY);
        });

        it('Тестирование сортировки массива произвольной длинны', () => {
            expect(sortFn.call(null, REVERSE_ARRAY)).toBeDefined();
            expect(sortFn.call(null, REVERSE_ARRAY)).toEqual(SORTED_ARRAY);
            expect(sortFn.call(null, REVERSE_ARRAY).length).toBe(SORTED_ARRAY.length);
        });

        it('Тестирование сортировки массива с дублями элементов', () => {
            expect(sortFn.call(null, DOUBLE_ELEMENTS_ARRAY)).toBeDefined();
            expect(sortFn.call(null, DOUBLE_ELEMENTS_ARRAY)).toEqual(DOUBLE_ELEMENTS_SORTED_ARRAY);
            expect(sortFn.call(null, DOUBLE_ELEMENTS_ARRAY).length).toBe(DOUBLE_ELEMENTS_SORTED_ARRAY.length);
        });

        it('Тестирование сортировки отсортированного массива', () => {
            expect(sortFn.call(null, [...SORTED_ARRAY])).toBeDefined();
            expect(sortFn.call(null, [...SORTED_ARRAY])).toEqual(SORTED_ARRAY);
            expect(sortFn.call(null, [...SORTED_ARRAY]).length).toBe(SORTED_ARRAY.length);
        });

        it('Тестирование сортировки массива с негативными числами', () => {
            expect(sortFn.call(null, REVERSE_NEGATIVE_ARRAY)).toBeDefined();
            expect(sortFn.call(null, REVERSE_NEGATIVE_ARRAY)).toEqual(NEGATIVE_SORTED_ARRAY);
            expect(sortFn.call(null, REVERSE_NEGATIVE_ARRAY).length).toBe(NEGATIVE_SORTED_ARRAY.length);
        });
    }
}
