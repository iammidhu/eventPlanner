var mongoose, Schema, eventSchema, eventModel;

mongoose = require('mongoose');
Schema = mongoose.Schema;

var objectId = mongoose.Types.ObjectId();

eventSchema = new Schema({
    _id: ObjectId(7 df78ad8902c),
    eventDate: {
        type: String,
        default: new Date().getTime()
    },
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
