var eventModel = require('../models/event');
var apiResponse = require('../helper/apiResponse');
var EventContorller = {};


EventContorller.getEventList = function() {
    console.log("get all evenets");
}

EventContorller.createAnEvent = function(events) {
    eventModel.create(events, function(err, createdEvent) {
        if (err) {
            console.log("error in create device ");
            callbk(apiResponse.error(err));
        } else {
            err = null;
            console.log(createdEvent);
            callbk(apiResponse.success(thisDevice));
        }
    });
}

EventContorller.editEvent = function(eventId) {
    res.send("edit event");
}

module.exports = EventContorller;
