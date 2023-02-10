const path = require('path');
const express = require('express');
require('dotenv').config();
const hbs = require('hbs');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

const index = path.join(__dirname, '../public');

//Handlebars express path
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(index));

app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather',
		name: 'Jocelyn'
	});
});

app.get('/weather', (req, res) => {
	const city = req.query.city;
	const state = req.query.state;
	const country = req.query.country;

	if (!city | !state | !country) {
		return res.send({
			error: 'Address required as HTTP header `/weather?city=chicago&state=IL&country=us'
		});
	}

	geocode(
		city,
		state,
		country,
		(error, { latitude, longitude, city, state } = {}) => {
			if (error) {
				return res.send({
					error: 'Address required as HTTP header `/weather?city=chicago&state=IL&country=us'
				});
			}

			forecast(latitude, longitude, (error, forecastData) => {
				if (error) {
					return res.send({
						error: 'Address required as HTTP header `/weather?city=chicago&state=IL&country=us'
					});
				}

				console.log(city, state);
				console.log(forecastData);
			});
		}
	);

	res.send({
		address: req.query.address,
		location: 'Chicago',
		forecast: 'partly cloudy'
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About',
		name: 'Jocelyn'
	});
});

app.get('/help', (req, res) => {
	res.render('help', {
		question: 'How do I do this?',
		answer: 'Start by touching this...',
		title: 'Helpful tips',
		name: 'Jocelyn'
	});
});

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404 Help',
		name: 'Jocelyn',
		query: req.path,
		errMess: 'Help article not found'
	});
});

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Jocelyn',
		query: req.path,
		errMess: 'Page not found'
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});
