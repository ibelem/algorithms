module.exports = {
  swap: function (array, index1, index2) {
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
    return array
  },

  randomArray: function (length) {
    return Array.from({
      length: length
    }, () => Math.floor(Math.random() * length))
  },
  shuffle: function (array) {
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
  },
  randomArrayUnique: function (length) {
    for (var data = [], i = 0; i < length; ++i) {
      data[i] = i
    }
    return this.shuffle(data)
  },
  randomArrayMax: function (length, max) {
    return Array.apply(null, Array(length)).map(function () {
      return Math.round(Math.random() * max)
    })
  }
}
