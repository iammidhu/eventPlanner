var mongoose, Schema, speakerSchema, speaker;

mongoose = require('mongoose');
Schema = mongoose.Schema;

speakerSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    speakerName: String,
    desc: String,
    picture: String
});

speaker = mongoose.model('Speaker', speakerSchema);

// make this available to our users in our Node applications
module.exports = speaker;
