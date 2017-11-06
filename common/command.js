const chalk = require('chalk')

/*
const log = console.log
module.exports = function (data) {
  log(chalk.green(data))
}
*/

const log = console.log

let title = function (data) {
  log('  ' + chalk.rgb(255, 255, 153).underline(data))
}

let input = function (data) {
  log('    ' + chalk.rgb(0, 255, 255)(data))
}

let output = function (data) {
  log('    ' + chalk.rgb(0, 255, 0)(data))
}

let emptyline = function (data) {
  log('')
}

module.exports = {
  title: title,
  input: input,
  output: output,
  emptyline: emptyline
}
