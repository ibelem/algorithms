const l = require('./common/command')
const arraydata = require('./common/arraydata')
const sorting = require('./algorithm/sorting')

let testdata = arraydata.randomArrayLengthUnique(10)
l('Bubble Sorting:')
l('Input: ' + testdata)
l('Output: ' + sorting.bubbleSort(testdata))

l('')

let testdata2 = arraydata.randomArrayLengthUnique(10)
l('Bubble Sorting 2:')
l('Input: ' + testdata2)
l('Output: ' + sorting.bubbleSort2(testdata2))

l('')

let testdata3 = arraydata.randomArrayLengthUnique(10)
l('Bubble Sorting 3:')
l('Input: ' + testdata3)
l('Output: ' + sorting.bubbleSort3(testdata3))

l('')
