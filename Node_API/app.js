const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const city = process.argv[2]
const state = process.argv[3]
const country = process.argv[4]

if (!city | !state | !country) {
	return console.log('Please provide a city, state and country')
} else {
	geocode(city, state, country, (error, data) => {
		if (error) {
			return console.log(error)
		}

		forecast(data.latitude, data.longitude, (error, forecastData) => {
			if (error) {
				return console.log(error)
			}

			console.log(data.city, data.state)
			console.log(forecastData)
		})
	})
}
