var path = require('path');
var multer = require('multer'),
    Limits = { fileSize: 10 * 1024 * 1024, files:1 };
var upload = multer({dest: path.join(__dirname+'/uploads'),
                     limits: Limits
                    });

var path = process.cwd();

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.sendFile(path + '/app/views/index.html');
    });
    
    app.post('/form', upload.single('item'), function(req, res) {
        var returnMe = {size:req.file.size};
        res.send(JSON.stringify(returnMe));
    });
    
};