require('dotenv').config()

const request = require('postman-request')
const key = process.env.access_key

const city = 'Chicago'
const state = 'IL'
const country = 'US'

// const urlWeatherStack = `http://api.weatherstack.com/current?access_key=${key}&query=37.8267,-122.4233&units=f`
// const urlweather = `https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=${key}&units=imperial`
/*
request({ url: urlweather, json: true }, (error, response) => {
	if (error) {
		console.log('Unable to connect to weather service')
	} else if (response.body.error) {
		console.log('Unable to find location')
	} else {
		const dataJSON = response.body
		console.log(
			'Current temperature is ' +
			dataJSON.main.temp +
			' degrees, it currently feels like ' +
			dataJSON.main.feels_like
			)
		}
})

// const latlonRequest =
request({ url: urlGEO, json: true }, (error, response) => {
	if (error) {
		console.log('Unable to reach service')
	} else if (!response.body[0]) {
		console.log('Missing request information')
	} else {
		const latitude = response.body[0].lat
		const longitude = response.body[0].lon
		console.log(latitude)
		console.log(longitude)
	}
})
*/

const geocode = (address, callback) => {
	const urlGEO =
		'http://api.openweathermap.org/geo/1.0/direct?q=' +
		address +
		'&limit=1&appid=' +
		key

	request({ url: urlGEO, json: true }, (error, response) => {
		if (error) {
			callback('Unable to reach location services', undefined)
		} else if (!response.body[0]) {
			callback('Missing request information', undefined)
		} else {
			callback(undefined, {
				latitude: response.body[0].lat,
				longitude: response.body[0].lon,
				location: response.body[0].name
			})
		}
	})
}

geocode('LA,CA,US', (error, data) => {
	console.log('Error:', error)
	console.log('Data', data)
})
