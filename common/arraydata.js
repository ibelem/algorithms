// randomly generated N = number length array 0 <= A[N] <= 39
let randomArrayLength = function (length) {
  return Array.from({
    length: length
  }, () => Math.floor(Math.random() * length))
}

let shuffle = function shuffle (array) {
  let tmp, current
  let top = array.length
  if (top) {
    while (--top) {
      current = Math.floor(Math.random() * (top + 1))
      tmp = array[current]
      array[current] = array[top]
      array[top] = tmp
    }
  }
  return array
}

let randomArrayLengthUnique = function (length) {
  for (var data = [], i = 0; i < length; ++i) {
    data[i] = i
  }
  return shuffle(data)
}

let randomArrayLengthMax = function (length, max) {
  return Array.apply(null, Array(length)).map(function () {
    return Math.round(Math.random() * max)
  })
}

module.exports = {
  randomArrayLength: randomArrayLength,
  randomArrayLengthUnique: randomArrayLengthUnique,
  randomArrayLengthMax: randomArrayLengthMax
}
