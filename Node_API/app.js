require('dotenv').config()

const request = require('postman-request')
const key = process.env.access_key

const city = Chicago
const state = IL
const country = US

// const urlWeatherStack = `http://api.weatherstack.com/current?access_key=${key}&query=37.8267,-122.4233&units=f`
const urlweather = `https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=${key}&units=imperial`
const urlGEO = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=2&appid=${key}`

request({ url: urlweather }, (error, response) => {
	const dataJSON = JSON.parse(response.body)

	console.log(
		'Current temperature is ' +
			dataJSON.main.temp +
			' degrees, it currently feels like ' +
			dataJSON.main.feels_like
	)
})
