var models = require('../models/models.js');

module.exports = function (identifier, res, req) {
    // Queries db and if short url is correct, redirects to original url. Else, returns error
    models.findOne({'identifier':identifier}, {_id:0, original_url:1}, function(err, docs) {
        if (err) throw err;
        if (docs) {
            console.log('Retrieved and redirecting');
            res.redirect(docs.original_url);
        } else {
            console.log('Incorrect short url or does not exist in db');
            var incorrectInput = {
                original_url:'http://' + req.headers.host + '/' + identifier,
                short_url: 'Error, incorrect identifier or item has not yet been created'
            };
            res.send(JSON.stringify(incorrectInput));
        }
    });
};