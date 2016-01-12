var path = process.cwd();
var api = require('../controller/api.js');

module.exports = function(app) {
  
    app.get('/', function(req, res) {
        res.send(api(req));
    });
};