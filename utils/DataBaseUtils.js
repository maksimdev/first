const mongoose = require('mongoose');
const config = require('../etc/config.json');
const UserModel = require('../models/User');

//DATABASE MANAGER
function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`)
    return mongoose.connection
}


//USER MANAGER
function createUser(userData) {
  let user = {
    username: userData.username,
    password: userData.password
  }
  let newuser = new UserModel.User(user)
  return newuser.save()
}

//БЫЛ ПОИСК ПО ИД!
function getUser(username) {
  return UserModel.User.findOne({username: username})
}

// function checkUser(userData) {
//   return UserModel.User.findOne({username: userData.username}, function(err, docs) {
//                if ( docs ) {
//                  if ( docs.password == userData.password ) {
//                    return Promise.resolve((docs))
//                  } else {
//                    return Promise.reject('UNCORRECT PASSWORD!', docs)
//                  }
//                } else {
//                  return Promise.reject('USER NOT FOUND!', docs)
//                }
//              })
// }

module.exports.setUpConnection = setUpConnection;
module.exports.createUser = createUser;
module.exports.getUser = getUser;
//module.exports.checkUser = checkUser;
