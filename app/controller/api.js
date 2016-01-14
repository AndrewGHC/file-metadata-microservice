var validUrl = require('valid-url');
var randomstring = require("randomstring");
var models = require('../models/models.js');

module.exports = function(req, url, res) {
    // Check if URL is valid
    if (!validUrl.isUri(url)) {
        console.log('Invalid URI');
        var errorInUri = {
            original_url:url,
            short_url: 'Error, incorrect URI'
        };
        res.sent(JSON.stringify(errorInUri));
        return;
    } else {
    
    // Check if url exists in db. If so, return without saving a new item.
        var URLmodel = models;
        URLmodel.findOne({'original_url':url}, {_id:0, original_url:1, short_url:1}, function(err, docs){
            if (err) throw err;
            if (docs) {
                console.log('Find found and returned from db.');
                res.send(JSON.stringify(docs));
            } else {
                console.log('Find not found and saveIt called.');
                saveIt();
            }
    
        });
    }
    
    function saveIt () {
        /* 
        Save the model to the db. 
        
        It's theoretically possible that the generate function could generate the same key twice but the 
        probability of this is so low that this possibility has been ignored.
        */
        var key = randomstring.generate(8);
        var saveURLmodel = new URLmodel({ 
                original_url: url, 
                short_url: 'http://' + req.headers.host + '/' + key,
                identifier: key
        });
        
        saveURLmodel.save(function (err) {
            if (err) throw err;
            var savedDoc = {
                original_url:saveURLmodel.original_url,
                short_url:saveURLmodel.short_url
            };
            res.send(JSON.stringify(savedDoc));
        });
    }
};