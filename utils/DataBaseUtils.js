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
function getUser(username) {
  return UserModel.User.findOne({username: username})
}


module.exports.setUpConnection = setUpConnection;
module.exports.createUser = createUser;
module.exports.getUser = getUser;
module.exports.UserModel = UserModel;
