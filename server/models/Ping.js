const mongoose = require('mongoose');

const PingSchema = new mongoose.Schema({ msg: String });
const Ping = mongoose.model('Ping', PingSchema);
 
module.exports = Ping; 