const mongoose = require('mongoose');

function connectDB(uri, dbName) {
  const options = {};
  if (dbName) {
    options.dbName = dbName;
  }
  mongoose.connect(uri, options);

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
    if (dbName) {
      console.log('Using database:', dbName);
    }
  });
}

module.exports = connectDB; 