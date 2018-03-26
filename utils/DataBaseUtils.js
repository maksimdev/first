const mongoose = require('mongoose');
const config = require('../etc/config.json');

function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`)
    return mongoose.connection
}

module.exports.setUpConnection = setUpConnection;
