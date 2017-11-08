let bubbleSort = function bubbleSort(array) {
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

let selectionSort = function (array) {
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
    if (i !== indexMin) {
      let temp = array[i]
      array[i] = array[indexMin]
      array[indexMin] = temp
    }
  }
  return array
}
