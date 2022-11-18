require('dotenv').config()

const request = require('postman-request')
const key = process.env.access_key

const geocode = (city, state, country, callback) => {
	const urlGEO =
		'http://api.openweathermap.org/geo/1.0/direct?q=' +
		city +
		',' +
		state +
		',' +
		country +
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
				city: response.body[0].name,
				state: response.body[0].state
			})
		}
	})
}

module.exports = geocode
