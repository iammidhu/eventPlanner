//model variable declaration
var Events = require('./models/event');

module.exports = function(app) {
    // sample api route
    app.get('/api/nerds', function(req, res) {
        // use mongoose to get all nerds in the database
        Events.find(function(err, nerds) {

            if (err)
                res.send(err);
            res.json(nerds);
        });
    });

    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};
