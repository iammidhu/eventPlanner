var auth, speaker, events, venue;
var express = require('express');
var router = express.Router();

events = require('../routes/eventRoutes');

router.get('/', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
});

router.use('/api/events/', events);
router.get('/api/speakers/', function(req, res) {
    console.log("Go to speaker");
});
router.get('/api/venue/', function(req, res) {
    console.log("Go to venue");
});

module.exports = router
