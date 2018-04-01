const port = process.env.PORT || 8080;

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./utils/DataBaseUtils');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();
const routes = require('./routes/router');

app.use(cookieParser());
app.use(session({
  secret: 'super secret key',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: db.setUpConnection() })
}));
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function(user, done) {
  //console.log('serializeUser');
  //console.log(user);
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log('deserializeUser');
  console.log(id);
  db.UserModel.User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        db.getUser(username).exec((err, user) => {
            if (err) {
                return done(err)
            }
            if (!user) {
                return done(null, false)
            }
            if (password !== user.password ) {
                return done(null, false)
            }
            return done(null, user)
        })
    }
))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Session created before static page
app.use(express.static(__dirname + '/client/build'));  //public
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
