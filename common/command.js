const chalk = require('chalk')
const log = console.log

module.exports = function (data) {
  log(chalk.green(data))
}
