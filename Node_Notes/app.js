const chalk = require('chalk')
const yargs = require('yargs')
const { removeNote } = require('./notes.js')
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
	handler(argv) {
		notes.addNote(argv.title, argv.body)
	}
})

//Remove
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
		title: {
			describe: 'Note Title to be removed',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.removeNote(argv.title)
	}
})

//list
yargs.command({
	command: 'list',
	describe: 'Listing your notes',
	handler() {
		notes.listNotes()
	}
})

//read
yargs.command({
	command: 'read',
	describe: 'Read a note',
	handler() {
		console.log('Reading...')
	}
})

yargs.parse()
