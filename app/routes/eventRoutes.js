//variable declaration
var express, eventController, router;
console.log("hi");
express = require('express');
eventController = require('../controllers/eventController');
router = express.Router();

router.post('/add_event', function(req, res, next) {
    console.log('create an event');
    eventController.createAnEvent(req.body, function(data) {
        res.json(data)
    });
});

router.post('/edit_event', function(req, res, next) {
    console.log('edit an event');
    eventController.editEvent(req.body, function(data) {
        res.json(data)
    });
});

router.get('/event_listing', function(req, res, next) {
    eventController.getEventList(function(data) {
        res.json(data);
    });
});

router.post('/delete_event', function(req, res, next) {
    console.log('delete_event');
});

router.post('/event-detail', function(req, res, next) {
    res.send("getting event details by id");
});

module.exports = router;
