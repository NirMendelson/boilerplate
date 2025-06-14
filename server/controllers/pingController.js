const Ping = require('../models/Ping');

async function pingHandler(req, res) {
  let doc = await Ping.findOne();
  if (!doc) {
    doc = await Ping.create({ msg: 'pong from MongoDB!' });
  }
  res.json({ msg: doc.msg });
}

module.exports = { pingHandler }; 