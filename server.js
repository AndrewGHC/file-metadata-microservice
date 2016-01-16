var express     = require('express');
var routes      = require('./app/routes/routes.js');
var app = express();

routes(app);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
