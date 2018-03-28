const express = require('express');
const router = express.Router();
const passport = require('passport');
const db = require('../utils/DataBaseUtils');

//ROOT STATIC PAGE
router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + '/public/index.html'));
});


//SERVICES MANAGER
router.get('/api/services', function (req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        }
        res.send([
            {id:1, name:'NOT AUTH', description:'NOT AUTH', price:'NOT AUTH'},
          ])
    }, (req, res) => {
  res.send([
      {id:1, name:'Service one', description:'One - popular service.', price:'10.00'},
      {id:2, name:'Service two', description:'Two - popular service.', price:'20.00'},
      {id:3, name:'Service three', description:'Three - popular service.', price:'30.00'}
    ]
  );
});


//USER MANAGER
router.post('/register', (req, res) => {
  db.createUser(req.body)
    .then(function(result){
      req.session.username = result.username
  		res.status(200).send("Created")
  	})
  	.catch(function(err){
  			res.status(500).send('THIS LOGIN ALREDY EXIST!');
  	})
});

router.post('/login', passport.authenticate('local', { successRedirect: '/',
                                     failureRedirect: '/login',
                                     failureFlash: true })
);

router.get('/logout', (req, res) => {
  req.session.destroy()
  res.status(200).send("Destroyed")
});


module.exports = router;
