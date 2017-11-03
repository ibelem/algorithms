import test from 'ava'
let arraydata = require('../common/arraydata')
let sorting = require('../algorithm/sorting')

test('bubble sort 1', t => {
  t.deepEqual(sorting.bubbleSort(arraydata.randomArrayLengthUnique(7)), [0, 1, 2, 3, 4, 5, 6])
})

test('bubble sort 2', t => {
  t.deepEqual(sorting.bubbleSort2(arraydata.randomArrayLengthUnique(7)), [0, 1, 2, 3, 4, 5, 6])
})

test('bubble sort 3', t => {
  t.deepEqual(sorting.bubbleSort3(arraydata.randomArrayLengthUnique(7)), [0, 1, 2, 3, 4, 5, 6])
})
