var mongoose, Schema, favouriteSchema, Favourite;

mongoose = require('mongoose');
Schema = mongoose.Schema;

favouriteSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    userId: String,
    eventId: String,
    ref: "User",
    ref: "Event"
});

Favourite = mongoose.model('Favourite', favouriteSchema);

module.exports = Favourite;
});
