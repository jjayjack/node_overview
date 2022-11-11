const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
	const notes = loadNotes()
	const duplicateNote = notes.find((note) => note.title === title)

	if (!duplicateNote) {
		notes.push({
			title: title,
			body: body
		})
		saveNotes(notes)
		console.log(chalk.green('Note added!'))
	} else {
		console.log(
			chalk.red('Title name duplicate!') +
				' ' +
				chalk.underline('Please type a different title')
		)
	}
}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)
	} catch (e) {
		return []
	}
}

const removeNote = (title) => {
	const notes = loadNotes()
	const notesToKeep = notes.filter((note) => note.title !== title)
	if (notes.length > notesToKeep.length) {
		saveNotes(notesToKeep)
		console.log(chalk.green('Note removed!'))
	} else {
		console.log(chalk.red('Note not found'))
	}
}

const listNotes = () => {
	console.log(chalk.underline('Your notes:'))
	const notes = loadNotes()

	notes.forEach((note) => {
		console.log(note.title)
	})
}

const readNote = (title) => {
	const notes = loadNotes()
	const searchedNotes = notes.find((note) => note.title === title)

	if (searchedNotes) {
		console.log(
			chalk.bold.green(searchedNotes.title) + ' ' + searchedNotes.body
		)
	} else {
		console.log(
			chalk.red('Title not found! ') +
				chalk.underline('Please type a different title')
		)
	}
}
module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote
}
