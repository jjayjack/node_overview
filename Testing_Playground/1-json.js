const fs = require('fs')
const book = {
	title: 'A Court of Mist and Fury',
	author: 'Sarah J. Maas'
}

const bookJSON = JSON.stringify(book)

console.log(bookJSON)

const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)
