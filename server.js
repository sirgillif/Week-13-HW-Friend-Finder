// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require(path.join(__dirname, 'app/routing/api-routes.js'))(app);
require(path.join(__dirname, 'app/routing/html-routes.js'))(app);




app.listen(PORT, function (err) {
	if(err)throw err;
	console.log('App listening on PORT ' + PORT);
});