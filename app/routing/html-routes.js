var bodyParser = require('body-parser');
var path = require('path');

module.exports= function (app) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.text());
	app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};