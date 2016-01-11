var path = process.cwd();
var parser = require('../controller/parser.js');
var url = require('url')

module.exports = function(app) {
  
    app.get('/', function(req, res) {
        res.sendFile(path + '/app/views/index.html');
    });
    
    app.get('/:content', function(req, res) {
        res.send(parser(req.params.content));
    });
};