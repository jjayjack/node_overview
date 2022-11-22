const https = require('https') //http=require('http')

const url = 'https://jsonplaceholder.typicode.com/posts/1'

const request = https.request(url, (res) => {
	let data = ''

	res.on('data', (chunk) => {
		data = data + chunk.toString()
	})

	res.on('end', () => {
		const JSONdata = JSON.parse(data)
		console.log(JSONdata)
	})
})

request.on('error', (error) => {
	console.log('An error', error)
})

request.end()
