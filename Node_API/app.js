const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const city = process.argv[2]
const state = process.argv[3]
const country = process.argv[4]

if (!city | !state | !country) {
	return console.log('Please provide a city, state and country')
} else {
	geocode(
		city,
		state,
		country,
		(error, { latitude, longitude, city, state } = {}) => {
			if (error) {
				return console.log(error)
			}

			forecast(latitude, longitude, (error, forecastData) => {
				if (error) {
					return console.log(error)
				}

				console.log(city, state)
				console.log(forecastData)
			})
		}
	)
}
