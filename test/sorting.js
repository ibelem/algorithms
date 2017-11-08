import test from 'ava'
const arraydata = require('../common/arraydata')
const sorting = require('../algorithm/sorting')

test('sorting.bubbleSort', t => {
  t.deepEqual(sorting.bubbleSort(arraydata.randomArrayUnique(7)), [0, 1, 2, 3, 4, 5, 6])
})

test('sorting.bubbleSort2', t => {
  t.deepEqual(sorting.bubbleSort2(arraydata.randomArrayUnique(7)), [0, 1, 2, 3, 4, 5, 6])
})

test('sorting.bubbleSort3', t => {
  t.deepEqual(sorting.bubbleSort3(arraydata.randomArrayUnique(7)), [0, 1, 2, 3, 4, 5, 6])
})

test('sorting.bubbleSort4', t => {
  t.deepEqual(sorting.bubbleSort4(arraydata.randomArrayUnique(7)), [0, 1, 2, 3, 4, 5, 6])
})

test('sorting.selectionSort', t => {
  t.deepEqual(sorting.selectionSort(arraydata.randomArrayUnique(7)), [0, 1, 2, 3, 4, 5, 6])
})

test('sorting.insertionSort', t => {
  t.deepEqual(sorting.insertionSort(arraydata.randomArrayUnique(7)), [0, 1, 2, 3, 4, 5, 6])
})
