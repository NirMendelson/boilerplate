const express = require('express');
require('dotenv').config({ path: '../.env' });
const connectDB = require('./config/db');
const customerRoutes = require('./routes/customer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Connect to MongoDB
connectDB(process.env.MONGODB_URI, process.env.MONGODB_DBNAME);

// Routes
app.use('/api', customerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 