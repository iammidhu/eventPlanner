// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// // var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
//
// var appRouter = require('./routes/appRouter');
//
//
// /// DB //
// var db = mongoose.connect('mongodb://10.9.12.97:27017/device_management');
// mongoose.connection.once('connected', function() {
//     console.log("Connected to database -**** device_management **** ");
// });
//
//
// var app = express();
//
// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// // app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.all('/*', function(request, response, next) {
//       response.header("Access-Control-Allow-Origin", "*");
//     //  response.header("Access-Control-Allow-Origin", "10.9.12.250");
//       response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
//       response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
//       if (request.method == 'OPTIONS') {
//             response.status(200).end();
//       } else {
//             next();
//       }
// });
//
// app.use('/', appRouter);
//
// //app.use('/users', users);
// //appRouter.initialize(app);
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;



var express, app, bodyParser, methodOverride, db, port, mongoose;

mongoose = require('mongoose');
express = require('express');
app = express();
bodyParser = require('body-parser');
methodOverride = require('method-override');

// config files
db = require('./config/db');

// connect to our mongoDB database
// (uncomment after you enter in your own credentials in config/db.js)
mongoose.connect(db.url);

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// expose app
exports = module.exports = app;
