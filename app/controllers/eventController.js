var eventModel = require('../models/event');
var apiResponse = require('../helper/apiResponse');
var EventContorller = {};


EventContorller.getEventList = function() {
    res.json({
        message: 'hooray! welcome to our api!'
    });
}

EventContorller.createAnEvent = function(events, callbk) {
    console.log(events);
    // var obj = events.body;
    // var model = new eventModel(obj);
    // model.save(function(err) {
    //     if (err) {
    //         res.send("error");
    //         return;
    //     }
    //     res.send("created");
    // });
    eventModel.create(events, function(err, createdEvent) {
        if (err) {
            console.log("error in create device ");
            callbk(apiResponse.error(err));
        } else {
            err = null;
            console.log(createdEvent);
            callbk(apiResponse.success(createdEvent));
        }
    });
}

EventContorller.editEvent = function(eventId) {
    res.send("edit event");
}

module.exports = EventContorller;
