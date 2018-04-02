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
    date: req.body.date,
    service: req.body.service,
    user: req.session.passport.user,
    timestamp: new Date(),
    uniq_key: req.body.uniq_key+req.session.passport.user
  }
  let newservice = new ServiceModel.Service(record)
  return newservice.save()
}

function deleteService(req) {
  return ServiceModel.Service.remove({_id: mongoose.Types.ObjectId(req.body.id)})
}

function getUsersSchedule(user) {
  return ServiceModel.Service.find({user: user}, {date: 1, service: 1, timestamp: 1, _id: 1})
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
module.exports.deleteService = deleteService;
