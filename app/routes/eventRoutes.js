//variable declaration
var express, eventController, router;

express = require('express');
eventController = require('../controllers/eventController');
router = express.Router();

module.exports = function() {
    router.get('/example/a', function(req, res) {
        res.send('Hello from A!')
    })
    return router;
};
