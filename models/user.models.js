// models/user.models.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true, unique: true },
  password: { type: String, required: true },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

// Update 'updated' on save
userSchema.pre('save', function (next) {
  this.updated = Date.now();
  next();
});

userSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updated: Date.now() });
  next();
});

module.exports = mongoose.model('User', userSchema);