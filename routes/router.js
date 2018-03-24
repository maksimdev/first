var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + '/public/index.html'));
});

router.get('/api/hello', (req, res) => {
  res.send({ express: 'THIS MESSAGE FROM EXPRESS!' });
});

//GET ALL SERVICES (need req to db)!
router.get('/api/services', (req, res) => {
  res.send([
      {id:1, name:'Service one', description:'One - popular service.', price:'10.00'},
      {id:2, name:'Service two', description:'Two - popular service.', price:'20.00'},
      {id:3, name:'Service three', description:'Three - popular service.', price:'30.00'}
    ]
  );
});

module.exports = router;
