var api = require('../controller/api.js');
var path = process.cwd();

module.exports = function(app) {
  
    app.get('/', function(req, res) {
        res.sendFile(path + '/app/views/index.html');
    });
    
    app.get('/new/*', function(req, res) {
        api(req, req.params[0], res);
    });
    
};