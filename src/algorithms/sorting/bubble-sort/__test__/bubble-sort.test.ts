import { bubbleSort } from '../bubble-sort';
import SortTester from '../../__test__/sort-tester';

describe('Тестирование алгоритма «Пузырьковая сортировка»', () => SortTester.testSort(bubbleSort));
