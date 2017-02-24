//variable declaration
var express, eventController, router;

express = require('express');
eventController = require('../controllers/eventController');
router = express.Router();
router.get('/list', function(req, res, next) {
    eventController.getEventList(function(data) {
        res.json(data);
    });
});

module.exports = router;
