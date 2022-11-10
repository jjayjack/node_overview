const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

// Add
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note Body',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function (argv) {
		console.log('Title: ' + argv.title)
		console.log('Body: ' + argv.body)
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

yargs.parse()
