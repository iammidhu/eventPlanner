var express, app, bodyParser, methodOverride, db, mongoose, appRouter;

mongoose = require('mongoose');
express = require('express');
app = express();
bodyParser = require('body-parser');
methodOverride = require('method-override');
appRouter = require('./app/routes/appRouter');


// config files
/// DB //
db = require('./config/db');

// connect to our mongoDB database
mongoose.connect(db.url);
mongoose.connection.once('connected', function() {
    console.log("Connected to database -**** event planner **** ");
});

app.use(bodyParser.json());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));


app.all('/*', function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    //  response.header("Access-Control-Allow-Origin", "10.9.12.250");
    response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    if (request.method == 'OPTIONS') {
        response.status(200).end();
    } else {
        next();
    }
});

app.use('/', appRouter);

// expose app
exports = module.exports = app;
