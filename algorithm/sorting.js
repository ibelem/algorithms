let bubbleSort = function (array) {
  let i, j, temp
  for (i = 0; i < array.length - 1; i++) {
    for (j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

let bubbleSort2 = function (array) {
  let i, j, temp
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

let bubbleSort3 = function (array) {
  let i, j
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // ES6 destructuring assignment
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array
}

module.exports = {
  bubbleSort: bubbleSort,
  bubbleSort2: bubbleSort2,
  bubbleSort3: bubbleSort3
}
