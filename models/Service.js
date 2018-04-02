const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    date: { type: Date, required: true },
    service: { type: String, required: true },
    user: { type: String, required: true },
    timestamp: { type: Date, required: true },
    uniq_key: { type: String, required: true, unique: true }
});

const Service = mongoose.model('Service', ServiceSchema);

module.exports.Service = Service;
module.exports.Schema = Schema;
module.exports.ServiceSchema = ServiceSchema;
