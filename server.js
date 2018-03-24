const port = process.env.PORT || 8080;

const express = require('express');
const bodyParser = require('body-parser');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();
const routes = require('./routes/router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use('/', routes);

app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});


app.listen(port, () => console.log(`Listening on port ${port}`));
