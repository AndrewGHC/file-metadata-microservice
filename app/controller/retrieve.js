var models = require('../models/models.js');

module.exports = function (identifier, res, req) {
    // Queries db and if short url is correct, redirects to original url. Else, returns error
    models.findOne({'identifier':identifier}, {_id:0, original_url:1}, function(err, docs) {
        if (err) throw err;
        if (docs) {
            res.redirect(docs.original_url);
        } else {
            var incorrectInput = {
                original_url:'http://' + req.headers.host + '/' + identifier,
                short_url: 'Error, incorrect identifier or item has not yet been created'
            };
            res.send(JSON.stringify(incorrectInput));
        }
    });
};