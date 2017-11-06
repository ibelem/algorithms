import test from 'ava'
const arraydata = require('../common/arraydata')
const sorting = require('../algorithm/sorting')

test('sorting.bubbleSort', t => {
  t.deepEqual(sorting.bubbleSort(arraydata.randomArrayLengthUnique(7)), [0, 1, 2, 3, 4, 5, 6])
})

test('sorting.bubbleSort2', t => {
  t.deepEqual(sorting.bubbleSort2(arraydata.randomArrayLengthUnique(7)), [0, 1, 2, 3, 4, 5, 6])
})

test('sorting.bubbleSort3', t => {
  t.deepEqual(sorting.bubbleSort3(arraydata.randomArrayLengthUnique(7)), [0, 1, 2, 3, 4, 5, 6])
})
