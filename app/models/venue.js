var mongoose, Schema, venueSchema, Venue;

mongoose = require('mongoose');
Schema = mongoose.Schema;

venueSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    venueName: String,
    place: String,
});

Venue = mongoose.model('Venue', venueSchema);

// make this available to our users in our Node applications
module.exports = Venue;
