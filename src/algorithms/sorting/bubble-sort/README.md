# Пузырьковая сортировка

**Пузырьковая сортировка**, иногда называемая сортировкой по убыванию, представляет собой простой алгоритм сортировки, который
многократно проходит по списку для сортировки, сравнивает каждую пару соседних элементов и меняет их местами, если они расположены в
неправильном порядке (по возрастанию или по убыванию). **Пузырьковая сортировка** является довольно медленной, но может показать
приемлемую производительность в малых списках. Она также быстрее, чем более сложные алгоритмы для очень малых списков (около 5 элементов).

## Принцип работы пузырьковой сортировки
1. Пузырьковая сортировка начинает сравнивать два соседних элемента в списке и менять их местами, если они находятся в неправильном порядке.
Порядок сортировки может быть либо по возрастанию, либо по убыванию, в зависимости от задачи.
2. Алгоритм продолжает проходить по списку, сравнивая и меняя элементы, пока не будет сделано полное сканирование списка
без необходимости обмена элементов. Это означает, что самый большой (или самый маленький) элемент перемещается в конец
(или начало) списка после каждого прохода.
3. Важно отметить, что на каждой итерации пузырьковой сортировки наименьший (или наибольший, в зависимости от порядка сортировки)
элемент "всплывает" на своё место. Поэтому он больше не участвует в сравнениях на следующих итерациях.
4. Процесс повторяется до тех пор, пока список полностью не отсортирован. Это может потребовать нескольких проходов.

## Сложность алгоритма
Пузырьковая сортировка не является эффективным алгоритмом для сортировки больших списков из-за своей квадратичной сложности.
Она имеет следующую сложность:

* Лучший случай: O(n) - это происходит, когда список уже отсортирован, и нет необходимости в дополнительных обменах.
* Средний случай: O(n^2) - это типичная сложность для случайных списков.
* Худший случай: O(n^2) - это происходит, когда список отсортирован в обратном порядке, и требуется максимальное количество обменов.

## Устойчивость
Пузырьковая сортировка является стабильной сортировкой, что означает, что она сохраняет относительный порядок равных элементов.
Это важное свойство, если важен порядок элементов с одинаковыми значениями.

## Ограничения и использование
Пузырьковая сортировка наиболее эффективна на небольших списках или в качестве учебного примера. В реальных приложениях, где требуется эффективная сортировка больших объемов данных, чаще используются более эффективные алгоритмы сортировки, такие как быстрая сортировка или сортировка слиянием.

Однако пузырьковая сортировка остается интересной исторической заметкой и хорошим способом понять основы сортировки и алгоритмы вообще.

## Визуальное представление

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)
![Algorithm Visualization](https://media.proglib.io/posts/2021/09/29/745fc0585cd89a40e4ff8c562483b9a6.gif)

## Полезные ресурсы

- [Википедия](https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0_%D0%BF%D1%83%D0%B7%D1%8B%D1%80%D1%8C%D0%BA%D0%BE%D0%BC)
- [Youtube](https://www.youtube.com/watch?v=6Gv8vg0kcHc&index=27&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)