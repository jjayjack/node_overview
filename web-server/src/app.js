const path = require('path')
const express = require('express')
require('dotenv').config()

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
	res.send('')
})
app.get('/help', (req, res) => {
	res.send([
		{
			name: 'Jocelyn',
			age: 29
		},
		{
			name: 'Andrew',
			age: 32
		}
	])
})
app.get('/about', (req, res) => {
	res.send('<h1>About</h1>')
})
app.get('/weather', (req, res) => {
	res.send({
		location: 'Chicago',
		forecast: 'partly cloudy'
	})
})

app.listen(3000, () => {
	console.log('Server is up on port 3000')
})
