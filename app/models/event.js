var mongoose, Schema, eventSchema, eventModel;

mongoose = require('mongoose');
Schema = mongoose.Schema;

eventSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    eventDate: Date,
    eventName: String,
    eventDesc: String,
    venue: String,
    speaker: String,
    amount: String,
    status: Boolean,
    ref: "Venue",
    ref: "Speaker"
});

eventModel = mongoose.model('Event', eventSchema);

// make this available to our users in our Node applications
module.exports = eventModel;
});
