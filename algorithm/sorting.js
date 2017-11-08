module.exports = {
  bubbleSort: function (array) {
    let i, j
    let n = array.length
    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++) {
        if (array[j] > array[j + 1]) {
          this.swap(array, j, j + 1)
        }
      }
    }
    return array
  },

  bubbleSort2: function (array) {
    let i, j
    let n = array.length
    for (i = 0; i < n; i++) {
      // ordered -i array item don't need to compare anymore
      for (j = 0; j < n - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          this.swap(array, j, j + 1)
        }
      }
    }
    return array
  },

  bubbleSort3: function (array) {
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
  },

  bubbleSort4: function (array) {
    let i
    let n = array.length
    let swapped
    do {
      swapped = false
      for (i = 1; i < n; i++) {
        if (array[i - 1] > array[i]) {
          this.swap(array, i - 1, i)
          swapped = true
        }
      }
      n--
    } while (swapped)
    return array
  },

  selectionSort: function (array) {
    let i, j
    let n = array.length
    let indexMin
    for (i = 0; i < n; i++) {
      indexMin = i
      for (j = i + 1; j < n; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j
        }
      }
      this.swap(array, i, indexMin)
    }
    return array
  },

  insertionSort: function (array) {
    let i, j
    let n = array.length
    for (i = 1; i < n; i++) {
      let temp = array[i]
      for (j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j + 1] = array[j]
      }
      array[j + 1] = temp
    }
    return array
  },

  swap: function (array, index1, index2) {
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
    return array
  }
}
