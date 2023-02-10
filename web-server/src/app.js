const path = require('path');
const express = require('express');
require('dotenv').config();
const hbs = require('hbs');

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
	if (!req.query.address) {
		return res.send({
			error: 'Address required as HTTP header'
		});
	}
	res.send({
		address: req.query.address,
		location: 'Chicago',
		forecast: 'partly cloudy'
	});
});

//http://localhost:3000/test?search=games&rating=5
app.get('/test', (req, res) => {
	if (!req.query.search) {
		return res.send({
			error: 'Search parameter not found'
		});
	}
	console.log(req.query);
	res.send({
		products: []
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
