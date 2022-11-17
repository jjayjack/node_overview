require('dotenv').config()

const request = require('postman-request')
const key = process.env.access_key

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

module.exports = geocode
