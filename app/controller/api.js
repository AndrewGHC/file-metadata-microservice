var validUrl = require('valid-url');
var randomstring = require("randomstring");
var models = require('../models/models.js');
var path     = process.cwd();

module.exports = function(req, url) {
    // Check if URL is valid
    if (!validUrl.isUri(url)){
        console.log('Invalid URI');
        var errorInUri = {
            original_url:url,
            short_url: 'Error, incorrect URI'
        };
        return JSON.stringify(errorInUri);
    } 
    
    // Return function within export closure
    var URLmodel = models;
    URLmodel.findOne({'original_url':url}, 'original_url short_url', function(err, docs){
        if (err) throw err;
        console.log(docs);
        if (docs) {
            console.log('Find found and called.');
            return 'a';
        } else {
            console.log('Find not found and save called.');
            saveIt();
        }

    });
    
    function saveIt () {
        // Save the model to the db
        var key = randomstring.generate(8);
        var saveURLmodel = new URLmodel({ 
                original_url: url, 
                short_url: 'http://' + req.headers.host + '/' + key,
                identifier: key
        });
        
        saveURLmodel.save(function (err) {
            if (err) throw err;
            console.log('Saved item to database');
        });
    }
};