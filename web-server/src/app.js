const path = require('path')
const express = require('express')
require('dotenv').config()

const app = express()

const index = path.join(__dirname, '../public')

app.use(express.static(index))

app.get('/weather', (req, res) => {
	res.send({
		location: 'Chicago',
		forecast: 'partly cloudy'
	})
})

app.listen(3000, () => {
	console.log('Server is up on port 3000')
})
