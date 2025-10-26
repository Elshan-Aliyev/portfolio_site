// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/Skeleton';

// Mongoose connect with options and retry logic
const mongooseOptions = {
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 10000
};

let connectAttempts = 0;
const maxAttempts = 5;

async function connectWithRetry() {
  try {
    connectAttempts++;
    await mongoose.connect(MONGO_URI, mongooseOptions);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(`MongoDB connection attempt ${connectAttempts} failed:`, err.message || err);
    if (connectAttempts < maxAttempts) {
      const wait = Math.min(1000 * Math.pow(2, connectAttempts), 30000);
      console.log(`Retrying connection in ${wait}ms...`);
      setTimeout(connectWithRetry, wait);
    } else {
      console.error('Max MongoDB connection attempts reached. Exiting process.');
      // Optional: process.exit(1);
    }
  }
}
connectWithRetry();

app.get('/', (req, res) => {
  res.send('Portfolio Backend for COMP229 — Node, Express, MongoDB APIs');
});

app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

// 404 & error handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error', error: err.message || err });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});