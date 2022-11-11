const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
	return 'Your notes....'
}

const addNote = (title, body) => {
	const notes = loadNotes()
	const duplicateNotes = notes.filter(function (note) {
		return note.title === title
	})
	if (duplicateNotes.length === 0) {
		notes.push({
			title: title,
			body: body
		})
		saveNotes(notes)
		console.log(chalk.green('Note added!'))
	} else {
		console.log(
			chalk.red('Title name duplicate! ') +
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

const removeNote = () => {}

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote
}
