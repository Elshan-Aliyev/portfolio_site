// connectivity-test.js
// Run: node connectivity-test.js
const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/MyPortfolioSkeleton';

(async () => {
  try {
    console.log('Attempting to connect to:', MONGO_URI);
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000
    });
    console.log('Connected to MongoDB successfully');
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Collections found:', collections.map(c => c.name));
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Connection test failed:', err.message || err);
    process.exit(1);
  }
})();