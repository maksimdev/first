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
router.get('/api/all', authenticationMiddleware(), (req, res) => {
  res.send([
      {id:1, name:'Eating cookie', description:'1 hour of eating cookies', time:'10:00', price:'10.00'},
      {id:2, name:'Watching at cookie', description:'1 hour of watching at cookies', time:'12:00', price:'20.00'},
      {id:3, name:'Thouching at cookie', description:'1 hour of touching at cookies', time:'14:00', price:'30.00'}
    ]
  );
});
router.get('/api/appointment', (req, res) => {
    res.send([
      {id:1, service: 'one service', user: ''},
      {id:2, service: 'two service', user: ''}
            ])
});

//My SERVICES
router.get('/api/myservices', authenticationMiddleware(), (req, res) => {
    db.getUsersSchedule(req.session.passport.user).then(function(result){
      console.log(result)
      res.send(result)
    }).catch(() => console.log('error'))
});
//CREATE SERVICE
router.post('/api/createservice', authenticationMiddleware(), (req, res) => {
  db.createService(req)
    .then(function(result){
      res.status(200).send("Created")
    })
    .catch(function(err){
      res.status(500).send('VALIDATE ERROR!');
    })
});
//DELETE SERVICE
router.delete('/api/delete', authenticationMiddleware(), (req, res) => {
  db.deleteService(req)
    .then(function(result){
      console.log(req.body.id)
      res.status(200).send(req.body.id)
    })
    .catch(function(err){
      res.status(500).send('ERROR!');
    })
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
