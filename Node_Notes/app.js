const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

// Add
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	handler: function () {
		console.log('Adding a new note')
	}
})

//Remove
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	handler: function () {
		console.log('Removing a note')
		console.log(chalk.black("hope it's the one you wanted"))
	}
})

//list
yargs.command({
	command: 'list',
	describe: 'Listing your notes',
	handler: function () {
		console.log('Listing...')
	}
})

//read
yargs.command({
	command: 'read',
	describe: 'Read a note',
	handler: function () {
		console.log('Reading...')
	}
})

console.log(yargs.argv)
