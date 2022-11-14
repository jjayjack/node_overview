require('dotenv').config()

const request = require('postman-request')
const key = process.env.access_key

const url = `http://api.weatherstack.com/current?access_key=${key}&query=37.8267,-122.4233`
