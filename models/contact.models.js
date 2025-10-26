// models/contact.models.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
});

module.exports = mongoose.model('Contact', contactSchema);