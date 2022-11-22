const express = require('express')

const app = express()

app.get('', (req, res) => {
	res.send('<h1>Weather</h1>')
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
