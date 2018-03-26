const express = require('express');
const router = express.Router();
const passport = require('passport');
const db = require('../utils/DataBaseUtils');

//ROOT STATIC PAGE
router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + '/public/index.html'));
});


//SERVICES MANAGER
router.get('/api/services', (req, res) => {
  res.send([
      {id:1, name:'Service one', description:'One - popular service.', price:'10.00'},
      {id:2, name:'Service two', description:'Two - popular service.', price:'20.00'},
      {id:3, name:'Service three', description:'Three - popular service.', price:'30.00'}
    ]
  );
});


//USER MANAGER
router.post('/createlogin', (req, res) => {
  db.createUser(req.body)
    .then(function(result){
      //CREATE SESSION
      req.session.username = result.username;
  		res.send("USER CREATED")
  	})
  	.catch(function(err){
        console.log(req.session)
  			res.send("This login already exist")
  	})
});

router.get('/killme', (req, res) => {
  req.session = null
  req.session.destroy()
  res.send('YOU ARE DESTROYED')
});


module.exports = router;
