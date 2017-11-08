import test from 'ava'
const arraydata = require('../../common/arraydata')

test('arraydata.randomArray(5)', t => {
  t.deepEqual(arraydata.randomArray(5).length, 5)
  t.deepEqual(typeof (arraydata.randomArray(5)), 'object')
  t.true(Array.isArray(arraydata.randomArray(5)))
})

test('arraydata.randomArrayUnique(5)', t => {
  t.true(Array.isArray(arraydata.randomArrayUnique(5)))
  t.deepEqual(arraydata.randomArrayUnique(5).sort(), [0, 1, 2, 3, 4])
})

test('arraydata.randomArrayMax(5, 10)', t => {
  t.true(Array.isArray(arraydata.randomArrayMax(5, 10)))
  t.deepEqual(arraydata.randomArrayMax(5, 10).length, 5)
})

test('arraydata.shuffle([])', t => {
  t.true(Array.isArray(arraydata.shuffle([])))
  t.deepEqual(arraydata.shuffle([]).length, 0)
})

test('arraydata.shuffle([0, 1])', t => {
  t.true(Array.isArray(arraydata.shuffle([0, 1])))
  t.not(arraydata.shuffle([0, 1]), [])
})

test('arraydata.swap([0, 1], 0, 1)', t => {
  t.deepEqual(arraydata.swap([0, 1], 0, 1), [1, 0])
  t.deepEqual(arraydata.swap([0, 1, 2, 3, 10000], 0, 4), [10000, 1, 2, 3, 0])
})
