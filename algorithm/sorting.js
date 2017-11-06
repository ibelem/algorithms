let bubbleSort = function (array) {
  let i, j, temp
  let n = array.length
  for (i = 0; i < n; i++) {
    // ordered -i array item don't need to compare anymore
    for (j = 0; j < n - 1 - i; j++) {
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
  let i, j
  let n = array.length
  for (i = 0; i < n; i++) {
    for (j = 0; j < n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // ES6 destructuring assignment
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array
}

let bubbleSort3 = function (array) {
  let i
  let n = array.length
  let swapped
  do {
    swapped = false
    for (i = 1; i < n; i++) {
      if (array[i - 1] > array[i]) {
        var temp = array[i - 1]
        array[i - 1] = array[i]
        array[i] = temp
        swapped = true
      }
    }
    n--
  } while (swapped)
  return array
}

module.exports = {
  bubbleSort: bubbleSort,
  bubbleSort2: bubbleSort2,
  bubbleSort3: bubbleSort3
}
