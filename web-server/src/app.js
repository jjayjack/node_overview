const path = require('path');
const express = require('express');
require('dotenv').config();

const app = express();

const index = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.static(index));

app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather',
		name: 'Jocelyn'
	});
});

app.get('/weather', (req, res) => {
	res.send({
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
		answer: 'Start by touching this...'
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});
