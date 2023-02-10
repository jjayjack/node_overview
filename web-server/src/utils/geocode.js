require('dotenv').config()

const request = require('postman-request')
const key = process.env.access_key

const geocode = (city, state, country, callback) => {
	const url =
		'http://api.openweathermap.org/geo/1.0/direct?q=' +
		city +
		',' +
		state +
		',' +
		country +
		'&limit=1&appid=' +
		key

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to reach location services', undefined)
		} else if (!body[0]) {
			callback('Missing request information', undefined)
		} else {
			callback(undefined, {
				latitude: body[0].lat,
				longitude: body[0].lon,
				city: body[0].name,
				state: body[0].state
			})
		}
	})
}

module.exports = geocode
