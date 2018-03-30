const express = require('express');
const router = express.Router();
const passport = require('passport');
const db = require('../utils/DataBaseUtils');
const authenticationMiddleware = require('../utils/authenticate/AuthenticationMiddleware');

//ROOT STATIC PAGE
router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + '/public/index.html'));
});

//SERVICES MANAGER
router.get('/api/services', authenticationMiddleware(), (req, res) => {
  console.log(req.session)
  res.send([
      {id:1, name:'Service one', description:'One - popular service.', price:'10.00'},
      {id:2, name:'Service two', description:'Two - popular service.', price:'20.00'},
      {id:3, name:'Service three', description:'Three - popular service.', price:'30.00'}
    ]
  );
});
router.get('/api/all', (req, res) => {
  console.log(req.session)
  res.send([
    {id: 1,label: 'List item 1'},
    {id: 2,label: 'List item 2'},
    {id: 3,label: 'List item 3'},
    {id: 4,label: 'List item 4'},
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
