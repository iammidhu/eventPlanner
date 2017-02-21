var mongoose, Schema, userSchema, User;

mongoose = require('mongoose');
Schema = mongoose.Schema;

userSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    firstName: String,
    surname: String,
    password: {
        type: String,
        required: true
    },
    email: String,
    phone: Number,
});

User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
