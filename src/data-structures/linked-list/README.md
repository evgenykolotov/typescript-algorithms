# Связный список

**Связный список** — базовая динамическая структура данных в информатике, состоящая из узлов, каждый из которых содержит как собственно
данные, так и ссылку на следующий узел списка. Связный список построен из объектов, обычно называемых ячейками. Этот класс содержит все
данные, которые должны храниться в списке, и ссылку на другую ячейку. Ссылка представляет собой справку или указатель на объект такого
же класса. Данная структура позволяет эффективно добавлять и удалять элементы на произвольной позиции в последовательности в процессе
итерации. Более сложные варианты включают дополнительные ссылки, позволяющие эффективно добавлять и удалять произвольные элементы.

![Linked List](/assets/linked-list.jpeg)

Изображение взято из репозитория: [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms).

**Связные списки** - хороший способ хранить элементы, количество которых может со временем увеличиваться или уменьшаться. Чтобы
добавить новую ячейку, нужно всего лишь добавить её в начало или в конец связного списка. Массив распологает фиксированным размером,
поэтому его сложно увеличить, если требуется включить новые элементы.

Принципиальным преимуществом перед массивом является структурная гибкость: порядок элементов связного списка может не совпадать с
порядком расположения элементов данных в памяти компьютера, а порядок обхода списка всегда явно задаётся его внутренними связями. Суть
преимущества состоит в том, что во многих языках создание массива требует указать его размер заранее. Связный список позволяет обойти
это ограничение.

Недостатком связных списков является то, что время доступа линейно (и затруднительно для реализации конвейеров). Быстрый доступ
(случайный) невозможен.

### Временная сложность

| Чтение | Поиск | Вставка (начало/конец) | Вставка (середина) | Удаление (начало/конец) | Удаление (середина) |
| :----: |:-----:|:----------------------:|:------------------:|:-----------------------:|:-------------------:|
|  O(n)  | O(n)  |          O(1)          |        O(n)        |          O(1)           |        O(n)         |

### Ссылки

- [Wikipedia](https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D0%B7%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA)
- [YouTube](https://www.youtube.com/watch?v=KTpOalDwBjg)
