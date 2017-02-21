var db = mongoose.connect('mongodb://10.9.12.97:27017/eventPlanner');
mongoose.connection.once('connected', function() {
    console.log("Connected to database -**** device_management **** ");
});

module.exports = {
    url: 'mongodb://127.0.0.1:27017/eventPlanner'
}
