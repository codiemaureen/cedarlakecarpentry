const express = require('express');
const helpers = require('./helpers');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');
const cookieParser = require('cookie-parser');
const path = require('path');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cookieParser());


app.use((req, res, next) => {
    res.locals.h = helpers;
    res.locals.currentPath = req.path;
    next();
});


//routes
app.use('/', routes);


app.use(errorHandlers.notFound);


app.use(errorHandlers.flashValidationErrors);


if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
    app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);


module.exports = app;