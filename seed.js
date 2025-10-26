// seed.js
// Run: node seed.js
const mongoose = require('mongoose');
require('dotenv').config();
const bcrypt = require('bcryptjs');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/MyPortfolioSkeleton';

const contactSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String
}, { timestamps: true });

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, lowercase: true },
  password: String,
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);
const User = mongoose.model('User', userSchema);

async function run() {
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000
    });
    console.log('Connected to', MONGO_URI);

    // Insert sample contact
    const contact = new Contact({
      firstname: 'Test',
      lastname: 'Contact',
      email: 'test.contact@example.com'
    });
    await contact.save();
    console.log('Inserted contact:', contact._id);

    // Insert sample user (hashed password)
    const hashed = await bcrypt.hash('password123', 10);
    const user = new User({
      name: 'Test User',
      email: 'test.user@example.com',
      password: hashed
    });
    await user.save();
    console.log('Inserted user:', user._id);

    // List collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Collections now:', collections.map(c => c.name));

    await mongoose.disconnect();
    console.log('Disconnected');
  } catch (err) {
    console.error('Seed failed:', err.message || err);
    process.exit(1);
  }
}

run();