const notes = require('./notes.js')
const chalk = require('chalk')

const getNotes = notes()
console.log(getNotes)

const log = console.log

log(chalk.green('Success!'))

log(chalk.bold.inverse('challenged'))
