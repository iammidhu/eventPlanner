var mongoose, Schema, eventSchema, eventModel;

mongoose = require('mongoose');
Schema = mongoose.Schema;

eventSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    eventDate: {
        type: Date,
        default: new Date().getTime()
    }
    eventName: {
        type: String,
        required: true
    },
    eventDesc: String,
    venue: String,
    speaker: String,
    amount: String,
    status: Boolean
});

eventModel = mongoose.model('Event', eventSchema);

module.exports = eventModel;
