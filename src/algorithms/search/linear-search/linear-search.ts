/**
 * Линейный поиск числа в массиве.
 *
 * @param arr - массив чисел для поиска.
 * @param target - искомое число.
 * @returns индекс найденного числа или -1, если число не найдено.
 */
export const linearSearch = (arr: number[], target: number): number => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // возвращаем индекс найденного числа
        }
    }
    return -1; // число не найдено в массиве
}
