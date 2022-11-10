const fs = require('fs')

// fs.writeFileSync('ReadMe.md', '# Note Taking App using Node.js')

fs.appendFileSync(
	'notes.txt',
	' First Challenge: Append a message to notes.txt'
)

// fs.appendFileSync(
// 	'ReadMe.md',
// 	'## Resources Important resources on appendFileSync using (fs)[https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#fsappendfilepath-data-options-callback]'
// )
