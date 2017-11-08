const chalk = require('chalk')

module.exports = {
  log: console.log,
  title: function (data) {
    this.log('  ' + chalk.rgb(255, 255, 153).underline(data))
  },
  input: function (data) {
    this.log('    ' + chalk.rgb(0, 255, 255)(data))
  },
  output: function (data) {
    this.log('    ' + chalk.rgb(0, 255, 0)(data))
  },
  emptyline: function (data) {
    this.log('')
  }
}
