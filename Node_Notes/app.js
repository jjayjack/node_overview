const validator = require('validator')

const notes = require('./notes.js')

const getNotes = notes()
console.log(getNotes)

// console.log(validator.isEmail('you@me.com'))
console.log(validator.isURL('http://google.com'))
