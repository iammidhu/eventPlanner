var auth, speaker, events, venue, express, router;

express = require('express');
router = express.Router();

events = require('../routes/eventRoutes');
speaker = require('../routes/speakerRoutes');

router.get('/', function(req, res) {
    res.sendfile('./public/views/index.html');
});

router.use('/api/v1/events/', events);
router.get('/api/speakers/', function(req, res) {
    console.log("Go to speaker");
});
router.get('/api/venue/', function(req, res) {
    console.log("Go to venue");
});

module.exports = router
