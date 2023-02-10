require('dotenv').config()

const request = require('postman-request')
const key = process.env.access_key

const forecast = (lat, lon, callback) => {
	const url =
		'https://api.openweathermap.org/data/2.5/weather?lat=' +
		lat +
		'&lon=' +
		lon +
		'&appid=' +
		key +
		'&units=imperial'

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to reach weather services', undefined)
		} else if (!body.coord) {
			callback('Unable to find location', undefined)
		} else {
			callback(
				undefined,
				body.weather[0].description.toUpperCase() +
					': Current temperature is ' +
					body.main.temp +
					' degrees, it currently feels like ' +
					body.main.feels_like +
					' in ' +
					body.name
			)
		}
	})
}

module.exports = forecast
