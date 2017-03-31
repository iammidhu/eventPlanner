var auth, speaker, events, venue, express, router;

express = require('express');
router = express.Router();

events = require('../routes/eventRoutes');
speaker = require('../routes/speakerRoutes');

router.get('/', function(req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
});

router.use('/api/v1/events/', events);
router.get('/api/speakers', function(req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
});
router.post('/api/venue', function(req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
});

module.exports = router
