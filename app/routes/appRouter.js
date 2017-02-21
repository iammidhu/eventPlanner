var auth, speaker, events, venue;

events = require('../routes/eventRoutes');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

    app.use('/api/events/', events);
    app.use('/api/speakers/', function(req, res) {
        console.log("Go to speaker");
    });
    app.get('/api/venue/', function(req, res) {
        console.log("Go to venue");
    });
};
