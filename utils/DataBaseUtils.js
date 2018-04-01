const mongoose = require('mongoose');
const config = require('../etc/config.json');
const UserModel = require('../models/User');
const ServiceModel = require('../models/Service');

//DATABASE MANAGER
function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`)
    return mongoose.connection
}

//SERVICE MANAGER
function createService(req) {
  let record = {
    date: new Date,
    service: 'newService'+new Date,
    user: req.session.passport.user
  }
  let newservice = new ServiceModel.Service(record)
  return newservice.save()
}

function getUsersSchedule(user) {
  return ServiceModel.Service.find({user: user}, {date: 1, service: 1, _id: 0})
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
module.exports.getUsersSchedule = getUsersSchedule;
module.exports.createService = createService;
